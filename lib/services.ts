export const agencyTagline =
  "Digital products that move your business forward.";

export const agencySubcopy =
  "We design and build websites, mobile applications, and AI-powered platforms that modernise operations and improve customer experiences for New Zealand organisations.";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  capabilities: string[];
  outcomes: string[];
  featured: boolean;
  media?: {
    type: "video" | "lottie";
    src: string;
    alt: string;
  };
}

export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Corporate sites, custom web apps, and headless CMS platforms.",
    description:
      "We build fast, accessible websites and web applications — from corporate marketing sites to customer portals and progressive web apps — engineered for performance and long-term maintainability.",
    icon: "/icons/services/web-development.svg",
    featured: true,
    capabilities: [
      "Corporate websites",
      "Custom web applications",
      "Customer portals",
      "Employee portals",
      "Progressive web applications",
      "Headless CMS",
      "CMS migration",
      "API integration",
      "Performance optimisation",
      "Accessibility",
      "SEO",
      "Maintenance",
    ],
    outcomes: [
      "Faster, more reliable digital experiences",
      "Content teams empowered to publish without developers",
      "Platforms built to scale with your business",
    ],
    media: {
      type: "video",
      src: "/videos/seo-impact.mp4",
      alt: "Animation showing SEO impact on website visibility and search performance",
    },
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform apps for iOS and Android.",
    description:
      "We design and develop mobile applications that connect your customers and teams — from consumer-facing apps to field tools, with robust backends and seamless API integrations.",
    icon: "/icons/services/mobile-app-development.svg",
    featured: true,
    capabilities: [
      "iOS apps",
      "Android apps",
      "React Native",
      "Flutter",
      "Mobile UX",
      "Backend development",
      "API integration",
      "Push notifications",
      "Offline support",
      "App-store deployment",
      "Maintenance",
    ],
    outcomes: [
      "Mobile products that feel native and purposeful",
      "Reliable performance across devices",
      "Clear path from prototype to app-store launch",
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    shortDescription: "Practical AI assistants, automation, and intelligent workflows.",
    description:
      "We help organisations identify where AI creates real value — then prototype, integrate, and scale solutions that automate repetitive work and improve decision-making.",
    icon: "/icons/services/ai-solutions.svg",
    featured: true,
    capabilities: [
      "AI opportunity assessment",
      "Custom AI assistants",
      "Customer-service chatbots",
      "Knowledge assistants",
      "Workflow automation",
      "Document processing",
      "Intelligent search",
      "Recommendation systems",
      "Data classification",
      "AI API integration",
      "Proof-of-concept development",
      "Responsible AI guidance",
    ],
    outcomes: [
      "Reduced manual processing and faster responses",
      "AI integrated into existing workflows, not bolted on",
      "Clear governance and responsible deployment",
    ],
    media: {
      type: "lottie",
      src: "/lottie/enterprise-data-ai.json",
      alt: "Animation illustrating enterprise data and AI solutions",
    },
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Modernise platforms, processes, and customer experiences.",
    description:
      "We partner with organisations to assess digital maturity, map opportunities, and deliver phased transformation — from legacy modernisation to platform consolidation and change support.",
    icon: "/icons/services/digital-transformation.svg",
    featured: true,
    capabilities: [
      "Digital maturity assessment",
      "Process mapping",
      "Legacy modernisation",
      "Workflow digitisation",
      "Platform consolidation",
      "Cloud adoption",
      "Customer-experience transformation",
      "Employee-experience platforms",
      "Technology adoption planning",
      "Change support",
    ],
    outcomes: [
      "Disconnected systems brought into alignment",
      "Clear roadmap with prioritised initiatives",
      "Teams supported through technology change",
    ],
    media: {
      type: "lottie",
      src: "/lottie/enterprise-asset-management.json",
      alt: "Animation illustrating enterprise asset management and digital transformation",
    },
  },
  {
    id: "ux-ui-design",
    slug: "ux-ui-design",
    title: "UX/UI Design",
    shortDescription: "Research-led design for products people actually want to use.",
    description:
      "We combine user research, information architecture, and interface design to create digital products that are intuitive, accessible, and aligned with business goals.",
    icon: "/icons/services/ux-ui-design.svg",
    featured: true,
    capabilities: [
      "User research",
      "UX audit",
      "Journey mapping",
      "Information architecture",
      "Wireframes",
      "Interactive prototypes",
      "Interface design",
      "Design systems",
      "Usability testing",
      "Accessibility",
    ],
    outcomes: [
      "Products shaped by real user needs",
      "Consistent, scalable design systems",
      "Higher conversion and lower support burden",
    ],
  },
  {
    id: "cloud-platform-engineering",
    slug: "cloud-platform-engineering",
    title: "Cloud & Platform Engineering",
    shortDescription: "Scalable cloud architecture, CI/CD, and platform reliability.",
    description:
      "We design and build cloud infrastructure that supports growth — from serverless APIs to containerised services, with monitoring, automation, and security built in from day one.",
    icon: "/icons/services/cloud-platform-engineering.svg",
    featured: true,
    capabilities: [
      "Cloud architecture",
      "AWS",
      "Azure",
      "Vercel",
      "Serverless development",
      "CI/CD",
      "Containers",
      "Infrastructure as code",
      "Monitoring",
      "Application scaling",
      "Backup and recovery",
      "Cloud optimisation",
    ],
    outcomes: [
      "Infrastructure that scales with demand",
      "Faster, safer deployments",
      "Reduced operational overhead",
    ],
  },
  {
    id: "integrations",
    slug: "integrations",
    title: "Integrations",
    shortDescription: "Connect CRMs, ERPs, payments, and third-party platforms.",
    description:
      "We build reliable integrations between the systems your business depends on — eliminating manual data transfer and creating a connected technology ecosystem.",
    icon: "/icons/services/integrations.svg",
    featured: false,
    capabilities: [
      "CRM",
      "ERP",
      "Payment platforms",
      "Accounting systems",
      "Marketing platforms",
      "Authentication",
      "Single sign-on",
      "Headless CMS",
      "Maps",
      "Analytics",
      "Third-party APIs",
      "Webhooks",
    ],
    outcomes: [
      "Systems that share data automatically",
      "Fewer errors from manual processes",
      "Single source of truth across platforms",
    ],
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    shortDescription: "Online stores and commerce platforms built to convert.",
    description:
      "We build ecommerce experiences — from custom storefronts to headless commerce integrations — focused on performance, conversion, and seamless payment flows.",
    icon: "/icons/services/ecommerce-development.svg",
    featured: false,
    capabilities: [
      "Custom storefronts",
      "Headless commerce",
      "Payment integration",
      "Inventory sync",
      "Product catalogues",
      "Checkout optimisation",
      "Subscription commerce",
      "Multi-channel selling",
      "Analytics and reporting",
      "Performance optimisation",
    ],
    outcomes: [
      "Faster checkout and higher conversion",
      "Commerce platforms integrated with your stack",
      "Scalable product and order management",
    ],
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Ongoing care, security updates, and development retainers.",
    description:
      "We provide long-term support for the platforms we build and inherit — keeping systems secure, performant, and evolving with your business needs.",
    icon: "/icons/services/maintenance-support.svg",
    featured: false,
    capabilities: [
      "Monitoring",
      "Security updates",
      "Dependency updates",
      "Bug fixing",
      "Backups",
      "Performance optimisation",
      "Development retainers",
      "Analytics reviews",
      "Quarterly roadmap reviews",
      "Priority support",
    ],
    outcomes: [
      "Platforms kept secure and up to date",
      "Issues resolved before they impact users",
      "Continuous improvement through retained partnership",
    ],
    media: {
      type: "lottie",
      src: "/lottie/it-managed-services.json",
      alt: "Animation illustrating IT managed services and ongoing platform support",
    },
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceInterestOptions = services.map((service) => ({
  value: service.id,
  label: service.title,
}));

/** @deprecated Use services array — kept for gradual migration */
export const servicePillars = services
  .filter((s) => s.featured)
  .map((s) => ({
    id: s.id,
    title: s.title,
    intro: s.shortDescription,
    items: s.capabilities.slice(0, 4),
  }));
