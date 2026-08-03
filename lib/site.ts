export const siteConfig = {
  name: "Diventra",
  email: "hello@Diventra.dev",
  location: "Wellington, New Zealand",
  linkedIn: "https://www.linkedin.com/company/diventra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://diventra.dev",
  /** Set when registered — shown in footer when provided */
  nzbn: process.env.NEXT_PUBLIC_NZBN ?? "",
} as const;
