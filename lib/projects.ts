export interface Project {
  slug: string;
  name: string;
  shortName: string;
  year: string;
  impact: string;
  role: string;
  stack: string[];
  what: string;
  why: string;
  image: string;
  imageAlt: string;
  imagePoster?: string;
  inlineVideo?: string;
  inlineVideoPoster?: string;
  imageAspect?: string;
  imageObjectFit?: "cover" | "contain" | "height";
  imageWidth?: number;
  imageHeight?: number;
  liveUrl?: string;
  liveLabel?: string;
  color: string; // accent/overlay tint for the dark chapter
}

export const projects: Project[] = [
  {
    slug: "gutermann",
    name: "Gutermann Cloud Application",
    shortName: "Gutermann Cloud",
    year: "2025",
    impact:
      "A browser-based cloud platform for water utilities — map-driven leak detection, IoT logger management, and AI-assisted analysis at network scale.",
    role: "Full-stack / Cloud Application Development",
    stack: ["React", "TypeScript", "AWS", "Node.js", "Maps API", "IoT", "AI"],
    what: "Built and evolved Gutermann's cloud application for permanent and correlating leak detection — geospatial logger and leak visualisation, event workflows, spectrum analysis, and secure multi-tenant access for utility operators worldwide.",
    why: "Water utilities need a single cloud workspace to manage IoT acoustic loggers, correlate leak signals, reduce false alarms, and turn detections into actionable repair workflows — from anywhere, on any device.",
    image: "/projects/gutermann.svg",
    imageAlt: "Gutermann Cloud application — map-based leak detection workspace",
    liveUrl: "https://zonescan.net/",
    liveLabel: "Visit Gutermann Cloud",
    color: "#0A3A4A",
  },
  {
    slug: "te-matapihi",
    name: "Te Matāpihi Library Digital Experience",
    shortName: "Te Matāpihi",
    year: "2023",
    impact:
      "A multi-screen touch installation across a public library — CMS-driven content, live event feeds, and synchronised dual-screen experiences.",
    role: "Fullstack Developer",
    stack: ["React", "Electron", "DatoCMS", "GraphQL", "TypeScript", "Lottie", "REST API"],
    what: "Built the user-facing interfaces for a network of library touch screens — React UI, DatoCMS content integration, Lottie animation conversion, and Electron packaging and deployment — across corner displays, story readers, a dual-screen video room, and a large-format bleachers wall.",
    why: "Libraries need digital experiences that staff can update without developers and that work reliably for every visitor — from children exploring touch screens to seniors reading long-form stories.",
    image: "/projects/library/library-hero.jpg",
    imageAlt: "Te Matāpihi Library digital installation overview",
    imageWidth: 1799,
    imageHeight: 1080,
    color: "#1A4A3A",
  },
  {
    slug: "museum-av",
    name: "Interactive Museum AV Experience",
    shortName: "Museum AV",
    year: "2021",
    impact: "A touch-driven installation that turned passive museum visitors into active participants in New Zealand's history.",
    role: "Creative Technologist & Developer",
    stack: ["Electron", "React", "GSAP", "WebSockets", "Node.js", "Matter.js"],
    what: "Built a multi-screen interactive AV installation for a national museum — a real-time, touch-responsive experience synchronised across four displays, running 12 hours a day on dedicated hardware.",
    why: "Museums are rethinking how stories get told. This installation proved that digital craft and curatorial thinking can share the same space — without one overriding the other.",
    image: "/projects/museum-av.svg",
    imageAlt: "Interactive AV museum installation — multi-screen touch experience",
    color: "#1A1A3A",
  },
  {
    slug: "tell-your-story",
    name: "Tell Your Story Web Application",
    shortName: "Tell Your Story",
    year: "2020",
    impact: "A long-form web documentary that brought a Ministry of Education initiative to life through film, interaction, and story.",
    role: "Frontend Developer & Motion Designer",
    stack: ["Next.js", "React", "GSAP", "CSS Animations", "Video", "MDX"],
    what: "Created the digital home for a Ministry of Education documentary series — scroll-driven narrative chapters, embedded film segments, and interactive editorial sections designed to hold attention across long-form content.",
    why: "Government communications rarely feel like stories worth reading. This project asked what happens when you treat public information with the same craft as editorial journalism.",
    image: "/projects/tell-your-story.jpg",
    imageAlt: "Art of Living web documentary — Ministry of Education digital series",
    color: "#2A1A0A",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
