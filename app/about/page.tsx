'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  X,
  Send,
  Loader2,
  Users,
  Code2,
  Cpu,
  Layers,
  Compass,
  Check,
  Globe,
  Rocket,
  Heart,
  TrendingUp,
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
  Target,
  Lock,
  Bot,
  Zap,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Menu
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatarBg: string;
  badge: string;
  skills: string[];
  achievements: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  accentColor: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'abdullah-parvaiz',
    name: 'Abdullah Parvaiz',
    role: 'Senior Full Stack Developer',
    tagline: 'Architecting high-scale cloud software & resilient full-stack systems',
    bio: 'Passionate software architect with deep expertise in building ultra-responsive web applications, distributed backend services, and scalable cloud architectures. Specializes in Next.js, React, Node.js, Python, and modern microservice ecosystems with a strong focus on clean code and performance.',
    avatarBg: 'from-blue-600/20 via-indigo-600/20 to-neutral-900',
    badge: 'Tech Lead & Architecture',
    skills: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'AWS & Cloud Infrastructure'],
    achievements: ['5+ Years Full Stack Experience', 'Engineered 20+ Production Applications', 'Sub-50ms Latency Optimizations'],
    social: {
      github: 'https://github.com/abdullahparvaiz07',
      linkedin: 'https://www.linkedin.com/in/abdullah-parvaiz-48602b289/',
      email: 'abdullahparvaiz2025@gmail.com'
    },
    accentColor: '#44DE64'
  },
  {
    id: 'fahad-ali',
    name: 'Fahad Ali',
    role: 'Full Stack Developer & AI Expert',
    tagline: 'Bridging modern full-stack web technologies with state-of-the-art GenAI models',
    bio: 'Full-stack engineer and artificial intelligence practitioner specializing in end-to-end intelligent applications. Crafts multi-modal LLM pipelines, Retrieval-Augmented Generation (RAG) architectures, and real-time interactive user interfaces that turn complex AI capabilities into intuitive digital products.',
    avatarBg: 'from-emerald-600/20 via-teal-600/20 to-neutral-900',
    badge: 'Full Stack & GenAI Specialist',
    skills: ['GenAI & LLMs', 'LangChain & LlamaIndex', 'RAG Pipelines', 'Next.js', 'FastAPI & Python', 'Vector DBs (Pinecone)', 'OpenAI / Claude APIs'],
    achievements: ['Integrated 15+ GenAI Pipelines', 'Custom RAG & Vector Implementations', 'Multi-Modal Assistant Architectures'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'fahad@devpals.io'
    },
    accentColor: '#38BDF8'
  },
  {
    id: 'muhammad-jawad',
    name: 'Muhammad Jawad',
    role: 'AI & Automation Expert',
    tagline: 'Pioneering autonomous agent workflows and enterprise-grade process automation',
    bio: 'Automation specialist dedicated to eliminating business friction and manual operational bottlenecks. Designs autonomous agent loops, resilient webhook pipelines, and self-healing data workflows that empower teams to operate at 10x velocity with zero human overhead.',
    avatarBg: 'from-orange-600/20 via-amber-600/20 to-neutral-900',
    badge: 'Agentic & Workflow Automation',
    skills: ['Autonomous AI Agents', 'Workflow Orchestration', 'Python Automation', 'API Gateways & Webhooks', 'Event-Driven Systems', 'ETL & Data Streaming'],
    achievements: ['Automated 10,000+ Hours of Business Ops', 'Autonomous Tool-Calling Agent Loops', 'Zero-Downtime Data Synchronizations'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'jawad@devpals.io'
    },
    accentColor: '#F59E0B'
  }
];

const studioValues = [
  {
    icon: Code2,
    title: 'Precision Engineering',
    desc: 'We write clean, modular, and strongly-typed code that stands the test of time, scales under heavy load, and is a joy to maintain.'
  },
  {
    icon: Bot,
    title: 'AI-First Thinking',
    desc: 'We integrate intelligent agents, LLMs, and smart automations natively into products to give businesses a compounding competitive edge.'
  },
  {
    icon: Sparkles,
    title: 'Human-Centric Design',
    desc: 'Great software feels effortless. We obsess over typography, micro-interactions, accessibility, and intuitive user journeys.'
  },
  {
    icon: Rocket,
    title: 'Velocity with Stability',
    desc: 'We combine agile sprint cadences with automated CI/CD and rigorous QA so you ship to market rapidly without breaking production.'
  }
];

const howWeWorkSteps = [
  {
    step: '01',
    title: 'Discover & Align',
    tagline: 'INSIGHTS & ARCHITECTURE',
    desc: 'We dive deep into your business goals, target audience, and competitive landscape to form a rock-solid technical roadmap.',
    deliverables: ['Product Discovery Blueprint', 'Technical Architecture Specs', 'User Journey & Empathy Maps'],
    duration: 'Week 1 – 2'
  },
  {
    step: '02',
    title: 'Design & Prototype',
    tagline: 'INTUITIVE USER EXPERIENCES',
    desc: 'We translate requirements into interactive high-fidelity Figma prototypes, design tokens, and smooth micro-interactions.',
    deliverables: ['Clickable Design System', 'Component & Token Library', 'Usability Validation Sign-Off'],
    duration: 'Week 2 – 3'
  },
  {
    step: '03',
    title: 'Engineer & Integrate',
    tagline: 'CLEAN, RESILIENT CODE',
    desc: 'Our full-stack and AI engineers build high-performance web apps, secure APIs, and autonomous workflows using modern stacks.',
    deliverables: ['Production-Grade Codebase', 'API & AI Pipelines', 'Automated CI/CD Pipelines'],
    duration: 'Week 3 – 6'
  },
  {
    step: '04',
    title: 'Test & AI Benchmark',
    tagline: 'UNCOMPROMISING QUALITY',
    desc: 'Comprehensive automated test suites, cross-device QA, security audits, and Core Web Vitals optimizations guarantee 95+ performance.',
    deliverables: ['Lighthouse 95+ Scorecard', 'Security & Compliance Report', 'Cross-Platform QA Sign-Off'],
    duration: 'Week 1 – 2'
  },
  {
    step: '05',
    title: 'Launch & Scale',
    tagline: 'ZERO-DOWNTIME ROLLOUT',
    desc: 'We handle production DNS routing, cloud orchestration, live telemetry, and post-launch optimization sprints to accelerate growth.',
    deliverables: ['Live Production Deployment', 'Real-time Observability Dashboard', '30-Day SLA Support & Warranty'],
    duration: 'Ongoing Sprints'
  }
];

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProjectSubmitting, setIsProjectSubmitting] = useState(false);
  const [projectError, setProjectError] = useState<string | null>(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleProjectSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProjectSubmitting(true);
    setProjectError(null);

    try {
      const data = new FormData(e.currentTarget);
      data.append("access_key", "dece7f9d-a7c7-4441-985b-0e647c24a363");
      data.append("from_name", "DevPals About Page Inquiry Modal");
      data.append("subject", `New Project Request from ${formData.name || 'Client'}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const res = await response.json();
      if (res.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
          setIsProjectModalOpen(false);
        }, 3000);
      } else {
        setProjectError(res.message || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setProjectError("Network error. Please check your connection and try again.");
    } finally {
      setIsProjectSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    try {
      const data = new FormData(e.currentTarget);
      data.append("access_key", "dece7f9d-a7c7-4441-985b-0e647c24a363");
      data.append("from_name", "DevPals Newsletter Subscription");
      data.append("subject", `New DevPals Subscriber: ${newsletterEmail}`);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      setIsNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setIsNewsletterSubmitted(false);
      }, 4000);
    } catch {
      setIsNewsletterSubmitted(true);
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#FAF9F6] text-neutral-950 font-sans selection:bg-orange-100 selection:text-orange-950 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* FLOATING TOP NAVIGATION BAR (Responsive: Mobile Drawer + Desktop Pill)    */}
      {/* ========================================================================= */}
      <header className="fixed top-3 left-0 w-full z-40 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center">
          
          {/* Mobile Top Bar (Visible only on < sm) */}
          <div className="sm:hidden pointer-events-auto flex items-center justify-between w-full bg-black/90 backdrop-blur-md text-white rounded-full px-4 py-2.5 shadow-2xl border border-neutral-800">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-sm tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              <Image src="/logo.png" alt="DevPals Logo" width={26} height={26} className="w-6.5 h-6.5 object-contain rounded-md" priority />
              <span>DevPals</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsProjectModalOpen(true)}
                className="px-3 py-1 text-[11px] font-bold bg-[#44DE64] text-black rounded-full shadow-sm active:scale-95 transition-transform"
              >
                Hire Us
              </button>

              {/* Custom Animated Toggle (From Uiverse.io by vinodjangid07) */}
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  id="mobile-nav-toggle-about"
                  className="mobile-toggle-input"
                  checked={isMobileMenuOpen}
                  onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
                  aria-label="Toggle navigation menu"
                />
                <label htmlFor="mobile-nav-toggle-about" className="toggle mobile-toggle-label">
                  <div className="bars mobile-bar-1" id="bar1"></div>
                  <div className="bars mobile-bar-2" id="bar2"></div>
                  <div className="bars mobile-bar-3" id="bar3"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Centered Floating Pill Navbar (Visible on >= sm) */}
          <nav
            id="floating-navbar-about"
            className="hidden sm:flex pointer-events-auto bg-black text-white rounded-full px-5 sm:px-9 py-2.5 sm:py-3 items-center gap-4 sm:gap-7 shadow-2xl border border-neutral-800/80"
          >
            <Link
              href="/"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="/#services-section"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Services
            </Link>

            {/* Brand Logo Center */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-sm sm:text-base tracking-tight text-white hover:opacity-90 transition-opacity px-1 sm:px-2"
            >
              <Image src="/logo.png" alt="DevPals Logo" width={28} height={28} className="w-7 h-7 object-contain rounded-md" priority />
              <span>DevPals</span>
            </Link>

            <Link
              href="/projects"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-xs sm:text-[13.5px] font-bold text-[#44DE64] transition-colors flex items-center gap-1"
            >
              <span>About Us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#44DE64] inline-block"></span>
            </Link>
          </nav>

        </div>
      </header>

      {/* Mobile Sliding Sidebar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 sm:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Sliding Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#0A0B0D] border-l border-neutral-800 text-white flex flex-col justify-between p-6 shadow-2xl overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800/80">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-bold text-base text-white"
                >
                  <Image src="/logo.png" alt="DevPals Logo" width={30} height={30} className="w-7.5 h-7.5 object-contain rounded-md" />
                  <span>DevPals</span>
                </Link>

                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="mobile-sidebar-toggle-close-about"
                    className="mobile-toggle-input"
                    checked={isMobileMenuOpen}
                    onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
                    aria-label="Close navigation sidebar"
                  />
                  <label htmlFor="mobile-sidebar-toggle-close-about" className="toggle mobile-toggle-label">
                    <div className="bars mobile-bar-1" id="bar1"></div>
                    <div className="bars mobile-bar-2" id="bar2"></div>
                    <div className="bars mobile-bar-3" id="bar3"></div>
                  </label>
                </div>
              </div>

              {/* Sidebar Navigation Links List */}
              <div className="py-5 space-y-1.5 flex-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2 px-3">
                  // NAVIGATION
                </div>

                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-3.5 py-3 rounded-2xl text-[14.5px] font-semibold text-neutral-200 hover:text-white hover:bg-neutral-900/90 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#44DE64]">01</span>
                    <span>Home</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-3.5 py-3 rounded-2xl text-[14.5px] font-semibold text-[#44DE64] bg-neutral-900 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#44DE64]">02</span>
                    <span>About Us &amp; Team</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#44DE64]" />
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-3.5 py-3 rounded-2xl text-[14.5px] font-semibold text-neutral-200 hover:text-white hover:bg-neutral-900/90 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#44DE64]">03</span>
                    <span>Projects Showcase</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#44DE64]" />
                </Link>

                <Link
                  href="/#services-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-3.5 py-3 rounded-2xl text-[14.5px] font-semibold text-neutral-200 hover:text-white hover:bg-neutral-900/90 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#44DE64]">04</span>
                    <span>Services</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                <Link
                  href="/#contact-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-3.5 py-3 rounded-2xl text-[14.5px] font-semibold text-neutral-200 hover:text-white hover:bg-neutral-900/90 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#44DE64]">05</span>
                    <span>Contact Us</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>

              {/* Sidebar Footer */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-3.5">
                {/* Status Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] text-neutral-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-pulse" />
                  <span>ACCEPTING Q3/Q4 SPRINT PROJECTS</span>
                </div>

                {/* Start Project CTA */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsProjectModalOpen(true);
                  }}
                  className="w-full py-3.5 bg-[#44DE64] text-black font-bold text-sm rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-[#3be05e] active:scale-95 transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Email */}
                <div className="text-center pt-0.5">
                  <a
                    href="mailto:hello@devpals.com"
                    className="text-[11px] font-mono text-neutral-400 hover:text-[#44DE64] transition-colors"
                  >
                    hello@devpals.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 1. HERO & INTRODUCTION SECTION                                            */}
      {/* ========================================================================= */}
      <section
        id="about-hero-section"
        className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        {/* Glow ambient background aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-200/40 via-orange-100/30 to-blue-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-semibold tracking-wide shadow-md mb-5 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-pulse"></span>
          <span className="uppercase tracking-wider text-[11px] sm:text-xs">THE TEAM BEHIND THE MAGIC</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-[850] tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] max-w-4xl"
        >
          Turning Bold Ideas Into{' '}
          <span className="relative inline-block text-neutral-900">
            Digital Realities
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-[#44DE64]"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path d="M0,5 Q50,12 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        {/* Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mt-6 sm:mt-8 leading-relaxed font-normal"
        >
          We are <strong className="text-neutral-900 font-semibold">DevPals</strong> — a focused digital engineering and design powerhouse. We partner with ambitious founders, visionary creators, and growing businesses to build category-defining web apps, AI systems, and mobile platforms.
        </motion.p>

        {/* Quick CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          <button
            id="about-hero-discuss-btn"
            onClick={() => setIsProjectModalOpen(true)}
            className="group px-7 py-3.5 rounded-full bg-neutral-950 text-white font-semibold text-sm sm:text-base hover:bg-neutral-800 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#our-team-section"
            className="px-6 py-3.5 rounded-full bg-white text-neutral-800 font-semibold text-sm sm:text-base hover:bg-neutral-100 transition-all duration-200 border border-neutral-200/90 shadow-xs inline-flex items-center gap-2"
          >
            <span>Meet Our Team</span>
            <Users className="w-4 h-4 text-neutral-600" />
          </a>
        </motion.div>

        {/* Key Metrics Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-xl shadow-neutral-900/5 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
              100<span className="text-[#44DE64]">%</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1 uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
              20<span className="text-[#44DE64]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1 uppercase tracking-wider">
              Shipped Projects
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
              &lt;45<span className="text-[#44DE64]">ms</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1 uppercase tracking-wider">
              Avg API Latency
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
              99.9<span className="text-[#44DE64]">%</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1 uppercase tracking-wider">
              Uptime Architected
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE STUDIO VALUES                                                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
        {/* Background circuit grid detail */}
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="text-xs font-bold text-[#44DE64] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Engineering DNA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                How We Stand Apart
              </h2>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base max-w-md">
              We reject bloated agency handoffs and fragile shortcuts. Every line of code, design component, and AI model is engineered for real-world reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 sm:p-7 rounded-2xl bg-neutral-800/60 border border-neutral-700/60 hover:border-neutral-500/80 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#44DE64] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MEET OUR TEAM SECTION (Requested Members)                              */}
      {/* ========================================================================= */}
      <section
        id="our-team-section"
        className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-[#44DE64]" />
            <span>TALENT & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-[850] text-neutral-950 tracking-tight">
            Meet the Builders & Innovators
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
            The core engineers, architects, and AI specialists behind every high-performance product we ship.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-950/5 hover:shadow-2xl hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div
                className="h-2 w-full transition-all duration-300 group-hover:h-2.5"
                style={{ backgroundColor: member.accentColor }}
              />

              <div className="p-7 sm:p-8 flex-1 flex flex-col">
                
                {/* Header: Avatar / Visual Initial Card & Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.avatarBg} border border-neutral-800 flex items-center justify-center text-white text-2xl font-black shadow-inner`}
                    >
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#44DE64] border-2 border-white flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 text-black stroke-[3]" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 uppercase tracking-wider text-right">
                    {member.badge}
                  </span>
                </div>

                {/* Name and Role */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight group-hover:text-neutral-800 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-neutral-600 mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: member.accentColor }} />
                    <span>{member.role}</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-medium text-neutral-700 italic mt-3 bg-neutral-50 p-3 rounded-xl border border-neutral-150">
                  &ldquo;{member.tagline}&rdquo;
                </p>

                {/* Bio */}
                <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed mt-4">
                  {member.bio}
                </p>

                {/* Core Achievements */}
                <div className="mt-5 space-y-2 pt-4 border-t border-neutral-100">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Key Highlights
                  </div>
                  {member.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#44DE64] shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Pills */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                    Technical Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-100 font-medium text-neutral-700 border border-neutral-200/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer CTA & Social Links */}
              <div className="p-5 sm:px-8 sm:py-5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 transition-colors"
                      aria-label="Send Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setIsProjectModalOpen(true)}
                  className="text-xs font-bold text-neutral-900 hover:text-black inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Collaborate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW WE WORK (Iterative Engineering Process)                             */}
      {/* ========================================================================= */}
      <section
        id="how-we-work-section"
        className="py-20 sm:py-28 bg-[#0C0D0F] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-[#44DE64] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>THE DEVPALS METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              How We Engineer Your Product from 0 to 1
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Transparent, milestone-driven sprints designed to maximize velocity and eliminate surprises.
            </p>
          </div>

          {/* Timeline / Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
            {howWeWorkSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#44DE64]">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[10px] font-bold text-[#44DE64] uppercase tracking-wider mb-3">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    Key Outputs
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="text-[11px] text-neutral-300 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#44DE64] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Process Guarantee Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#44DE64] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Zero Technical Debt Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  Full codebase ownership, continuous documentation, and 30-day post-launch warranty included with every build.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsProjectModalOpen(true)}
              className="px-6 py-3 rounded-full bg-[#44DE64] text-black font-semibold text-xs sm:text-sm hover:bg-[#38c454] transition-colors shrink-0 shadow-lg cursor-pointer"
            >
              Start Your Sprint
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINAL HIGH-CONVERTING CTA SECTION                                      */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-neutral-950 via-[#121316] to-neutral-900 text-white p-8 sm:p-12 md:p-16 border border-neutral-800 shadow-2xl overflow-hidden text-center flex flex-col items-center">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/90 text-[#44DE64] text-xs font-semibold mb-5 border border-neutral-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET&apos;S BUILD SOMETHING EXTRAORDINARY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Ready to Turn Your Vision Into Market-Leading Software?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 mt-5 max-w-2xl mx-auto leading-relaxed">
              Whether you are architecting a new AI platform, launching a flagship mobile app, or modernizing enterprise web systems, our team is ready to execute with speed and precision.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
              <button
                id="final-cta-discuss-button"
                onClick={() => setIsProjectModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[#44DE64] text-black font-bold text-sm sm:text-base hover:bg-[#36c754] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/#projects-section"
                className="px-7 py-4 rounded-full bg-neutral-900 text-white font-semibold text-sm sm:text-base hover:bg-neutral-800 transition-all border border-neutral-700"
              >
                <span>View Our Case Studies</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#44DE64]" /> Direct Founder & Tech Lead Access
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#44DE64]" /> Rapid 24-Hour Response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPREHENSIVE AGENCY FOOTER                                            */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#0B0C0E] text-white border-t border-neutral-800/80 pt-16 sm:pt-20 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-14 border-b border-neutral-800/80">
            
            {/* Col 1 & 2: Brand Story & Newsletter */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white mb-4">
                <Image src="/logo.png" alt="DevPals Logo" width={34} height={34} className="w-8.5 h-8.5 object-contain rounded-lg shadow-sm" />
                <span>DevPals</span>
              </Link>
              
              <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
                DevPals designs and builds cutting-edge web applications, AI-driven automation, and scalable mobile platforms for forward-thinking brands.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="max-w-sm">
                <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Subscribe to Tech & Product Insights
                </div>
                {isNewsletterSubmitted ? (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-[#44DE64] text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#44DE64]"
                    />
                    <button
                      type="submit"
                      disabled={isNewsletterSubmitting}
                      className="px-4 py-2.5 rounded-xl bg-[#44DE64] text-black font-semibold text-xs hover:bg-[#38c454] transition-colors shrink-0 cursor-pointer disabled:opacity-70"
                    >
                      {isNewsletterSubmitting ? 'Joining...' : 'Join'}
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Col 3: Navigation */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-[#44DE64] font-semibold">About Us</Link></li>
                <li><Link href="/#services-section" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/#projects-section" className="hover:text-white transition-colors">Featured Projects</Link></li>
                <li><Link href="/#contact-section" className="hover:text-white transition-colors">Contact & Reviews</Link></li>
              </ul>
            </div>

            {/* Col 4: Services */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                Capabilities
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                <li><Link href="/#services-section" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/#services-section" className="hover:text-white transition-colors">Mobile Applications</Link></li>
                <li><Link href="/#services-section" className="hover:text-white transition-colors">AI & Automation</Link></li>
                <li><Link href="/#services-section" className="hover:text-white transition-colors">Digital Platforms</Link></li>
                <li><Link href="/#services-section" className="hover:text-white transition-colors">Consulting & Architecture</Link></li>
              </ul>
            </div>

            {/* Col 5: Connect */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                Direct Contact
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#44DE64]" />
                  <a href="mailto:abdullahparvaiz2025@gmail.com" className="hover:text-white transition-colors">
                    abdullahparvaiz2025@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#44DE64]" />
                  <span>Global / Remote Studio</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 pt-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-ping" />
                  <span>Open for New Projects</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} DevPals. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* INTERACTIVE PROJECT INQUIRY MODAL                                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div
            id="about-project-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsProjectModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-100 relative"
            >
              <button
                onClick={() => setIsProjectModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#44DE64] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Inquiry Received!</h3>
                  <p className="text-sm text-neutral-600">
                    Thanks for reaching out. Abdullah, Fahad, or Jawad will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#44DE64]" />
                      <span>Start Your Journey</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
                      Discuss Your Project
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Tell our team what you need built and let&apos;s turn it into reality.
                    </p>
                  </div>

                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    {projectError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                        {projectError}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Work Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Project Overview & Goals
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        placeholder="Describe your product idea, timeline, and tech requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isProjectSubmitting}
                      className="w-full mt-2 py-3 px-4 rounded-xl bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isProjectSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
