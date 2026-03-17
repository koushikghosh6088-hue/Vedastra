'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Server, Smartphone, Cpu, BarChart3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const services = [
  {
    title: "Website Development",
    subtitle: "Website Development",
    description: "Every second your website takes to load, you lose a potential customer. We build fast, stunning websites that look world-class and convert visitors into paying clients.",
    bullets: ["Fast-loading architectures", "Custom designs", "Conversion-focused logic", "SEO optimized"],
    stats: { label: "Conversion Increase", val: "45%+" },
    icon: Server,
    color: "from-blue-600 to-cyan-400",
    image: "/3d-icons/web_dev.png"
  },
  {
    title: "Mobile App Development",
    subtitle: "Mobile Apps",
    description: "Your customers live on their phones. We build iOS and Android apps that work flawlessly on every device — keeping your brand accessible and front-of-mind 24/7.",
    bullets: ["iOS & Android development", "React Native efficiency", "Native-like performance", "In-app engagement"],
    stats: { label: "User Retention", val: "+185%" },
    icon: Smartphone,
    color: "from-purple-600 to-fuchsia-400",
    image: "/3d-icons/mobile_app.png"
  },
  {
    title: "AI Calling & Chat Agents",
    subtitle: "AI Agents",
    description: "Imagine a salesperson who works 24/7, never takes a day off, and responds to every lead in under a second. Our AI agents handle calls, chats, and lead qualification automatically — so you close more deals without adding headcount.",
    bullets: ["AI Phone Support", "Lead Qualification", "24/7 Chat Agents", "CRM Integration"],
    stats: { label: "More Leads Converted", val: "3x–5x" },
    icon: Cpu,
    color: "from-emerald-600 to-lime-400",
    image: "/3d-icons/ai_calling.png"
  },
  {
    title: "AI Workflow Automation",
    subtitle: "Business Automation",
    description: "Stop wasting hours on repetitive tasks. We automate follow-up emails, data entry, reporting, invoicing, and more — so your team can focus on what actually grows your business.",
    bullets: ["Workflow automation", "Data handling", "Error elimination", "Time saving"],
    stats: { label: "Repetitive Tasks Eliminated", val: "-90%" },
    icon: Server,
    color: "from-fuchsia-600 to-pink-400",
    image: "/3d-icons/automation.png"
  },
  {
    title: "Digital Marketing",
    subtitle: "Digital Marketing",
    description: "Stop guessing and start growing. We run targeted ad campaigns, SEO, and content strategies that put your business in front of people actively searching for what you offer.",
    bullets: ["Ad targeting", "SEO strategy", "Viral content", "Data analytics"],
    stats: { label: "Avg Return on Ad Spend", val: "8.4x" },
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
                      {service.title.split(' & ')[0]} <br/>
                      <span className="gradient-text italic opacity-90">{service.title.split(' & ').slice(1).join(' & ')}</span>
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
