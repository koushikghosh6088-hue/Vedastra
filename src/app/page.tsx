'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import {
  ArrowRight, Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  ArrowUpRight, Bot, Workflow, Users, Target, Star
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { CoreSphere, CyberTorus } from '@/components/ServiceModels';
import HeroEnvironment from '@/components/HeroEnvironment';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { id: 'web', icon: Globe, title: 'Web Development', desc: 'High-performance, scalable web architectures.', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 'mobile', icon: Smartphone, title: 'Mobile Apps', desc: 'Seamless native experiences.', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 'ai-agents', icon: Phone, title: 'AI Voice Agents', desc: 'Intelligent calling agents handling leads 24/7.', span: 'col-span-1 md:col-span-1 row-span-2', accent: true },
  { id: 'automation', icon: Cog, title: 'Automation', desc: 'End-to-end workflow elimination.', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 'marketing', icon: TrendingUp, title: 'Marketing', desc: 'Data-driven growth.', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 'chat', icon: MessageSquare, title: 'AI Chat', desc: 'Smart conversion bots.', span: 'col-span-1 md:col-span-1 row-span-1' },
];

const projects = [
  { title: 'NeuralFlow', category: 'AI Infrastructure', image: 'https://images.unsplash.com/photo-1639762681485-359997ed782e?auto=format&fit=crop&q=80&w=800' },
  { title: 'Nexus UI', category: 'Design System', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
  { title: 'Quantum App', category: 'Mobile Solution', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800' },
  { title: 'Aether OS', category: 'Web Ecosystem', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    if (headlineRef.current && subheadlineRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(headlineRef.current, 
        { y: 100, opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.out', delay: 0.5 }
      );
      
      tl.fromTo(subheadlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );
    }

    // Horizontal Scroll Logic
    if (horizontalSectionRef.current && horizontalTrackRef.current) {
      const track = horizontalTrackRef.current;
      const amountToScroll = track.offsetWidth - window.innerWidth;

      gsap.to(track, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.offsetWidth}`,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* ═══════════ CINEMATIC HERO ═══════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 cursor-default"
      >
        {/* Immersive Atmosphere & Hero Environment */}
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1)_0%,transparent_80%)] pointer-events-none" />
        <div className="bg-grain opacity-[0.05]" />

        {/* High-Tech 3D Canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#0ea5e9" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
            
            <Environment preset="city" />
            <HeroEnvironment />
            
            <PresentationControls 
              global 
              rotation={[0, 0, 0]} 
              polar={[-0.2, 0.2]} 
              azimuth={[-0.4, 0.4]}
              snap={true}
            >
              <group scale={1.2}>
                <CoreSphere />
              </group>
            </PresentationControls>
          </Canvas>
        </div>

        <div className="relative z-20 max-w-[1550px] mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-blue-400/20 mb-6 magnetic-wrap hover:border-blue-400/40 transition-colors">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-shimmer">
                Neural Hub // Protocol 8.42
              </span>
            </div>

            <div className="relative overflow-visible">
              <h1 
                ref={headlineRef}
                className="text-[4rem] md:text-[7rem] lg:text-[9.5rem] font-heading font-black leading-[0.8] tracking-tighter mb-10 max-w-7xl mx-auto uppercase"
              >
                ARCHITECTING<br />
                <span className="gradient-text italic opacity-90">DIGITAL</span> FRONTIERS.
              </h1>
            </div>

            <p 
              ref={subheadlineRef}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-mono font-light leading-relaxed mb-16 tracking-wide"
            >
              Engineering mission-critical digital infrastructure for the next generation of autonomous AI and high-performance enterprises.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
              <div className="magnetic-wrap">
                <Link href="/contact" className="btn-primary px-10 py-5">
                  INITIALIZE PROJECT <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="magnetic-wrap">
                <Link href="/portfolio" className="text-blue-400/60 hover:text-blue-400 font-mono text-sm uppercase tracking-widest underline underline-offset-8 transition-all">
                  Access Archive
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-400/50 to-transparent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 rotate-90 origin-left ml-2">Scroll</span>
        </motion.div>
      </motion.section>

      {/* ═══════════ SERVICES BENTO GRID ═══════════ */}
      <section className="relative py-32 bg-obsidian z-10 rounded-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1550px] mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-[3rem] md:text-[5rem] font-heading font-bold leading-none tracking-tighter mb-4">
              CAPABILITIES_<br/><span className="text-blue-400 italic">GRID</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl">
              Comprehensive architectural components engineered to scale operations through logic and design.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {services.map((svc, i) => (
              <AnimatedSection 
                key={svc.id} 
                className={`${svc.span} group perspective-1200`}
                delay={i * 0.1}
              >
                <div 
                  className={`w-full h-full rounded-[2.5rem] border overflow-hidden relative transition-all duration-700 hover-3d glass-premium ${
                    svc.accent 
                      ? 'bg-blue-400 border-blue-400 text-black shadow-[0_20px_50px_rgba(14,165,233,0.3)]' 
                      : 'border-white/10 text-white hover:border-blue-400/40'
                  }`}
                  data-cursor-text="EXPLORE"
                >
                  
                  {/* Background Accents based on sizing */}
                  {svc.accent && (
                    <div className="absolute inset-0 bg-grain opacity-50 mix-blend-overlay pointer-events-none" />
                  )}

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 w-full h-full">
                    <div className="flex justify-between items-start">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                        svc.accent ? 'bg-black text-blue-400' : 'bg-white/5 text-blue-400 border border-white/10 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]'
                      }`}>
                        <svc.icon className="w-6 h-6" />
                      </div>
                      <div className={`magnetic-wrap w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 scale-0 group-hover:scale-100 ${
                        svc.accent ? 'border-black/20 text-black bg-black/10' : 'border-blue-400/30 text-blue-400 bg-blue-400/10'
                      }`}>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                      </div>
                    </div>
                    
                    <div className="mt-8 relative z-20 pointer-events-none">
                      {/* 3D secondary Interactive element inside large cards */}
                      {svc.span.includes('row-span-2') && !svc.accent && (
                        <div className="h-40 w-full mb-8 opacity-40 mix-blend-screen pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                           <Canvas shadows dpr={[1, 2]}>
                            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 2]} intensity={2} color="#0ea5e9" />
                            <PresentationControls 
                              global 
                              rotation={[0, 0, 0]} 
                              polar={[-0.2, 0.2]} 
                              azimuth={[-0.5, 0.5]} 
                            >
                              <CyberTorus />
                            </PresentationControls>
                          </Canvas>
                        </div>
                      )}

                      <h3 className={`text-2xl font-bold font-heading mb-2 ${svc.accent ? 'text-black' : 'text-white'}`}>
                        {svc.title}
                      </h3>
                      <p className={`text-sm ${svc.accent ? 'text-black/80 font-medium' : 'text-white/50'} font-mono leading-relaxed`}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Light */}
                  <div className="absolute -inset-20 bg-blue-400/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HORIZONTAL SHOWCASE ═══════════ */}
      <section ref={horizontalSectionRef} className="relative h-screen bg-obsidian overflow-hidden z-20">
        <div className="absolute top-0 left-0 w-full p-20 z-30 pointer-events-none">
          <h2 className="text-[3rem] md:text-[6rem] font-heading font-black tracking-tighter leading-none text-white/10 uppercase">
            FEATURED_<br/><span className="text-blue-400">ARCHIVE</span>
          </h2>
        </div>

        <div ref={horizontalTrackRef} className="flex h-full items-center gap-12 px-[10vw] w-fit">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative w-[350px] md:w-[600px] h-[500px] flex-shrink-0 rounded-[3rem] overflow-hidden glass-premium border-white/5"
              data-cursor-text="VIEW"
            >
              <img 
                src={project.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                alt={project.title}
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black to-transparent">
                <p className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-4">{project.category}</p>
                <h3 className="text-4xl md:text-6xl font-heading font-black text-white">{project.title}</h3>
              </div>
            </div>
          ))}
          
          <div className="w-[400px] h-[500px] flex-shrink-0 flex flex-col justify-center gap-6">
            <h4 className="text-3xl font-heading font-bold text-white/40">AND MORE_</h4>
            <Link href="/portfolio" className="btn-secondary w-fit">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SYSTEM ARCHITECTURE ═══════════ */}
      <section className="relative py-40 bg-mesh-dark overflow-hidden z-10">
        <div className="absolute inset-0 bg-[#080808]/80 z-0" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400/80">Protocol Framework</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-[0.8] mb-12 uppercase">
                ENGINEERING <br/><span className="italic font-light text-blue-400">SOLID</span> LOGIC.
              </h2>

              <div className="space-y-16 mt-16">
                {[
                  { num: '01', title: 'Neural Blueprints', desc: 'Generating complex digital architectures with AI-driven scaling foundations.' },
                  { num: '02', title: 'System Hardening', desc: 'Stress-testing infrastructure against ultra-high concurrency loads.' },
                  { num: '03', title: 'Deployment Zero', desc: 'Final initialization of mission-critical systems across global clusters.' },
                ].map((step, i) => (
                  <div key={step.num} className="flex gap-8 group cursor-default">
                    <div className="font-mono text-3xl font-bold text-white/10 group-hover:text-blue-400 transition-colors shrink-0 pt-1">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold font-heading mb-4 text-white group-hover:translate-x-2 transition-transform">{step.title}</h4>
                      <p className="text-white/40 text-lg leading-relaxed max-w-md font-mono">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <div className="relative h-[700px] w-full flex items-center justify-center">
              {/* Architecture Block Visual */}
              <div className="absolute inset-0 bg-blue-400/5 blur-[120px] rounded-full animate-pulse-glow" />
              
              <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                <Canvas shadows dpr={[1, 2]}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} color="#0ea5e9" />
                  <PresentationControls
                    global
                    rotation={[0.1, 0.5, 0]}
                    polar={[-0.4, 0.4]}
                    azimuth={[-1, 1]}
                  >
                    <group scale={1.8}>
                      <CyberTorus /> {/* This is now our ArchitectureBlock */}
                    </group>
                  </PresentationControls>
                </Canvas>
              </div>

              {/* Data Node Tags */}
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0.6, 0.9], [0, -100]) }}
                className="absolute top-1/4 -right-10 glass-premium px-6 py-4 rounded-2xl border-blue-400/20 backdrop-blur-xl animate-float pointer-events-none"
              >
                 <p className="font-mono text-[10px] text-blue-400/60 mb-1">NODE_ALPHA</p>
                 <p className="text-white font-bold tracking-tight">ENCRYPTED_DATA_FLOW</p>
              </motion.div>
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0.6, 0.9], [0, 100]) }}
                className="absolute bottom-1/4 -left-10 glass-premium px-6 py-4 rounded-2xl border-blue-400/20 backdrop-blur-xl animate-float [animation-delay:2s] pointer-events-none"
              >
                 <p className="font-mono text-[10px] text-blue-400/60 mb-1">INSTANCE_08</p>
                 <p className="text-white font-bold tracking-tight">AI_LOGIC_ACTIVE</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
