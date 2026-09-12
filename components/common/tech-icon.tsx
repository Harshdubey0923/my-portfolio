import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  FileText,
  ListOrdered,
  ScanText,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import * as simpleIcons from "simple-icons"
import type { SimpleIcon } from "simple-icons"

/** Below this relative luminance a brand colour disappears on black. */
const TOO_DARK = 0.22
/** What those brands use instead, on dark only. */
const DARK_FALLBACK = "#E1E3E5"

/**
 * Things with no brand mark of their own: specifications, a Microsoft
 * trademark simple-icons will not carry (C# lives here as a custom
 * mark for that reason), and a couple of libraries that never had a
 * logo. These take a neutral glyph rather than a borrowed one.
 */
const GENERIC: Record<string, LucideIcon | undefined> = {
  "generic-sql": Database,
  "generic-api": Braces,
  "generic-editor": Code2,
  "generic-pdf": FileText,
  "generic-ocr": ScanText,
  // simple-icons carries no Amazon mark, and a few of these are too new
  // or too small to have one at all.
  "generic-cloud": Cloud,
  "generic-queue": ListOrdered,
  "generic-server": Server,
  "generic-store": Boxes,
  "generic-ai": Sparkles,
}

/**
 * Display name to slug, for the places that store a human label rather
 * than a slug - the project cards' technology lists.
 */
const SLUGS: Record<string, string> = {
  typescript: "typescript",
  javascript: "javascript",
  react: "react",
  reactjs: "react",
  reactnative: "react",
  nextjs: "nextdotjs",
  vite: "vite",
  tailwindcss: "tailwindcss",
  framermotion: "framer",
  nodejs: "nodedotjs",
  expressjs: "express",
  mongodb: "mongodb",
  postgresql: "postgresql",
  sqlite: "sqlite",
  redis: "redis",
  cheerio: "cheerio",
  pdflib: "generic-pdf",
  tesseractjs: "generic-ocr",
  bun: "bun",
  hono: "hono",
  prisma: "prisma",
  drizzleorm: "drizzle",
  drizzle: "drizzle",
  trpc: "trpc",
  tanstackquery: "reactquery",
  zustand: "generic-store",
  expo: "expo",
  turborepo: "turborepo",
  railway: "railway",
  vercel: "vercel",
  docker: "docker",
  githubactions: "githubactions",
  razorpay: "razorpay",
  stripe: "stripe",
  shopify: "shopify",
  googlemaps: "googlemaps",
  posthog: "posthog",
  sentry: "sentry",
  // No brand mark exists for these, so they take a neutral glyph.
  aws: "generic-cloud",
  awss3: "generic-cloud",
  awsec2: "generic-cloud",
  // simple-icons carries no C# mark, so it gets its own artwork below.
  // ASP.NET / EF Core have no marks either and reuse the .NET brand.
  c: "csharp",
  csharp: "csharp",
  dotnet: "dotnet",
  aspnet: "dotnet",
  aspnetcore: "dotnet",
  efcore: "dotnet",
  entityframework: "dotnet",
  entityframeworkcore: "dotnet",
  elysia: "generic-server",
  bullmq: "generic-queue",
  hangfire: "generic-queue",
  inngest: "generic-queue",
  aisdk: "generic-ai",
  websockets: "socketdotio",
  restapis: "generic-api",
}

export function slugForTech(label: string) {
  const key = label.toLowerCase().replace(/[^a-z0-9]/g, "")
  return SLUGS[key] ?? key
}

function lookup(slug: string): SimpleIcon | undefined {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  return (simpleIcons as unknown as Record<string, SimpleIcon>)[key]
}

/**
 * Per-brand dark-mode overrides. .NET's official purple (#512BD4) sits
 * just above the generic luminance cutoff, so it keeps its colour by
 * default - but it is still too dark to read on a near-black ground.
 * The lighter violet below keeps it recognisably .NET and legible.
 */
const DARK_OVERRIDES: Record<string, string> = {
  dotnet: "#A184FF",
}

/**
 * Next.js, Vercel, shadcn, Express, GitHub and X are all near-black
 * marks, so their real colour is invisible against the dark theme. Only
 * those get swapped; every other logo keeps its own colour in both,
 * unless it carries an explicit override above.
 */
function darkVariant(slug: string, hex: string) {
  const override = DARK_OVERRIDES[slug]
  if (override) return override
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < TOO_DARK ? DARK_FALLBACK : `#${hex}`
}

/**
 * simple-icons ships no C# mark (Microsoft trademark), so this is the
 * Devicon C# artwork in its own fixed colours - legible on both themes,
 * which is why it bypasses the brand-fill path entirely.
 */
function CSharpIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden className={`shrink-0 ${className}`}>
      <path
        fill="#9B4F96"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
      />
      <path
        fill="#68217A"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      />
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
      />
    </svg>
  )
}

/**
 * One brand mark, in its own colour. Shared by the skills section and
 * the project cards so a technology looks the same in both places.
 */
export function TechIcon({
  slug,
  className = "size-3.5",
}: {
  slug: string
  className?: string
}) {
  const Generic = GENERIC[slug]
  if (Generic) {
    return (
      <Generic aria-hidden className={`text-muted-foreground ${className}`} />
    )
  }

  if (slug === "csharp") {
    return <CSharpIcon className={className} />
  }

  const icon = lookup(slug)
  if (!icon) return null

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`shrink-0 fill-[var(--brand)] dark:fill-[var(--brand-dark)] ${className}`}
      style={
        {
          "--brand": `#${icon.hex}`,
          "--brand-dark": darkVariant(slug, icon.hex),
        } as React.CSSProperties
      }
    >
      <path d={icon.path} />
    </svg>
  )
}

export default TechIcon
