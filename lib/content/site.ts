import { profile } from "./profile";

export const siteUrl = "https://heyabhishek.in";

export const socialPreviewTitle = "Abhishek Singh | Full Stack Engineer";
export const socialPreviewDescription =
  "Abhishek Singh is a Full Stack Engineer building production systems in TypeScript and Node.js - multi-tenant SaaS backends, AI-integrated data pipelines and real-time systems.";
// The card image itself is no longer set here: app/opengraph-image.png and
// app/twitter-image.png are the Next.js file-convention images for it, and
// Next attaches the og:image/twitter:image tags to every page under app/
// automatically - no metadata.openGraph.images / metadata.twitter.images
// wiring needed, and nothing to go stale.

export const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

/** In-page anchors, kept in one place so the nav and the sections agree. */
export const sectionIds = {
  about: "about",
  connect: "connect",
  experience: "experience",
  education: "education",
  projects: "projects",
  stack: "stack",
  activity: "activity",
  achievements: "achievements",
  contact: "contact",
} as const;

export const skillsVenn = {
  image: profile.avatar,
  skills: {
    top: "Multi-tenant SaaS",
    left: "Backend Systems",
    right: "AI Pipelines",
    bottom: "Real-time\n& Infrastructure",
  },
};

export const footer = {
  text: "Made with ❤️ by",
  developer: profile.name,
  note: "Built in the open.",
};
