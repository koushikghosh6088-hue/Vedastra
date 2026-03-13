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

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <>
      {/* ═══════════ HERO (Split Grid) ═══════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-20"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-20 max-w-[1550px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Giant Typography */}
          <div className="lg:col-span-7 space-y-8 relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse-fast inline-block" />
                Joint System Core Online
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-extrabold leading-[0.85] tracking-tighter"
            >
              DIGITAL<br />
              <span className="gradient-text italic opacity-90 pr-4">FUTURES</span><br />
              REALIZED.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/50 max-w-lg font-mono font-light tracking-tight leading-relaxed"
            >
              Next-generation web architectures propelled by AI automation and striking industrial design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <Link href="/contact" className="btn-primary">
                Deploy System
              </Link>
              <Link href="/portfolio" className="text-white/70 hover:text-white font-mono text-xs uppercase tracking-widest underline underline-offset-4 flex items-center gap-2 transition-colors">
                View Schematics <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: 3D Mockup Box */}
          <div className="lg:col-span-5 h-[500px] lg:h-[700px] relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: -5, rotateX: 5 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="w-full h-full glass-panel overflow-hidden relative group hidden lg:block"
            >
              {/* Interactive 3D Canvas */}
              <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
                <Canvas shadows dpr={[1, 2]}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={2} color="#0ea5e9" />
                  <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
                  <Environment preset="city" />
                  <PresentationControls 
                    global 
                    rotation={[0.13, 0.1, 0]} 
                    polar={[-0.4, 0.2]} 
                    azimuth={[-1, 0.75]}
                  >
                    <CoreSphere />
                  </PresentationControls>
                </Canvas>
              </div>

              {/* Mock UI Overlay */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 pointer-events-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="px-4 py-1 rounded-full bg-white/10 font-mono text-[10px] uppercase text-white/50 tracking-widest backdrop-blur-md">
                  Simulation
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                <div className="glass px-6 py-4 rounded-xl flex items-center gap-4 animate-float">
                  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">AI Agent Processing</div>
                    <div className="text-blue-400 font-mono text-[10px] tracking-widest mt-1">STATUS: OPTIMAL</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
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
                className={`${svc.span} group perspective-1000`}
                delay={i * 0.1}
              >
                <div className={`w-full h-full rounded-[2.5rem] border overflow-hidden relative transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl ${
                  svc.accent 
                    ? 'bg-blue-400 border-blue-400 text-black hover:shadow-blue-400/20' 
                    : 'bg-white/[0.02] border-white/10 text-white hover:border-blue-400/40 hover:bg-white/[0.04]'
                }`}>
                  
                  {/* Background Accents based on sizing */}
                  {svc.accent && (
                    <div className="absolute inset-0 bg-grain opacity-50 mix-blend-overlay pointer-events-none" />
                  )}

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 w-full h-full">
                    <div className="flex justify-between items-start">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                        svc.accent ? 'bg-black text-blue-400' : 'bg-white/5 text-blue-400 border border-white/10 group-hover:bg-blue-400 group-hover:text-black transition-colors'
                      }`}>
                        <svc.icon className="w-6 h-6" />
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        svc.accent ? 'border-black/20 text-black group-hover:bg-black group-hover:text-blue-400' : 'border-white/10 text-white/50 group-hover:border-blue-400 group-hover:text-blue-400 group-hover:-rotate-45'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="mt-8 relative z-20 pointer-events-none">
                      {/* 3D secondary Interactive element inside large cards */}
                      {svc.span.includes('row-span-2') && !svc.accent && (
                        <div className="h-40 w-full mb-8 opacity-60 mix-blend-screen pointer-events-auto">
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
                      <p className={`text-sm ${svc.accent ? 'text-black/70 font-medium' : 'text-white/50'} font-mono leading-relaxed`}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ METHODOLOGY CONTRAST ═══════════ */}
      <section className="relative py-32 bg-[#e5e5e5] text-black rounded-t-[4rem] -mx-4 md:mx-0 px-6 mt-32 z-20 mb-32">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/5 mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-black/60">Execution Framework</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-12">
                HOW WE BUILD <br/><span className="italic font-light text-blue-400">SYSTEMS</span>
              </h2>

              <div className="space-y-12">
                {[
                  { num: '01', title: 'Architecture Planning', desc: 'Blueprint generation focused on scaling potential, AI integration points, and component hierarchy.' },
                  { num: '02', title: 'Agile Implementation', desc: 'Rapid prototyping and deployment using Next.js, Node.js, and specialized AI models.' },
                  { num: '03', title: 'System Validation', desc: 'Rigorous conversion tracking and load testing before public access is granted.' },
                ].map((step, i) => (
                  <div key={step.num} className="flex gap-6 group cursor-default">
                    <div className="font-mono text-2xl font-bold text-black/20 group-hover:text-black transition-colors shrink-0 pt-1">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold font-heading mb-3">{step.title}</h4>
                      <p className="text-black/60 text-lg leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="relative h-[600px] w-full items-center justify-center hidden lg:flex">
             {/* 3D secondary Interactive element */}
             <div className="w-[500px] h-[500px] bg-black rounded-full overflow-hidden flex items-center justify-center shadow-2xl relative">
                <Canvas shadows dpr={[1, 2]}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 2]} intensity={3} color="#ffffff" />
                  <Environment preset="studio" />
                  <PresentationControls 
                    global 
                    rotation={[0.13, 0.1, 0]} 
                    polar={[-0.4, 0.2]} 
                    azimuth={[-1, 0.75]} 
                  >
                    <CyberTorus />
                  </PresentationControls>
                </Canvas>

                {/* Glass testimonial overlay */}
                <div className="absolute -bottom-10 -left-10 bg-white/20 backdrop-blur-2xl border border-white/40 p-6 rounded-3xl w-80 shadow-2xl transform rotate-3 animate-float border-white/20 z-30">
                  <div className="flex gap-1 mb-4">
                     {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-black text-black" />)}
                  </div>
                  <p className="font-heading font-medium text-black leading-snug mb-4">
                    "Total architectural overhaul. The AI pipelines saved 40 hours a week."
                  </p>
                  <p className="font-mono text-xs text-black/60 uppercase">System Admin - TechFlow</p>
                </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
