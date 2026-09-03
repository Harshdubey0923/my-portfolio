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
    institution: "SRM Institute of Science and Technology",
    degree: "Master of Computer Applications",
    field: "Generative AI",
    location: "Chennai, India",
    period: { start: "Sep 2025", end: "Sep 2027" },
    grade: "CGPA 10.0",
    website: "https://www.srmist.edu.in/",
    logo: "/logos/srm.webp",
  },
  {
    id: "ggsipu-bca",
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Computer Applications",
    field: "Machine Learning & AI",
    location: "Delhi, India",
    period: { start: "Aug 2021", end: "Jun 2024" },
    grade: "CGPA 8.93",
    website: "http://www.ipu.ac.in/",
    logo: "/logos/ggsipu.png",
  },
];
