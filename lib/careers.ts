export const careerValues = [
  {
    title: "Outcomes over output",
    description: "We measure success by business impact — not hours billed or features shipped.",
  },
  {
    title: "Craft and clarity",
    description: "We care about design, code quality, and communication in equal measure.",
  },
  {
    title: "Pragmatic innovation",
    description: "We use modern tools including AI where they create real value — not for novelty.",
  },
  {
    title: "Respect for people",
    description: "Clients, users, and teammates deserve honesty, accessibility, and sustainable pace.",
  },
] as const;

export const careerBenefits = [
  "Remote-friendly team across New Zealand",
  "Meaningful projects in public, cultural, and commercial sectors",
  "Senior peers across design, engineering, and strategy",
  "Flexible engagement models",
] as const;

/** No fabricated roles — update when hiring */
export const openRoles: { title: string; type: string; location: string; href: string }[] = [];
