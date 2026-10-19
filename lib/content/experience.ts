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
    id: "vivicta",
    company: "Vivicta",
    role: "Junior Specialist",
    location: "Pune, India",
    period: { start: "Sep 2025" },
    isCurrent: true,
    website: "https://www.vivicta.com/en/",
    logo: "/logos/Vivictalogo.png",
    technologies: [
      "ServiceNow",
      "Incident Management",
      "Request Management",
      "Alert Monitoring",
      "Microsoft Entra ID",
      "Active Directory",
      "Python",
      "ITSM",
      "ITIL",
      "Microsoft 365",
      "Azure Portal",
      "Windows Server",
      "Troubleshooting",
      "Technical Documentation",
    ],
  },
];