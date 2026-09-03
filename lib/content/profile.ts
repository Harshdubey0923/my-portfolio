export const profile = {
  name: "Abhishek Singh",
  handle: "AbhishekSinghDev",
  wordmark: "ABHISHEK",
  title: "Full Stack Engineer",
  /** Rotated by the hero typewriter. */
  roles: ["Full Stack Engineer", "AI Enthusiast"],
  meta: "Delhi, IND",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  /**
   * Shown by default; the hero switch flips between this and the photo.
   * TODO: supply an illustrated avatar to give the switch two faces -
   * until then both sides show the same portrait.
   */
  avatar: "/abhishek_vector.png",
  avatarPhoto: "/abhishek.jpg",
  email: "abhisheksingh.pf@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1kYBY3-0RtbzjOL4J1Sj04eYa1Q_QpBlV/view",
  githubUsername: "AbhishekSinghDev",
  xHandle: "AbhishekOG_Dev",
  linkedinUrl: "https://www.linkedin.com/in/abhishek-singh-dev",
  availability: "Available for opportunities",
} as const;

/**
 * The About list. `strong` fragments are rendered as emphasised,
 * underlined spans - the same treatment the headline keywords get.
 */
export const bio: { text: string; strong?: string[] }[] = [
  {
    text: "I'm Abhishek, a Full Stack Engineer with 2 years of experience building production systems in TypeScript and Node.js.",
    strong: ["TypeScript and Node.js"],
  },
  {
    text: "I work on multi-tenant SaaS backends, AI-integrated data pipelines and real-time systems, with a focus on correctness, reliability and maintainability.",
    strong: [
      "multi-tenant SaaS backends, AI-integrated data pipelines and real-time systems",
    ],
  },
  {
    text: "Built and shipped youth-af.com, a platform with 12,000+ registered users, 1.36M+ page views and INR 60,000+ in revenue.",
    strong: ["youth-af.com"],
  },
];

export type SocialLink = {
  name: string;
  href: string;
  /** External links open in a new tab and get rel=noopener. */
  isExternal: boolean;
  icon: "resume" | "mail" | "github" | "linkedin" | "x" | "send";
};

export const socialLinks: SocialLink[] = [
  { name: "Resume", href: profile.resumeUrl, isExternal: true, icon: "resume" },
  { name: "Contact", href: "/contact", isExternal: false, icon: "send" },
  {
    name: "GitHub",
    href: `https://github.com/${profile.githubUsername}`,
    isExternal: true,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: profile.linkedinUrl,
    isExternal: true,
    icon: "linkedin",
  },
  {
    name: "X (Twitter)",
    href: `https://x.com/${profile.xHandle}`,
    isExternal: true,
    icon: "x",
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    isExternal: true,
    icon: "mail",
  },
];
