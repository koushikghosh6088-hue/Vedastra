'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Server, Smartphone, Cpu, BarChart3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const services = [
  {
    title: "Website Development",
    subtitle: "HIGH-FIDELITY WEB SYSTEMS",
    description: "We architect sub-400ms neural ecosystems that aren't just websites—they're high-performance conversion engines designed for global dominance.",
    bullets: ["Next.js App Router Architecture", "Sub-400ms Interaction Latency", "Global CDN Deployment", "SEO Dominance Framework"],
    stats: { label: "Performance Lift", val: "+320%" },
    icon: Server,
    color: "from-blue-600 to-cyan-400",
    image: "/3d-icons/web_dev.png"
  },
  {
    title: "Mobile App Development",
    subtitle: "OMNICHANNEL DOMINANCE",
    description: "Your clients are everywhere; your digital presence should be too. We create seamless, platform-agnostic native experiences.",
    bullets: ["iOS & Android Native Performance", "Liquid UI/UX Design", "Offline-First Synchronization", "Biometric Authentication"],
    stats: { label: "Mobile Retention", val: "+185%" },
    icon: Smartphone,
    color: "from-purple-600 to-fuchsia-400",
    image: "/3d-icons/mobile_app.png"
  },
  {
    title: "AI Solutions",
    subtitle: "CONVERSATIONAL SUPREMACY",
    description: "Scale without overhead. Our intelligent algorithms intercept, engage, and convert leads 24/7 across all channels.",
    bullets: ["Autonomous AI Calling Agents", "RAG-Based AI Messaging Chatbots", "Custom Neural Workflow Automation", "Lead Selection Algorithms"],
    stats: { label: "Operating Cost", val: "-60%" },
    icon: Cpu,
    color: "from-emerald-600 to-lime-400",
    image: "/3d-icons/ai_calling.png"
  },
  {
    title: "Digital Marketing",
    subtitle: "ALGORITHMIC GROWTH",
    description: "Ditch the guesswork. We deploy data-driven targeting protocols and viral content loops that put your brand where your audience lives.",
    bullets: ["AI-Driven Ad Targeting", "Viral ROI Content Loops", "Conversion Funnel Engineering", "Real-time Multi-Channel Analytics"],
    stats: { label: "ROAS Average", val: "8.4x" },
    icon: BarChart3,
    color: "from-amber-600 to-orange-400",
    image: "/3d-icons/digital_marketing.png"
  }
];

export default function ServicesDeepDive() {
  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-32 md:gap-56">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-32`}>
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <AnimatedSection>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6`}>
                      <service.icon className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400">{service.subtitle}</span>
                    </div>
                    <h2 className="text-[3rem] md:text-[5rem] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-8">
                      {service.title.split(' ')[0]} <br/>
                      <span className="gradient-text italic opacity-90">{service.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-white/60 font-mono text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                      {service.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-wide">
                          <Check className="w-4 h-4 text-blue-400 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                      <Link href="/contact" className="btn-primary px-8 py-4">
                        GET PROTOCOL <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <div className="flex flex-col">
                        <span className="text-white font-heading font-black text-2xl tracking-tighter">{service.stats.val}</span>
                        <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">{service.stats.label}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Visual Content */}
                <div className="w-full lg:w-1/2 relative">
                  <AnimatedSection delay={0.2} className="relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 blur-[120px] rounded-full`} />
                    
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="relative z-10 w-4/5 h-4/5"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                      />
                    </motion.div>

                    {/* Floating Orbs */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 right-10 w-16 h-16 rounded-full bg-blue-500/20 blur-2xl"
                    />
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-purple-500/10 blur-3xl"
                    />
                  </AnimatedSection>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
