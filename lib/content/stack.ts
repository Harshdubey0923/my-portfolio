export type StackCategory = {
  id: string
  category: string
  /**
   * `icon` is a simple-icons slug, or one of the generic keys the Stack
   * component maps to a neutral mark for things that have no brand.
   *
   * `href` is kept as a reference but is deliberately not rendered - the
   * chips are buttons that go nowhere. Switch them back to links and it
   * is already here.
   *
   * Within a group, skills are ordered so the closest relatives sit
   * next to each other (runtimes with runtimes, SQL with SQL, …).
   */
  skills: { title: string; href: string; icon: string }[]
}

export const stack: StackCategory[] = [
  {
    id: "01",
    category: "Languages",
    skills: [
      {
        title: "C++",
        href: "https://isocpp.org/",
        icon: "cplusplus",
      },
      {
        title: "Python",
        href: "https://www.python.org/",
        icon: "python",
      },
    ],
  },
  {
    id: "02",
    category: "Backend & APIs",
    skills: [
      { title: ".NET", href: "https://dotnet.microsoft.com/", icon: "dotnet" },
      {
        title: "REST APIs",
        href: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
        icon: "generic-api",
      },
    ],
  },
  {
    id: "03",
    category: "Databases & ORMs",
    skills: [
      { title: "SQLite", href: "https://www.sqlite.org/", icon: "sqlite" },
    ],
  },
  {
    id: "04",
    category: "DevOps & Infrastructure",
    skills: [
      { title: "Git", href: "https://git-scm.com/", icon: "git" },
      { title: "Docker", href: "https://www.docker.com/", icon: "docker" },
      { title: "AWS", href: "https://aws.amazon.com/", icon: "generic-cloud" },
      {
        title: "Azure",
        href: "https://azure.microsoft.com/",
        icon: "generic-cloud",
      },
    ],
  },
  {
    id: "05",
    category: "Integrations & Observability",
    skills: [
      { title: "Razorpay", href: "https://razorpay.com/", icon: "razorpay" },
      {
        title: "Google Maps",
        href: "https://developers.google.com/maps",
        icon: "googlemaps",
      },
    ],
  },
]