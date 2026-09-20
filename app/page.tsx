'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  X,
  Send,
  Users,
  Box,
  BarChart3,
  Code,
  Code2,
  Smartphone,
  Cpu,
  Layers,
  Compass,
  Check,
  Globe,
  Rocket,
  Heart,
  TrendingUp,
  ExternalLink,
  Shield,
  ShieldCheck,
  Search,
  PenTool,
  Plus,
  Terminal,
  Calendar,
  Clock,
  Briefcase,
  User,
  Mail,
  FileText,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowUp,
  Menu,
  Target,
  Lock
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
}

interface ProjectDetail {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  description: string;
  client: string;
  techStack: string[];
  metrics: { label: string; val: string }[];
}

interface ProcessStep {
  num: string;
  title: string;
  image?: string;
  description: string;
  tagline: string;
  subTagline: string;
  detailedScope: string;
  keyActivities: string[];
  deliverables: string[];
  duration: string;
}

interface TechCategory {
  id: string;
  title: string;
  subtitle: string[];
  description: string;
  layer: 'top-glass' | 'core-green' | 'infra-glass' | 'ai-data' | 'mobile' | 'integrations';
  side: 'left' | 'right';
  badge: string;
  highlights: string[];
}

const techCategoriesData: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: ['Next.js, React', 'TypeScript, Tailwind'],
    description:
      'Modern, accessible component architectures delivering sub-second page loads, fluid interactions, and scalable design token systems.',
    layer: 'top-glass',
    side: 'left',
    badge: 'v 3.2.0 Glass Layer',
    highlights: [
      'Next.js 15 App Router & Server Components',
      'Strict TypeScript Type Safety',
      'Tailwind CSS & Motion Micro-Interactions',
      'Core Web Vitals 95+ Performance'
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: ['Node.js, Python', 'PostgreSQL, Supabase'],
    description:
      'High-throughput server environments, event-driven microservices, relational databases, and real-time subscription pipelines.',
    layer: 'core-green',
    side: 'left',
    badge: 'BUILT WITH PURPOSE Core',
    highlights: [
      'Node.js & Python Async Workers',
      'PostgreSQL Relational DB Architectures',
      'Supabase Real-Time Data Streaming',
      'Zero-Trust API Security & Auth'
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    subtitle: ['AWS, Vercel', 'Docker, Kubernetes'],
    description:
      'Cloud-native container orchestration, edge caching, automated zero-downtime deployments, and continuous observability.',
    layer: 'infra-glass',
    side: 'left',
    badge: 'REAL IMPACT Foundation',
    highlights: [
      'Multi-Region AWS Cloud Infrastructure',
      'Vercel Global Edge Network Routing',
      'Docker Containers & Kubernetes Pods',
      'Automated CI/CD Deployment Pipelines'
    ]
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    subtitle: ['OpenAI, LangChain', 'Pinecone, TensorFlow'],
    description:
      'Cutting-edge generative AI models, vector embeddings, autonomous agent tool pipelines, and custom machine learning inference.',
    layer: 'ai-data',
    side: 'right',
    badge: 'Intelligence Layer',
    highlights: [
      'OpenAI & Multi-Modal Foundation LLMs',
      'LangChain Agent & Tool Execution Loops',
      'Pinecone Vector Semantic Search Index',
      'TensorFlow Predictive Pipelines'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile',
    subtitle: ['React Native', 'Flutter'],
    description:
      'Cross-platform iOS and Android applications engineered for native 60fps performance, offline-first data, and shared logic.',
    layer: 'mobile',
    side: 'right',
    badge: 'Cross-Platform Core',
    highlights: [
      'React Native & Flutter Native Engines',
      'Offline-First Local Storage & Sync',
      'Push Notifications & Native Hardware Access',
      'App Store & Play Store Submissions'
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    subtitle: ['APIs, Webhooks', 'Third-party Services'],
    description:
      'Enterprise API gateways, resilient webhook listeners, payment processing, CRM synchronization, and SaaS ecosystem connectors.',
    layer: 'integrations',
    side: 'right',
    badge: 'ver 1.0 Metal Layer',
    highlights: [
      'Stripe & Multi-Currency Settlement',
      'Idempotent Event-Driven Webhooks',
      'OAuth2 & Enterprise SSO Connections',
      'Third-Party CRM & Analytics Sinks'
    ]
  }
];

const processStepsData: ProcessStep[] = [
  {
    num: '01',
    title: 'Discover',
    image: '/discover.png',
    description: 'We understand your goals, users, and opportunities.',
    tagline: 'INSIGHTS',
    subTagline: 'THAT MATTER',
    detailedScope:
      'Every transformative product begins with deep research and stakeholder alignment. We unearth hidden opportunities, understand your end users, and translate business vision into an actionable technical roadmap.',
    keyActivities: [
      'Stakeholder alignment & strategic goals workshop',
      'User persona & customer journey mapping',
      'Competitive benchmarking & technical feasibility audit',
      'MVP scope definition & phased roadmap formulation'
    ],
    deliverables: ['Product Discovery Document', 'Technical Architecture Blueprint', 'User Journey & Empathy Maps', 'Scope of Work & Phased Roadmap'],
    duration: '1 – 2 Weeks'
  },
  {
    num: '02',
    title: 'Design',
    image: '/design.png',
    description: 'We turn ideas into intuitive, beautiful experiences.',
    tagline: 'DESIGNS',
    subTagline: 'PEOPLE LOVE',
    detailedScope:
      'We turn abstract ideas into intuitive, aesthetically rich product experiences. By crafting scalable design systems, interactive Figma prototypes, and refined micro-interactions, we ensure every touchpoint feels effortless.',
    keyActivities: [
      'Information architecture & user flow wireframing',
      'High-fidelity visual UI design & component libraries',
      'Interactive prototyping & micro-interaction design',
      'User testing & usability validation sessions'
    ],
    deliverables: ['Clickable High-Fidelity Prototype', 'Complete Scalable Design System', 'Component & Token Library', 'User Usability Validation Report'],
    duration: '2 – 3 Weeks'
  },
  {
    num: '03',
    title: 'Build',
    image: '/build.png',
    description: 'We engineer robust, scalable and future-ready solutions.',
    tagline: 'CLEAN CODE',
    subTagline: 'REAL IMPACT',
    detailedScope:
      'Our engineers turn design systems into high-performance, maintainable software. We build modern full-stack web and mobile apps backed by secure APIs, clean architecture, and automated CI/CD pipelines.',
    keyActivities: [
      'Full-stack frontend & backend engineering',
      'REST & GraphQL API design & database schemas',
      'State management & real-time synchronization',
      'Automated testing & continuous integration (CI/CD)'
    ],
    deliverables: ['Production-Grade Source Codebase', 'Cloud Infrastructure as Code', 'API Documentation & Interactive SDKs', 'Automated Build & Deployment Pipelines'],
    duration: '3 – 6 Weeks'
  },
  {
    num: '04',
    title: 'Test',
    image: '/test.png',
    description: 'We validate, refine, and ensure everything works.',
    tagline: 'QUALITY',
    subTagline: 'YOU CAN TRUST',
    detailedScope:
      'Rigorous quality assurance is woven into every sprint. We run automated unit, integration, and E2E test suites, perform cross-browser and cross-device testing, and audit accessibility and security standards.',
    keyActivities: [
      'Automated unit, integration & end-to-end testing',
      'Cross-device & cross-browser QA matrix',
      'Performance benchmarking & Core Web Vitals audit',
      'Security audit & WCAG AA accessibility compliance'
    ],
    deliverables: ['Quality Assurance Sign-Off', 'Lighthouse Performance Score (95+)', 'Security & Compliance Report', 'Optimization & Bug-Fix Verification'],
    duration: '1 – 2 Weeks'
  },
  {
    num: '05',
    title: 'Launch',
    image: '/launch.png',
    description: 'We help you go live and support you as you grow.',
    tagline: 'IDEAS',
    subTagline: 'INTO THE WORLD',
    detailedScope:
      'We coordinate seamless, zero-downtime production rollouts, publish apps to App Stores, set up real-time telemetry, and provide continuous post-launch optimization to fuel compounding business growth.',
    keyActivities: [
      'Zero-downtime production deployment & DNS routing',
      'App Store & Google Play Store release submissions',
      'Real-time telemetry, observability & error tracking',
      'Post-launch SLA warranty & ongoing growth sprints'
    ],
    deliverables: ['Live Production Release', 'Monitoring & Observability Dashboard', 'Runbooks & Team Handoff Documentation', '30-Day Post-Launch Support Warranty'],
    duration: 'Ongoing Support'
  }
];

const servicesData: ServiceDetail[] = [
  {
    id: 'web-development',
    num: '01',
    title: 'Web Development',
    shortDesc: 'High-performance websites and web applications built for scale.',
    fullDesc:
      'We engineer ultra-fast, accessible, and resilient web applications utilizing modern full-stack architectures, server-side rendering, and responsive design systems tailored to scale with your business.',
    features: [
      'Next.js & React single page & full-stack apps',
      'Ultra-responsive, mobile-first design systems',
      'Core Web Vitals & SEO optimization',
      'Secure REST & GraphQL API integrations'
    ],
    deliverables: ['Custom Web Application', 'Design System & UI Kit', 'Production Deployment & CI/CD', 'Documentation & Support']
  },
  {
    id: 'mobile-applications',
    num: '02',
    title: 'Mobile Applications',
    shortDesc: 'Native and cross-platform apps that deliver seamless experiences.',
    fullDesc:
      'From intuitive iOS and Android applications to fluid cross-platform solutions, we build mobile experiences that delight users and drive lasting daily engagement.',
    features: [
      'React Native & Flutter cross-platform velocity',
      'Native iOS (Swift) & Android (Kotlin) development',
      'Offline-first synchronization & push notifications',
      'App Store & Google Play Store release management'
    ],
    deliverables: ['iOS & Android Apps', 'Interactive Prototypes', 'Store Submission Package', 'API & Cloud Backend']
  },
  {
    id: 'ai-automation',
    num: '03',
    title: 'AI & Automation',
    shortDesc: 'Intelligent solutions to automate processes and unlock new opportunities.',
    fullDesc:
      'Harness cutting-edge generative AI, large language models, and autonomous workflow automation to eliminate operational bottlenecks and create smart user experiences.',
    features: [
      'Gemini & LLM API fine-tuning & integration',
      'Intelligent document processing & semantic search',
      'Workflow & customer support automation',
      'Custom predictive models & agentic assistants'
    ],
    deliverables: ['AI Engine Architecture', 'Custom Agent Pipelines', 'Model Benchmarking', 'Data Privacy & Guardrails']
  },
  {
    id: 'digital-platforms',
    num: '04',
    title: 'Digital Platforms',
    shortDesc: 'Custom platforms tailored to your business goals and industry needs.',
    fullDesc:
      'We architect complex multi-tenant SaaS platforms, enterprise portals, and collaborative cloud software designed for high availability and institutional reliability.',
    features: [
      'Multi-tenant cloud infrastructure',
      'Role-based access control (RBAC) & compliance',
      'Real-time data synchronization & WebSockets',
      'Stripe & billing lifecycle management'
    ],
    deliverables: ['Enterprise SaaS Platform', 'Admin Dashboard & Analytics', 'Cloud Architecture Blueprint', 'SLA & Maintenance Plan']
  },
  {
    id: 'consulting-strategy',
    num: '05',
    title: 'Consulting & Strategy',
    shortDesc: 'Practical guidance to turn your ideas into successful digital products.',
    fullDesc:
      'We collaborate with founders and corporate innovators to validate concepts, define product roadmaps, architect technical stacks, and accelerate time-to-market.',
    features: [
      'Technical architecture & feasibility audits',
      'Product discovery & rapid MVP prototyping',
      'Digital transformation & legacy modernization',
      'Team mentoring & agile delivery frameworks'
    ],
    deliverables: ['Product Strategy Roadmap', 'Technical Architecture Specs', 'UX Research & Wireframes', 'Executive Summary Deck']
  }
];

const projectsData: ProjectDetail[] = [
  {
    id: 'wallett',
    num: '01',
    category: 'FINTECH',
    title: 'WALLETT',
    subtitle: 'A modern fintech platform for a smarter financial future.',
    challenge: 'Create a secure, user-friendly platform for modern banking needs.',
    solution: 'A scalable web and mobile platform with real-time analytics and AI insights.',
    impact: '100K+ users in 6 months',
    description:
      'Wallett revolutionizes personal and institutional wealth management with ultra-low latency real-time transfers, AI spending recommendations, and deep financial portfolio intelligence.',
    client: 'Wallett Financial Global',
    techStack: ['Next.js App Router', 'React Native', 'Tailwind CSS', 'FastAPI & PyTorch', 'Stripe Connect'],
    metrics: [
      { label: 'Active Users', val: '100K+' },
      { label: 'Avg Latency', val: '<45ms' },
      { label: 'Transaction Vol', val: '$42M+' },
      { label: 'App Rating', val: '4.9 ★' }
    ]
  },
  {
    id: 'medicare-plus',
    num: '02',
    category: 'HEALTHCARE',
    title: 'MediCare+',
    subtitle: 'A digital healthcare platform connecting patients and doctors.',
    challenge: 'Bridge the clinical consultation divide with encrypted telemedicine and instant triage scheduling.',
    solution: 'HIPAA-compliant native mobile ecosystem with real-time video consults and AI diagnostic summaries.',
    impact: '85K+ consultations conducted',
    description:
      'MediCare+ streamlines the end-to-end patient lifecycle from initial symptom intake to prescription delivery, empowering clinicians with automated charting and patients with 24/7 care.',
    client: 'MediCare Health Alliance',
    techStack: ['React Native', 'WebRTC Video', 'TypeScript', 'Node.js', 'HIPAA Cloud Storage'],
    metrics: [
      { label: 'Consultations', val: '85K+' },
      { label: 'Wait Time', val: '-64%' },
      { label: 'Doctor Network', val: '2,400+' },
      { label: 'Patient CSAT', val: '98%' }
    ]
  },
  {
    id: 'shopnext',
    num: '03',
    category: 'E-COMMERCE',
    title: 'ShopNext',
    subtitle: 'A next-generation e-commerce platform built for scale.',
    challenge: 'Replace legacy monolithic storefront with a headless, blazing-fast global commerce engine.',
    solution: 'Distributed edge-rendered commerce storefront featuring 3D product previews and instant checkout.',
    impact: '3.4x conversion rate uplift',
    description:
      'ShopNext delivers frictionless luxury retail experiences with sub-second page transitions, dynamic personalized catalog curation, and seamless international multi-currency settlement.',
    client: 'ShopNext Retail Ventures',
    techStack: ['Next.js 15', 'Shopify Storefront API', 'Tailwind CSS', 'Edge Caching', 'Stripe Billing'],
    metrics: [
      { label: 'Conversion Lift', val: '+240%' },
      { label: 'Page Load Speed', val: '0.4s' },
      { label: 'Cart Abandonment', val: '-32%' },
      { label: 'Annual GMV', val: '$68M+' }
    ]
  }
];

export default function HomePage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [selectedProcessStep, setSelectedProcessStep] = useState<ProcessStep | null>(null);
  const [selectedTechCategory, setSelectedTechCategory] = useState<TechCategory | null>(null);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Inline Contact Section Form State
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  // Footer Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitted(true);
    setTimeout(() => {
      setIsNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 3500);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsProjectModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitted(true);
    setTimeout(() => {
      setIsContactSubmitted(false);
      setContactData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const activeShowcaseProject = projectsData[currentProjectIndex];

  return (
    <div className="relative w-full min-h-screen bg-[#FAF9F6] text-neutral-950 font-sans selection:bg-orange-100 selection:text-orange-950">
      
      {/* ========================================================================= */}
      {/* FLOATING TOP NAVIGATION BAR (Exact match to contactsection.png reference) */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* FLOATING TOP NAVIGATION BAR (Exact match to target design)              */}
      {/* ========================================================================= */}
      <header className="fixed top-3.5 left-0 w-full z-40 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          
          {/* Centered Floating Pill Navbar */}
          <nav
            id="floating-navbar"
            className="pointer-events-auto bg-black text-white rounded-full px-6 sm:px-9 py-2.5 sm:py-3 flex items-center gap-5 sm:gap-8 shadow-2xl border border-neutral-800/80"
          >
            <a
              href="#about-us-section"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-200 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#services-section"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-200 hover:text-white transition-colors"
            >
              Services
            </a>

            {/* Brand Logo Center */}
            <a
              href="#hero-section"
              className="flex items-center gap-1.5 font-bold text-sm sm:text-base tracking-tight text-white hover:opacity-90 transition-opacity px-2"
            >
              <span className="text-[#44DE64] text-base sm:text-lg font-black leading-none">✳</span>
              <span>DevPals</span>
            </a>

            <a
              href="#projects-section"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-200 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact-section"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-200 hover:text-white transition-colors"
            >
              Reviews
            </a>
          </nav>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section
        id="hero-section"
        className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#FAF9F6] pt-16 sm:pt-18 md:pt-20 pb-8 sm:pb-12"
      >
        {/* Top Eyebrow & Main Headline Section */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 md:px-12 mb-1 sm:mb-2">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-1.5 sm:mb-2"
            >
              <p
                id="hero-eyebrow"
                className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.26em] text-neutral-800 uppercase select-none"
              >
                YOUR IDEAS. A BRIGHTER TOMORROW.
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[24px] leading-[1.14] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] font-[850] tracking-[-0.03em] text-[#0A0A0A] select-none"
            >
              <span className="block whitespace-nowrap">
                Turning Ideas Into
              </span>

              <span className="relative inline-flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 mt-0.5">
                <span>Digital</span>

                {/* "Products" with hand-drawn 3-stroke radiating burst */}
                <span className="relative inline-block ml-2 sm:ml-2.5">
                  <span>Products</span>

                  {/* Hand-drawn 3-stroke radiating burst doodle */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.55, ease: 'easeOut' }}
                    className="absolute -right-6 -top-1 sm:-right-8 sm:-top-1.5 md:-right-9 md:-top-2 lg:-right-10 lg:-top-2.5 w-6 h-6 sm:w-7.5 sm:h-7.5 md:w-9 md:h-9 lg:w-10 lg:h-10 pointer-events-none select-none"
                  >
                    <svg
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full overflow-visible"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M 10 22 C 22 17, 34 11, 46 7"
                        stroke="#D96B27"
                        strokeWidth="4.2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.35, delay: 0.6, ease: 'easeOut' }}
                      />
                      <motion.path
                        d="M 14 31 C 28 31, 42 30, 56 29"
                        stroke="#D96B27"
                        strokeWidth="4.4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.35, delay: 0.65, ease: 'easeOut' }}
                      />
                      <motion.path
                        d="M 12 41 C 22 47, 32 52, 42 57"
                        stroke="#D96B27"
                        strokeWidth="4.2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.35, delay: 0.7, ease: 'easeOut' }}
                      />
                    </svg>
                  </motion.span>
                </span>
              </span>
            </motion.h1>

          </div>
        </div>

        {/* Center-Bottom Container: VR Female Model Image & Overlaid Action Buttons */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-end mt-0.5 sm:mt-1">
          <div className="relative w-full max-w-[500px] sm:max-w-[580px] md:max-w-[640px] flex flex-col items-center justify-end">
            
            {/* VR Female Model Image */}
            <motion.img
              src="/heroimg.png"
              alt="DevPals VR Model"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-auto object-contain max-h-[350px] sm:max-h-[410px] md:max-h-[460px] lg:max-h-[490px] select-none pointer-events-none drop-shadow-md"
            />

            {/* Overlaid Dual Pill Buttons at the bottom center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="absolute bottom-4 sm:bottom-6 z-30 flex items-center gap-3 sm:gap-4 p-1.5"
            >
              {/* Vibrant Glowing Lime Green Button */}
              <button
                id="hero-start-project-pill"
                onClick={() => setIsProjectModalOpen(true)}
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-[#44DE64] text-black font-bold text-xs sm:text-sm md:text-base rounded-full shadow-[0_0_35px_rgba(68,222,100,0.7)] hover:shadow-[0_0_45px_rgba(68,222,100,0.9)] hover:bg-[#3be05e] active:scale-[0.97] transition-all duration-200 cursor-pointer border border-lime-300/40"
              >
                Start Project
              </button>

              {/* Dark Glassmorphic Button */}
              <a
                id="hero-our-services-pill"
                href="#services-section"
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-black/85 backdrop-blur-md text-white font-semibold text-xs sm:text-sm md:text-base rounded-full border border-neutral-700/80 shadow-xl hover:bg-black active:scale-[0.97] transition-all duration-200 cursor-pointer"
              >
                Our Services
              </a>
            </motion.div>

          </div>
        </div>

        {/* Floating Left Side Description & CTA Button (Shifted further left) */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 z-20 pb-4 sm:pb-6 lg:pb-0 lg:absolute lg:left-2 xl:left-4 2xl:left-6 lg:top-[44%] lg:-translate-y-1/2 lg:px-0">
          <motion.div
            id="hero-bottom-content"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[290px] sm:max-w-[320px] text-left"
          >
            {/* Descriptive copy */}
            <p
              id="hero-description"
              className="text-[13.5px] sm:text-[14.5px] md:text-[15.5px] leading-[1.54] font-medium text-[#374151] tracking-[-0.01em]"
            >
              DevPals is a software company that designs and builds websites, apps, and digital solutions for forward-thinking brands.
            </p>

            {/* Call to action pill button */}
            <div className="mt-4 sm:mt-5">
              <button
                id="start-project-button"
                onClick={() => setIsProjectModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white text-[13.5px] sm:text-[14px] font-semibold rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.26)] hover:bg-[#1A1A1A] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight
                  id="cta-arrow-icon"
                  className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Right Side 3D Cube Widget with Rotating Text Ring */}
        <div className="hidden lg:flex lg:absolute lg:right-2 xl:right-4 2xl:right-6 lg:top-[44%] lg:-translate-y-1/2 z-20 pointer-events-auto select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-56 h-56 flex items-center justify-center"
          >
            {/* Outer Rotating Circular Text Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                <path
                  id="heroCubeTextPath"
                  d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-extrabold fill-neutral-400/80 tracking-[0.24em] uppercase">
                  <textPath href="#heroCubeTextPath" startOffset="0%">
                    AI AGENT DEVELOPER • UI • FULL STACK • FRONTEND • BACKEND •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center 3D Floating Rounded White Cube */}
            <div className="relative [perspective:1000px] w-28 h-28 flex items-center justify-center">
              <motion.div
                animate={{
                  rotateY: [25, 45, 25],
                  rotateX: [-20, -10, -20],
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-24 h-24 relative [transform-style:preserve-3d]"
              >
                {/* Front Face - React */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_10px_25px_rgba(0,0,0,0.08)] [transform:translateZ(48px)] flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-900 tracking-tight">React</span>
                </div>

                {/* Back Face - Apps */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-md [transform:rotateY(180deg)_translateZ(48px)] flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-900 tracking-tight">Apps</span>
                </div>

                {/* Right Face - Next.js */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-md [transform:rotateY(90deg)_translateZ(48px)] flex items-center justify-center">
                  <span className="text-xs font-bold text-neutral-900 tracking-tight">Next.js</span>
                </div>

                {/* Left Face - UI / UX */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-md [transform:rotateY(-90deg)_translateZ(48px)] flex items-center justify-center">
                  <span className="text-xs font-bold text-neutral-900 tracking-tight">UI / UX</span>
                </div>

                {/* Top Face - Web */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-md [transform:rotateX(90deg)_translateZ(48px)] flex items-center justify-center">
                  <span className="text-xs font-bold text-neutral-900 tracking-tight">Web</span>
                </div>

                {/* Bottom Face - Design */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-md [transform:rotateX(-90deg)_translateZ(48px)] flex items-center justify-center">
                  <span className="text-xs font-bold text-neutral-900 tracking-tight">Design</span>
                </div>
              </motion.div>

              {/* Floor Drop Shadow */}
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 w-20 h-4 rounded-full bg-neutral-950/20 blur-md pointer-events-none"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT US SECTION (Exact match to reference image)                     */}
      {/* ========================================================================= */}
      <section
        id="about-us-section"
        className="relative min-h-screen w-full flex flex-col justify-center py-20 sm:py-28 md:py-32 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#FAF9F6] border-t border-neutral-100 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Headline, Narrative & Stats */}
            <div className="lg:col-span-6 max-w-2xl text-left">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="mb-4 sm:mb-6"
              >
                <p
                  id="about-eyebrow"
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-neutral-800 uppercase select-none"
                >
                  ABOUT US
                </p>
              </motion.div>

              {/* Large Stacked Headline with Vibrant Green Dot */}
              <motion.h2
                id="about-headline"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[44px] leading-[0.98] sm:text-[64px] md:text-[76px] lg:text-[84px] xl:text-[96px] font-[850] tracking-[-0.04em] text-black select-none"
              >
                <span className="block">Builders</span>
                <span className="block">of what&apos;s</span>
                <span className="inline-flex items-baseline">
                  <span>next</span>
                  <span
                    id="about-green-dot"
                    className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 rounded-full bg-[#44DE64] ml-1.5 sm:ml-2 md:ml-2.5 transform translate-y-[-0.08em]"
                    aria-hidden="true"
                  />
                </span>
              </motion.h2>

              {/* About Narrative Description */}
              <motion.p
                id="about-description"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 sm:mt-8 md:mt-9 text-[14.5px] sm:text-[15.5px] md:text-[16.5px] leading-[1.58] font-normal text-[#374151] max-w-[540px] tracking-[-0.01em]"
              >
                DevPals is a software company driven by curiosity, craftsmanship, and a deep belief in the power of technology to create meaningful change. We partner with forward-thinking businesses to design, build, and scale digital products that make a difference.
              </motion.p>

              {/* Metrics & Statistics Grid with Vertical Dividers */}
              <motion.div
                id="about-stats-grid"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 max-w-[560px]"
              >
                {/* Stat 1 */}
                <div id="stat-experience" className="pr-4 sm:pr-6">
                  <div className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold tracking-tight text-neutral-950">
                    10+
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-[13.5px] font-medium text-neutral-700 leading-tight mt-1">
                    Years of<br />Experience
                  </div>
                </div>

                {/* Stat 2 */}
                <div id="stat-products" className="sm:border-l sm:border-neutral-300 sm:pl-6 sm:pr-4">
                  <div className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold tracking-tight text-neutral-950">
                    50+
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-[13.5px] font-medium text-neutral-700 leading-tight mt-1">
                    Products<br />Delivered
                  </div>
                </div>

                {/* Stat 3 */}
                <div id="stat-clients" className="sm:border-l sm:border-neutral-300 sm:pl-6 sm:pr-4">
                  <div className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold tracking-tight text-neutral-950">
                    20+
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-[13.5px] font-medium text-neutral-700 leading-tight mt-1">
                    Global<br />Clients
                  </div>
                </div>

                {/* Stat 4 */}
                <div id="stat-satisfaction" className="sm:border-l sm:border-neutral-300 sm:pl-6">
                  <div className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold tracking-tight text-neutral-950">
                    95%
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-[13.5px] font-medium text-neutral-700 leading-tight mt-1">
                    Client<br />Satisfaction
                  </div>
                </div>
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 sm:mt-10 md:mt-12"
              >
                <button
                  id="learn-more-button"
                  onClick={() => setIsAboutModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-3.5 bg-black text-white text-[14px] sm:text-[15px] font-semibold rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.26)] hover:bg-[#1A1A1A] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowUpRight
                    id="about-cta-arrow-icon"
                    className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    strokeWidth={2.5}
                  />
                </button>
              </motion.div>

            </div>

            {/* Right Column: About Us Image */}
            <motion.div
              id="about-image-wrapper"
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 relative w-full flex justify-center lg:justify-end lg:-mt-8 xl:-mt-12"
            >
              <div className="relative w-full max-w-xl lg:max-w-none rounded-[2rem] overflow-hidden group">
                <img
                  id="about-us-image"
                  src="/aboutusimg.png"
                  alt="DevPals Digital Studio & Team"
                  className="w-full h-auto object-contain object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR SERVICES SECTION (Exact match to reference image ourservices.png) */}
      {/* ========================================================================= */}
      <section
        id="services-section"
        className="relative w-full py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#FAF9F6] border-t border-neutral-200/80"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-neutral-200/70">
            
            {/* Left: Eyebrow + Solutions Headline */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 mb-3"
              >
                <span className="w-7 h-[2px] bg-[#44DE64] rounded-full inline-block" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-neutral-800 uppercase select-none">
                  OUR SERVICES
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[42px] sm:text-[54px] md:text-[64px] font-[850] leading-[1.03] tracking-[-0.04em] text-black"
              >
                <span className="block">Solutions</span>
                <span className="block">for what’s next</span>
              </motion.h2>
            </div>

            {/* Middle-Right: Description, Stats, and Discuss Button */}
            <div className="flex flex-col md:flex-row md:items-center lg:items-end gap-8 lg:gap-10">
              
              {/* Short Narrative with Left Border */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-l border-neutral-300 pl-5 sm:pl-6 max-w-[320px]"
              >
                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-neutral-600 font-normal">
                  We design and build tailor-made digital solutions that help businesses grow, adapt, and lead in a fast-changing world.
                </p>
              </motion.div>

              {/* Stats Block */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-6 sm:gap-8"
              >
                <div>
                  <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-neutral-950 leading-none">
                    50+
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-medium text-neutral-600 leading-tight mt-1">
                    Projects<br />Delivered
                  </div>
                </div>

                <div>
                  <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-neutral-950 leading-none">
                    20+
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-medium text-neutral-600 leading-tight mt-1">
                    Global<br />Clients
                  </div>
                </div>

                <div>
                  <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-neutral-950 leading-none">
                    95%
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-medium text-neutral-600 leading-tight mt-1">
                    Client<br />Satisfaction
                  </div>
                </div>
              </motion.div>

              {/* Discuss Your Project Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="self-start md:self-auto"
              >
                <button
                  id="discuss-project-button"
                  onClick={() => setIsProjectModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white text-[13.5px] sm:text-[14px] font-semibold rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.26)] hover:bg-[#1A1A1A] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    strokeWidth={2.4}
                  />
                </button>
              </motion.div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 5 Service Cards Grid                                                      */}
          {/* ========================================================================= */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            
            {/* Card 01: Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              onClick={() => setSelectedService(servicesData[0])}
              className="group relative bg-[#0C0D0E] text-white rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer min-h-[480px] lg:h-[510px]"
            >
              {/* Card Top Row */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-300">01</span>
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-neutral-400 group-hover:text-white transition-colors inline-flex items-center gap-1 uppercase">
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-[21px] font-bold tracking-tight text-white leading-tight mt-3.5 mb-1.5">
                  Web<br />Development
                </h3>
                <p className="text-[12.5px] text-neutral-400 leading-relaxed font-normal">
                  High-performance websites and web applications built for scale.
                </p>
              </div>

              {/* Visual Image Area: swebcard.png */}
              <div className="relative w-full h-[220px] my-auto flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 p-1.5 border border-neutral-800/60">
                <img
                  src="/swebcard.png"
                  alt="Web Development"
                  className="w-full h-full object-cover object-center rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Button */}
              <div className="pt-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-[#44DE64] group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 02: Mobile Applications */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setSelectedService(servicesData[1])}
              className="group relative bg-[#0C0D0E] text-white rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer min-h-[480px] lg:h-[510px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-300">02</span>
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-neutral-400 group-hover:text-white transition-colors inline-flex items-center gap-1 uppercase">
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-[21px] font-bold tracking-tight text-white leading-tight mt-3.5 mb-1.5">
                  Mobile<br />Applications
                </h3>
                <p className="text-[12.5px] text-neutral-400 leading-relaxed font-normal">
                  Native and cross-platform apps that deliver seamless experiences.
                </p>
              </div>

              {/* Visual Image Area: smobilecard.png */}
              <div className="relative w-full h-[220px] my-auto flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 p-1.5 border border-neutral-800/60">
                <img
                  src="/smobilecard.png"
                  alt="Mobile Applications"
                  className="w-full h-full object-cover object-center rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Button */}
              <div className="pt-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-[#44DE64] group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 03: AI & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              onClick={() => setSelectedService(servicesData[2])}
              className="group relative bg-[#0C0D0E] text-white rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer min-h-[480px] lg:h-[510px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-300">03</span>
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-neutral-400 group-hover:text-white transition-colors inline-flex items-center gap-1 uppercase">
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-[21px] font-bold tracking-tight text-white leading-tight mt-3.5 mb-1.5">
                  AI &<br />Automation
                </h3>
                <p className="text-[12.5px] text-neutral-400 leading-relaxed font-normal">
                  Intelligent solutions to automate processes and unlock new opportunities.
                </p>
              </div>

              {/* Visual Image Area: saicard.png */}
              <div className="relative w-full h-[220px] my-auto flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 p-1.5 border border-neutral-800/60">
                <img
                  src="/saicard.png"
                  alt="AI & Automation"
                  className="w-full h-full object-cover object-center rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Button */}
              <div className="pt-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-[#44DE64] group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 04: Digital Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setSelectedService(servicesData[3])}
              className="group relative bg-[#0C0D0E] text-white rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer min-h-[480px] lg:h-[510px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-300">04</span>
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-neutral-400 group-hover:text-white transition-colors inline-flex items-center gap-1 uppercase">
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-[21px] font-bold tracking-tight text-white leading-tight mt-3.5 mb-1.5">
                  Digital<br />Platforms
                </h3>
                <p className="text-[12.5px] text-neutral-400 leading-relaxed font-normal">
                  Custom platforms tailored to your business goals and industry needs.
                </p>
              </div>

              {/* Visual Image Area: build.png */}
              <div className="relative w-full h-[220px] my-auto flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 p-1.5 border border-neutral-800/60">
                <img
                  src="/build.png"
                  alt="Digital Platforms"
                  className="w-full h-full object-cover object-center rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Button */}
              <div className="pt-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-[#44DE64] group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 05: Consulting & Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => setSelectedService(servicesData[4])}
              className="group relative bg-[#0C0D0E] text-white rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer min-h-[480px] lg:h-[510px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-300">05</span>
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-neutral-400 group-hover:text-white transition-colors inline-flex items-center gap-1 uppercase">
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-[21px] font-bold tracking-tight text-white leading-tight mt-3.5 mb-1.5">
                  Consulting &<br />Strategy
                </h3>
                <p className="text-[12.5px] text-neutral-400 leading-relaxed font-normal">
                  Practical guidance to turn your ideas into successful digital products.
                </p>
              </div>

              {/* Visual Image Area: sconcard.png */}
              <div className="relative w-full h-[220px] my-auto flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 p-1.5 border border-neutral-800/60">
                <img
                  src="/sconcard.png"
                  alt="Consulting & Strategy"
                  className="w-full h-full object-cover object-center rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Button */}
              <div className="pt-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-[#44DE64] group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* Bottom Feature Highlights Row (Multidisciplinary / End-to-End / Impact)  */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 sm:mt-16 w-full bg-white/70 backdrop-blur-sm border border-neutral-200/90 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 shadow-xs"
          >
            {/* Feature 1 */}
            <div className="flex items-start gap-4 md:pr-6">
              <div className="p-3 rounded-xl bg-neutral-100/90 text-neutral-900 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-neutral-950 tracking-tight">
                  A multidisciplinary team
                </h4>
                <p className="text-[13px] text-neutral-600 leading-relaxed mt-0.5">
                  Strategists, designers, engineers, and problem-solvers.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 md:border-l md:border-neutral-200 md:px-8">
              <div className="p-3 rounded-xl bg-neutral-100/90 text-neutral-900 shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-neutral-950 tracking-tight">
                  End-to-end support
                </h4>
                <p className="text-[13px] text-neutral-600 leading-relaxed mt-0.5">
                  From idea to launch and beyond.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 md:border-l md:border-neutral-200 md:pl-8">
              <div className="p-3 rounded-xl bg-neutral-100/90 text-neutral-900 shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-neutral-950 tracking-tight">
                  Real business impact
                </h4>
                <p className="text-[13px] text-neutral-600 leading-relaxed mt-0.5">
                  Solutions that deliver measurable results.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR PROCESS / HOW WE WORK SECTION (Exact match to howwework.png image) */}
      {/* ========================================================================= */}
      <section
        id="process-section"
        className="relative w-full py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#FAF9F6] border-t border-neutral-200/80"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Top Header Row: Left Title & Description | Right Quote & CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left Column: Eyebrow, Display Headline, Narrative Subtitle */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 mb-3.5"
              >
                <span className="w-7 h-[2px] bg-[#44DE64] rounded-full inline-block" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-neutral-800 uppercase select-none">
                  OUR PROCESS
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[44px] sm:text-[58px] md:text-[68px] font-[850] leading-[0.98] tracking-[-0.04em] text-black"
              >
                <span className="block">From Idea</span>
                <span className="block">to Impact</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 sm:mt-5 text-[14px] sm:text-[15.5px] leading-relaxed text-neutral-600 font-normal max-w-[440px]"
              >
                A clear, collaborative process that turns ambitious ideas into real, scalable products.
              </motion.p>
            </div>

            {/* Right Column: Quote + Let's Build Together Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 lg:pb-2"
            >
              <div className="border-l border-neutral-300 pl-4 py-1 text-[13.5px] sm:text-[14px] text-neutral-600 leading-relaxed max-w-[280px]">
                We blend strategy, design, and technology to move fast without losing focus.
              </div>

              <div className="flex items-center gap-3 sm:gap-3.5">
                <button
                  id="process-lets-build-btn"
                  onClick={() => setIsProjectModalOpen(true)}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md group cursor-pointer shrink-0"
                  aria-label="Let's build together"
                >
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
                <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.14em] text-neutral-900 uppercase leading-tight select-none">
                  LET&apos;S BUILD<br />TOGETHER
                </span>
              </div>
            </motion.div>

          </div>

          {/* 5-Column Process Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5 mt-14 sm:mt-16">
            
            {/* Step 01: Discover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProcessStep(processStepsData[0])}
            >
              {/* Header Info */}
              <div className="mb-3">
                <div className="flex items-center text-neutral-500 mb-1">
                  <span className="text-[13px] font-bold text-neutral-950 tracking-wider group-hover:text-[#44DE64] transition-colors">01</span>
                  <div className="relative h-[2px] bg-neutral-200 flex-1 ml-2.5 mr-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.01 }}
                      transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
                      className="h-full bg-[#44DE64] rounded-full shadow-[0_0_8px_rgba(68,222,100,0.8)]"
                    />
                  </div>
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Discover
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-neutral-600 leading-snug mt-1 min-h-[36px]">
                  We understand your goals, users, and opportunities.
                </p>
              </div>

              {/* Step Card Visual */}
              <div className="relative w-full h-[320px] rounded-[22px] bg-[#0A0B0C] border border-neutral-800/90 p-4.5 flex flex-col justify-between overflow-hidden shadow-lg group-hover:border-neutral-700 group-hover:scale-[1.02] transition-all duration-300">
                {/* Background Image */}
                <img
                  src="/discover.png"
                  alt="Discover"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Meta Pill & Tagline */}
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white mb-2.5 shadow-sm group-hover:bg-white/20 transition-colors">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.14em] text-neutral-200 uppercase leading-tight drop-shadow-md">
                    <div>INSIGHTS</div>
                    <div>THAT MATTER</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 02: Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProcessStep(processStepsData[1])}
            >
              {/* Header Info */}
              <div className="mb-3">
                <div className="flex items-center text-neutral-500 mb-1">
                  <span className="text-[13px] font-bold text-neutral-950 tracking-wider group-hover:text-[#44DE64] transition-colors">02</span>
                  <div className="relative h-[2px] bg-neutral-200 flex-1 ml-2.5 mr-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.01 }}
                      transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                      className="h-full bg-[#44DE64] rounded-full shadow-[0_0_8px_rgba(68,222,100,0.8)]"
                    />
                  </div>
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Design
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-neutral-600 leading-snug mt-1 min-h-[36px]">
                  We turn ideas into intuitive, beautiful experiences.
                </p>
              </div>

              {/* Step Card Visual */}
              <div className="relative w-full h-[320px] rounded-[22px] bg-[#0A0B0C] border border-neutral-800/90 p-4.5 flex flex-col justify-between overflow-hidden shadow-lg group-hover:border-neutral-700 group-hover:scale-[1.02] transition-all duration-300">
                {/* Background Image */}
                <img
                  src="/design.png"
                  alt="Design"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Meta Pill & Tagline */}
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white mb-2.5 shadow-sm group-hover:bg-white/20 transition-colors">
                    <PenTool className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.14em] text-neutral-200 uppercase leading-tight drop-shadow-md">
                    <div>DESIGNS</div>
                    <div>PEOPLE LOVE</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 03: Build */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProcessStep(processStepsData[2])}
            >
              {/* Header Info */}
              <div className="mb-3">
                <div className="flex items-center text-neutral-500 mb-1">
                  <span className="text-[13px] font-bold text-neutral-950 tracking-wider group-hover:text-[#44DE64] transition-colors">03</span>
                  <div className="relative h-[2px] bg-neutral-200 flex-1 ml-2.5 mr-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.01 }}
                      transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                      className="h-full bg-[#44DE64] rounded-full shadow-[0_0_8px_rgba(68,222,100,0.8)]"
                    />
                  </div>
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Build
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-neutral-600 leading-snug mt-1 min-h-[36px]">
                  We engineer robust, scalable and future-ready solutions.
                </p>
              </div>

              {/* Step Card Visual */}
              <div className="relative w-full h-[320px] rounded-[22px] bg-[#0A0B0C] border border-neutral-800/90 p-4.5 flex flex-col justify-between overflow-hidden shadow-lg group-hover:border-neutral-700 group-hover:scale-[1.02] transition-all duration-300">
                {/* Background Image */}
                <img
                  src="/build.png"
                  alt="Build"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Meta Pill & Tagline */}
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white mb-2.5 shadow-sm group-hover:bg-white/20 transition-colors">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.14em] text-neutral-200 uppercase leading-tight drop-shadow-md">
                    <div>CLEAN CODE</div>
                    <div>REAL IMPACT</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 04: Test */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProcessStep(processStepsData[3])}
            >
              {/* Header Info */}
              <div className="mb-3">
                <div className="flex items-center text-neutral-500 mb-1">
                  <span className="text-[13px] font-bold text-neutral-950 tracking-wider group-hover:text-[#44DE64] transition-colors">04</span>
                  <div className="relative h-[2px] bg-neutral-200 flex-1 ml-2.5 mr-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.01 }}
                      transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
                      className="h-full bg-[#44DE64] rounded-full shadow-[0_0_8px_rgba(68,222,100,0.8)]"
                    />
                  </div>
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Test
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-neutral-600 leading-snug mt-1 min-h-[36px]">
                  We validate, refine, and ensure everything works.
                </p>
              </div>

              {/* Step Card Visual */}
              <div className="relative w-full h-[320px] rounded-[22px] bg-[#0A0B0C] border border-neutral-800/90 p-4.5 flex flex-col justify-between overflow-hidden shadow-lg group-hover:border-neutral-700 group-hover:scale-[1.02] transition-all duration-300">
                {/* Background Image */}
                <img
                  src="/test.png"
                  alt="Test"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Meta Pill & Tagline */}
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white mb-2.5 shadow-sm group-hover:bg-white/20 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.14em] text-neutral-200 uppercase leading-tight drop-shadow-md">
                    <div>QUALITY</div>
                    <div>YOU CAN TRUST</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 05: Launch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProcessStep(processStepsData[4])}
            >
              {/* Header Info */}
              <div className="mb-3">
                <div className="flex items-center text-neutral-500 mb-1">
                  <span className="text-[13px] font-bold text-neutral-950 tracking-wider group-hover:text-[#44DE64] transition-colors">05</span>
                  <div className="relative h-[2px] bg-neutral-200 flex-1 ml-2.5 mr-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.01 }}
                      transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
                      className="h-full bg-[#44DE64] rounded-full shadow-[0_0_8px_rgba(68,222,100,0.8)]"
                    />
                  </div>
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Launch
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-neutral-600 leading-snug mt-1 min-h-[36px]">
                  We help you go live and support you as you grow.
                </p>
              </div>

              {/* Step Card Visual */}
              <div className="relative w-full h-[320px] rounded-[22px] bg-[#0A0B0C] border border-neutral-800/90 p-4.5 flex flex-col justify-between overflow-hidden shadow-lg group-hover:border-neutral-700 group-hover:scale-[1.02] transition-all duration-300">
                {/* Background Image */}
                <img
                  src="/launch.png"
                  alt="Launch"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Meta Pill & Tagline */}
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white mb-2.5 shadow-sm group-hover:bg-white/20 transition-colors">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.14em] text-neutral-200 uppercase leading-tight drop-shadow-md">
                    <div>IDEAS</div>
                    <div>INTO THE WORLD</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Team & Quality Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 sm:mt-16 pt-6 sm:pt-7 border-t border-neutral-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          >
            {/* Left: Caption */}
            <div className="flex items-center">
              <p className="text-xs sm:text-[13px] font-medium text-neutral-700 leading-snug">
                A team of strategists, designers, and engineers, ready to build your next success.
              </p>
            </div>

            {/* Right: Green Dot + Simple Process Statement */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#44DE64] inline-block" />
              <span className="text-[10px] sm:text-[11.5px] font-bold tracking-[0.16em] text-neutral-600 uppercase select-none">
                SIMPLE PROCESS. EXTRAORDINARY RESULTS.
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECH STACK SECTION (Exact match to techstackimg.png reference image)  */}
      {/* ========================================================================= */}
      <section
        id="tech-stack-section"
        className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#FAF9F6] border-t border-neutral-200/80 overflow-hidden"
      >
        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          
          {/* Top Row: Left Content Column & Right Exploded Visual + Callouts Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Description & Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex flex-col items-start"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-6">
                <span className="w-6 h-[2px] bg-[#44DE64] rounded-full inline-block" />
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-neutral-800 uppercase select-none">
                  TECHNOLOGY
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[38px] sm:text-[52px] lg:text-[60px] font-[850] leading-[1.04] tracking-[-0.035em] text-black">
                Powerful<br />
                Technology.<br />
                Real Results<span className="text-[#44DE64]">.</span>
              </h2>

              {/* Description */}
              <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-neutral-600 font-normal max-w-md">
                We choose the right tools for the right problems — combining modern technology, best practices, and deep expertise to build scalable, secure, and future-ready products.
              </p>

              {/* Action Button */}
              <div className="mt-7 sm:mt-9">
                <button
                  id="tech-stack-cta-btn"
                  onClick={() => setIsProjectModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white text-[14px] font-semibold hover:bg-neutral-800 transition-all cursor-pointer shadow-md hover:shadow-lg hover:scale-105 active:scale-95 group"
                >
                  <span>Our Tech Stack</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right Stage: Exploded Isometric Image + Annotated Callout Items */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 relative min-h-[460px] sm:min-h-[540px] flex items-center justify-center py-4"
            >
              <div className="relative w-full max-w-[920px] mx-auto flex items-center justify-center">
                
                {/* 3D Exploded Isometric Central Stack Graphic */}
                <div className="relative z-10 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] max-w-full aspect-square flex items-center justify-center select-none">
                  {/* Subtle Ambient Radial Glow */}
                  <div className="absolute inset-0 bg-[#44DE64]/15 rounded-full blur-[75px] -z-10 pointer-events-none" />
                  <img
                    src="/techstackimg.png"
                    alt="DevPals Technology Stack Architecture"
                    className="w-full h-auto object-contain filter drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Left Annotations (Frontend, Backend, Infrastructure) */}
                <div className="hidden md:flex flex-col justify-between absolute left-0 top-0 bottom-0 z-20 py-4 w-[220px] lg:w-[250px] pointer-events-auto">
                  {/* 1. Frontend */}
                  <div
                    onClick={() => setSelectedTechCategory(techCategoriesData[0])}
                    className="group cursor-pointer flex flex-col items-start bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-neutral-200/50 hover:bg-white hover:border-[#44DE64]/40 hover:shadow-md transition-all relative"
                  >
                    <h4 className="text-[15px] font-bold text-black group-hover:text-[#22C55E] transition-colors flex items-center gap-1.5">
                      Frontend
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium leading-snug mt-0.5">
                      Next.js, React<br />
                      TypeScript, Tailwind
                    </p>
                    {/* Connecting line pointing towards top layer */}
                    <div className="absolute right-[-45px] lg:right-[-65px] top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[1px] bg-neutral-300 pointer-events-none group-hover:bg-[#44DE64] transition-colors">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#44DE64]" />
                    </div>
                  </div>

                  {/* 2. Backend */}
                  <div
                    onClick={() => setSelectedTechCategory(techCategoriesData[1])}
                    className="group cursor-pointer flex flex-col items-start bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-neutral-200/50 hover:bg-white hover:border-[#44DE64]/40 hover:shadow-md transition-all relative"
                  >
                    <h4 className="text-[15px] font-bold text-black group-hover:text-[#22C55E] transition-colors flex items-center gap-1.5">
                      Backend
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium leading-snug mt-0.5">
                      Node.js, Python<br />
                      PostgreSQL, Supabase
                    </p>
                    {/* Connecting line pointing towards core green layer */}
                    <div className="absolute right-[-45px] lg:right-[-65px] top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[1px] bg-neutral-300 pointer-events-none group-hover:bg-[#44DE64] transition-colors">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#44DE64]" />
                    </div>
                  </div>

                  {/* 3. Infrastructure */}
                  <div
                    onClick={() => setSelectedTechCategory(techCategoriesData[2])}
                    className="group cursor-pointer flex flex-col items-start bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-neutral-200/50 hover:bg-white hover:border-[#44DE64]/40 hover:shadow-md transition-all relative"
                  >
                    <h4 className="text-[15px] font-bold text-black group-hover:text-[#22C55E] transition-colors flex items-center gap-1.5">
                      Infrastructure
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium leading-snug mt-0.5">
                      AWS, Vercel<br />
                      Docker, Kubernetes
                    </p>
                    {/* Connecting line pointing towards bottom layer */}
                    <div className="absolute right-[-45px] lg:right-[-65px] top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[1px] bg-neutral-300 pointer-events-none group-hover:bg-[#44DE64] transition-colors">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#44DE64]" />
                    </div>
                  </div>
                </div>

                {/* Right Annotations (AI & Data, Mobile, Integrations) */}
                <div className="hidden md:flex flex-col justify-between absolute right-0 top-0 bottom-0 z-20 py-4 w-[220px] lg:w-[250px] pointer-events-auto">
                  {/* 4. AI & Data */}
                  <div
                    onClick={() => setSelectedTechCategory(techCategoriesData[3])}
                    className="group cursor-pointer flex flex-col items-start bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-neutral-200/50 hover:bg-white hover:border-[#44DE64]/40 hover:shadow-md transition-all relative"
                  >
                    <h4 className="text-[15px] font-bold text-black group-hover:text-[#22C55E] transition-colors flex items-center gap-1.5">
                      AI &amp; Data
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium leading-snug mt-0.5">
                      OpenAI, LangChain<br />
                      Pinecone, TensorFlow
                    </p>
                    {/* Connecting line pointing towards top layer */}
                    <div className="absolute left-[-45px] lg:left-[-65px] top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[1px] bg-neutral-300 pointer-events-none group-hover:bg-[#44DE64] transition-colors">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#44DE64]" />
                    </div>
                  </div>

                  {/* 5. Mobile */}
                  <div
                    onClick={() => setSelectedTechCategory(techCategoriesData[4])}
                    className="group cursor-pointer flex flex-col items-start bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-neutral-200/50 hover:bg-white hover:border-[#44DE64]/40 hover:shadow-md transition-all relative"
                  >
                    <h4 className="text-[15px] font-bold text-black group-hover:text-[#22C55E] transition-colors flex items-center gap-1.5">
                      Mobile
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium leading-snug mt-0.5">
                      React Native<br />
                      Flutter
                    </p>
                    {/* Connecting line pointing towards middle layer */}
                    <div className="absolute left-[-45px] lg:left-[-65px] top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[1px] bg-neutral-300 pointer-events-none group-hover:bg-[#44DE64] transition-colors">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#44DE64]" />
                    </div>
                  </div>

                  {/* 6. Integrations */}
                  <div
                    onClick={() => setSelectedTechCategory(techCategoriesData[5])}
                    className="group cursor-pointer flex flex-col items-start bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-neutral-200/50 hover:bg-white hover:border-[#44DE64]/40 hover:shadow-md transition-all relative"
                  >
                    <h4 className="text-[15px] font-bold text-black group-hover:text-[#22C55E] transition-colors flex items-center gap-1.5">
                      Integrations
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium leading-snug mt-0.5">
                      APIs, Webhooks<br />
                      Third-party Services
                    </p>
                    {/* Connecting line pointing towards bottom layer */}
                    <div className="absolute left-[-45px] lg:left-[-65px] top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[1px] bg-neutral-300 pointer-events-none group-hover:bg-[#44DE64] transition-colors">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#44DE64]" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile View Stack Grid (For smaller screens where overlay positions stack) */}
              <div className="grid grid-cols-2 gap-3 mt-6 md:hidden w-full">
                {techCategoriesData.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedTechCategory(cat)}
                    className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm cursor-pointer active:scale-95 transition-transform"
                  >
                    <h4 className="text-xs font-bold text-black">{cat.title}</h4>
                    <p className="text-[11px] text-neutral-500 mt-1 leading-tight">{cat.subtitle.join(', ')}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* Bottom Card Banner: Built for What's Next & Stats & Data Center Image    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-14 sm:mt-20 w-full bg-black text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl relative border border-neutral-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <h3 className="text-[32px] sm:text-[40px] font-bold leading-[1.08] tracking-[-0.025em] text-white">
                  Built for<br />
                  What's Next
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-[14px] text-neutral-400 font-normal leading-[1.6] max-w-sm">
                  We stay ahead of the curve, continuously exploring new technologies to create smarter, faster, and more impactful solutions.
                </p>
              </div>

              {/* Center Column: 4 Stat Metrics with Divider Borders */}
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-neutral-800 py-2">
                {/* Metric 1 */}
                <div className="flex flex-col items-start sm:px-4 lg:px-5">
                  <div className="w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center mb-3 bg-neutral-900/50">
                    <Sparkles className="w-4 h-4 text-[#44DE64]" />
                  </div>
                  <span className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-white leading-none">
                    50+
                  </span>
                  <span className="mt-1.5 text-[11px] sm:text-[12px] text-neutral-400 font-medium leading-tight">
                    Technologies<br />Used
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-start sm:px-4 lg:px-5">
                  <div className="w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center mb-3 bg-neutral-900/50">
                    <Target className="w-4 h-4 text-[#44DE64]" />
                  </div>
                  <span className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-white leading-none">
                    99.9%
                  </span>
                  <span className="mt-1.5 text-[11px] sm:text-[12px] text-neutral-400 font-medium leading-tight">
                    Uptime<br />Focus
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-start sm:px-4 lg:px-5">
                  <div className="w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center mb-3 bg-neutral-900/50">
                    <Lock className="w-4 h-4 text-[#44DE64]" />
                  </div>
                  <span className="text-[16px] sm:text-[18px] font-bold text-white leading-tight">
                    Enterprise
                  </span>
                  <span className="mt-1 text-[11px] sm:text-[12px] text-neutral-400 font-medium leading-tight">
                    Grade<br />Security
                  </span>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col items-start sm:px-4 lg:px-5">
                  <div className="w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center mb-3 bg-neutral-900/50">
                    <Globe className="w-4 h-4 text-[#44DE64]" />
                  </div>
                  <span className="text-[16px] sm:text-[18px] font-bold text-white leading-tight">
                    Global
                  </span>
                  <span className="mt-1 text-[11px] sm:text-[12px] text-neutral-400 font-medium leading-tight">
                    Deployment
                  </span>
                </div>
              </div>

              {/* Right Column: Server Room Visual with Stacked Text */}
              <div className="lg:col-span-3 h-[180px] sm:h-[200px] lg:h-[220px] relative rounded-2xl overflow-hidden border border-neutral-800 group">
                {/* Background Server Room Image */}
                <img
                  src="/server_room.png"
                  alt="Infrastructure & Data Center"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                {/* Right Stacked Text List */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-300/80 uppercase select-none">
                  <span className="hover:text-white transition-colors">IDEAS</span>
                  <span className="hover:text-white transition-colors">CODE</span>
                  <span className="hover:text-white transition-colors">INFRASTRUCTURE</span>
                  <span className="hover:text-white transition-colors">PEOPLE</span>
                  <span className="text-[#44DE64] font-bold">A BRIGHTER TOMORROW</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED WORK / PROJECTS SECTION (Exact match to project.png image)   */}
      {/* ========================================================================= */}
      <section
        id="projects-section"
        className="relative w-full py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#FAF9F6] border-t border-neutral-200/80"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Main Showcase Grid (Left Headline & Metrics + Right Featured Showcase) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Eyebrow, Stacked Headline, Description, CTA, Stats, Nav */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div>
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 mb-3"
                >
                  <span className="w-7 h-[2px] bg-[#44DE64] rounded-full inline-block" />
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-neutral-800 uppercase select-none">
                    FEATURED WORK
                  </span>
                </motion.div>

                {/* Display Stacked Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[44px] sm:text-[58px] md:text-[68px] font-[850] leading-[0.98] tracking-[-0.04em] text-black"
                >
                  <span className="block">Ideas</span>
                  <span className="block">Brought</span>
                  <span className="block">to Life</span>
                </motion.h2>

                {/* Narrative Copy */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-[14px] sm:text-[15px] leading-relaxed text-neutral-600 font-normal max-w-[340px]"
                >
                  We partner with ambitious businesses to design, build, and scale digital products that create real-world impact.
                </motion.p>

                {/* View All Projects Button */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6"
                >
                  <button
                    id="view-all-projects-button"
                    onClick={() => setIsProjectModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white text-[13.5px] sm:text-[14px] font-semibold rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.26)] hover:bg-[#1A1A1A] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    <span>View All Projects</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      strokeWidth={2.4}
                    />
                  </button>
                </motion.div>
              </div>

              {/* Stats & Carousel Navigation */}
              <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-200/80">
                {/* 3 Metrics Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-neutral-950 leading-none">
                      50+
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-medium text-neutral-600 leading-tight mt-1">
                      Projects<br />Delivered
                    </div>
                  </div>

                  <div>
                    <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-neutral-950 leading-none">
                      20+
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-medium text-neutral-600 leading-tight mt-1">
                      Global<br />Clients
                    </div>
                  </div>

                  <div>
                    <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-neutral-950 leading-none">
                      95%
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-medium text-neutral-600 leading-tight mt-1">
                      Client<br />Satisfaction
                    </div>
                  </div>
                </div>

                {/* Arrow Controls & Slide Counter */}
                <div className="mt-8 flex items-center gap-5 text-sm font-semibold text-neutral-800">
                  <button
                    onClick={handlePrevProject}
                    aria-label="Previous project"
                    className="p-2 rounded-full hover:bg-neutral-200 text-neutral-600 hover:text-black transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold tracking-widest text-neutral-500">
                    0{currentProjectIndex + 1} / 0{projectsData.length}
                  </span>
                  <button
                    onClick={handleNextProject}
                    aria-label="Next project"
                    className="p-2 rounded-full hover:bg-neutral-200 text-neutral-600 hover:text-black transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Showcase (Project 01: WALLETT / FINTECH) */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeShowcaseProject.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full bg-[#0C0D0E] rounded-3xl overflow-hidden border border-neutral-800 shadow-xl group"
              >
                {/* Upper Dark Visual Mockup Area */}
                <div
                  onClick={() => setSelectedProject(activeShowcaseProject)}
                  className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer overflow-hidden bg-gradient-to-br from-[#121316] via-[#0C0D0E] to-black"
                >
                  {/* Top Badges */}
                  <div className="flex items-center justify-between z-20">
                    <div className="flex items-center gap-2 text-neutral-300 font-bold text-xs tracking-wider">
                      <span>{activeShowcaseProject.num}</span>
                      <span className="w-6 h-[1px] bg-neutral-600" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[10.5px] font-bold tracking-widest text-neutral-300 uppercase">
                      {activeShowcaseProject.category}
                    </span>
                  </div>

                  {/* High-Fidelity 3D Laptop + Phone Interactive Mockup */}
                  <div className="relative w-full flex items-center justify-center py-6 sm:py-8 z-10">
                    {/* Laptop Screen & Interface */}
                    <div className="relative w-full max-w-[500px] bg-[#0A0A0B] rounded-xl border border-neutral-700/80 shadow-2xl p-3 sm:p-4 transform group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Top Bar of Wallett App */}
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#44DE64]" />
                          <span className="font-bold text-white tracking-tight">Wallett</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400 text-[10px]">
                          <span>Dashboard</span>
                          <span>Cards</span>
                          <span>Analytics</span>
                        </div>
                      </div>

                      {/* Main Dashboard Layout */}
                      <div className="mt-3 grid grid-cols-12 gap-3 items-center">
                        {/* Left headline */}
                        <div className="col-span-5 text-left">
                          <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                            Your Finances<br />In Your Hands
                          </h4>
                          <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-1">
                            Simple. Secure. Smarter.
                          </p>
                          <div className="mt-3">
                            <span className="inline-block px-3 py-1 bg-[#44DE64] text-black text-[9px] font-bold rounded-full shadow-md">
                              Get Started
                            </span>
                          </div>
                        </div>

                        {/* Right Area Chart Card */}
                        <div className="col-span-7 bg-[#141619] rounded-lg p-2.5 border border-neutral-800">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-[9px] text-neutral-400">Total Balance</span>
                            <span className="text-[8px] font-semibold text-[#44DE64]">+12.5% ↗</span>
                          </div>
                          <div className="text-sm sm:text-base font-bold text-white">$24,680</div>

                          {/* Glowing SVG Curve Graph */}
                          <div className="w-full h-12 mt-1">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none">
                              <path
                                d="M0 32 Q 20 35, 35 22 T 70 18 T 100 8"
                                fill="none"
                                stroke="#44DE64"
                                strokeWidth="2.5"
                              />
                              <path
                                d="M0 32 Q 20 35, 35 22 T 70 18 T 100 8 L 100 40 L 0 40 Z"
                                fill="url(#greenGrad)"
                                opacity="0.25"
                              />
                              <defs>
                                <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#44DE64" />
                                  <stop offset="100%" stopColor="#44DE64" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* 4 Bottom Stats */}
                      <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
                        <div className="p-1 rounded bg-[#15171A] border border-neutral-800/60">
                          <div className="text-[7.5px] text-neutral-400">Income</div>
                          <div className="text-[9px] font-bold text-white">$8,610</div>
                        </div>
                        <div className="p-1 rounded bg-[#15171A] border border-neutral-800/60">
                          <div className="text-[7.5px] text-neutral-400">Expenses</div>
                          <div className="text-[9px] font-bold text-white">$2,210</div>
                        </div>
                        <div className="p-1 rounded bg-[#15171A] border border-neutral-800/60">
                          <div className="text-[7.5px] text-neutral-400">Savings</div>
                          <div className="text-[9px] font-bold text-white">$3,890</div>
                        </div>
                        <div className="p-1 rounded bg-[#15171A] border border-neutral-800/60">
                          <div className="text-[7.5px] text-neutral-400">Investments</div>
                          <div className="text-[9px] font-bold text-white">$14,230</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Mobile Companion Mockup */}
                    <div className="hidden sm:block absolute right-2 sm:right-6 -bottom-2 w-[140px] bg-[#0A0A0B] rounded-[20px] p-2 border-2 border-neutral-700 shadow-2xl transform rotate-[6deg] group-hover:rotate-0 transition-transform duration-500 z-30">
                      <div className="w-8 h-1.5 bg-black rounded-full mx-auto mb-1.5" />
                      <div className="p-2 bg-neutral-950 rounded-xl text-left border border-neutral-800/80">
                        <div className="text-[8px] text-neutral-400">Good Morning</div>
                        <div className="text-[11px] font-bold text-white">$24,680</div>
                        <div className="mt-2 flex justify-between text-[7px] text-neutral-300">
                          <span className="p-1 bg-neutral-900 rounded">Send</span>
                          <span className="p-1 bg-neutral-900 rounded">Receive</span>
                          <span className="p-1 bg-neutral-900 rounded">More</span>
                        </div>
                        <div className="mt-2 text-[7.5px] font-semibold text-neutral-400">Recent Activity</div>
                        <div className="text-[7px] text-neutral-300 flex justify-between mt-1">
                          <span>Spotify</span>
                          <span className="text-red-400">-$9.99</span>
                        </div>
                        <div className="text-[7px] text-neutral-300 flex justify-between mt-0.5">
                          <span>Figma</span>
                          <span className="text-red-400">-$12.00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle hover prompt */}
                  <div className="z-20 text-right">
                    <span className="text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase tracking-widest">
                      Click to explore case study ↗
                    </span>
                  </div>
                </div>

                {/* Bottom White Meta Panel (4 Columns + Arrow Button) */}
                <div className="bg-white border-t border-neutral-200 p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-center">
                  {/* Title / Description */}
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                      {activeShowcaseProject.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                      {activeShowcaseProject.subtitle}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="lg:col-span-3 lg:border-l lg:border-neutral-200 lg:pl-6">
                    <h4 className="text-[10.5px] font-bold text-neutral-900 uppercase tracking-wider mb-1">
                      CHALLENGE
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {activeShowcaseProject.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="lg:col-span-3 lg:border-l lg:border-neutral-200 lg:pl-6">
                    <h4 className="text-[10.5px] font-bold text-neutral-900 uppercase tracking-wider mb-1">
                      SOLUTION
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {activeShowcaseProject.solution}
                    </p>
                  </div>

                  {/* Impact + Arrow Action */}
                  <div className="lg:col-span-3 lg:border-l lg:border-neutral-200 lg:pl-6 flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-[10.5px] font-bold text-neutral-900 uppercase tracking-wider mb-1">
                        IMPACT
                      </h4>
                      <p className="text-xs font-semibold text-neutral-900">
                        {activeShowcaseProject.impact}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(activeShowcaseProject)}
                      aria-label="Open case study"
                      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 hover:bg-[#44DE64] hover:text-black transition-all duration-300 cursor-pointer shadow-md group-hover:scale-105"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* Bottom Grid: Projects 02 (MediCare+) & 03 (ShopNext)                       */}
          {/* ========================================================================= */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 02: MediCare+ (HEALTHCARE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setSelectedProject(projectsData[1])}
              className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden grid grid-cols-1 sm:grid-cols-2 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Left Info Column */}
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-500 font-bold text-xs">
                      <span>02</span>
                      <span className="w-5 h-[1px] bg-neutral-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                      HEALTHCARE
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mt-6">
                    MediCare+
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                    A digital healthcare platform connecting patients and doctors.
                  </p>
                </div>

                <div className="mt-8">
                  <div className="w-10 h-10 rounded-full border border-neutral-300 group-hover:border-black group-hover:bg-black group-hover:text-white text-neutral-900 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Right Visual Column (Dark Textured Phone Mockup) */}
              <div className="relative bg-[#0C0D0E] p-6 flex items-center justify-center overflow-hidden min-h-[240px]">
                <div className="relative w-[140px] h-[190px] bg-neutral-900 rounded-[22px] p-2 border-[2px] border-neutral-700 shadow-2xl transform rotate-[-8deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                  <div className="w-8 h-1.5 bg-black rounded-full mx-auto mb-1.5" />
                  <div className="w-full h-[150px] bg-white rounded-xl p-2.5 flex flex-col justify-between relative overflow-hidden">
                    <div className="text-[7.5px] font-bold text-neutral-900">MediCare+</div>
                    <div className="text-left my-auto">
                      <div className="text-[10px] font-bold text-neutral-900 leading-tight">Better</div>
                      <div className="text-[10px] font-bold text-neutral-900 leading-tight">Care</div>
                      <div className="text-[10px] font-bold text-neutral-900 leading-tight">Brighter</div>
                      <div className="text-[10px] font-bold text-[#44DE64] leading-tight">Lives</div>
                    </div>
                    {/* Glowing Green Sphere Asset */}
                    <div className="absolute right-0 bottom-0 w-12 h-12 rounded-full bg-[#44DE64] opacity-90 blur-xs shadow-md" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 03: ShopNext (E-COMMERCE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setSelectedProject(projectsData[2])}
              className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden grid grid-cols-1 sm:grid-cols-2 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Left Info Column */}
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-500 font-bold text-xs">
                      <span>03</span>
                      <span className="w-5 h-[1px] bg-neutral-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                      E-COMMERCE
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mt-6">
                    ShopNext
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                    A next-generation e-commerce platform built for scale.
                  </p>
                </div>

                <div className="mt-8">
                  <div className="w-10 h-10 rounded-full border border-neutral-300 group-hover:border-black group-hover:bg-black group-hover:text-white text-neutral-900 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Right Visual Column (Streetwear portrait + Dark E-Commerce UI) */}
              <div className="relative bg-[#0C0D0E] p-6 flex items-center justify-between overflow-hidden min-h-[240px]">
                {/* Hooded Silhouette Profile */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-16 bg-neutral-900 rounded-t-full border border-neutral-700 shadow-md relative overflow-hidden flex items-center justify-center">
                    <div className="w-8 h-10 bg-neutral-950 rounded-full mt-2" />
                  </div>
                  <div className="w-16 h-12 bg-neutral-950 rounded-t-md" />
                </div>

                {/* E-Commerce UI Representation */}
                <div className="z-10 text-right">
                  <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    ShopNext
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Next<br />Generation<br />Shopping
                  </div>
                  {/* Product Cards Row */}
                  <div className="mt-2.5 flex items-center justify-end gap-1.5">
                    <div className="w-6 h-7 rounded bg-neutral-800 border border-neutral-700" />
                    <div className="w-6 h-7 rounded bg-neutral-800 border border-neutral-700" />
                    <div className="w-6 h-7 rounded bg-neutral-800 border border-neutral-700" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT SECTION (Exact match to contactsection.png reference image)     */}
      {/* ========================================================================= */}
      <section
        id="contact-section"
        className="relative w-full bg-[#FAF9F6] border-t border-neutral-200/90 pt-16 sm:pt-24 md:pt-28 pb-0 overflow-hidden"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          
          {/* Main 2-Column Split: Headline & Social Links (Left) & Contact Form (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-16 sm:pb-20">
            
            {/* Left Column: Eyebrow, Display Headline, Paragraph, Contact Details, and Social Links */}
            <div className="lg:col-span-6 flex flex-col justify-between z-10 space-y-8">
              <div>
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 mb-4 sm:mb-5"
                >
                  <span className="w-8 h-[2.5px] bg-[#44DE64] rounded-full inline-block" />
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-neutral-800 uppercase select-none">
                    LET&apos;S WORK TOGETHER
                  </span>
                </motion.div>

                {/* Display Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-neutral-950 leading-[1.04]"
                >
                  Have an idea?<br />
                  Let&apos;s make<br />
                  it real<span className="text-[#44DE64]">.</span>
                </motion.h2>

                {/* Subtitle Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-md font-normal"
                >
                  Tell us about your project, and we&apos;ll get back to you within 24 hours. No obligation, just a conversation about possibilities.
                </motion.p>
              </div>

              {/* Direct Contact Info & Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-6 border-t border-neutral-200/90 space-y-6"
              >
                {/* Contact Direct Details */}
                <div className="space-y-3.5 text-sm text-neutral-700">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-4.5 h-4.5 text-[#44DE64]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">Email Us</p>
                      <a href="mailto:hello@devpals.com" className="font-semibold text-neutral-900 text-sm sm:text-base hover:text-[#44DE64] transition-colors">
                        hello@devpals.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-4.5 h-4.5 text-[#44DE64]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">Call Us</p>
                      <a href="tel:+18005550199" className="font-semibold text-neutral-900 text-sm sm:text-base hover:text-[#44DE64] transition-colors">
                        +1 (800) 555-0199
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-neutral-800 uppercase tracking-widest mb-3.5">Follow & Connect</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-[#0A66C2] hover:scale-105 transition-all duration-200 shadow-sm"
                    >
                      <Linkedin className="w-4 h-4 text-[#44DE64] group-hover:text-white transition-colors" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-[#E4405F] hover:scale-105 transition-all duration-200 shadow-sm"
                    >
                      <Instagram className="w-4 h-4 text-[#44DE64] group-hover:text-white transition-colors" />
                      <span>Instagram</span>
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-[#FF0000] hover:scale-105 transition-all duration-200 shadow-sm"
                    >
                      <Youtube className="w-4 h-4 text-[#44DE64] group-hover:text-white transition-colors" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Interactive Contact Form Card */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full bg-white rounded-[2.5rem] p-7 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-neutral-200/90"
              >
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1 font-normal">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form
                  id="inline-contact-form"
                  onSubmit={handleContactSubmit}
                  className="space-y-4"
                >
                  {/* 1. Name Input */}
                  <div className="relative rounded-2xl border border-neutral-300 bg-neutral-50/50 px-4 py-3.5 flex items-center justify-between focus-within:border-black focus-within:bg-white focus-within:shadow-xs transition-all">
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full bg-transparent text-sm sm:text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none"
                    />
                    <User className="w-5 h-5 text-neutral-400 shrink-0 ml-3 pointer-events-none" />
                  </div>

                  {/* 2. Email Input */}
                  <div className="relative rounded-2xl border border-neutral-300 bg-neutral-50/50 px-4 py-3.5 flex items-center justify-between focus-within:border-black focus-within:bg-white focus-within:shadow-xs transition-all">
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="Your Email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full bg-transparent text-sm sm:text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none"
                    />
                    <Mail className="w-5 h-5 text-neutral-400 shrink-0 ml-3 pointer-events-none" />
                  </div>

                  {/* 3. Project Description Textarea */}
                  <div className="relative rounded-2xl border border-neutral-300 bg-neutral-50/50 px-4 py-3.5 flex items-start justify-between focus-within:border-black focus-within:bg-white focus-within:shadow-xs transition-all">
                    <textarea
                      id="contact-project-input"
                      rows={4}
                      required
                      placeholder="Tell us about your project"
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-transparent text-sm sm:text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none resize-none"
                    />
                    <FileText className="w-5 h-5 text-neutral-400 shrink-0 ml-3 mt-1 pointer-events-none" />
                  </div>

                  {/* Submit Pill Button */}
                  <div className="pt-2">
                    {isContactSubmitted ? (
                      <div
                        id="contact-success-banner"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold shadow-xs w-full"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#44DE64]" />
                        <span>Thank you! We will reach out within 24 hours.</span>
                      </div>
                    ) : (
                      <button
                        id="contact-submit-button"
                        type="submit"
                        className="w-full rounded-full bg-black text-white hover:bg-neutral-800 active:scale-98 transition-all duration-200 flex items-center justify-between pl-6 pr-2 py-2.5 shadow-md group cursor-pointer"
                      >
                        <span className="font-semibold text-sm sm:text-[15px] tracking-tight">Send Message</span>
                        <div className="w-10 h-10 rounded-full bg-[#44DE64] text-black flex items-center justify-center group-hover:scale-105 group-hover:bg-[#38c454] transition-all ml-4 shrink-0 shadow-sm">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE AGENCY FOOTER (Dark Theme)                                  */}
        {/* ========================================================================= */}
        <footer className="w-full bg-[#0B0C0E] text-white border-t border-neutral-800/80 pt-16 sm:pt-20 pb-10 overflow-hidden">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            
            {/* Top Footer Section: Grid Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800/80">
              
              {/* Brand Column (Lg: col-span-4) */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
                <div>
                  {/* Brand Logo */}
                  <a
                    href="#hero-section"
                    className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity mb-3"
                  >
                    <span className="text-[#44DE64] text-2xl font-black leading-none">✳</span>
                    <span>DevPals</span>
                  </a>

                  {/* Brand Tagline & Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
                    Turning ideas into high-impact digital products. We build web platforms, mobile apps, and AI solutions for visionaries worldwide.
                  </p>

                  {/* Availability Badge */}
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium mt-4">
                    <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-pulse" />
                    <span>Accepting Q3 & Q4 Projects</span>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Connect With Us</p>
                  <div className="flex items-center gap-2.5">
                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-[#24292F] hover:text-white hover:border-[#24292F] hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links (Lg: col-span-2) */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                  <li>
                    <a href="#about-us-section" className="hover:text-[#44DE64] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects-section" className="hover:text-[#44DE64] transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#tech-stack-section" className="hover:text-[#44DE64] transition-colors">
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a href="#process-section" className="hover:text-[#44DE64] transition-colors">
                      Our Process
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="hover:text-[#44DE64] transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Column (Lg: col-span-3) */}
              <div className="lg:col-span-3 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Our Services</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      Web Application Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      iOS & Android Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      AI Agents & Machine Learning
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      UI/UX & Product Design
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      Cloud & Enterprise Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-[#44DE64] transition-colors">
                      Technical Strategy & Consulting
                    </a>
                  </li>
                </ul>
              </div>

              {/* Direct Contact Info (Lg: col-span-3) */}
              <div className="lg:col-span-3 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get in Touch</h4>
                <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#44DE64] shrink-0 mt-0.5" />
                    <span>Dubova, Romania</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#44DE64] shrink-0" />
                    <a href="mailto:hello@devpals.com" className="hover:text-white transition-colors">
                      hello@devpals.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#44DE64] shrink-0" />
                    <a href="tel:+18005550199" className="hover:text-white transition-colors">
                      +1 (800) 555-0199
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-500 pt-1">
                    <Clock className="w-4 h-4 text-neutral-500 shrink-0" />
                    <span className="text-xs">Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Newsletter Subscription Row Banner */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-xl text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#44DE64]" />
                  <span className="text-xs font-bold text-[#44DE64] uppercase tracking-wider">Product Insights</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Stay updated on digital product trends
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
                  Subscribe to our monthly tech newsletter for architecture guides and case studies. No spam.
                </p>
              </div>

              <div className="w-full lg:w-auto min-w-[300px] sm:min-w-[380px]">
                {isNewsletterSubmitted ? (
                  <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#44DE64]" />
                    <span>Subscribed! Check your inbox soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="w-full bg-black/60 border border-neutral-700/80 rounded-full px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#44DE64] transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-full bg-[#44DE64] text-black font-semibold text-xs sm:text-sm hover:bg-[#38c454] active:scale-95 transition-all shrink-0 cursor-pointer shadow-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom Bar: Copyright, Legal Links, and Back-to-Top */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
              {/* Copyright */}
              <div>
                © {new Date().getFullYear()} DevPals Studio Inc. All rights reserved.
              </div>

              {/* Legal & Policy Links */}
              <div className="flex items-center gap-6">
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="hover:text-white transition-colors">
                  Cookie Settings
                </a>
              </div>

              {/* Smooth Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#44DE64]" />
              </button>
            </div>

          </div>
        </footer>
      </section>

      {/* ========================================================================= */}
      {/* 5. MODALS (Project Inquiry, Project Case Study, Service Details, About)    */}
      {/* ========================================================================= */}
      
      {/* Start / Discuss a Project Modal */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div
            id="project-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsProjectModalOpen(false);
            }}
          >
            <motion.div
              id="project-modal"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-100 relative"
            >
              <button
                id="modal-close-button"
                onClick={() => setIsProjectModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div id="modal-success-state" className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-[#D96B27] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-neutral-600">
                    Thanks for reaching out. The DevPals team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-[#D96B27] text-xs font-semibold mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Start Your Journey</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
                      Discuss Your Project
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Tell us about your requirements and let&apos;s engineer something extraordinary.
                    </p>
                  </div>

                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Work Email
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="message-input" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        id="message-input"
                        rows={3}
                        required
                        placeholder="Describe your goals, timeline, and key challenges..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-sm resize-none"
                      />
                    </div>

                    <button
                      id="submit-project-button"
                      type="submit"
                      className="w-full mt-2 py-3 px-4 rounded-xl bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="case-study-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              id="case-study-modal"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-2xl bg-[#0C0D0E] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="case-study-close"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#44DE64] tracking-widest uppercase">
                  Case Study {selectedProject.num} / {selectedProject.category}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-neutral-300 mb-6">
                {selectedProject.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 mb-6">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg sm:text-xl font-extrabold text-[#44DE64]">{m.val}</div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution details */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <h4 className="font-bold text-neutral-200 uppercase tracking-wider text-xs mb-1">
                    The Challenge
                  </h4>
                  <p className="text-neutral-400 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <h4 className="font-bold text-neutral-200 uppercase tracking-wider text-xs mb-1">
                    Our Engineered Solution
                  </h4>
                  <p className="text-neutral-400 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setIsProjectModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-[#44DE64] transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <span>Build Something Similar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Service Detail Deep-Dive Modal */}
      <AnimatePresence>
        {selectedService && (
          <div
            id="service-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedService(null);
            }}
          >
            <motion.div
              id="service-modal"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-lg bg-[#0C0D0E] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-800 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="service-modal-close"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-bold text-[#44DE64] tracking-widest uppercase">
                  Service {selectedService.num}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {selectedService.title}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-[#44DE64] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                    Key Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setIsProjectModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-[#44DE64] transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Learn More About Us Modal */}
      <AnimatePresence>
        {isAboutModalOpen && (
          <div
            id="about-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsAboutModalOpen(false);
            }}
          >
            <motion.div
              id="about-modal"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-100 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="about-modal-close-button"
                onClick={() => setIsAboutModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#44DE64]" />
                  <span>Our Philosophy & Principles</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
                  Engineering the Next Era
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  How we help visionary teams create world-class products.
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-700">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-neutral-900">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-0.5">High-Velocity Craftsmanship</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      We iterate rapidly from discovery to production-ready software without sacrificing visual finesse or code quality.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-neutral-900">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-0.5">Global Product Scale</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Architecting distributed, secure web and mobile applications capable of handling millions of global interactions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-neutral-900">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-0.5">Partnership Driven</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      We integrate directly with your product leadership as dedicated technical partners and growth catalysts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => {
                    setIsAboutModalOpen(false);
                    setIsProjectModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-xs sm:text-sm hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Process Step Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProcessStep && (
          <div
            id="process-step-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProcessStep(null);
            }}
          >
            <motion.div
              id="process-step-modal"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-lg bg-[#0C0D0E] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="process-modal-close-button"
                onClick={() => setSelectedProcessStep(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedProcessStep.image && (
                <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 border border-neutral-800 relative">
                  <img
                    src={selectedProcessStep.image}
                    alt={selectedProcessStep.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent opacity-60" />
                </div>
              )}

              <div className="flex items-center gap-2 text-xs font-bold text-[#44DE64] uppercase tracking-wider mb-2">
                <span>Phase {selectedProcessStep.num}</span>
                <span>•</span>
                <span className="text-neutral-400 font-normal">{selectedProcessStep.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {selectedProcessStep.title}
              </h3>

              <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-bold text-neutral-300 tracking-wider mb-4">
                {selectedProcessStep.tagline} {selectedProcessStep.subTagline}
              </div>

              <p className="text-sm sm:text-[15px] text-neutral-300 leading-relaxed mb-6">
                {selectedProcessStep.detailedScope}
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                    Key Activities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProcessStep.keyActivities.map((act, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-[#44DE64] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                    Phase Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProcessStep.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProcessStep(null)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProcessStep(null);
                    setIsProjectModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#44DE64] text-black font-semibold text-xs sm:text-sm hover:bg-[#38c454] transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <span>Start with Step {selectedProcessStep.num}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tech Stack Category Deep-Dive Modal */}
      <AnimatePresence>
        {selectedTechCategory && (
          <div
            id="tech-category-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedTechCategory(null);
            }}
          >
            <motion.div
              id="tech-category-modal"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-lg bg-[#0C0D0E] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="tech-modal-close-button"
                onClick={() => setSelectedTechCategory(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#44DE64] uppercase tracking-wider mb-2">
                <span>Architecture Tier</span>
                <span>•</span>
                <span className="text-neutral-400 font-normal">{selectedTechCategory.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                {selectedTechCategory.title}
              </h3>

              <div className="flex flex-wrap gap-2 my-3">
                {selectedTechCategory.subtitle.map((sub, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-[15px] text-neutral-300 leading-relaxed mb-6">
                {selectedTechCategory.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                  Key Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedTechCategory.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <Check className="w-4 h-4 text-[#44DE64] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedTechCategory(null)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedTechCategory(null);
                    setIsProjectModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#44DE64] text-black font-semibold text-xs sm:text-sm hover:bg-[#38c454] transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <span>Build With This Stack</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
