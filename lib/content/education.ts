export type Education = {
  id: string;
  institution: string;
  degree: string;
  /** The specialisation line, shown beside the degree. */
  field?: string;
  location: string;
  /** Rendered as "start - end"; omit `end` for a course still running. */
  period: { start: string; end?: string };
  /** Shown as a chip on the trailing edge - CGPA, percentage, whatever fits. */
  grade?: string;
  logo?: string;
  website?: string;
};

/**
 * Same shape as `experiences` on purpose: the two sections are drawn by
 * near-identical rows, so a degree and a role read as one timeline.
 */
export const education: Education[] = [
  {
    id: "srm-mca",
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor's in Computer Application",
    field: "Information Technology",
    location: "Pune, India",
    period: { start: "August 2022", end: "Sep 2025" },
    grade: "CGPA 8.0",
    website: "https://cdoe.sppuef.in/Home",
    logo: "/logos/Universitylogo.webp",
  },
];
