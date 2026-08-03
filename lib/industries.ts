export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  challenges: string[];
  serviceSlugs: string[];
  useCases: string[];
  solutions: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedProjectSlugs: string[];
  media?: {
    type: "video" | "lottie";
    src: string;
    alt: string;
  };
}

export const industries: Industry[] = [
  {
    slug: "startups",
    title: "Startups",
    shortDescription: "Product ideation, MVP development, and technical direction for funded startups.",
    heroDescription:
      "Move from idea to validated product with a partner who understands startup pace, constraints, and the need to prove value quickly.",
    icon: "/icons/industries/startups.svg",
    challenges: [
      "Limited budget and team capacity for full product builds",
      "Pressure to validate ideas before significant investment",
      "Need for technical direction without hiring a full engineering team",
      "Balancing speed with foundations that won't need rebuilding",
    ],
    serviceSlugs: [
      "web-development",
      "mobile-app-development",
      "ai-solutions",
      "ux-ui-design",
      "cloud-platform-engineering",
    ],
    useCases: [
      "MVP web or mobile applications",
      "AI-assisted product prototypes",
      "Founder technical advisory",
      "Investor-ready product demonstrations",
    ],
    solutions: [
      {
        title: "Rapid prototyping",
        description: "Validate concepts with working prototypes before committing to full build scope.",
      },
      {
        title: "Scalable foundations",
        description: "Architecture and code structured to grow when traction arrives — not throwaway MVPs.",
      },
      {
        title: "Phased delivery",
        description: "Fund and ship in stages aligned to milestones and runway.",
      },
    ],
    faqs: [
      {
        question: "Do you work with pre-revenue startups?",
        answer:
          "Yes, when there is a clear problem to solve and realistic scope. We often start with a discovery workshop or focused prototype engagement.",
      },
      {
        question: "Can you help with technical due diligence?",
        answer:
          "We advise founders on architecture, stack choices, and engineering approach — useful for fundraising and early hiring decisions.",
      },
    ],
    relatedProjectSlugs: ["tell-your-story"],
  },
  {
    slug: "small-medium-business",
    title: "Small & Medium Business",
    shortDescription: "Cost-effective digital solutions that help SMBs modernise and scale.",
    heroDescription:
      "Practical digital capability for growing businesses — modern websites, internal tools, and integrations without enterprise-agency overhead.",
    icon: "/icons/industries/small-medium-business.svg",
    challenges: [
      "Outdated websites and manual processes holding back growth",
      "Disconnected tools creating duplicate work",
      "Difficulty competing on digital experience with larger players",
      "Unclear prioritisation when every improvement feels urgent",
    ],
    serviceSlugs: [
      "web-development",
      "digital-transformation",
      "integrations",
      "ai-solutions",
      "maintenance-support",
    ],
    useCases: [
      "Modern corporate websites and customer portals",
      "Workflow automation and AI assistants",
      "CRM and accounting integrations",
      "Ongoing platform support and improvements",
    ],
    solutions: [
      {
        title: "Right-sized delivery",
        description: "Scope and investment matched to SMB budgets and timelines.",
      },
      {
        title: "Platform consolidation",
        description: "Connect the tools you already use instead of adding more complexity.",
      },
      {
        title: "Retained partnership",
        description: "Ongoing support so your digital platforms keep improving after launch.",
      },
    ],
    faqs: [
      {
        question: "How do you keep projects affordable for SMBs?",
        answer:
          "We phase work, reuse proven patterns, and focus on outcomes that matter most — avoiding unnecessary complexity.",
      },
      {
        question: "Can you work with our existing vendors?",
        answer:
          "Yes. We often complement hosting providers, designers, or internal teams rather than replacing them.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    shortDescription: "Platform engineering, integrations, and transformation for complex organisations.",
    heroDescription:
      "Support for larger organisations navigating legacy systems, integration complexity, and the need for scalable, governable digital platforms.",
    icon: "/icons/industries/enterprise.svg",
    challenges: [
      "Legacy platforms that are costly to maintain and slow to change",
      "Siloed data and systems across business units",
      "Security, compliance, and governance requirements",
      "Coordinating delivery across multiple stakeholders and vendors",
    ],
    serviceSlugs: [
      "digital-transformation",
      "cloud-platform-engineering",
      "integrations",
      "ai-solutions",
      "maintenance-support",
    ],
    useCases: [
      "Platform modernisation and consolidation",
      "Enterprise integrations and API layers",
      "Cloud migration and infrastructure automation",
      "AI workflow automation at scale",
    ],
    solutions: [
      {
        title: "Architecture-led delivery",
        description: "Technical decisions documented and aligned to long-term platform goals.",
      },
      {
        title: "Governed delivery",
        description: "Clear communication, risk management, and quality gates throughout.",
      },
      {
        title: "Phased transformation",
        description: "Roadmaps that reduce risk by delivering value incrementally.",
      },
    ],
    faqs: [
      {
        question: "Do you work alongside internal IT teams?",
        answer:
          "Regularly. We augment internal capability with specialised design, engineering, and cloud expertise.",
      },
      {
        question: "How do you handle security requirements?",
        answer:
          "Secure development practices, dependency management, and access controls are built into our delivery process.",
      },
    ],
    relatedProjectSlugs: ["gutermann", "te-matapihi"],
  },
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    shortDescription: "Accessible, secure digital services for public organisations.",
    heroDescription:
      "Digital experiences built for clarity, accessibility, and trust — serving diverse communities across New Zealand.",
    icon: "/icons/industries/government-public-sector.svg",
    media: {
      type: "lottie",
      src: "/lottie/public-safety-technology.json",
      alt: "Animation illustrating public safety technology and secure digital services",
    },
    challenges: [
      "Services that must be accessible to all citizens and communities",
      "Procurement and governance constraints on delivery",
      "Legacy content and systems difficult to modernise",
      "High public scrutiny of digital spend and outcomes",
    ],
    serviceSlugs: [
      "web-development",
      "ux-ui-design",
      "digital-transformation",
      "integrations",
      "maintenance-support",
    ],
    useCases: [
      "Accessible public information websites",
      "Citizen-facing portals and service finders",
      "Internal tools for staff and field teams",
      "Content platforms staff can update without developers",
    ],
    solutions: [
      {
        title: "Accessibility by default",
        description: "WCAG-aligned design and development so services work for everyone.",
      },
      {
        title: "Content empowerment",
        description: "Headless CMS and structured content so teams publish independently.",
      },
      {
        title: "Transparent delivery",
        description: "Documentation, handover, and governance suited to public-sector accountability.",
      },
    ],
    faqs: [
      {
        question: "Do you meet accessibility standards?",
        answer:
          "Yes. Accessibility is part of our design and development process, targeting WCAG 2.2 AA where required.",
      },
      {
        question: "Can you work within procurement frameworks?",
        answer:
          "We structure engagements to align with common procurement approaches — contact us to discuss your process.",
      },
    ],
    relatedProjectSlugs: ["tell-your-story", "te-matapihi"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    shortDescription: "Client portals and digital experiences where trust and clarity matter.",
    heroDescription:
      "Websites, portals, and tools for firms where credibility, clarity, and efficient client service define the experience.",
    icon: "/icons/industries/professional-services.svg",
    challenges: [
      "Outdated websites that don't reflect firm quality",
      "Manual client onboarding and document exchange",
      "Difficulty differentiating in competitive markets",
      "Internal tools that don't match client-facing polish",
    ],
    serviceSlugs: [
      "web-development",
      "ux-ui-design",
      "integrations",
      "ai-solutions",
      "maintenance-support",
    ],
    useCases: [
      "Corporate websites and thought leadership platforms",
      "Secure client portals",
      "CRM and practice-management integrations",
      "Knowledge assistants for internal teams",
    ],
    solutions: [
      {
        title: "Trust-led design",
        description: "Interfaces that communicate professionalism and make complex services easy to understand.",
      },
      {
        title: "Connected workflows",
        description: "Integrations that reduce manual handoffs between systems and teams.",
      },
      {
        title: "Ongoing evolution",
        description: "Retained support to keep content, features, and performance current.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our practice management software?",
        answer:
          "We regularly integrate with CRM, document management, and industry-specific platforms via APIs and webhooks.",
      },
      {
        question: "How do you handle confidential client data?",
        answer:
          "We follow secure development practices and can align to your data-handling and hosting requirements.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & Ecommerce",
    shortDescription: "Online stores and commerce platforms built for conversion and scale.",
    heroDescription:
      "Ecommerce experiences that perform under real traffic — integrated with inventory, payments, and the systems that run your business.",
    icon: "/icons/industries/retail-ecommerce.svg",
    challenges: [
      "Legacy storefronts that are slow or hard to maintain",
      "Disconnected inventory, POS, and online channels",
      "Checkout friction reducing conversion",
      "Seasonal traffic requiring reliable performance",
    ],
    serviceSlugs: [
      "ecommerce-development",
      "web-development",
      "integrations",
      "ux-ui-design",
      "maintenance-support",
    ],
    useCases: [
      "Custom storefronts and headless commerce",
      "Payment and shipping integrations",
      "Product catalogue and inventory sync",
      "Performance optimisation for peak periods",
    ],
    solutions: [
      {
        title: "Conversion-focused UX",
        description: "Checkout and product experiences designed to reduce friction and build trust.",
      },
      {
        title: "Integrated operations",
        description: "Connect ecommerce to ERP, inventory, and marketing platforms.",
      },
      {
        title: "Performance at scale",
        description: "Infrastructure and front-end engineering built for traffic spikes.",
      },
    ],
    faqs: [
      {
        question: "Do you build on Shopify or custom platforms?",
        answer:
          "Both. We recommend the right approach based on catalogue complexity, integrations, and long-term goals.",
      },
      {
        question: "Can you improve an existing store?",
        answer:
          "Yes — including performance audits, UX improvements, integration work, and platform migrations.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "tourism-culture-events",
    title: "Tourism, Culture & Events",
    shortDescription: "Discovery experiences and event platforms for New Zealand's visitor economy.",
    heroDescription:
      "Engaging digital experiences for festivals, cultural institutions, and tourism organisations — helping visitors discover, plan, and connect.",
    icon: "/icons/industries/tourism-culture-events.svg",
    challenges: [
      "Helping visitors discover experiences across many venues and events",
      "Seasonal campaigns requiring fast content updates",
      "Physical and digital experiences that need to work together",
      "Audiences with varying digital literacy and devices",
    ],
    serviceSlugs: [
      "web-development",
      "mobile-app-development",
      "ux-ui-design",
      "integrations",
      "maintenance-support",
    ],
    useCases: [
      "Festival and event discovery platforms",
      "Interactive cultural and museum experiences",
      "Venue finders and booking integrations",
      "CMS-driven campaign sites",
    ],
    solutions: [
      {
        title: "Discovery-first design",
        description: "Experiences that help visitors find what matters — quickly and enjoyably.",
      },
      {
        title: "Editor-friendly platforms",
        description: "Content teams update events, venues, and stories without developer dependency.",
      },
      {
        title: "Installations and touchpoints",
        description: "Digital experiences for physical spaces — screens, kiosks, and multi-display setups.",
      },
    ],
    faqs: [
      {
        question: "Can you handle high-traffic event launches?",
        answer:
          "Yes. We design for performance and use infrastructure that scales during peak campaign periods.",
      },
      {
        question: "Do you build interactive installations?",
        answer:
          "We have experience with touch installations, multi-screen experiences, and CMS-driven public displays.",
      },
    ],
    relatedProjectSlugs: ["museum-av", "te-matapihi"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
