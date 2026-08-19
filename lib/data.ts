export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  year: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  image: string;
  gradient: string;
  link?: string;
  architectureDetails: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
  gradient: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatar: string;
  experience: string;
  github?: string;
  linkedin?: string;
  status: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  metric: string;
  avatar: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const STUDIO_INFO = {
  name: "DIGITIZE STUDIO",
  badge: "ENGINEERING & DIGITAL ARCHITECTURE",
  status: "AVAILABLE FOR Q3/Q4 SPRINT CONTRACTS",
  email: "hello@digitize.studio",
  hq: "San Francisco • London • Tokyo",
  founded: "2021",
};

export const PARTNERS = [
  { name: "VERTEX CAPITAL", tier: "VENTURE" },
  { name: "AETHERIUM NETWORKS", tier: "FINTECH" },
  { name: "KINETIC OS", tier: "DEV TOOLS" },
  { name: "MONOLITH SYSTEMS", tier: "INFRASTRUCTURE" },
  { name: "SYNTHESIS LABS", tier: "CREATIVE TECH" },
  { name: "VECTOR DATA", tier: "ANALYTICS" },
  { name: "MERIDIAN CLOUD", tier: "DEVOPS" },
  { name: "HYPERION PROTOCOL", tier: "SECURITY" },
];

export const METRICS = [
  { value: "99.99%", label: "System Reliability", sub: "Engineered for zero downtime" },
  { value: "48+", label: "Flagships Shipped", sub: "Enterprise & scale-up deployments" },
  { value: "< 50ms", label: "P99 Edge Latency", sub: "Globally distributed architectures" },
  { value: "14", label: "Design & Code Honors", sub: "Awwwards, FWA & GitHub Spotlight" },
];

export const SERVICES: Service[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full-Stack Software Architecture",
    shortDesc: "High-throughput web applications, microservices, and distributed backend systems designed for massive scale.",
    fullDesc: "We engineer resilient full-stack systems from the database layer to edge compute. Our architectures emphasize type-safety, clean domain-driven patterns, and sub-millisecond response times.",
    deliverables: ["Microservices Architecture", "Real-Time WebSockets & Event Streams", "GraphQL & REST Endpoints", "Database Optimization & Sharding"],
    technologies: ["Next.js 14", "TypeScript", "Go / Rust", "Node.js", "PostgreSQL", "Redis", "Kafka"],
    icon: "Layers",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "design-systems",
    number: "02",
    title: "UI/UX & Kinetic Design Systems",
    shortDesc: "Pixel-perfect bespoke design systems, fluid micro-interactions, and accessible, responsive design tokens.",
    fullDesc: "Design is not decoration; it is functional clarity. We create unified design systems with reusable atomic tokens, dark mode physics, kinetic typography, and high-fidelity prototypes.",
    deliverables: ["Figma Enterprise Token Libraries", "Component Storybooks", "Micro-interaction Physics", "WCAG 2.1 AAA Accessibility"],
    technologies: ["Figma Tokens", "Tailwind CSS", "GSAP", "Radix UI", "CSS Modules", "Motion Design"],
    icon: "Palette",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "cloud-devops",
    number: "03",
    title: "Cloud Infrastructure & High-Scale DevOps",
    shortDesc: "Immutable infrastructure-as-code, multi-region Kubernetes clusters, and zero-downtime CI/CD pipelines.",
    fullDesc: "We eliminate deployment bottlenecks with enterprise-grade cloud automation, multi-cloud failover, automated observability pipelines, and aggressive cost optimization.",
    deliverables: ["Kubernetes (EKS/GKE) Orchestration", "Terraform & Pulumi IAC", "Multi-Region Edge Caching", "Datadog / Prometheus Monitoring"],
    technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Google Cloud", "Cloudflare Workers", "GitHub Actions"],
    icon: "Cpu",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "creative-webgl",
    number: "04",
    title: "Creative Tech & Interactive 3D",
    shortDesc: "Immersive WebGL experiences, custom GLSL shaders, 3D product visualizers, and canvas animations.",
    fullDesc: "Transform static interfaces into living 3D environments that captivate audiences while maintaining silky smooth 60fps performance across desktop and mobile devices.",
    deliverables: ["Custom GLSL Fragment/Vertex Shaders", "3D Parametric Geometries", "Canvas Audio Synthesizers", "Scroll-Synced 3D Cameras"],
    technologies: ["Three.js", "React Three Fiber", "Drei", "WebGL 2.0", "GLSL", "Blender Pipelines"],
    icon: "Sparkles",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "mobile-native",
    number: "05",
    title: "Mobile & Native Platforms",
    shortDesc: "Ultra-responsive cross-platform mobile apps with native performance, offline-first sync, and smooth animations.",
    fullDesc: "We build native-feeling mobile applications with local-first databases, biometric security, biometric authentication, and background synchronization.",
    deliverables: ["React Native Architecture", "Offline-First SQLite Sync", "Biometric Auth & Secure Enclave", "App Store & Play Store CI/CD"],
    technologies: ["React Native", "Expo EAS", "Swift / Kotlin Bridge", "WatermelonDB", "Skia Graphics"],
    icon: "Smartphone",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "product-strategy",
    number: "06",
    title: "Technical Strategy & Code Audits",
    shortDesc: "In-depth codebase refactoring, security audits, database indexing, and comprehensive technology roadmaps.",
    fullDesc: "Scale your engineering org without technical debt. We conduct rigorous code audits, vulnerability scans, query profiling, and engineering playbook creation.",
    deliverables: ["Architecture Audit Reports", "Security & Pen-Test Remediation", "SQL Query & Memory Profiling", "CTO Advisory & Tech Roadmaps"],
    technologies: ["SonarQube", "Snyk", "Lighthouse CI", "Distributed Tracing", "OpenTelemetry"],
    icon: "ShieldCheck",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "kinetic-os",
    title: "KINETIC OS",
    tagline: "High-performance developer telemetry & workflow orchestration workstation",
    client: "Kinetic Technologies Inc.",
    year: "2024",
    category: "Developer Platform / Systems",
    description: "An ultra-fast, local-first developer workstation and observability console built with Rust WebAssembly and Next.js. Delivers sub-millisecond metrics streaming across 50,000 parallel container processes.",
    metrics: [
      { label: "Throughput Increase", value: "+340%" },
      { label: "Memory Footprint", value: "< 24MB" },
      { label: "Active Engineers", value: "85,000+" },
    ],
    stack: ["Next.js 14", "Rust Wasm", "WebSockets", "Tailwind CSS", "Three.js", "ClickHouse"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    gradient: "from-sky-500 to-indigo-600",
    architectureDetails: [
      "Zero-copy memory sharing using WebAssembly SharedArrayBuffer",
      "Real-time canvas-based thread visualizer rendering 120 FPS graph telemetry",
      "End-to-end cryptographic payload verification using Ed25519 signatures",
    ],
  },
  {
    id: "aetherium-pay",
    title: "AETHERIUM PAY",
    tagline: "Next-gen institutional liquidity & cross-border settlement gateway",
    client: "Aetherium Global",
    year: "2024",
    category: "Fintech Infrastructure",
    description: "An institutional-grade financial settlement engine processing over $140M daily volume with guaranteed zero-loss idempotent transaction pipelines and automated multi-currency liquidity routing.",
    metrics: [
      { label: "Daily Settlement", value: "$140M+" },
      { label: "Execution Speed", value: "18ms" },
      { label: "Audit Rating", value: "AAA Secure" },
    ],
    stack: ["TypeScript", "Go Microservices", "PostgreSQL", "Kafka", "Docker", "GSAP"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=80",
    gradient: "from-violet-600 to-purple-800",
    architectureDetails: [
      "Distributed transaction coordinator using two-phase commit with Saga rollback",
      "Real-time exchange rate arbiter with fallback circuit-breakers",
      "Glassmorphic banking portal with biometric hardware key integration",
    ],
  },
  {
    id: "prism-engine",
    title: "PRISM ENGINE",
    tagline: "Collaborative browser-based 3D parametric modeler & shader workspace",
    client: "Synthesis Labs",
    year: "2023",
    category: "Creative Tech / WebGL",
    description: "A collaborative 3D CAD & shader development environment running entirely inside Chrome/Firefox using WebGL 2.0 and WebGPU shaders. Enables multi-user real-time viewport manipulation.",
    metrics: [
      { label: "Mesh Complexity", value: "2M Polys" },
      { label: "Shader Compilation", value: "< 5ms" },
      { label: "Cloud Sync Latency", value: "12ms" },
    ],
    stack: ["Three.js", "React Three Fiber", "GLSL Shaders", "CRDT (Yjs)", "Next.js"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    gradient: "from-cyan-500 to-emerald-600",
    architectureDetails: [
      "Custom physically based rendering (PBR) shader pipeline written in GLSL 3.0",
      "Conflict-free replicated data types (CRDT) for multi-seat live 3D vertex editing",
      "GPU-accelerated shadow cascades and ambient occlusion post-processing",
    ],
  },
  {
    id: "lumina-health",
    title: "LUMINA HEALTH",
    tagline: "Real-time clinical telemetry & surgical workflow visualizer",
    client: "Lumina Diagnostics",
    year: "2023",
    category: "HealthTech & Systems",
    description: "A mission-critical medical operating room interface delivering live biosensor streams, DICOM 3D scans, and vital telemetry to surgical teams with sub-20ms sensor-to-screen fidelity.",
    metrics: [
      { label: "Sensor Latency", value: "< 16ms" },
      { label: "HIPAA Compliance", value: "100% Passed" },
      { label: "Hospital Deployments", value: "32 Units" },
    ],
    stack: ["Next.js 14", "WebRTC", "DICOM 3D Parser", "Tailwind CSS", "Redis Streams"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    gradient: "from-emerald-500 to-teal-700",
    architectureDetails: [
      "Hardware-accelerated DICOM volumetric tomography slicing in WebGL",
      "P2P WebRTC data channels with automatic WebSocket fallback",
      "Strict zero-knowledge encrypted audit trails with role-based clinical access",
    ],
  },
  {
    id: "volt-archive",
    title: "VOLT ARCHIVE",
    tagline: "High-throughput decentralized asset storage & provenance catalog",
    client: "Volt Media Global",
    year: "2023",
    category: "Cloud Media & Storage",
    description: "An enterprise media archiving network capable of transcode-on-the-fly streaming of 8K video masters with content-addressed cryptographic verification and multi-region CDN replication.",
    metrics: [
      { label: "Data Managed", value: "4.2 Petabytes" },
      { label: "Transcode Speed", value: "12x Realtime" },
      { label: "Cache Hit Ratio", value: "99.4%" },
    ],
    stack: ["Rust", "FFmpeg Wasm", "Cloudflare R2", "Next.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    gradient: "from-amber-500 to-rose-600",
    architectureDetails: [
      "Edge-computed chunk streaming with dynamic bitrate ladder adjustments",
      "Merkle DAG asset verification eliminating duplicate object storage",
      "Low-overhead GraphQL federated schema for cross-service queries",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "PHASE 01",
    number: "01",
    title: "Technical Discovery & Architecture Blueprint",
    subtitle: "Understanding constraints, scale requirements & foundational topology",
    description: "We deconstruct your domain requirements, audit legacy bottlenecks, and draft a comprehensive technical architecture blueprint with explicit data schemas and SLA definitions.",
    deliverables: ["Architecture Diagram", "Entity Relationship Blueprint", "Performance Budget", "Sprint Roadmap"],
    duration: "Week 1 - 2",
  },
  {
    step: "PHASE 02",
    number: "02",
    title: "Design Tokens & High-Fidelity UI System",
    subtitle: "Crafting mathematical design tokens & interactive wireframe models",
    description: "Our design engineers create custom design tokens, component state matrices, fluid typographic scales, and responsive motion choreographies tailored to your brand identity.",
    deliverables: ["Figma Design Token System", "Interactive Component Prototype", "Accessibility Scorecard", "Animation Specs"],
    duration: "Week 2 - 4",
  },
  {
    step: "PHASE 03",
    number: "03",
    title: "Core Infrastructure & API Scaffold",
    subtitle: "Spinning up immutable cloud environments, CI/CD and secure schemas",
    description: "We deploy isolated staging environments using Infrastructure-as-Code (Terraform), configure automated testing pipelines, and construct scalable backend microservices.",
    deliverables: ["Automated CI/CD Pipeline", "Dockerized Environments", "Database Migrations", "API Endpoints with OpenAPI Docs"],
    duration: "Week 4 - 6",
  },
  {
    step: "PHASE 04",
    number: "04",
    title: "Agile Development & 3D Interactive Polish",
    subtitle: "Fast-paced test-driven development sprints with weekly live demos",
    description: "We build out features in tight 2-week agile sprints. We integrate 3D WebGL scenes, GSAP animations, database caching layers, and responsive UI components with full test coverage.",
    deliverables: ["Bi-Weekly Production Previews", "Unit & Integration Test Suite", "WebGL Shader Integration", "Live Staging App"],
    duration: "Week 6 - 10",
  },
  {
    step: "PHASE 05",
    number: "05",
    title: "Load Testing, Security & Chaos Engineering",
    subtitle: "Pushing systems to extreme loads and hardening cryptographic layers",
    description: "Before going live, we subject the system to rigorous synthetic load testing (100k+ concurrent virtual users), run automated vulnerability scans, and profile frame rates on low-end hardware.",
    deliverables: ["Load Test Analysis (P95/P99 latency)", "Penetration Test Report", "Lighthouse 95+ Audit", "Cross-Device QA"],
    duration: "Week 10 - 12",
  },
  {
    step: "PHASE 06",
    number: "06",
    title: "Zero-Downtime Launch & Hypercare Support",
    subtitle: "Orchestrating seamless production cutover and real-time telemetry",
    description: "We execute DNS cutovers with zero downtime, configure real-time Datadog/Sentry alerts, and provide 30 days of active engineering hypercare with 15-minute SLA response times.",
    deliverables: ["Zero-Downtime Production Cutover", "Observability Dashboard", "Engineers On-Call Hypercare", "Handover Documentation"],
    duration: "Launch & Beyond",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Founder & Chief Architect",
    specialty: "Distributed Systems & Rust",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    experience: "Ex-Kernel Engineer, 12+ Yrs",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: "● Active in Sprint",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Head of Creative Tech & 3D",
    specialty: "Three.js, GLSL & WebGL",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    experience: "FWA Jury Member, 9+ Yrs",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: "● Crafting Shaders",
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Staff Infrastructure Engineer",
    specialty: "Kubernetes, Multi-Cloud & SRE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    experience: "Cloud Certified Architect, 10+ Yrs",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: "● Monitoring Infra",
  },
  {
    id: "sophia-mansoor",
    name: "Sophia Al-Mansoor",
    role: "Design Director & UI Lead",
    specialty: "Design Systems & Micro-Interactions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    experience: "Awwwards Winner, 8+ Yrs",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: "● Reviewing Specs",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Digitize Studio engineered our developer workstation from scratch. Their mastery of WebAssembly and low-latency UI rendering allowed us to ship a product 6 months ahead of schedule that handles 85,000 concurrent developers without a hiccup.",
    clientName: "Alexandre Dupuis",
    clientRole: "VP of Engineering",
    company: "Kinetic Technologies",
    metric: "+340% Performance",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    quote: "Finding an engineering agency that respects aesthetic finesse as much as distributed systems stability is virtually impossible. Digitize delivered both: a breathtaking 3D design language paired with an institutional-grade payment pipeline.",
    clientName: "Seraphina Vance",
    clientRole: "Chief Technology Officer",
    company: "Aetherium Global",
    metric: "$140M Daily Volume",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    quote: "The interactive 3D WebGL engine built by Digitize revolutionized our browser product. We achieved 60fps parametric manipulation in the browser that our competitors said could only exist in desktop software.",
    clientName: "Jonathan K.",
    clientRole: "Co-Founder & CEO",
    company: "Synthesis Labs",
    metric: "2M Polys at 60 FPS",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "4",
    quote: "In clinical health tech, failure is not an option. Digitize designed our operating room visualization platform with flawless sub-20ms sensor streaming and uncompromising reliability. They are true software craftsmen.",
    clientName: "Dr. Evelyn Reed",
    clientRole: "Chief Medical Officer",
    company: "Lumina Diagnostics",
    metric: "32 Hospital Units Live",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
  },
];

export const WORLD_CLOCKS = [
  { city: "SAN FRANCISCO", tz: "America/Los_Angeles", code: "SFO", offset: "-8" },
  { city: "LONDON", tz: "Europe/London", code: "LHR", offset: "+0" },
  { city: "TOKYO", tz: "Asia/Tokyo", code: "HND", offset: "+9" },
  { city: "SINGAPORE", tz: "Asia/Singapore", code: "SIN", offset: "+8" },
];
