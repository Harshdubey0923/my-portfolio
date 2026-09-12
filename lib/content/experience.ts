export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  /** Rendered as "start - end"; omit `end` for an ongoing role. */
  period: { start: string; end?: string };
  /** The product the role was spent on, shown under the company line. */
  project?: string;
  /** Two or three lines of substance; the resume carries the long form. */
  highlights?: string[];
  /** Rendered as the same chips the Skills section uses. */
  technologies?: string[];
  logo?: string;
  website?: string;
  isCurrent?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "cortekz",
    company: "Cortekz",
    role: "Full Stack Engineer",
    location: "Remote, UK",
    period: { start: "Sep 2026" },
    isCurrent: true,
    website: "https://www.cortekz.co.uk/",
    logo: "/logos/cortekz.svg",
  },
  {
    id: "sk-agarwal",
    company: "SK Agarwal and Co Pvt. Ltd.",
    role: "Full Stack Engineer",
    location: "Haryana, India",
    period: { start: "Sep 2025", end: "Jun 2026" },
    project: "Earnex Rewards - multi-tenant loyalty platform",
    highlights: [
      "Built the core architecture as five apps in one Turborepo monorepo - API server, admin dashboard, brand portal, marketing site and mobile app - sharing a single schema and validation layer, with separate customer, brand and admin schemas keeping auth and permissions isolated per persona.",
      "Replaced manual review with a six-stage automated receipt pipeline - LLM OCR, image authenticity checks, EXIF validation, duplicate detection and automated decisioning - each stage a tracked, independently auditable background job.",
      "Designed a three-tier fraud and trust scoring model from submission velocity, account age and merchant diversity, with admin resolution workflows and a full audit trail behind every flagged submission.",
      "Integrated Shopify OAuth and webhook-driven sync, with BullMQ jobs handling initial and delta sync of orders, customers, products and line items.",
    ],
    technologies: [
      "Turborepo",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "React Native",
      "BullMQ",
      "AWS",
    ],
    logo: "/logos/skagarwal.jpeg",
    website: "https://sksteel.in/",
  },
  {
    id: "nextfly",
    company: "Nextfly Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Haryana, India",
    period: { start: "Aug 2024", end: "Aug 2025" },
    project: "Scraplo - scrap collection marketplace",
    highlights: [
      "Built a scrap-collection logistics marketplace for five distinct user types, each on its own schema, keeping auth, permissions and business logic isolated per persona across scheduling, auto-assignment, weighing and payout.",
      "Wrote a geolocation driver-assignment algorithm using the Haversine formula to match available drivers within 5 km, with live pickup tracking via Google Maps polling for route and ETA.",
      "Shipped a Razorpay-backed wallet for delivery personnel covering earnings, withdrawals and reconciliation, with transaction history tied to order completion for automated payouts.",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    logo: "/logos/nextfly.jpeg",
    website: "https://nextflytech.com/",
  },
];
