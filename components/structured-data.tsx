import { profile } from "@/lib/content/profile";
import { siteUrl } from "@/lib/content/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        alternateName: profile.handle,
        jobTitle: profile.title,
        description:
          "Junior Specialist at Vivicta in Pune, India, supporting customers with IT services in ServiceNow, Microsoft Entra ID and Active Directory, and automating tasks with Python.",
        url: siteUrl,
        image: `${siteUrl}${profile.avatar}`,
        nationality: "Indian",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
          addressRegion: "Maharashtra",
          addressLocality: "Pune",
        },
        sameAs: [
          profile.linkedinUrl,
          `https://github.com/${profile.githubUsername}`,
          `https://x.com/${profile.xHandle}`,
        ],
        knowsAbout: [
          "ServiceNow",
          "Incident Management",
          "Request Management",
          "Microsoft Entra ID",
          "Active Directory",
          "Python",
          "ITIL",
        ],
        worksFor: [
          {
            "@type": "Organization",
            name: "Vivicta",
            url: "https://www.vivicta.com/en/",
          },
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Savitribai Phule Pune University",
            url: "https://cdoe.sppuef.in/Home",
          },
        ],
        award: [
          {
            "@type": "Award",
            name: "ITIL Foundation (Version 5) certified",
          },
          {
            "@type": "Award",
            name: "Google IT Support certified",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        description: `Portfolio, projects and experience of ${profile.name} - ${profile.title}.`,
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}