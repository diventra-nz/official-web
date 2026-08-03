import type { Project } from "@/lib/projects";
import { getProject } from "@/lib/projects";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyDetail {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  discovery: string;
  approach: string;
  design: string;
  technical: string;
  keyFeatures: string[];
  challengesOvercome: string[];
  outcomes: string[];
  metrics: CaseStudyMetric[];
  relatedServiceSlugs: string[];
  showGallery: boolean;
}

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "gutermann",
    client: "Gutermann",
    industry: "Utilities & infrastructure",
    summary:
      "A secure cloud application for water leak detection — geospatial logger management, automatic correlation, AI leak scoring, and event workflows for utilities worldwide.",
    challenge:
      "Water utilities operate large networks of acoustic IoT loggers. Operators needed one browser-based workspace to visualise infrastructure on maps, analyse correlation and spectrum data, classify alarms, and drive repairs — without desktop-only tooling or fragmented spreadsheets.",
    discovery:
      "We mapped the operator journey from logger deployment through nightly correlation, alarm triage, and work-order handoff. Field and office teams needed shared context: GIS pipe data, historical histograms, maintenance status, and clear leak probability signals.",
    approach:
      "We delivered a cloud-first web application with map-centric UX, role-based access, and integrations to Gutermann's correlating logger ecosystem — including remote configuration, maintenance mode, and automated upgrades across firmware, app, and cloud.",
    design:
      "The experience centres on the network map — loggers and leaks on Google Maps and Street View, with spectrum and correlation views for difficult cases, and an event management tool that tracks active versus repaired leaks with report generation.",
    technical:
      "Browser-based architecture on secure hosted infrastructure with geospatial visualisation, KML GIS import, automatic daily correlation, AI-assisted leak probability scoring, email alerting, and workflow support for ticketed leak events.",
    keyFeatures: [
      "Map and Street View interface for loggers, leaks, and network GIS",
      "Automatic daily correlation and AI leak probability scoring",
      "Advanced spectrum analysis to reduce false alarms in noisy environments",
      "Event ticket management with repair tracking and leak reports",
      "Maintenance mode with real-time logger health and battery status",
      "Remote access for specialists assisting difficult investigations",
    ],
    challengesOvercome: [
      "Unified field and office workflows in a single multi-tenant cloud product",
      "Surfaced complex acoustic and correlation data without overwhelming operators",
      "Supported high-volume logger fleets with reliable alerting and historical analysis",
    ],
    outcomes: [
      "Gave utilities a single cloud workspace for permanent leak monitoring",
      "Improved leak triage with AI scoring and spectrum tools that cut false alarms",
      "Enabled worldwide remote access and specialist support on difficult cases",
      "Streamlined logger lifecycle — configuration, maintenance, and firmware upgrades",
    ],
    metrics: [
      { value: "AI", label: "Leak prediction scoring" },
      { value: "24/7", label: "Network monitoring access" },
    ],
    relatedServiceSlugs: [
      "cloud-platform-engineering",
      "web-development",
      "integrations",
      "ai-solutions",
    ],
    showGallery: true,
  },
  {
    slug: "te-matapihi",
    client: "Te Matāpihi — Porirua City Library",
    industry: "Public sector",
    summary:
      "A network of touch-driven library screens — CMS-driven content, live event feeds, and synchronised dual-screen experiences across six installation types.",
    challenge:
      "Public library installations run unattended with audiences of every age and comfort level. Content must stay current without calling a developer, while six screen types pull from different data sources — CMS content, desktop application APIs, and backend-managed playlists.",
    discovery:
      "We audited each screen type's interaction model, content shape, and operational constraints — from corner navigation screens to a dual-screen video room and a large-format bleachers wall. Library staff needed self-service publishing across all content types.",
    approach:
      "React and Electron gave us expressive UI with kiosk runtime control. DatoCMS became the content backbone for staff-managed screens, REST APIs kept event data live, and local network messaging synchronised dual-screen playback.",
    design:
      "Each screen type has a distinct interaction model sized for public touch — generous targets, obvious states, idle timeouts, and Lottie-driven navigation on corner screens. Story screens render long-form CMS narratives as immersive reading experiences.",
    technical:
      "Six Electron applications fetch tailored GraphQL queries per screen type. Lottie animations power corner screen transitions. Manaaki screens pull weekly events from the library's existing REST API. The Digital Experience Room uses inter-process messaging over the local network for low-latency dual-screen playback.",
    keyFeatures: [
      "Corner screens with Lottie-driven navigation and DatoCMS content",
      "Manaaki screens with live weekly events via REST API",
      "Digital Experience Room with synchronised dual-screen playback",
      "Story screens for long-form CMS-managed narratives",
      "Book touch interaction kiosk for archival exploration",
      "Bleachers wall with topic-driven remote playlists",
    ],
    challengesOvercome: [
      "Sized touch targets and idle resets for diverse public interaction styles",
      "Optimised Lottie animations for fixed kiosk hardware performance",
      "Built crash recovery and automatic state reset for unattended operation",
    ],
    outcomes: [
      "Launched across all six screen types with staff self-service through DatoCMS",
      "Manaaki screens kept event information live without manual updates",
      "Digital Experience Room became a focal point for group viewing",
      "Bleachers wall adapted content to match weekly library programming",
    ],
    metrics: [{ value: "6", label: "Distinct screen experiences" }],
    relatedServiceSlugs: ["digital-transformation", "web-development", "integrations"],
    showGallery: false,
  },
  {
    slug: "museum-av",
    client: "National museum (New Zealand)",
    industry: "Museums & culture",
    summary:
      "A multi-screen, touch-driven museum installation that synchronises audio-visual sequences across four displays — running 12 hours a day in a high-traffic public gallery.",
    challenge:
      "Museum AV installations run on fixed hardware in demanding public environments with no helpdesk. Touch interfaces must work for children and cautious adults alike — without tutorials, onboarding, or assumptions of prior familiarity.",
    discovery:
      "We studied how visitors move through the gallery space, how long they engage, and when passive ambient playback matters as much as active touch interaction. Museum staff needed content updates without developer involvement.",
    approach:
      "Electron provided native runtime control with the full web stack. WebSockets synchronised four displays from a central state machine. The interaction model supports free exploration and ambient auto-play after inactivity.",
    design:
      "Touch-responsive primary interface with physical gesture detection. Visitors explore historical content and trigger audio-visual sequences in real time. The experience progresses without interaction as an engaging ambient backdrop.",
    technical:
      "React, GSAP, and WebGL inside Electron on dedicated hardware. WebSockets over a local network coordinate a primary display and three auxiliary screens. Error recovery, automatic state reset, and local logging were built from the first sprint.",
    keyFeatures: [
      "Multi-screen synchronised experience across four displays",
      "Touch-responsive primary interface with gesture detection",
      "Real-time audio-visual synchronisation via WebSockets",
      "Ambient auto-play mode after inactivity timeout",
      "CMS for museum staff content updates",
      "Automatic crash recovery and local health logging",
    ],
    challengesOvercome: [
      "Commissioned hardware installation on-site with museum-grade housings",
      "Balanced active touch exploration with passive ambient playback",
      "Engineered stability for months of unattended daily operation",
    ],
    outcomes: [
      "Turned passive museum visitors into active participants in historical storytelling",
      "Ran reliably 12 hours a day, seven days a week in public gallery conditions",
      "Gave museum staff content control without developer dependencies",
    ],
    metrics: [{ value: "4", label: "Synchronised displays" }],
    relatedServiceSlugs: ["digital-transformation", "web-development", "ux-ui-design"],
    showGallery: true,
  },
  {
    slug: "tell-your-story",
    client: "Ministry of Education (New Zealand)",
    industry: "Education & government",
    summary:
      "A scroll-driven web documentary platform for a Ministry of Education series — film, editorial writing, and interactive chapters designed to hold attention across long-form content.",
    challenge:
      "Documentary series on the web face an attention problem: visitors arrive with purpose but leave quickly if the experience doesn't respect their time. Rich filmed interviews and written essays risked overwhelming users if presented as a content dump.",
    discovery:
      "We mapped how educators and policy audiences consume long-form content — often in school environments with managed IT and variable broadband. The platform needed to earn extended attention through sequencing, not volume.",
    approach:
      "Chapters structure the narrative — each opens with film, followed by editorial writing that deepens the story. Scroll-driven reveals pace delivery. Video is lazy-loaded with reduced-motion fallbacks. Pages are statically generated.",
    design:
      "Scroll-driven narrative architecture connects chapters with motion that serves story, not decoration. Editorial layout system handles long-form writing. Film segments embed naturally within each chapter's reading rhythm.",
    technical:
      "Next.js static generation for fast delivery to school networks. GSAP ScrollTrigger controls line-by-line reveals and chapter transitions with graceful degradation. MDX-based content system lets editors update editorial sections without code changes.",
    keyFeatures: [
      "Scroll-driven narrative with chapter-based navigation",
      "Embedded documentary film with lazy-loading",
      "Editorial layout system for long-form content",
      "Motion design connecting chapters and pacing delivery",
      "Reduced-motion fallback for accessibility",
      "MDX content system for editorial updates",
    ],
    challengesOvercome: [
      "Earned extended attention from educators in low-bandwidth school environments",
      "Sequenced complex content into a journey rather than an archive",
      "Layered animation on top of content that reads perfectly without motion",
    ],
    outcomes: [
      "Presented a government initiative with editorial journalism craft",
      "Held attention across long-form film and written chapters",
      "Enabled editorial updates without developer involvement",
    ],
    metrics: [],
    relatedServiceSlugs: ["web-development", "ux-ui-design"],
    showGallery: true,
  },
];

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudyWithProject(slug: string): {
  project: Project;
  caseStudy: CaseStudyDetail;
} | undefined {
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);
  if (!project || !caseStudy) return undefined;
  return { project, caseStudy };
}
