export const profile = {
  name: "Harsh Dubey",
  handle: "HarshDev",
  wordmark: "HARSH",
  title: "Junior Specialist",
  /** Rotated by the hero typewriter. */
  roles: ["Junior Specialist", "Exploring AI and Cloud"],
  meta: "Pune, IND",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  /**
   * Shown by default; the hero switch flips between this and the photo.
   * TODO: supply an illustrated avatar to give the switch two faces -
   * until then both sides show the same portrait.
   */
  avatar: "/HarshAvatar.png",
  avatarPhoto: "/Avatarphoto.jpeg",
  email: "harshdubey0923@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1Y6ND5UVXmUcvVSCEHhIWqLKWmxZod38w/view",
  githubUsername: "Harshdubey0923",
  xHandle: "harshhun",
  linkedinUrl: "https://www.linkedin.com/in/harsh-dubey-dev/",
  availability: "Available for opportunities",
} as const;

/**
 * The About list. `strong` fragments are rendered as emphasised,
 * underlined spans - the same treatment the headline keywords get.
 */
export const bio: { text: string; strong?: string[] }[] = [
  {
    text: "I'm Harsh, a Junior Specialist with 1 year of experience supporting customers with IT services in ServiceNow, Microsoft Entra ID and Active Directory.",
    strong: ["ServiceNow, Microsoft Entra ID and Active Directory"],
  },
  {
    text: "I work on incident management, request management and alert monitoring for customers, with a focus on accuracy, reliability and clear communication.",
    strong: ["incident management, request management and alert monitoring"],
  },
  {
    text: "I use Python to automate repetitive support tasks, and I'm building my skills in cloud and automation.",
    strong: ["Python"],
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