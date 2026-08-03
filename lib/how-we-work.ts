export const processStages = [
  {
    id: "discover",
    title: "Discover",
    icon: "/icons/process/discover-card.svg",
    description:
      "We learn your business goals, users, constraints, and existing technology landscape.",
  },
  {
    id: "define",
    title: "Define",
    icon: "/icons/process/define-card.svg",
    description:
      "We align on scope, success metrics, architecture direction, and a realistic delivery plan.",
  },
  {
    id: "design",
    title: "Design",
    icon: "/icons/process/design.svg",
    description:
      "We shape experiences, interfaces, and technical approaches through research and prototyping.",
  },
  {
    id: "develop",
    title: "Develop",
    icon: "/icons/process/develop.svg",
    description:
      "We build in iterative cycles with code review, testing, and regular checkpoints.",
  },
  {
    id: "deploy",
    title: "Deploy",
    icon: "/icons/process/deploy.svg",
    description:
      "We launch with performance, security, and accessibility validated — plus documentation and handover.",
  },
  {
    id: "improve",
    title: "Improve",
    icon: "/icons/process/improve.svg",
    description:
      "We monitor outcomes, refine based on usage, and support ongoing evolution of your platform.",
  },
] as const;

export const deliveryPractices = [
  {
    title: "Communication approach",
    description: "Plain-language updates, shared channels, and decisions documented as we go.",
  },
  {
    title: "Project governance",
    description: "Clear ownership, scope control, and escalation paths from kickoff to launch.",
  },
  {
    title: "Weekly updates",
    description: "Structured progress reports covering delivery, risks, and next priorities.",
  },
  {
    title: "Quality assurance",
    description: "Review gates across design, code, and content before anything reaches production.",
  },
  {
    title: "Testing",
    description: "Functional, regression, and cross-device testing aligned to project risk.",
  },
  {
    title: "Security",
    description: "Secure development practices, dependency awareness, and sensible access controls.",
  },
  {
    title: "Documentation",
    description: "Technical and operational documentation your team can maintain after handover.",
  },
  {
    title: "Handover",
    description: "Structured transition including environments, credentials, and runbooks.",
  },
  {
    title: "Training",
    description: "Walkthroughs for your team on CMS, admin tools, or platform operations.",
  },
  {
    title: "Post-launch support",
    description: "Stabilisation period and optional retained support after go-live.",
  },
] as const;

export const engagementModels = [
  {
    title: "Fixed-scope project",
    description: "Defined deliverables, timeline, and budget for a clear outcome.",
  },
  {
    title: "Phased delivery",
    description: "Roadmap broken into stages so you can prioritise and fund incrementally.",
  },
  {
    title: "Retained partnership",
    description: "Ongoing capacity for development, improvements, and platform care.",
  },
  {
    title: "Discovery workshop",
    description: "Focused engagement to assess opportunities and recommend next steps.",
  },
] as const;

export const howWeWorkFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A focused website or prototype may take weeks; larger platforms often run across multiple phases over several months. We define realistic timelines during the Define stage.",
  },
  {
    question: "Do you work with existing internal teams?",
    answer:
      "Yes. We regularly collaborate with in-house product, design, and engineering teams — complementing your capability rather than replacing it.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A clear business goal, access to relevant stakeholders, and visibility into existing systems. We handle the rest through structured discovery.",
  },
  {
    question: "How do you handle changes in scope?",
    answer:
      "Scope changes are expected on complex projects. We document impact on timeline and budget before proceeding, so decisions stay transparent.",
  },
] as const;
