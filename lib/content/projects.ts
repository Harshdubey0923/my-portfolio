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
    slug: "lan-chat-app",
    title: "LAN Chat App",
    subheading: "Chat over a local network",
    description:
      "A chat application that lets people on the same local network send messages to each other.",
    links: {},
    technologies: [],
    status: "live",
  },
  {
    slug: "zomato-clone",
    title: "Zomato Clone",
    subheading: "Food ordering app",
    description:
      "A food ordering app modelled on Zomato, built as a practice project.",
    links: {},
    technologies: [],
    status: "live",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    subheading: "My website",
    description:
      "This site. Built on an open-source Next.js portfolio template by me.",
    links: {},
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "building",
  },
];