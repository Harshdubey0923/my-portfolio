"use client"

import { useEffect, useId, useRef } from "react"
import Script from "next/script"

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          "expired-callback"?: () => void
          "error-callback"?: () => void
          theme?: "light" | "dark" | "auto"
        }
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

type TurnstileWidgetProps = {
  onToken: (token: string | null) => void
}

/**
 * Cloudflare Turnstile, rendered explicitly so we control exactly when a
 * token lands in form state rather than relying on an implicit hidden
 * input inside a React-managed subtree.
 */
export function TurnstileWidget({ onToken }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const scriptLoadedRef = useRef(false)
  const id = useId()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey || !containerRef.current) return

    const render = () => {
      if (!window.turnstile || !containerRef.current || widgetIdRef.current)
        return
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => onToken(token),
        "expired-callback": () => onToken(null),
        "error-callback": () => onToken(null),
        theme: "auto",
      })
    }

    if (window.turnstile) {
      render()
    } else if (scriptLoadedRef.current) {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          render()
        }
      }, 100)
      return () => clearInterval(interval)
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey])

  if (!siteKey) return null

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => {
          scriptLoadedRef.current = true
          if (window.turnstile && containerRef.current && !widgetIdRef.current) {
            widgetIdRef.current = window.turnstile.render(containerRef.current, {
              sitekey: siteKey,
              callback: (token) => onToken(token),
              "expired-callback": () => onToken(null),
              "error-callback": () => onToken(null),
              theme: "auto",
            })
          }
        }}
      />
      <div ref={containerRef} id={`turnstile-${id}`} />
    </>
  )
}

export default TurnstileWidget
