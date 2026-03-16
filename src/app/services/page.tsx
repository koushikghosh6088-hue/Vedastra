'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  CheckCircle2, ArrowRight, ArrowUpRight, BarChart3, Database, Shield, Bot
} from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import TypewriterSubline from '@/components/TypewriterSubline';

// Dynamically load 3D components to keep the page fast
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });
const DynamicCyberTorus = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CyberTorus), { ssr: false });

// Use the global View component for single-canvas architecture
const View = dynamic(() => import('@react-three/drei').then(mod => mod.View), { ssr: false });
const PerspectiveCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const PresentationControls = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const Environment = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Architecture',
    desc: 'High-performance, cutting-edge web platforms engineered for scale using modern frameworks like React, Next.js, and Node.js.',
    accent: false,
    features: ['Custom Web Apps', 'SaaS Platforms', 'Dashboard & Admin Panels', 'API Development'],
    benefits: ['Lightning-fast performance', 'Obsidian & Lime Design Systems', 'Scalable infra'],
    image: '/3d-icons/web_dev.png',
    metric: '400ms',
    metricLabel: 'LCP'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Eng',
    desc: 'Cross-platform mobile applications that deliver smooth, native-feeling experiences on iOS and Android.',
    accent: true,
    features: ['iOS & Android Apps', 'React Native', 'Push Notifications', 'In-App Payments'],
    benefits: ['Cross-platform efficiency', 'Native performance', 'Seamless updates'],
    image: '/3d-icons/mobile_app.png',
    metric: '60fps',
    metricLabel: 'Smoothness'
  },
  {
    id: 'workflow',
    icon: Cog,
    title: 'AI Automation',
    desc: "End-to-end workflow automation that eliminates repetitive tasks, streamlines operations, and multiplies your team's productivity.",
    accent: false,
    features: ['Workflow Automation', 'Data Integration', 'Invoice Processing', 'Custom APIs'],
    benefits: ['40+ hours saved/week', 'Zero human errors', 'Real-time visibility'],
    image: '/3d-icons/automation.png',
    metric: '98%',
    metricLabel: 'Efficiency'
  },
  {
    id: 'agents',
    icon: Bot,
    title: 'AI Agents',
    desc: 'Intelligent AI agents that handle inbound and outbound calls, qualify leads, and provide customer support 24/7.',
    accent: true,
    features: ['Call Handling', 'Lead Scoring', 'Booking', 'CRM Integration'],
    benefits: ['24/7 availability', '70% cost reduction', 'Instant response'],
    image: '/3d-icons/ai_agents.png',
    metric: '24/7',
    metricLabel: 'Uptime'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex flex-col justify-center cursor-default">
        {/* Immersive Atmosphere */}
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute top-0 left-[-10%] w-[1000px] h-[1000px] bg-blue-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
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
                  Engineering Protocol // Active
                </span>
              </div>
              <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-heading font-extrabold leading-[0.8] tracking-tighter mb-8">
                SOLUTIONS<br />
                <span className="gradient-text italic">ENGINEERED</span>
              </h1>
              <TypewriterSubline 
                phrases={[
                  "Optimizing Enterprise Workflows",
                  "Deploying Mission-Critical Labs",
                  "Engineering Autonomous Systems",
                  "Architecting Digital Futures"
                ]}
                className="mb-10 text-xl md:text-2xl justify-center lg:justify-start"
              />
              
              <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start">
                <div className="magnetic-wrap">
                  <Link href="/contact" className="btn-primary">
                    Start Scoping <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Interactive 3D Sidepiece */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 h-[500px] relative hidden lg:block"
            >
              <View className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#0ea5e9" />
                <Environment preset="city" />
                <PresentationControls 
                  global 
                  rotation={[0, 0, 0]} 
                  polar={[-0.3, 0.3]} 
                  azimuth={[-0.6, 0.6]}
                  snap={true}
                >
                  <DynamicCoreSphere />
                </PresentationControls>
              </View>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid (Alternating split blocks) */}
      <div className="bg-black border-t border-white/10 rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden pt-24 pb-32">
        
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
                  <TypewriterSubline 
                phrases={[
                  "Optimizing Enterprise Workflows",
                  "Deploying Mission-Critical Labs",
                  "Engineering Autonomous Systems",
                  "Architecting Digital Futures"
                ]}
                className="mb-10 text-xl md:text-2xl justify-center lg:justify-start"
              />

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
                  <div className={`glass-premium rounded-[3rem] p-10 md:p-14 relative overflow-hidden group min-h-[550px] flex flex-col justify-end hover-3d transition-all duration-700 ${
                    service.accent ? 'border-[#0ea5e9]/30 shadow-[0_0_50px_rgba(14,165,233,0.1)]' : 'border-white/5'
                  }`}>
                    
                    {/* Floating Image Visual */}
                    <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                      <div className="relative w-full aspect-square max-w-[400px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain drop-shadow-[0_20px_50px_rgba(14,165,233,0.3)]"
                        />
                        {/* Recursive scanning light effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />
                      </div>
                    </div>

                    {/* Floating Metric Badge */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute top-10 right-10 glass-premium px-6 py-4 rounded-2xl border-[#0ea5e9]/20 animate-float backdrop-blur-2xl z-20"
                    >
                      <p className="font-mono text-[10px] text-[#0ea5e9]/60 mb-1 uppercase tracking-tighter">{service.metricLabel}</p>
                      <p className="text-white font-black tracking-tight text-2xl">{service.metric}</p>
                    </motion.div>

                    {/* Features list overlay at bottom */}
                    <div className="relative z-20 glass-premium px-8 py-8 rounded-[2.5rem] w-full max-w-[320px] ml-auto backdrop-blur-2xl border-white/10 mt-auto shadow-2xl">
                      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <h3 className="text-[10px] font-mono uppercase text-white/40 tracking-[0.2em]">{service.title} // CORE</h3>
                        <service.icon className={`w-5 h-5 ${service.accent ? 'text-[#0ea5e9]' : 'text-white/40'}`} />
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={feature} className="flex justify-between items-center text-[10px] font-mono group-hover:pl-2 transition-all duration-300">
                            <span className="text-white/60 group-hover:text-[#0ea5e9] transition-colors uppercase tracking-wider">{feature}</span>
                            <div className="w-1 h-1 rounded-full bg-[#0ea5e9]/50" />
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
                <Cog className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6">
              SYSTEM <span className="text-blue-400 italic">INITIALIZATION</span>
            </h2>
              <TypewriterSubline 
                phrases={[
                  "Optimizing Enterprise Workflows",
                  "Deploying Mission-Critical Labs",
                  "Engineering Autonomous Systems",
                  "Architecting Digital Futures"
                ]}
                className="mb-10 text-xl md:text-2xl justify-center lg:justify-start"
              />
            <Link href="/contact" className="btn-primary group">
              Start Project Sequence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
