export type Project = {
  slug: string;
  title: string;
  subheading?: string;
  description: string;
  /**
   * Optional: the card draws a monogram placeholder in the same frame
   * when a screenshot has not been supplied yet.
   */
  image?: string;
  /** Optional clip played on hover, with `image` as the poster frame. */
  video?: string;
  links: { website?: string; github?: string };
  technologies: string[];
  status: "live" | "building";
  /** Headline numbers, shown only on the flagship entries. */
  metrics?: { value: string; label: string }[];
};

/**
 * Order matters: the home page shows the first two, and the projects
 * page lists all of them.
 */
export const projects: Project[] = [
  {
    slug: "youth-af",
    title: "Youth AF",
    subheading: "Computer science learning platform",
    description:
      "Built solo end to end - frontend, backend and infrastructure - with Eden treaty contracts making every schema change a compile-time error, Razorpay monetisation behind signature-verified webhooks, and gated content delivered from S3.",
    links: { website: "https://youth-af.com" },
    technologies: [
      "React",
      "Elysia",
      "Bun",
      "Railway",
      "PostgreSQL",
      "TypeScript",
      "Drizzle ORM",
      "AWS S3",
      "Razorpay",
    ],
    status: "live",
    metrics: [
      { value: "170K+", label: "Visitors" },
      { value: "1.36M+", label: "Page views" },
      { value: "12,000+", label: "Registered users" },
      { value: "INR 60K+", label: "Revenue" },
    ],
    image: "/project-images/youth-af.png",
  },
  {
    slug: "cerocode",
    title: "CeroCode",
    subheading: "Terminal-based AI coding agent",
    description:
      "A full agent harness rather than a wrapper around a model API: streaming tool-call execution, PLAN/BUILD gating across seven built-in tools, JSONB-persisted sessions, sandboxed path resolution and default-deny approvals. Published to npm.",
    links: { website: "https://cerocode.heyabhishek.in" },
    technologies: [
      "TypeScript",
      "Bun",
      "React",
      "Hono",
      "AI SDK",
      "Drizzle ORM",
      "PostgreSQL",
    ],
    status: "live",
    image: "/project-images/cero.png",
  },
  {
    slug: "prompt-hub",
    title: "PromptHub",
    subheading: "Discover and share AI prompts",
    description:
      "A community platform for discovering, sharing and rating AI prompts across use cases and models, with authored collections behind JWT auth.",
    links: { website: "https://prompt-hub.heyabhishek.in" },
    technologies: ["Next.js", "React", "JavaScript", "TailwindCSS", "MongoDB"],
    status: "live",
    image: "/project-images/prompt-hub.png",
  },
  {
    slug: "event-ocean",
    title: "Event Ocean",
    subheading: "Your events, our platform",
    description:
      "An event management platform covering ticket booking, Stripe payment processing and event discovery, from listing through to check-in.",
    links: { website: "https://event-ocean.heyabhishek.in/" },
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Stripe"],
    status: "live",
    image: "/project-images/event-ocean.png",
  },
  {
    slug: "pencil-io",
    title: "Pencil.io",
    subheading: "Documents and diagrams",
    description:
      "A collaborative document editor and diagram canvas with real-time synchronisation between clients and Stripe billing behind the workspace.",
    links: { website: "https://pencil-io.heyabhishek.in" },
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Stripe"],
    status: "live",
    image: "/project-images/pencil-io.png",
  },
  //   {
  //     slug: "rankflys",
  //     title: "RankFlys",
  //     subheading: "NEET & JEE preparation platform",
  //     description:
  //       "A freelance education platform for NEET and JEE aspirants with Razorpay payments, course management and an AWS deployment behind it.",
  //     links: { website: "https://rankflys.vercel.app/" },
  //     technologies: [
  //       "Next.js",
  //       "TypeScript",
  //       "Node.js",
  //       "Express.js",
  //       "PostgreSQL",
  //       "Prisma",
  //       "Razorpay",
  //     ],
  //     status: "live",
  //     image: "/project-images/rankflys.png",
  //   },
  //   {
  //     slug: "steelonmobile",
  //     title: "SteelOnMobile",
  //     subheading: "Brochure site for the steel industry",
  //     description:
  //       "A freelance brochure site with a responsive layout, a small content management layer and SEO work carried through to the markup.",
  //     links: { website: "https://www.steelonmobile.com/" },
  //     technologies: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
  //     status: "live",
  //     image: "/project-images/steelonmobile.png",
  //   },
];
