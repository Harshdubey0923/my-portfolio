import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactPayload = {
  email?: string
  message?: string
  turnstileToken?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE = 10
const MAX_MESSAGE = 5000

// Simple in-memory sliding-window limiter. Serverless instances are
// ephemeral, so this only throttles bursts hitting a warm instance -
// it isn't a durable cross-instance limit. That's fine for a portfolio
// contact form; swap in Upstash Ratelimit if abuse becomes a real problem.
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  )
  recent.push(now)
  hits.set(ip, recent)

  // Bound memory: forget IPs that haven't hit recently once the map grows.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        hits.delete(key)
      }
    }
  }

  return recent.length > RATE_LIMIT_MAX
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  return request.headers.get("x-real-ip") || "unknown"
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return false

  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  })

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body }
    )
    const data = (await res.json()) as { success: boolean }
    return data.success === true
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  const isDev = process.env.NODE_ENV !== "production"
  const ip = getClientIp(request)

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Try again in a few minutes." },
      { status: 429 }
    )
  }

  let data: ContactPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    )
  }

  const email = String(data.email || "").trim()
  const message = String(data.message || "").trim()
  const turnstileToken = String(data.turnstileToken || "")

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 })
  }

  if (message.length < MIN_MESSAGE) {
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 400 }
    )
  }

  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    )
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Verification is missing. Refresh and try again." },
      { status: 400 }
    )
  }

  const humanVerified = await verifyTurnstile(turnstileToken, ip)
  if (!humanVerified) {
    return NextResponse.json(
      { error: "Verification failed. Refresh and try again." },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM
  const to = process.env.CONTACT_TO || "abhisheksingh.pf@gmail.com"

  const missing = [!apiKey && "RESEND_API_KEY", !from && "CONTACT_FROM"].filter(
    Boolean
  )

  if (missing.length > 0) {
    return NextResponse.json(
      {
        error: isDev
          ? `Email service is not configured: ${missing.join(", ")}.`
          : "Email service is not configured.",
      },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: from as string,
      to,
      replyTo: email,
      subject: "New portfolio message",
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message.replace(
        /\n/g,
        "<br />"
      )}</p>`,
    })

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact email failed:", error)
    const detail =
      isDev && error instanceof Error ? ` ${error.message}` : ""
    return NextResponse.json(
      { error: `Failed to send message.${detail}` },
      { status: 500 }
    )
  }
}
