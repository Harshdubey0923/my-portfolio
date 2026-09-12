export type StackCategory = {
  id: string
  category: string
  /**
   * `icon` is a simple-icons slug, or one of the generic keys the Stack
   * component maps to a neutral mark for things that have no brand.
   *
   * `href` is kept as a reference but is deliberately not rendered - the
   * chips are buttons that go nowhere. Switch them back to links and it
   * is already here.
   *
   * Within a group, skills are ordered so the closest relatives sit
   * next to each other (runtimes with runtimes, SQL with SQL, …).
   */
  skills: { title: string; href: string; icon: string }[]
}

export const stack: StackCategory[] = [
  {
    id: "01",
    category: "Languages",
    skills: [
      {
        title: "C#",
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        icon: "csharp",
      },
      {
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: "typescript",
      },
      {
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "javascript",
      },
      {
        title: "SQL",
        href: "https://en.wikipedia.org/wiki/SQL",
        icon: "generic-sql",
      },
    ],
  },
  {
    id: "02",
    category: "Frontend & Mobile",
    skills: [
      { title: "React.js", href: "https://react.dev/", icon: "react" },
      {
        title: "React Native",
        href: "https://reactnative.dev/",
        icon: "react",
      },
      { title: "Expo", href: "https://expo.dev/", icon: "expo" },
      { title: "Next.js", href: "https://nextjs.org/", icon: "nextdotjs" },
      {
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: "tailwindcss",
      },
      { title: "Shadcn UI", href: "https://ui.shadcn.com/", icon: "shadcnui" },
      {
        title: "TanStack Query",
        href: "https://tanstack.com/query",
        icon: "reactquery",
      },
      {
        title: "Zustand",
        href: "https://zustand.docs.pmnd.rs/",
        icon: "generic-store",
      },
    ],
  },
  {
    id: "03",
    category: "Backend & APIs",
    skills: [
      { title: ".NET", href: "https://dotnet.microsoft.com/", icon: "dotnet" },
      {
        title: "ASP.NET Core",
        href: "https://learn.microsoft.com/en-us/aspnet/core/",
        icon: "dotnet",
      },
      {
        title: "EF Core",
        href: "https://learn.microsoft.com/en-us/ef/core/",
        icon: "dotnet",
      },
      { title: "Node.js", href: "https://nodejs.org/", icon: "nodedotjs" },
      { title: "Bun", href: "https://bun.sh/", icon: "bun" },
      { title: "Express.js", href: "https://expressjs.com/", icon: "express" },
      { title: "Elysia", href: "https://elysiajs.com/", icon: "generic-server" },
      {
        title: "REST APIs",
        href: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
        icon: "generic-api",
      },
      { title: "tRPC", href: "https://trpc.io/", icon: "trpc" },
      {
        title: "WebSockets",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        icon: "socketdotio",
      },
      { title: "BullMQ", href: "https://bullmq.io/", icon: "generic-queue" },
      { title: "Hangfire", href: "https://www.hangfire.io/", icon: "generic-queue" },
      { title: "Inngest", href: "https://www.inngest.com/", icon: "generic-queue" },
    ],
  },
  {
    id: "04",
    category: "Databases & ORMs",
    skills: [
      {
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: "postgresql",
      },
      { title: "SQLite", href: "https://www.sqlite.org/", icon: "sqlite" },
      { title: "MongoDB", href: "https://www.mongodb.com/", icon: "mongodb" },
      { title: "Redis", href: "https://redis.io/", icon: "redis" },
      { title: "Prisma", href: "https://www.prisma.io/", icon: "prisma" },
      { title: "Drizzle ORM", href: "https://orm.drizzle.team/", icon: "drizzle" },
    ],
  },
  {
    id: "05",
    category: "DevOps & Infrastructure",
    skills: [
      { title: "Git", href: "https://git-scm.com/", icon: "git" },
      {
        title: "GitHub Actions",
        href: "https://github.com/features/actions",
        icon: "githubactions",
      },
      { title: "Docker", href: "https://www.docker.com/", icon: "docker" },
      { title: "AWS", href: "https://aws.amazon.com/", icon: "generic-cloud" },
      { title: "Railway", href: "https://railway.com/", icon: "railway" },
      { title: "Vercel", href: "https://vercel.com/", icon: "vercel" },
      { title: "Turborepo", href: "https://turbo.build/", icon: "turborepo" },
    ],
  },
  {
    id: "06",
    category: "Integrations & Observability",
    skills: [
      { title: "Razorpay", href: "https://razorpay.com/", icon: "razorpay" },
      { title: "Stripe", href: "https://stripe.com/", icon: "stripe" },
      { title: "Shopify", href: "https://www.shopify.com/", icon: "shopify" },
      {
        title: "Google Maps",
        href: "https://developers.google.com/maps",
        icon: "googlemaps",
      },
      { title: "PostHog", href: "https://posthog.com/", icon: "posthog" },
      { title: "Sentry", href: "https://sentry.io/", icon: "sentry" },
    ],
  },
]
