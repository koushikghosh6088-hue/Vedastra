'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  CheckCircle2, ArrowRight, ArrowUpRight, BarChart3, Database, Shield
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load 3D components to keep the page fast
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });
const DynamicCyberTorus = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CyberTorus), { ssr: false });

// We also need Canvas for the models
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Architecture',
    desc: 'High-performance, cutting-edge web platforms engineered for scale using modern frameworks like React, Next.js, and Node.js.',
    accent: false,
    features: ['Custom Web Apps', 'SaaS Platforms', 'Dashboard & Admin Panels', 'API Development'],
    benefits: ['Lightning-fast performance', 'Obsidian & Lime Design Systems', 'Scalable infra'],
    has3D: false
  },
  {
    id: 'calling',
    icon: Phone,
    title: 'AI Voice Agents',
    desc: 'Intelligent voice agents that handle inbound and outbound calls, qualify leads, and provide customer support 24/7.',
    accent: true, // Lime accented
    features: ['Inbound Call Handling', 'Lead Qualification', 'Appointment Booking', 'CRM Integration'],
    benefits: ['24/7 availability', '70% cost reduction', 'Instant response times'],
    has3D: true,
    model: 'sphere'
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Business Automation',
    desc: "End-to-end workflow automation that eliminates repetitive tasks, streamlines operations, and multiplies your team's productivity.",
    accent: false,
    features: ['Workflow Automation', 'Data Integration', 'Invoice Processing', 'Custom APIs'],
    benefits: ['40+ hours saved/week', 'Zero human errors', 'Real-time visibility'],
    has3D: true,
    model: 'torus'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Eng',
    desc: 'Cross-platform mobile applications that deliver smooth, native-feeling experiences on iOS and Android.',
    accent: true,
    features: ['iOS & Android Apps', 'React Native', 'Push Notifications', 'In-App Payments'],
    benefits: ['Cross-platform efficiency', 'Native performance', 'Seamless updates'],
    has3D: false
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-blue-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse inline-block mr-2" />
              Service Capabilities
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-extrabold leading-[0.85] tracking-tighter mb-8">
              SOLUTIONS<br />
              <span className="gradient-text italic pr-4">ENGINEERED</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl font-mono leading-relaxed">
              From autonomous AI agents to high-performance web systems, we provide digital infrastructure that accelerates business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Alternating split blocks) */}
      <div className="bg-black border-t border-white/10 rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50 mix-blend-overlay" />
        
        {services.map((service, i) => (
          <section key={service.id} id={service.id} className="py-24 relative">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <AnimatedSection 
                  direction={i % 2 === 0 ? 'left' : 'right'} 
                  className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60">Module {i+1}</span>
                  </div>
                  
                  <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 ${service.accent ? 'text-blue-400' : 'text-white'}`}>
                    {service.title}
                  </h2>
                  <p className="text-white/50 text-xl leading-relaxed mb-10 font-mono font-light">
                    {service.desc}
                  </p>

                  <div className="space-y-4 mb-10">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${service.accent ? 'bg-blue-400' : 'bg-white/10'}`}>
                          <CheckCircle2 className={`w-3 h-3 ${service.accent ? 'text-black' : 'text-blue-400'}`} />
                        </div>
                        <span className="text-white/70 font-mono text-sm uppercase tracking-wider">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className={`group relative overflow-hidden px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 inline-flex items-center gap-2 ${
                    service.accent ? 'bg-blue-400 text-black shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:scale-105' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-400/40'
                  }`}>
                    Deploy Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </AnimatedSection>

                {/* Visual / 3D Content */}
                <AnimatedSection 
                  direction={i % 2 === 0 ? 'right' : 'left'} 
                  delay={0.2} 
                  className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className={`glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group min-h-[500px] flex flex-col justify-end ${
                    service.accent ? 'border-blue-400/20 hover:border-blue-400/50' : ''
                  }`}>
                    
                    {/* Background Gradients */}
                    <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${
                      service.accent ? 'bg-gradient-to-br from-blue-400 to-transparent' : 'bg-gradient-to-br from-white to-transparent'
                    }`} />

                    {/* 3D Canvas Context */}
                    {service.has3D && (
                      <div className="absolute inset-x-0 top-0 bottom-40 z-10 opacity-70 mix-blend-screen pointer-events-auto">
                        <DynamicCanvas shadows dpr={[1, 2]}>
                          <DynamicCamera makeDefault position={[0, 0, 5]} fov={45} />
                          <ambientLight intensity={service.accent ? 0.5 : 1} />
                          <directionalLight position={[5, 5, 2]} intensity={2} color={service.accent ? '#ccff00' : '#ffffff'} />
                          <DynamicEnv preset="studio" />
                          <DynamicPresentation 
                            global 
                            rotation={[0.1, 0, 0]} 
                            polar={[-0.2, 0.2]} 
                            azimuth={[-0.5, 0.5]} 
                          >
                            {service.model === 'sphere' ? <DynamicCoreSphere /> : <DynamicCyberTorus />}
                          </DynamicPresentation>
                        </DynamicCanvas>
                      </div>
                    )}

                    {/* Features list overlay at bottom */}
                    <div className="relative z-20 glass px-6 py-6 rounded-2xl w-full max-w-sm ml-auto backdrop-blur-xl border-white/10 mt-auto">
                      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                        <h3 className="text-xs font-mono uppercase text-white/40 tracking-[0.2em]">Architecture</h3>
                        <service.icon className={`w-4 h-4 ${service.accent ? 'text-blue-400' : 'text-white'}`} />
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={feature} className="flex justify-between items-center text-sm font-mono group-hover:pl-2 transition-all duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                            <span className="text-white/60">{feature}</span>
                            <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Divider lines between sections */}
            {i < services.length - 1 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </section>
        ))}
      </div>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center p-6 rounded-full glass mb-8 animate-float">
                <Cog className="w-8 h-8 text-lime-400" />
            </div>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6">
              SYSTEM <span className="text-lime-400 italic">INITIALIZATION</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl mx-auto mb-10">
              Initiate contact protocols to deploy custom digital architecture for your enterprise.
            </p>
            <Link href="/contact" className="btn-primary group">
              Start Project Sequence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
