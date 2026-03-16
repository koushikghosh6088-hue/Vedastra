'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Zap, Target, Eye, Heart, Users, Globe, Award, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import TypewriterSubline from '@/components/TypewriterSubline';

const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });

// Use the global View component for single-canvas architecture
const View = dynamic(() => import('@react-three/drei').then(mod => mod.View), { ssr: false });
const PerspectiveCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const PresentationControls = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const Environment = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

const stats = [
  { value: '150+', label: 'Systems Deployed', icon: Zap },
  { value: '50+', label: 'Global Contracts', icon: Globe },
  { value: '15+', label: 'AI Engineers', icon: Users },
  { value: '5+', label: 'Years Dev', icon: Award },
];

const values = [
  { icon: Zap, title: 'Constant Innovation', desc: 'Deploying cutting-edge AI architectures ahead of market saturation.' },
  { icon: Target, title: 'Absolute Precision', desc: 'Surgical focus on delivering measurable ROI and operational efficiency.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'Open-book engineering, honest timelines, zero hidden technical debt.' },
  { icon: Heart, title: 'Partnership First', desc: 'Building enterprise infrastructure meant to generate long-term value.' },
];

const team = [
  { name: 'Alex Johnson', role: 'Chief Executive Officer' },
  { name: 'Sarah Chen', role: 'Chief Technology Officer' },
  { name: 'Michael Davis', role: 'Head of Neural Architecture' },
  { name: 'Emily Rodriguez', role: 'Lead Interface Designer' },
  { name: 'James Park', role: 'Full-Stack Lead' },
  { name: 'Lisa Wang', role: 'Director of Growth' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex flex-col justify-center cursor-default">
        {/* Immersive Atmosphere */}
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-blue-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-premium border-blue-400/20 mb-8 magnetic-wrap">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400/80">
                  Mission Protocol // Active
                </span>
              </div>
              <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-heading font-extrabold leading-[0.8] tracking-tighter mb-8 text-white">
                THE JOINT<br />
                <span className="gradient-text italic">PHILOSOPHY</span>
              </h1>
              <TypewriterSubline 
                phrases={[
                  "Engineering Enterprise Architecture",
                  "Logic-Driven Performance Labs",
                  "Next-Generation AI Processing",
                  "Immersive Interface Engineering"
                ]}
                className="mb-10 text-xl md:text-2xl justify-center lg:justify-start"
              />
            </motion.div>

            {/* Interactive Hero Visual Piece */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 h-[500px] relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[450px]">
                <Image
                  src="/3d-icons/about_hero.png"
                  alt="Joint Philosophy"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(14,165,233,0.4)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className={`glass-panel border-white/5 rounded-[2rem] p-8 text-center group transition-all duration-500 hover:border-blue-400/30 hover:bg-white/5`}>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400/10 transition-colors">
                    <stat.icon className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="text-[2.5rem] font-heading font-bold text-white mb-2 leading-none">{stat.value}</div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 relative bg-obsidian border-t border-white/10 mt-12 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <AnimatedSection className="lg:col-span-5 sticky top-32">
              <span className="font-mono text-xs tracking-widest uppercase block mb-6 text-white/40">Our Story</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-white">
                From Startup to <span className="text-blue-400">Global Agency</span>
              </h2>
              <div className="space-y-6 text-white/50 text-xl font-mono font-light leading-relaxed">
                <p>Joint WebSolutions was forged with a singular mandate: to engineer cutting-edge AI and web architecture accessible to agile enterprises.</p>
                <p>Today, we orchestrate systems across 4 continents, helping businesses harness automation and performance to dominate their sectors.</p>
                <p>Our syndicate combines ruthless technical efficiency with premium design to deliver platforms that run like a machine and look like a masterpiece.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="lg:col-span-6 lg:col-start-7">
              <div className="glass-panel border-blue-400/20 rounded-[3rem] p-8 md:p-12">
                <div className="space-y-0 relative before:absolute before:inset-y-0 before:left-[17px] md:before:left-[21px] before:w-px before:bg-gradient-to-b before:from-blue-400 before:via-white/10 before:to-transparent">
                <div className="space-y-0 relative before:absolute before:inset-y-0 before:left-[17px] md:before:left-[21px] before:w-px before:bg-gradient-to-b before:from-[#0ea5e9] before:via-white/10 before:to-transparent">
                  {[
                    { year: '2019', event: 'Founded Joint WebSolutions', detail: 'Initialized with a focus on enterprise-grade web architecture.' },
                    { year: '2020', event: 'Launched AI Engineering unit', detail: 'Integration of neural processing for automated decision logic.' },
                    { year: '2021', event: 'Global infrastructure expansion', detail: 'Edge deployment across 12 primary clusters worldwide.' },
                    { year: '2022', event: 'Deployed v1 AI Voice Agents', detail: 'Sub-500ms conversational agents for enterprise client management.' },
                    { year: '2023', event: '100+ active enterprise clusters', detail: 'Scale achieved through autonomous optimization protocols.' },
                    { year: '2024', event: 'Omnichannel Automation Engine', detail: 'Self-healing workflows deployed for mission-critical operations.' },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.year} 
                      initial={{ opacity: 0, x: 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: i * 0.1 }} 
                      className="relative pl-12 py-8 border-b border-white/5 last:border-0 group"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black border border-white/20 flex items-center justify-center group-hover:border-[#0ea5e9] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all">
                        <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-[#0ea5e9] transition-colors" />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                        <div className="text-2xl font-black font-heading text-white group-hover:text-[#0ea5e9] transition-colors">{item.year}</div>
                        <div className="text-sm font-bold font-mono text-white/70 uppercase tracking-tighter">{item.event}</div>
                      </div>
                      <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{item.detail}</div>
                    </motion.div>
                  ))}
                </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative hidden grid-container">
        {/* Intentionally hidden grid container style logic kept if needed, but using bento instead */}
      </section>

      <section className="py-32 relative bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-[3rem] md:text-[4.5rem] font-heading font-black tracking-tighter text-white leading-none">
              CORE <span className="text-white/30 italic">DIRECTIVES</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="glass-premium border-white/10 rounded-[2rem] p-8 h-full group hover-3d transition-all duration-700 hover:border-blue-400/30">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{value.title}</h3>
                  <p className="text-white/40 text-sm font-mono leading-relaxed uppercase tracking-widest text-[11px] opacity-60 group-hover:opacity-100 transition-opacity">{value.desc}</p>
                  
                  {/* Hover Accent */}
                  <div className="absolute -inset-20 bg-blue-400/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roster */}
      <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-[3rem] md:text-[4.5rem] font-heading font-black tracking-tighter mb-4 text-white leading-none">
              <span className="gradient-text italic">THE SYNDICATE</span>
            </h2>
            <p className="font-mono text-white/40 uppercase tracking-widest text-sm max-w-xl mx-auto">
              Elite developers, designers, and AI architects
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group text-center cursor-default">
                  <div className={`w-full aspect-square rounded-[2rem] border border-white/10 ${
                    i % 2 === 0 ? 'bg-[#0ea5e9]/5 hover:border-[#0ea5e9]/30' : 'bg-white/5 hover:border-white/30'
                  } mb-6 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(14,165,233,0.1)] transition-all duration-500 overflow-hidden relative backdrop-blur-sm`}>
                    
                    {/* Abstract Profile Visual */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    
                    <Users className={`w-12 h-12 ${i % 2 === 0 ? 'text-[#0ea5e9]/40' : 'text-white/20'} group-hover:text-[#0ea5e9] group-hover:scale-110 transition-all duration-500 z-10`} />
                    
                    {/* Scanner Effect */}
                    <motion.div 
                      animate={{ top: ['-10%', '110%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent opacity-0 group-hover:opacity-100 z-20"
                    />
                    
                    {/* Detail Overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-2 py-1 rounded bg-black/40 border border-[#0ea5e9]/20 text-[8px] font-mono text-[#0ea5e9] uppercase tracking-tighter">
                        Active_Agent
                      </div>
                    </div>
                  </div>
                  <h4 className="text-sm font-black font-heading text-white mb-1 group-hover:text-[#0ea5e9] transition-colors text-balance uppercase tracking-tight">{member.name}</h4>
                  <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] text-balance leading-snug">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-black border-t border-white/10">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6">
              ENGAGE <span className="text-blue-400 italic">SYSTEMS</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl mx-auto mb-10">
              Ready to construct the next era of your enterprise?
            </p>
            <Link href="/contact" className="btn-primary group">
              Establish Contact <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
