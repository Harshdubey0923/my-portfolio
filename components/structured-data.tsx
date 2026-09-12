import { achievements } from "@/lib/content/milestones"
import { education } from "@/lib/content/education"
import { experiences } from "@/lib/content/experience"
import { profile } from "@/lib/content/profile"
import { siteUrl } from "@/lib/content/site"
import { stack } from "@/lib/content/stack"

/**
 * Rendered on the server so crawlers see the graph in the initial HTML.
 * Everything here is derived from the same content the page renders.
 */
export default function StructuredData() {
  const currentEmployers = experiences
    .filter((experience) => experience.isCurrent)
    .map((experience) => ({
      "@type": "Organization",
      name: experience.company,
      url: experience.website,
    }))

  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    alternateName: profile.handle,
    jobTitle: profile.title,
    description:
      "Full Stack Engineer with 2 years of experience building production systems in TypeScript and Node.js - multi-tenant SaaS backends, AI-integrated data pipelines and real-time systems. Independently built and shipped youth-af.com to 13,000+ registered users.",
    url: siteUrl,
    image: `${siteUrl}${profile.avatar}`,
    email: `mailto:${profile.email}`,
    nationality: "Indian",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "Delhi",
      addressLocality: "Delhi",
    },
    sameAs: [
      "https://www.linkedin.com/in/abhishek-singh-dev",
      `https://github.com/${profile.githubUsername}`,
      `https://x.com/${profile.xHandle}`,
    ],
    knowsAbout: stack.flatMap((category) =>
      category.skills.map((skill) => skill.title)
    ),
    // Dropped entirely between roles rather than emitted as an empty list.
    ...(currentEmployers.length ? { worksFor: currentEmployers } : {}),
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
      url: item.website,
    })),
    award: achievements.map((item) => ({
      "@type": "Award",
      name: item.title,
      description: item.description,
    })),
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        description: `Portfolio, projects and experience of ${profile.name} - ${profile.title}.`,
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
