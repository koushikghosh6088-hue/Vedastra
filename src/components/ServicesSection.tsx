'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Bot, Smartphone, Globe, Cog, CheckCircle, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

const services = [
  {
    id: 'web',
    title: 'Website Development',
    description: 'We build high-performance websites optimized for speed and conversion. Elite designs that load in under 1 second.',
    icon: '/3d-icons/web_dev.png',
    link: '/services#web',
    accent: '#00D4FF',
    tech: 'Next.js / React',
    metric: '< 1s',
    metricLabel: 'Load Speed',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Custom iOS and Android apps designed for zero friction and high user retention. Your business in their pocket.',
    icon: '/3d-icons/mobile_app.png',
    link: '/services#mobile',
    accent: '#7B2FFF',
    tech: 'React Native / Flutter',
    metric: '60 FPS',
    metricLabel: 'Native Smoothness',
  },
  {
    id: 'ai-agents',
    title: 'AI Voice & Chat Agents',
    description: 'Intelligent AI agents that answer calls, qualify leads, and book appointments 24/7 without a human in the loop.',
    icon: '/3d-icons/ai_calling.png',
    link: '/ai-solutions',
    accent: '#FF2D55',
    tech: 'LLM / RAG / Voice AI',
    metric: '24/7',
    metricLabel: 'Active Support',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Connecting your tools to eliminate manual tasks. We build robots that handle your paperwork while you grow.',
    icon: '/3d-icons/ai_automation.png',
    link: '/services#automation',
    accent: '#00FF88',
    tech: 'Make.com / Python',
    metric: '20Hr+',
    metricLabel: 'Weekly Saved',
  },
];

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Web Architecture",
    date: "Core",
    content: "High-speed web ecosystems engineered for conversion and absolute performance.",
    category: "Web",
    icon: Globe,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Mobile Edge",
    date: "Core",
    content: "Native experiences that bridge the gap between business and user mobility.",
    category: "Mobile",
    icon: Smartphone,
    relatedIds: [1, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Neural Agents",
    date: "AI",
    content: "Autonomous intelligence handling customer inquiries and sales 24/7.",
    category: "AI",
    icon: Bot,
    relatedIds: [1, 4],
    status: "completed",
    energy: 95,
  },
  {
    id: 4,
    title: "Flow Logic",
    date: "Automation",
    content: "Self-optimizing business engines that handle your repetitive workflows.",
    category: "Systems",
    icon: Cog,
    relatedIds: [3, 2],
    status: "in-progress",
    energy: 85,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F] overflow-hidden z-10">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#00D4FF]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-8 backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#00D4FF]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF] font-black">Our Capabilities</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.5rem] font-heading font-black leading-[1] tracking-tighter uppercase mb-6 text-white">
            EVERYTHING YOUR BUSINESS <br className="hidden md:block" />
            NEEDS TO <span className="text-[#00D4FF] italic">WIN ONLINE</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg font-body">
            We build it. We launch it. We make it work.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative z-10">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <div className="group relative h-full p-8 glass-premium rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-700 flex flex-col shimmer-border overflow-hidden">
                <div className="grainy-overlay opacity-[0.03]" />
                
                <div className="mb-10 relative">
                   <div 
                    className="absolute inset-0 blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"
                    style={{ background: service.accent }}
                  />
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={150} 
                    height={150} 
                    className="relative z-10 w-24 h-24 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 uppercase tracking-widest font-black group-hover:border-[#00D4FF]/30 transition-colors">
                      {service.tech}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight mb-4 group-hover:text-glow transition-all leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#8A8A9A] font-body text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-end justify-between relative z-10">
                  <div>
                    <div className="text-2xl font-heading font-black text-glow" style={{ color: service.accent }}>
                      {service.metric}
                    </div>
                    <div className="text-[9px] font-mono text-[#8A8A9A] uppercase tracking-widest font-bold">
                      {service.metricLabel}
                    </div>
                  </div>
                  <Link href={service.link} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 group-hover:bg-[#00D4FF] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Diagonal Visual: Circular Animation Re-integration */}
        <AnimatedSection className="mb-24">
          <div className="glass-premium rounded-[4rem] border-white/5 overflow-hidden p-12 md:p-20 relative bg-black">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9]">
                      OUR <span className="text-[#00D4FF] italic">AI-DRIVEN</span> <br/>ECOSYSTEM
                   </h3>
                   <p className="text-[#8A8A9A] text-lg leading-relaxed">
                      We don't just build separate tools. We build integrated digital ecosystems where every node communicates and optimizes your business in real-time.
                   </p>
                   <ul className="space-y-4">
                      {['Real-time Data Sync', 'Autonomous Decision Nodes', 'Cross-Platform Harmony'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-white/80 font-heading font-bold uppercase text-sm tracking-wide">
                           <CheckCircle className="w-5 h-5 text-[#00D4FF]" /> {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="relative h-[500px] flex items-center justify-center">
                   <RadialOrbitalTimeline timelineData={timelineData} />
                </div>
             </div>
          </div>
        </AnimatedSection>

        {/* Services Bottom CTA */}
        <AnimatedSection className="text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/10 rounded-[3rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                <Bot className="w-24 h-24 text-[#00D4FF]" />
             </div>
             <h4 className="text-xl md:text-3xl font-heading font-black text-white mb-8 relative z-10 uppercase italic max-w-2xl mx-auto leading-tight">
                NOT SURE WHAT YOU NEED? BOOK A FREE 30-MIN CALL — WE'LL TELL YOU EXACTLY WHAT TO BUILD.
             </h4>
             <Link 
                href="#booking"
                className="inline-flex items-center gap-3 px-12 py-6 bg-[#00D4FF] text-black font-heading font-black text-sm uppercase tracking-widest hover:bg-white transition-all rounded-2xl shadow-[0_15px_40px_rgba(0,212,255,0.3)] relative z-10"
             >
                BOOK FREE STRATEGY CALL <ArrowRight className="w-5 h-5" />
             </Link>
             <p className="mt-6 text-[#8A8A9A] font-mono text-[9px] uppercase tracking-[0.3em] relative z-10">
                ⚡ No hard selling. Just honest advice.
             </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
