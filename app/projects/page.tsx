'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  X,
  Send,
  Code2,
  Cpu,
  Layers,
  Check,
  Globe,
  Rocket,
  Search,
  ExternalLink,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Filter,
  Eye,
  Mail,
  MapPin,
  ArrowUp,
  Github,
  Linkedin,
  ShoppingBag,
  Car,
  User,
  Bot,
  Activity,
  Server
} from 'lucide-react';

interface ProjectItem {
  id: string;
  num: string;
  category: string;
  categoryGroup: 'all' | 'automotive' | 'ecommerce' | 'portfolio' | 'ai' | 'saas';
  title: string;
  domain?: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  description: string;
  client: string;
  techStack: string[];
  metrics: { label: string; val: string }[];
  liveUrl?: string;
  isFlagship?: boolean;
  accentColor: string;
  badge: string;
}

const allProjectsData: ProjectItem[] = [
  {
    id: 'nexco-japan',
    num: '01',
    category: 'AUTOMOTIVE & LOGISTICS',
    categoryGroup: 'automotive',
    title: 'NEXCO JAPAN',
    domain: 'nexcojapan.com',
    subtitle: 'Global Japanese vehicle export, live auction bidding, and container shipping platform.',
    challenge: 'Handle tens of thousands of real-time Japanese auction vehicle listings, complex customs documentation, and international multi-currency logistics across continents.',
    solution: 'Engineered a lightning-fast Next.js platform with live auction synchronization, automatic multi-currency conversion, and real-time ocean freight tracking.',
    impact: '100K+ Monthly inquiries & 40+ countries served',
    description:
      'Nexco Japan (nexcojapan.com) is an enterprise automotive export and bidding portal connecting international buyers to premium Japanese vehicles with real-time auction feeds, transparent customs clearance, and global ocean freight management.',
    client: 'Nexco Japan Ltd.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS Multi-Region'],
    metrics: [
      { label: 'Global Reach', val: '40+ Countries' },
      { label: 'Vehicle Listings', val: '15,000+' },
      { label: 'Page Speed', val: '0.4s' },
      { label: 'Customer Trust', val: '99.2%' }
    ],
    liveUrl: 'https://nexcojapan.com',
    isFlagship: true,
    accentColor: '#44DE64',
    badge: 'Flagship Real Project'
  },
  {
    id: 'sara-store',
    num: '02',
    category: 'E-COMMERCE & RETAIL',
    categoryGroup: 'ecommerce',
    title: 'SARA STORE',
    domain: 'sarastore.pk',
    subtitle: 'High-converting modern fashion and lifestyle retail e-commerce platform.',
    challenge: 'Replace slow, fragmented shopping carts with an instant-load mobile-first storefront and automated local courier API synchronization.',
    solution: 'Built a headless high-performance commerce experience featuring instant search, one-click checkout, automated order dispatch, and cart recovery workflows.',
    impact: '3.8x Conversion rate uplift & 50K+ shoppers',
    description:
      'Sara Store (sarastore.pk) provides an ultra-smooth retail shopping experience with sub-second page transitions, dynamic cart upsells, and automated parcel tracking for Pakistani shoppers.',
    client: 'Sara Store Pakistan',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Payment Gateways', 'Courier Logistics APIs'],
    metrics: [
      { label: 'Monthly Orders', val: '12,500+' },
      { label: 'Conversion Lift', val: '+280%' },
      { label: 'Mobile Traffic', val: '88%' },
      { label: 'Cart Dropoff', val: '-34%' }
    ],
    liveUrl: 'https://sarastore.pk',
    isFlagship: true,
    accentColor: '#F59E0B',
    badge: 'Flagship Real Project'
  },
  {
    id: 'asadullah-portfolio',
    num: '03',
    category: 'DIGITAL IDENTITY & PORTFOLIO',
    categoryGroup: 'portfolio',
    title: 'ASADULLAH',
    domain: 'asadullah.site',
    subtitle: 'Interactive engineering portfolio and personal brand platform.',
    challenge: 'Create a visually captivating, ultra-fast personal digital experience showcasing complex software engineering achievements and technical mastery.',
    solution: 'Designed a fluid motion-driven web experience with 3D interactive elements, dynamic project case studies, and 99+ Lighthouse performance score.',
    impact: '50K+ Global impressions & 99/100 score',
    description:
      'Asadullah (asadullah.site) is a bespoke digital portfolio engineered to highlight high-end software development, innovative user interfaces, and creative technical leadership.',
    client: 'Asadullah Parvaiz',
    techStack: ['Next.js', 'React 19', 'Motion', 'TypeScript', 'Tailwind CSS', 'Vercel Edge'],
    metrics: [
      { label: 'Lighthouse Score', val: '99/100' },
      { label: 'Global Visits', val: '50K+' },
      { label: 'Interaction Rate', val: '84%' },
      { label: 'Page Load', val: '<0.3s' }
    ],
    liveUrl: 'https://asadullah.site',
    isFlagship: true,
    accentColor: '#38BDF8',
    badge: 'Flagship Real Project'
  },
  {
    id: 'pulse-ai',
    num: '04',
    category: 'AI & AUTOMATION',
    categoryGroup: 'ai',
    title: 'PulseAI',
    subtitle: 'Autonomous AI agent orchestration and tool-execution platform for enterprise teams.',
    challenge: 'Enterprises struggle with fragmented API integrations and manual data transfers between CRM, Slack, and financial databases.',
    solution: 'Engineered an event-driven LLM workflow builder with self-healing webhook listeners and strict role-based data guardrails.',
    impact: '10,000+ Automated Hours Saved',
    description:
      'PulseAI connects modern LLMs with internal databases and APIs to execute complex multi-step workflows autonomously with zero human intervention.',
    client: 'Pulse AI Labs',
    techStack: ['Python', 'FastAPI', 'LangChain', 'React 19', 'Pinecone', 'Docker'],
    metrics: [
      { label: 'Time Saved', val: '10K+ Hrs' },
      { label: 'Accuracy', val: '99.4%' },
      { label: 'Throughput', val: '5M Events/mo' },
      { label: 'Security', val: 'SOC2 Ready' }
    ],
    accentColor: '#A855F7',
    badge: 'AI Architecture'
  },
  {
    id: 'fintrack-pro',
    num: '05',
    category: 'SAAS & FINTECH',
    categoryGroup: 'saas',
    title: 'FinTrack Pro',
    subtitle: 'Multi-tenant cloud accounting and real-time portfolio analytics platform.',
    challenge: 'Traditional SaaS accounting platforms suffer from high latency during real-time reconciliations and cross-border currency transfers.',
    solution: 'Built a distributed Next.js microservices architecture with real-time WebSockets, automated invoicing, and Stripe Connect.',
    impact: '$45M+ Transactions Processed',
    description:
      'FinTrack Pro provides founders and CFOs with instant financial forecasting, multi-entity ledger management, and automated tax reporting.',
    client: 'FinTrack Global Inc.',
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe Connect', 'AWS'],
    metrics: [
      { label: 'Volume Handled', val: '$45M+' },
      { label: 'Avg Latency', val: '<35ms' },
      { label: 'Active Orgs', val: '1,200+' },
      { label: 'Uptime', val: '99.99%' }
    ],
    accentColor: '#10B981',
    badge: 'Fintech SaaS'
  },
  {
    id: 'aura-health',
    num: '06',
    category: 'HEALTHCARE & TELEMEDICINE',
    categoryGroup: 'saas',
    title: 'Aura Health',
    subtitle: 'HIPAA-compliant telehealth platform with instant clinical video and AI triage.',
    challenge: 'Eliminate patient consultation wait times and simplify electronic medical record documentation for physicians.',
    solution: 'Developed a cross-platform mobile and web application with encrypted WebRTC video consults and automated clinical summary generation.',
    impact: '85K+ Video Consultations',
    description:
      'Aura Health connects patients to board-certified specialists 24/7 with encrypted EHR storage, automated prescription routing, and smart symptom intake.',
    client: 'Aura Medical Network',
    techStack: ['React Native', 'Next.js', 'WebRTC', 'Node.js', 'HIPAA Cloud Storage'],
    metrics: [
      { label: 'Consultations', val: '85K+' },
      { label: 'Wait Time', val: '-65%' },
      { label: 'Physicians', val: '2,500+' },
      { label: 'Patient CSAT', val: '98.5%' }
    ],
    accentColor: '#EC4899',
    badge: 'Healthcare Web/Mobile'
  },
  {
    id: 'hyper-stream',
    num: '07',
    category: 'MEDIA & STREAMING',
    categoryGroup: 'saas',
    title: 'HyperStream',
    subtitle: 'Ultra-low latency live video broadcasting and interactive audience engagement engine.',
    challenge: 'Achieve sub-second glass-to-glass latency for global interactive live streams with 100k+ concurrent viewers.',
    solution: 'Designed edge-accelerated WebRTC ingestion nodes with distributed HLS transcoding and live chat sync.',
    impact: 'Sub-300ms Global Broadcast Latency',
    description:
      'HyperStream powers next-generation live gaming, corporate keynotes, and virtual auctions with zero buffering and synchronized live polls.',
    client: 'HyperStream Media',
    techStack: ['Go', 'WebRTC', 'Next.js', 'Rust', 'Cloudflare Workers', 'Kubernetes'],
    metrics: [
      { label: 'Latency', val: '<300ms' },
      { label: 'Concurrent Users', val: '120K+' },
      { label: 'Bandwidth Saved', val: '42%' },
      { label: 'Frame Drop', val: '<0.01%' }
    ],
    accentColor: '#06B6D4',
    badge: 'Real-Time Streaming'
  },
  {
    id: 'cloud-shield',
    num: '08',
    category: 'CYBERSECURITY & INFRA',
    categoryGroup: 'saas',
    title: 'CloudShield',
    subtitle: 'Zero-trust infrastructure monitoring and automated vulnerability remediation dashboard.',
    challenge: 'Engineering teams lack unified real-time visibility into multi-cloud container vulnerabilities and configuration drift.',
    solution: 'Created an automated security posture scanner that continuously audits AWS/GCP clusters and executes zero-downtime remediation scripts.',
    impact: '100% Audit Compliance across 500+ Nodes',
    description:
      'CloudShield gives DevOps and SecOps teams complete visibility into container health, IAM permissions, and automated compliance alerts.',
    client: 'CloudShield Security',
    techStack: ['TypeScript', 'Python', 'Docker', 'Kubernetes', 'Next.js', 'AWS IAM'],
    metrics: [
      { label: 'Nodes Monitored', val: '500+' },
      { label: 'Threats Blocked', val: '4,500+' },
      { label: 'Audit Time', val: '-80%' },
      { label: 'Compliance', val: 'SOC2 / ISO' }
    ],
    accentColor: '#E11D48',
    badge: 'Cloud Infrastructure'
  }
];

const categoryTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'automotive', label: 'Automotive & Logistics' },
  { id: 'ecommerce', label: 'E-Commerce & Retail' },
  { id: 'portfolio', label: 'Portfolios & Identity' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'saas', label: 'SaaS & Platforms' }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const filteredProjects = useMemo(() => {
    return allProjectsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categoryGroup === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.domain && item.domain.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsProjectModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

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

  return (
    <div className="relative w-full min-h-screen bg-[#FAF9F6] text-neutral-950 font-sans selection:bg-orange-100 selection:text-orange-950 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* FLOATING TOP NAVIGATION BAR                                               */}
      {/* ========================================================================= */}
      <header className="fixed top-3.5 left-0 w-full z-40 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <nav
            id="floating-navbar-projects"
            className="pointer-events-auto bg-black text-white rounded-full px-5 sm:px-9 py-2.5 sm:py-3 flex items-center gap-4 sm:gap-7 shadow-2xl border border-neutral-800/80"
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
              className="flex items-center gap-1.5 font-bold text-sm sm:text-base tracking-tight text-white hover:opacity-90 transition-opacity px-1 sm:px-2"
            >
              <span className="text-[#44DE64] text-base sm:text-lg font-black leading-none">✳</span>
              <span>DevPals</span>
            </Link>

            <Link
              href="/projects"
              className="text-xs sm:text-[13.5px] font-bold text-[#44DE64] transition-colors flex items-center gap-1"
            >
              <span>Projects</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#44DE64] inline-block"></span>
            </Link>

            <Link
              href="/about"
              className="text-xs sm:text-[13.5px] font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section
        id="projects-hero-section"
        className="relative pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        {/* Glow ambient background aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-200/35 via-orange-100/25 to-blue-100/35 blur-3xl -z-10 pointer-events-none rounded-full" />

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-semibold tracking-wide shadow-md mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-pulse"></span>
          <span className="uppercase tracking-wider text-[11px] sm:text-xs">PROVEN WORK & LIVE SYSTEMS</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-[850] tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] max-w-4xl"
        >
          Digital Products Engineered for{' '}
          <span className="relative inline-block text-neutral-900">
            Real Impact
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-[#44DE64]"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path d="M0,5 Q50,12 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        {/* Narrative Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mt-5 sm:mt-6 leading-relaxed font-normal"
        >
          Explore our portfolio of live client platforms, high-throughput web applications, e-commerce engines, and autonomous AI systems built with speed and precision.
        </motion.p>

        {/* Quick Filter & Search Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-lg"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-neutral-100 text-xs text-neutral-900 placeholder-neutral-500 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FLAGSHIP REAL PROJECTS SECTION                                         */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-bold text-[#44DE64] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-ping" />
              <span>LIVE CLIENT WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              Featured Flagship Projects
            </h2>
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            Showing {filteredProjects.length} of {allProjectsData.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-3xl bg-white border border-neutral-200/90 shadow-lg hover:shadow-2xl hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Top Visual Accent Stripe */}
              <div
                className="h-2 w-full transition-all duration-300 group-hover:h-3"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-400">
                      <span>{project.num}</span>
                      <span className="w-4 h-[1px] bg-neutral-300" />
                      <span className="text-neutral-700 uppercase tracking-wider text-[10px]">
                        {project.category}
                      </span>
                    </div>

                    {project.liveUrl && (
                      <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {project.domain || 'Live Site'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight group-hover:text-neutral-800 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mt-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Metrics Pill Row */}
                <div className="mt-5 grid grid-cols-2 gap-2 p-3 rounded-xl bg-neutral-50 border border-neutral-150">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-neutral-950">{m.val}</div>
                      <div className="text-[9.5px] text-neutral-500 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10.5px] px-2 py-0.5 rounded-md bg-neutral-100 font-medium text-neutral-700 border border-neutral-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Action Bar */}
              <div className="p-4 sm:px-7 sm:py-4 bg-neutral-50/90 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900 group-hover:text-black inline-flex items-center gap-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 px-3 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[11px] font-bold hover:bg-[#44DE64] hover:border-[#44DE64] hover:text-black transition-all inline-flex items-center gap-1 shadow-xs"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 p-8 mt-6">
            <Search className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-900">No projects found</h3>
            <p className="text-sm text-neutral-500 mt-1">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. FINAL HIGH-CONVERTING CTA SECTION                                      */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-neutral-950 via-[#121316] to-neutral-900 text-white p-8 sm:p-12 md:p-16 border border-neutral-800 shadow-2xl overflow-hidden text-center flex flex-col items-center">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/90 text-[#44DE64] text-xs font-semibold mb-5 border border-neutral-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM ARCHITECTURES FOR SCALE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Have a Project You Want to Build With Us?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 mt-5 max-w-2xl mx-auto leading-relaxed">
              We design, architect, and deploy high-performance software for startups and established global brands. Let&apos;s build your flagship product.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
              <button
                id="projects-cta-discuss-btn"
                onClick={() => setIsProjectModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[#44DE64] text-black font-bold text-sm sm:text-base hover:bg-[#36c754] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/about"
                className="px-7 py-4 rounded-full bg-neutral-900 text-white font-semibold text-sm sm:text-base hover:bg-neutral-800 transition-all border border-neutral-700"
              >
                <span>Meet Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPREHENSIVE AGENCY FOOTER                                            */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#0B0C0E] text-white border-t border-neutral-800/80 pt-16 sm:pt-20 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-14 border-b border-neutral-800/80">
            
            {/* Col 1 & 2: Brand & Newsletter */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white mb-4">
                <span className="text-[#44DE64] text-2xl font-black">✳</span>
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
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#44DE64]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-[#44DE64] text-black font-semibold text-xs hover:bg-[#38c454] transition-colors shrink-0 cursor-pointer"
                    >
                      Join
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
                <li><Link href="/projects" className="text-[#44DE64] font-semibold">Projects</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#services-section" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#contact-section" className="hover:text-white transition-colors">Contact & Reviews</Link></li>
              </ul>
            </div>

            {/* Col 4: Featured Projects */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                Live Platforms
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                <li>
                  <a href="https://nexcojapan.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#44DE64] transition-colors inline-flex items-center gap-1">
                    <span>Nexco Japan</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sarastore.pk" target="_blank" rel="noopener noreferrer" className="hover:text-[#44DE64] transition-colors inline-flex items-center gap-1">
                    <span>Sara Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://asadullah.site" target="_blank" rel="noopener noreferrer" className="hover:text-[#44DE64] transition-colors inline-flex items-center gap-1">
                    <span>Asadullah Portfolio</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Contact */}
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
      {/* CASE STUDY DEEP-DIVE MODAL                                                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="projects-case-study-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-2xl bg-[#0C0D0E] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="text-xs font-bold text-[#44DE64] tracking-widest uppercase">
                  Case Study {selectedProject.num} / {selectedProject.category}
                </span>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#44DE64]/20 border border-[#44DE64]/50 text-[#44DE64] text-xs font-bold hover:bg-[#44DE64] hover:text-black transition-all"
                  >
                    <span>Visit Live: {selectedProject.domain || selectedProject.liveUrl.replace('https://', '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
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

              <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full bg-neutral-900 text-neutral-200 border border-neutral-700 font-semibold text-xs sm:text-sm hover:text-white hover:border-neutral-500 transition-all inline-flex items-center gap-1.5"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* INTERACTIVE PROJECT INQUIRY MODAL                                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div
            id="projects-modal-backdrop"
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
                    Thanks for reaching out. The DevPals engineering team will respond within 24 hours.
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
                      Tell our team what you want to build and let&apos;s create something remarkable.
                    </p>
                  </div>

                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
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
                        Project Details & Requirements
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Describe your goals, timeline, and key challenges..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-4 rounded-xl bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
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

    </div>
  );
}
