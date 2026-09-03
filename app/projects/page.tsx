import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"
import {
  siteUrl,
  socialPreviewDescription,
  socialPreviewTitle,
} from "@/lib/content/site"

const description =
  "Full-stack products built by Abhishek Singh - TypeScript, Node.js, Next.js and PostgreSQL, from schema design through to the interface."

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    url: `${siteUrl}/projects`,
    type: "website",
    // No `images` here - inherited from the root app/opengraph-image.png.
  },
  twitter: {
    card: "summary_large_image",
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    // No `images` here - inherited from the root app/twitter-image.png.
  },
}

export default function ProjectsPage() {
  return <ProjectList />
}
