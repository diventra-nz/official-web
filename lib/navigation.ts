import { industries } from "@/lib/industries";
import { services } from "@/lib/services";

export const primaryNav = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

export const serviceNavItems = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
  description: service.shortDescription,
}));

export type MobileNavLink = {
  label: string;
  href: string;
  description?: string;
};

export type MobileNavSection =
  | {
      id: string;
      label: string;
      href: string;
      type: "accordion";
      links: MobileNavLink[];
      viewAll?: MobileNavLink;
    }
  | { id: string; label: string; href: string; type: "link" };

export const mobileNavSections: MobileNavSection[] = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    type: "accordion",
    links: serviceNavItems,
    viewAll: { label: "View all services", href: "/services" },
  },
  {
    id: "how-we-work",
    label: "How We Work",
    href: "/how-we-work",
    type: "accordion",
    links: [
      { label: "Our Process", href: "/how-we-work" },
      { label: "Digital Roadmapping", href: "/digital-roadmapping" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    href: "/industries",
    type: "accordion",
    links: industries.map((industry) => ({
      label: industry.title,
      href: `/industries/${industry.slug}`,
      description: industry.shortDescription,
    })),
  },
  {
    id: "work",
    label: "Work",
    href: "/work",
    type: "link",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    type: "accordion",
    links: [
      { label: "Our Approach", href: "/about/our-approach" },
      { label: "Team", href: "/about/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  {
    title: "How We Work",
    links: [
      { label: "Our Process", href: "/how-we-work" },
      { label: "Digital Roadmapping", href: "/digital-roadmapping" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Startups", href: "/industries/startups" },
      { label: "SMB", href: "/industries/small-medium-business" },
      { label: "Enterprise", href: "/industries/enterprise" },
      { label: "Government", href: "/industries/government-public-sector" },
      { label: "Retail & Ecommerce", href: "/industries/retail-ecommerce" },
      { label: "Tourism & Culture", href: "/industries/tourism-culture-events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Approach", href: "/about/our-approach" },
      { label: "Team", href: "/about/team" },
      { label: "Careers", href: "/careers" },
      { label: "Work", href: "/work" },
    ],
  },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
] as const;
