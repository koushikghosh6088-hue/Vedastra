'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Target, Rocket, Crown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const tiers = [
  {
    name: "Starter",
    description: "Ideal for startups and small-scale digital presence.",
    features: ["Custom Web Architecture", "Basic AI Integration", "Mobile Optimization", "Standard Support"],
    icon: Zap,
    highlight: false
  },
  {
    name: "Growth",
    description: "Most popular for scaling enterprises needing full automation.",
    features: ["Website + Mobile App", "Autonomous AI Agents", "Full Marketing Protocol", "Priority Neural Support", "Scalable Infrastructure"],
    icon: Rocket,
    highlight: true,
    badge: "MOST POPULAR"
  },
  {
    name: "Enterprise",
    description: "Bespoke digital ecosystems for global dominance.",
    features: ["Full Stack Ecosystem", "Unlimited AI Workflows", "Dedicated Dev Syndicate", "Zero-Latency Hosting", "24/7 Mission Control"],
    icon: Crown,
    highlight: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20 md:mb-32">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Project Tiers</span>
            </div>
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-none tracking-tighter uppercase mb-6">
              INVEST IN <br/><span className="gradient-text italic text-blue-400">DOMINANCE.</span>
            </h2>
            <p className="font-mono text-sm md:text-base text-white/40 uppercase tracking-[0.2em] max-w-2xl mx-auto">
              Choose your level of operational velocity.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              <div className={`relative h-full flex flex-col p-8 md:p-10 rounded-[2.5rem] border ${tier.highlight ? 'border-blue-500 bg-blue-500/[0.03] shadow-[0_0_50px_rgba(14,165,233,0.15)]' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden`}>
                
                {tier.highlight && (
                  <div className="absolute top-8 right-8">
                    <span className="bg-blue-400 text-black font-mono text-[9px] font-bold px-3 py-1 rounded-full tracking-widest">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${tier.highlight ? 'bg-blue-400 text-black' : 'bg-white/5 text-blue-400 border border-white/10'}`}>
                    <tier.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-white/40 font-mono text-xs leading-relaxed uppercase">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/60 font-mono text-xs uppercase tracking-wide">
                      <Check className={`w-4 h-4 shrink-0 ${tier.highlight ? 'text-blue-400' : 'text-white/20'}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className={`w-full py-5 rounded-2xl font-black font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${tier.highlight ? 'bg-blue-400 text-black shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:bg-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                >
                  Get Custom Quote <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Background Decor */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
