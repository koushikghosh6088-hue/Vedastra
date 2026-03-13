'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Zap, Target, Eye, Heart, Users, Globe, Award, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load 3D components to keep the page fast
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });

const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

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
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-blue-400/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        {/* Background 3D element */}
        <div className="absolute inset-y-0 right-0 w-1/2 z-0 opacity-30 mix-blend-screen pointer-events-none hidden lg:block">
            <DynamicCanvas shadows dpr={[1, 2]}>
              <DynamicCamera makeDefault position={[0, 0, 5]} fov={50} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 10, 5]} intensity={2} color="#0ea5e9" />
              <DynamicEnv preset="studio" />
              <DynamicPresentation global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]}>
                 <DynamicCoreSphere />
              </DynamicPresentation>
            </DynamicCanvas>
        </div>

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-blue-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse inline-block mr-2" />
              Agency Profile
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-extrabold leading-[0.85] tracking-tighter mb-8 max-w-5xl">
              BUILDING THE <br/><span className="gradient-text italic">FUTURE OF DIGITAL</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl font-mono leading-relaxed">
              We&apos;re a highly specialized strike-team of engineers, designers, and AI architects dedicated to creating transformative digital infrastructure for the modern frontier.
            </p>
          </motion.div>
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
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50 mix-blend-overlay" />
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
                  {[
                    { year: '2019', event: 'Founded Joint WebSolutions' },
                    { year: '2020', event: 'Launched AI Engineering unit' },
                    { year: '2021', event: 'Global infrastructure expansion' },
                    { year: '2022', event: 'Deployed v1 AI Voice Agents' },
                    { year: '2023', event: 'Surpassed 100+ active enterprise clusters' },
                    { year: '2024', event: 'Launched Omnichannel Automation Engine' },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.year} 
                      initial={{ opacity: 0, x: 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: i * 0.1 }} 
                      className="relative pl-12 py-6 border-b border-white/5 last:border-0 group"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black border border-white/20 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-blue-400 transition-colors" />
                      </div>
                      <div className="text-2xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">{item.year}</div>
                      <div className="text-sm font-mono text-white/50">{item.event}</div>
                    </motion.div>
                  ))}
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
                <div className="glass-panel border-white/10 rounded-[2rem] p-8 h-full group hover:bg-white/5 transition-all duration-500 hover:border-blue-400/30">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-400/10 transition-all">
                    <value.icon className="w-6 h-6 text-white/50 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{value.title}</h3>
                  <p className="text-white/50 text-sm font-mono leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roster */}
      <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

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
                    i % 2 === 0 ? 'bg-blue-400/5 hover:border-blue-400/30' : 'bg-white/5 hover:border-white/30'
                  } mb-6 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all duration-500 overflow-hidden relative`}>
                    
                    {/* Placeholder for actual photo, using geometric abstraction for now */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                    <Users className={`w-10 h-10 ${i % 2 === 0 ? 'text-blue-400/50' : 'text-white/30'} group-hover:scale-110 transition-transform`} />
                    
                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
                  </div>
                  <h4 className="text-sm font-bold font-heading text-white mb-1 group-hover:text-blue-400 transition-colors text-balance">{member.name}</h4>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-balance leading-snug">{member.role}</p>
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
