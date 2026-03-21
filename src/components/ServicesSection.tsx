'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Bot, Smartphone, Globe, Cog } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    id: 'web',
    title: 'Precision Web Architectures',
    description: 'We build high-fidelity web ecosystems engineered for dominance. Zero-latency interfaces with sub-400ms load times and elite SEO performance.',
    icon: '/3d-icons/web_dev.png',
    link: '/services#web',
    accent: '#0ea5e9',
    metric: '< 400ms',
    metricLabel: 'Engine Response',
    span: 'lg:col-span-2'
  },
  {
    id: 'mobile',
    title: 'Native Mobility',
    description: 'Sculpting elite mobile experiences for iOS and Android. High-performance native builds designed for zero friction.',
    icon: '/3d-icons/mobile_app.png',
    link: '/services#mobile',
    accent: '#a855f7',
    metric: '60 FPS',
    metricLabel: 'Fluid Motion',
    span: 'lg:col-span-1'
  },
  {
    id: 'calling',
    title: 'Neural Voice Intelligence',
    description: 'Autonomous conversational AI that qualifies leads and closes appointments with human-level natural speech processing.',
    icon: '/3d-icons/ai_calling.png',
    link: '/ai-solutions#calling',
    accent: '#ef4444',
    badge: 'ADVANCED AI',
    metric: '24/7',
    metricLabel: 'Lead Capture',
    span: 'lg:col-span-1'
  },
  {
    id: 'messaging',
    title: 'Contextual AI Chat',
    description: 'Intelligent RAG-powered chat agents trained on your private knowledge nodes for absolute precision conversion.',
    icon: '/3d-icons/ai_messaging.png',
    link: '/ai-solutions#chat',
    accent: '#f97316',
    metric: '98%',
    metricLabel: 'Accuracy',
    span: 'lg:col-span-1'
  },
  {
    id: 'automation',
    title: 'Flow Logic Systems',
    description: 'Connecting fragmented workflows into a self-optimizing business engine. Eliminate the mundane, accelerate the critical.',
    icon: '/3d-icons/ai_automation.png',
    link: '/services#automation',
    accent: '#22c55e',
    metric: '20Hr+',
    metricLabel: 'weekly saved',
    span: 'lg:col-span-1'
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-44 bg-black overflow-hidden z-10">
      {/* Background Authority Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-32">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C1FF00]/10 border border-[#C1FF00]/20 mb-8 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-[#C1FF00] fill-[#C1FF00]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C1FF00] font-bold">Tactical Deployment</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[4.5rem] lg:text-[5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
              STRATEGIC <span className="text-[#0066ff] italic opacity-90">SOLUTIONS</span> FOR DIGITAL DOMINANCE.
            </h2>
            <p className="text-white/40 font-mono text-sm md:text-base uppercase tracking-[0.2em]">
              We don&apos;t just build. We architect high-performance business engines.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="flex flex-col gap-4 lg:mb-4">
             <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-heading font-bold text-white tracking-widest leading-none">99.9%</div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mt-1">Uptime SLA</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-2xl font-heading font-bold text-white tracking-widest leading-none">256-BIT</div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mt-1">Encryption</div>
                </div>
             </div>
          </AnimatedSection>
        </div>

        {/* Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <AnimatedSection 
              key={service.id} 
              delay={i * 0.1}
              className={`${service.span}`}
            >
              <Link href={service.link} className="group block h-full">
                <div className="relative h-full glass-panel-premium rounded-[3rem] p-1 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                  {/* Neon Glow Corner */}
                  <div 
                    className="absolute top-0 right-0 w-48 h-48 blur-[100px] opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                    style={{ background: service.accent }}
                  />
                  
                  {/* Card Inner */}
                  <div className="relative h-full bg-black/80 backdrop-blur-3xl rounded-[2.9rem] p-8 md:p-12 flex flex-col justify-between">
                    
                    <div>
                      <div className="flex items-start justify-between mb-10">
                        {/* 3D Icon with Shadow */}
                        <div className="relative">
                          <div 
                            className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-80 transition-opacity"
                            style={{ background: service.accent }}
                          />
                          <Image 
                            src={service.icon} 
                            alt={service.title} 
                            width={120} 
                            height={120} 
                            className="relative z-10 w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        
                        {service.badge && (
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-mono text-[9px] font-black uppercase tracking-[0.2em]">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-none">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/50 font-mono text-sm md:text-base leading-relaxed mb-8 max-w-md group-hover:text-white/70 transition-colors">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between pt-8 border-t border-white/5">
                      <div className="space-y-1">
                        <div className="text-3xl md:text-4xl font-heading font-black tracking-tighter" style={{ color: service.accent }}>
                          {service.metric}
                        </div>
                        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold">
                          {service.metricLabel}
                        </div>
                      </div>
                      
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
          
          {/* Final Call to Action Node */}
          <AnimatedSection className="lg:col-span-1">
             <div className="relative h-full rounded-[3rem] p-8 md:p-12 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#C1FF00]/5 to-transparent border border-[#C1FF00]/10">
                <div className="w-16 h-16 rounded-full bg-[#C1FF00] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(193,255,0,0.3)] anim-pulse">
                   <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tighter mb-4">Ready for Deployment?</h3>
                <p className="text-white/40 font-mono text-xs mb-8">Schedule a strategic diagnostic call to identify your business bottlenecks.</p>
                <Link href="/contact" className="btn-primary w-full text-center py-4">
                  GET AUDIT NOW
                </Link>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
