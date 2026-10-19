export type Achievement = {
  title: string;
  date: string;
  description: string;
};

/**
 * Headline numbers, drawn as a stat strip above the dated list. Four is
 * the limit - the row is a 2x2 on a phone and a single line from sm.
 */
export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "1 yr", label: "Work experience" },
  { value: "2", label: "Certifications" },
  { value: "ITIL V5", label: "Foundation certified" },
  { value: "BCA", label: "SPPU, Pune" },
];

export const achievements: Achievement[] = [
  {
    title: "ITIL Foundation (Version 5) certified",
    date: "2026",
    description:
      "Certified by PeopleCert in IT service management, covering the ITIL guiding principles, the value system and the product and service lifecycle, including incident resolution.",
  },
  {
    title: "Google IT Support certified",
    date: "2026",
    description:
      "Completed Google's IT support programme, covering troubleshooting, customer service, networking, operating systems, system administration and security.",
  },
];
