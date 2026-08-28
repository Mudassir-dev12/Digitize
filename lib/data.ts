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
  name: "DIGITIZE.",
  tagline: "WORK LOCAL RESULT GLOBAL",
  badge: "ENGINEERING & DIGITAL ARCHITECTURE",
  status: "AVAILABLE FOR GLOBAL PROJECTS & CONTRACTS",
  email: "Infodigitizepk@gmail.com",
  phone: "+92 330 0287063",
  website: "www.digitizepk.com",
  websiteUrl: "https://www.digitizepk.com",
  founder: "Madni Silat",
  founderTitle: "FOUNDER & CEO",
  hq: "Office # 1229, block 3, hussainabad, karachi",
  address: "Office # 1229, block 3, hussainabad, karachi",
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
    id: "custom-software",
    number: "01",
    title: "Custom Software",
    shortDesc: "Bespoke enterprise software, scalable backend systems, microservices, and specialized business logic tools.",
    fullDesc: "We engineer tailored software solutions built from the ground up for your specific business requirements. Designed for high throughput, security, and effortless scalability.",
    deliverables: ["Custom Enterprise Architecture", "API Integration & Webhooks", "Database Design & Optimization", "Automated Workflows"],
    technologies: ["Next.js 14", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
    icon: "Code2",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "app-development",
    number: "02",
    title: "App Development",
    shortDesc: "High-performance iOS and Android mobile apps engineered with native fluid UI and seamless user experience.",
    fullDesc: "Cross-platform and native mobile applications crafted with high responsiveness, offline sync capability, push notifications, and store deployment readiness.",
    deliverables: ["iOS & Android Mobile Apps", "Cross-Platform React Native Architecture", "Push Notifications & Analytics", "App Store & Play Store Publishing"],
    technologies: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin", "Firebase", "REST APIs"],
    icon: "Smartphone",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    shortDesc: "Ultra-fast modern websites, WebGL 3D web applications, SaaS platforms, and responsive web portals.",
    fullDesc: "From landing pages to complex WebGL applications, we build lightning-fast, SEO-optimized web experiences with 60fps animations and flawless responsive layouts.",
    deliverables: ["Full-Stack Web Applications", "Interactive 3D WebGL Interfaces", "SEO & Core Web Vitals Optimization", "Headless CMS Integration"],
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion"],
    icon: "Globe",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "brand-zero-to-hero",
    number: "04",
    title: "Brand Zero to Hero",
    shortDesc: "End-to-end brand identity creation, positioning, logo design, visual identity systems, and marketing strategy.",
    fullDesc: "Transform your vision into a recognized market leader. We handle brand strategy, typography, color systems, social kits, and launch campaigns from scratch.",
    deliverables: ["Brand Identity & Logo Design", "Design Tokens & Style Guides", "Social Media & Marketing Kits", "Go-To-Market Brand Strategy"],
    technologies: ["Figma", "Adobe Illustrator", "Brand Systems", "Motion Graphics", "Content Strategy"],
    icon: "Sparkles",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "daraz-store-management",
    number: "05",
    title: "Daraz Store Management",
    shortDesc: "Complete Daraz seller account setup, product listing optimization, SEO, store design, and sales scaling.",
    fullDesc: "Maximize your Daraz marketplace revenue. We manage store creation, product listing SEO, banner design, promotion management, and inventory synchronization.",
    deliverables: ["Daraz Seller Center Setup", "Product Title & Keyword SEO", "Custom Store Front Design", "Campaign & Flash Sale Management"],
    technologies: ["Daraz Seller Center", "Marketplace Analytics", "Photoshop", "E-commerce SEO", "Inventory Sync"],
    icon: "Store",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "shopify-store-management",
    number: "06",
    title: "Shopify Store Management",
    shortDesc: "Turnkey Shopify e-commerce development, theme customization, payment gateway integration, and store growth.",
    fullDesc: "Build and scale your global e-commerce business on Shopify. We deliver custom Liquid themes, checkout optimization, high-converting product pages, and app integrations.",
    deliverables: ["Custom Shopify Store Setup", "Liquid Theme Customization", "Payment Gateway & COD Integration", "Conversion Rate Optimization (CRO)"],
    technologies: ["Shopify Plus", "Liquid", "Shopify API", "Klaviyo", "Google Analytics 4", "Stripe / Local Gateways"],
    icon: "ShoppingBag",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "nitec-audio",
    title: "NITEC AUDIO",
    tagline: "Sequoia Inspiring Musico — Next-Gen Audio E-Commerce & WebGL Product Experience",
    client: "Nitec Global",
    year: "2024",
    category: "Audio Tech & D2C E-Commerce",
    description: "A flagship modern e-commerce platform for high-fidelity audio equipment. Features interactive 3D product customization, bento-grid product highlights, instant checkout, and spatial audio previews.",
    metrics: [
      { label: "Sales Growth", value: "+320%" },
      { label: "User Downloads", value: "5M+" },
      { label: "Review Rating", value: "4.8 ★" },
    ],
    stack: ["Next.js 14", "Tailwind CSS", "Three.js", "Shopify API", "Framer Motion"],
    image: "/b5.jpg",
    gradient: "from-blue-600 to-indigo-800",
    architectureDetails: [
      "Dynamic bento-grid layout with zero cumulative layout shift",
      "Interactive 3D product configuration in WebGL with live color switching",
      "Headless e-commerce cart drawer with sub-100ms response times",
    ],
  },
  {
    id: "drunken-sailor",
    title: "DRUNKEN SAILOR",
    tagline: "Tropical Refreshing — Bold Craft Beverage Brand & Direct-to-Consumer Store",
    client: "Drunken Sailor Beverage Co.",
    year: "2024",
    category: "Beverage Brand & D2C Store",
    description: "A vibrant, high-energy e-commerce experience for craft tropical beverages. Built with bold kinetic typography, interactive liquid animations, subscription box workflows, and instant checkout.",
    metrics: [
      { label: "Conversion Rate", value: "5.4%" },
      { label: "Monthly Orders", value: "45,000+" },
      { label: "Brand Virality", value: "#1 Trending" },
    ],
    stack: ["Shopify Plus", "Next.js 14", "GSAP", "Tailwind CSS", "Stripe API"],
    image: "/b2.png",
    gradient: "from-purple-600 to-amber-500",
    architectureDetails: [
      "Custom fluid liquid shader effects matching can flavor profiles",
      "Subscription engine integration for automated recurring monthly deliveries",
      "High-converting single-page cart drawer optimized for mobile shoppers",
    ],
  },
  {
    id: "nestify-home",
    title: "NESTIFY HOME",
    tagline: "PureSpace Focus — Minimalist Luxury Furniture & Interior Architecture Hub",
    client: "Nestify Living Inc.",
    year: "2024",
    category: "Luxury Furniture & E-Commerce",
    description: "An elegant, minimalist luxury furniture storefront featuring 3D AR room placement, interactive sofa collections, bento deal cards, and seamless multi-currency checkout.",
    metrics: [
      { label: "Average Order Value", value: "$1,450" },
      { label: "AR Try-On Rate", value: "68%" },
      { label: "Page Load Speed", value: "99/100" },
    ],
    stack: ["Next.js 14", "WebXR / AR", "Tailwind CSS", "Sanity CMS", "Stripe API"],
    image: "/b1.jpg",
    gradient: "from-amber-600 to-zinc-800",
    architectureDetails: [
      "Augmented Reality (AR) WebXR engine allowing customers to place sofas in 3D space",
      "Cream minimalist design system with sub-millisecond page transitions",
      "Automated logistics integration for nationwide heavy-freight delivery tracking",
    ],
  },
  {
    id: "bitego-foods",
    title: "BITEGO FOODS",
    tagline: "Your Healthy Food — On-Demand Mobile Food Delivery & Nutrition Platform",
    client: "BiteGo Logistics",
    year: "2023",
    category: "Food Delivery & Mobile App",
    description: "A fast, modern food delivery platform and mobile app for healthy meal plans. Features real-time GPS courier tracking, calorie & macro nutrition calculators, and instant 1-tap ordering.",
    metrics: [
      { label: "App Downloads", value: "1.2M+" },
      { label: "Avg Delivery Time", value: "18 Mins" },
      { label: "Customer Rating", value: "4.9 ★" },
    ],
    stack: ["React Native", "Next.js 14", "WebSockets", "Node.js", "Tailwind CSS"],
    image: "/b4.jpg",
    gradient: "from-lime-500 to-emerald-700",
    architectureDetails: [
      "Real-time driver location streaming via WebSockets with map route optimization",
      "Dynamic calorie and macro-nutrient breakdown calculator for custom meal orders",
      "Instant push notification engine for order status updates and promo deals",
    ],
  },
  {
    id: "bonita-health",
    title: "BONITA HEALTH",
    tagline: "Medix Clinical Telemetry — Intelligent Healthcare & Patient Diagnostics Portal",
    client: "Bonita Healthcare",
    year: "2023",
    category: "HealthTech & Clinical Portal",
    description: "An advanced healthcare dashboard and telemedicine platform for clinical diagnostic analysis. Features live brain and heart efficiency telemetry charts, specialist appointment scheduling, and HIPAA-compliant data pipelines.",
    metrics: [
      { label: "Clinical Accuracy", value: "99.8%" },
      { label: "Active Doctors", value: "3,400+" },
      { label: "HIPAA Compliant", value: "100%" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "D3.js Charts", "PostgreSQL"],
    image: "/b3.jpg",
    gradient: "from-purple-600 to-indigo-800",
    architectureDetails: [
      "Real-time biosensor telemetry visualizer rendering smooth heart and brain efficiency graphs",
      "HIPAA-compliant zero-knowledge encrypted database for patient medical records",
      "Integrated WebRTC video consultation room for remote specialist visits",
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
    id: "madni-silat",
    name: "Madni Silat",
    role: "FOUNDER & CEO",
    specialty: "Digital Strategy & Enterprise Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    experience: "Founder & Technology Leader",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: "● Active & Leading",
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
  { city: "KARACHI (HQ)", tz: "Asia/Karachi", code: "KHI", offset: "+5" },
  { city: "SAN FRANCISCO", tz: "America/Los_Angeles", code: "SFO", offset: "-8" },
  { city: "LONDON", tz: "Europe/London", code: "LHR", offset: "+0" },
  { city: "TOKYO", tz: "Asia/Tokyo", code: "HND", offset: "+9" },
];
