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
    title: 'Website Development',
    desc: 'We build sub-400ms High-Fidelity Conversion Engines. Dominate your niche with a modern, ultra-fast web architecture.',
    accent: false,
    features: ['Next.js App Router Architecture', 'Sub-400ms Interaction Latency', 'Global CDN Deployment', 'SEO Dominance Framework'],
    benefits: ['Lightning-fast performance', 'Obsidian & Lime Design Systems', 'Scalable infra'],
    image: '/3d-icons/web_dev.png',
    metric: '400ms',
    metricLabel: 'LCP'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Deploy Seamless Omnichannel Native Apps. Keep your brand in your customers\' pockets 24/7.',
    accent: true,
    features: ['iOS & Android Native Performance', 'Liquid UI/UX Design', 'Offline-First Synchronization', 'Biometric Authentication'],
    benefits: ['Cross-platform efficiency', 'Native performance', 'Seamless updates'],
    image: '/3d-icons/mobile_app.png',
    metric: '60fps',
    metricLabel: 'Smoothness'
  },
  {
    id: 'workflow',
    icon: Cog,
    title: 'Business Process Automation',
    desc: 'Eliminate bottlenecks and human error. We build custom automation pipelines that instantly sync your CRM, data handling, and internal communications into one seamless, lightning-fast digital factory.',
    accent: false,
    features: ['Workflow automation', 'Data handling', 'Error elimination', 'Time saving'],
    benefits: ['40+ hours saved/week', 'Zero human errors', 'Real-time visibility'],
    image: '/3d-icons/automation.png',
    metric: '1–2 Wks',
    metricLabel: 'Delivery'
  },
  {
    id: 'agents',
    icon: Bot,
    title: 'AI Calling & Chat Agents',
    desc: 'Scale without overhead. Our intelligent algorithms intercept, engage, and convert leads 24/7 across all channels.',
    accent: true,
    features: ['Autonomous AI Calling Agents', 'RAG-Based AI Messaging Chatbots', 'Custom Neural Workflow Automation', 'Lead Selection Algorithms'],
    benefits: ['24/7 availability', '70% cost reduction', 'Instant response'],
    image: '/3d-icons/ai_agents.png',
    metric: '24/7',
    metricLabel: 'Uptime'
  },
  {
    id: 'seo',
    icon: Target,
    title: 'SEO & Digital Marketing',
    desc: 'Dominant Search Rankings and High-Intent Traffic. We ensure your business is the first thing customers see when they search for your solutions.',
    accent: false,
    features: ['Semantic SEO Framework', 'Competitor Keyword Conquest', 'High-DA Link Building', 'Conversion Rate Optimization'],
    benefits: ['Top 3 Google Rankings', '200%+ Organic Growth', 'Predictable ROI'],
    image: '/3d-icons/marketing.png',
    metric: 'ROI-Driven',
    metricLabel: 'Strategy'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex flex-col justify-center cursor-default">
        {/* Immersive Atmosphere */}
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute top-0 left-[-10%] w-[1000px] h-[1000px] bg-[#0066ff]/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-premium border-[#0066ff]/20 mb-8 magnetic-wrap">
                <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ccff00]">
                  Engineering Protocol // Active
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.2rem] font-heading font-black leading-[0.95] tracking-tighter mb-8 text-white uppercase">
                SOLUTIONS<br />
                <span className="italic text-[#ccff00]">ENGINEERED</span>
              </h1>
              <TypewriterSubline 
                phrases={[
                  "Optimizing Enterprise Workflows",
                  "Deploying Mission-Critical Labs",
                  "Engineering Autonomous Systems",
                  "Architecting Digital Futures"
                ]}
                className="mb-10 text-xl md:text-2xl justify-center lg:justify-start font-body font-medium text-white/80"
              />
              
              <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start">
                <div className="magnetic-wrap">
                  <Link href="/contact" className="btn-primary px-8 py-4 font-heading font-bold uppercase tracking-[0.1em] text-[0.8rem]">
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
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ccff00" />
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
      <div className="bg-obsidian border-t border-white/10 rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden pt-24 pb-32">
        
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
                    <span className="text-[0.65rem] font-mono uppercase tracking-[0.15em] text-[#888888]">Module_{i+1}</span>
                  </div>
                  
                  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-6 uppercase tracking-tighter ${service.accent ? 'text-[#0066ff]' : 'text-white'}`}>
                    {service.title}
                  </h2>
                  <p className="text-[#888888] font-body text-base md:text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <div className="space-y-4 mb-10">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${service.accent ? 'bg-[#0066ff]' : 'bg-white/10'}`}>
                          <CheckCircle2 className={`w-3 h-3 ${service.accent ? 'text-black' : 'text-[#ccff00]'}`} />
                        </div>
                        <span className="text-white/80 font-mono text-[0.7rem] uppercase tracking-[0.1em]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className={`group relative overflow-hidden px-10 py-5 rounded-full text-[0.8rem] font-heading font-black uppercase tracking-[0.12em] transition-all duration-300 inline-flex items-center gap-2 ${
                    service.accent ? 'bg-[#0066ff] text-black shadow-[0_0_30px_rgba(0,102,255,0.2)] hover:scale-105' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#0066ff]/40'
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
                    service.accent ? 'border-[#0066ff]/30 shadow-[0_0_50px_rgba(0,102,255,0.1)]' : 'border-white/5'
                  }`}>
                    
                    {/* Floating Image Visual */}
                    <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                      <div className="relative w-full aspect-square max-w-[400px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          loading="lazy"
                          sizes="400px"
                          className="object-contain drop-shadow-[0_20px_50px_rgba(0,102,255,0.3)]"
                        />
                        {/* Recursive scanning light effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0066ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />
                      </div>
                    </div>

                    {/* Floating Metric Badge */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute top-10 right-10 glass-premium px-6 py-4 rounded-2xl border-[#0066ff]/20 animate-float backdrop-blur-2xl z-20"
                    >
                      <p className="font-mono text-[0.6rem] text-[#888888] mb-1 uppercase tracking-[0.1em]">{service.metricLabel}</p>
                      <p className="text-white font-heading font-black tracking-tight text-2xl">{service.metric}</p>
                    </motion.div>

                    {/* Features list overlay at bottom */}
                    <div className="relative z-20 glass-premium px-8 py-8 rounded-[2.5rem] w-full max-w-[320px] ml-auto backdrop-blur-2xl border-white/10 mt-auto shadow-2xl">
                      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <h3 className="text-[0.65rem] font-mono uppercase text-[#888888] tracking-[0.15em]">{service.title} // CORE</h3>
                        <service.icon className={`w-5 h-5 ${service.accent ? 'text-[#0066ff]' : 'text-white/40'}`} />
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={feature} className="flex justify-between items-center text-[0.65rem] font-mono group-hover:pl-2 transition-all duration-300">
                            <span className="text-[#888888] group-hover:text-[#0066ff] transition-colors uppercase tracking-wider">{feature}</span>
                            <div className="w-1 h-1 rounded-full bg-[#0066ff]/50" />
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

      {/* CTA */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center p-6 rounded-full glass mb-8 animate-float">
                <Cog className="w-8 h-8 text-[#0066ff]" />
            </div>
            <h2 className="text-[2.5rem] md:text-[3.8rem] font-heading font-black tracking-tighter mb-6 uppercase text-white">
              READY TO <span className="italic text-[#0066ff]">BUILD?</span>
            </h2>
            <p className="font-mono text-[0.7rem] text-[#888888] uppercase tracking-[0.15em] max-w-xl mx-auto mb-10">
              Tell us what you need and we&apos;ll give you a free quote within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary group px-10 py-5 font-heading font-black uppercase tracking-[0.12em] text-[0.8rem]">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
