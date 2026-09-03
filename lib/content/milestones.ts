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
  { value: "12,000+", label: "Registered users" },
  { value: "1.36M+", label: "Page views" },
  { value: "INR 60K+", label: "Revenue shipped" },
  { value: "2 yrs", label: "Work Experience" },
];

export const achievements: Achievement[] = [
  //   {
  //     title: "Published CeroCode to npm",
  //     date: "Aug 2026",
  //     description:
  //       "A terminal AI coding agent with its own harness - tool execution, mode gating and a sandboxed safety layer.",
  //   },
  //   {
  //     title: "youth-af.com past 11,000 registered users",
  //     date: "Jan 2026",
  //     description:
  //       "148K+ visitors and 231K+ sessions at a 10% bounce rate and 25+ minute average session.",
  //   },
  //   {
  //     title: "INR 59,000+ revenue from 1,360+ purchases",
  //     date: "2026",
  //     description:
  //       "Razorpay checkout with signature-verified webhooks, server-side access gating and S3-delivered content.",
  //   },
  //   {
  //     title: "Cut database latency to near-localhost",
  //     date: "2026",
  //     description:
  //       "Migrated off Vercel and Neon onto Railway with the server and database on one private network.",
  //   },
];
