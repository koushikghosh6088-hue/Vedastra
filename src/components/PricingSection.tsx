'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap, Target, Star, Rocket, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const plans = [
  {
    name: "Standard",
    price: "2,499",
    focus: "MVPs / Startups",
    description: "Perfect for companies looking to launch fast with elite quality.",
    color: "#00D4FF",
    features: [
      "High-Performance Website",
      "Core AI Integration",
      "Business Automation",
      "WhatsApp Lead Sync",
      "1-Week Delivery",
      "Pause/Cancel Anytime"
    ]
  },
  {
    name: "Pro",
    price: "3,499",
    focus: "Scale / Growth",
    description: "For businesses that need advanced AI agents and custom software.",
    color: "#7B2FFF",
    isPopular: true,
    features: [
      "Advanced AI Voice Agents",
      "Custom Web Architectures",
      "Native Mobile App",
      "Unlimited Automations",
      "Priority Founder Access",
      "Market Dominance Strategy"
    ]
  }
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(1); // Pro by default

  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-6">
            <Rocket className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#00D4FF] font-black">Investment Plans</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.8rem] font-heading font-black uppercase tracking-tighter text-white mb-6 leading-[1]">
            READY TO <span className="italic text-[#00D4FF]">ACCELERATE?</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto font-body">
            Pick a plan that fits your business stage. No long-term contracts. Pause or cancel anytime.
          </p>
        </AnimatedSection>

        {/* Plan Switcher */}
        <div className="flex p-1.5 bg-[#111118] border border-white/5 rounded-2xl max-w-md mx-auto mb-12 relative">
          {plans.map((plan, i) => (
            <button
              key={plan.name}
              onClick={() => setActiveTab(i)}
              className={`relative flex-1 py-4 text-center z-10 transition-all duration-300 ${
                activeTab === i ? 'text-black' : 'text-[#8A8A9A] hover:text-white'
              }`}
            >
              <span className="font-heading font-black text-xs uppercase tracking-widest">{plan.name}</span>
              {activeTab === i && (
                <motion.div
                  layoutId="pricing-pill"
                  className="absolute inset-0 bg-[#00D4FF] rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Card Display */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
              className="glass-premium rounded-[3rem] p-8 md:p-16 relative overflow-hidden group hover:border-[#00D4FF]/20 transition-all duration-700 shimmer-border"
            >
              <div className="grainy-overlay opacity-[0.03]" />
              
              {/* Glow Accent */}
              <div 
                className="absolute top-0 right-0 w-96 h-96 blur-[150px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{ background: plans[activeTab].color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest font-black">
                         {plans[activeTab].focus}
                       </span>
                       {plans[activeTab].isPopular && (
                        <span className="px-4 py-1.5 rounded-full bg-[#00D4FF] text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                          Recommended
                        </span>
                       )}
                    </div>
                    <h3 className="text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter text-glow">
                      ${plans[activeTab].price}<span className="text-xl md:text-2xl text-[#8A8A9A]">/mo</span>
                    </h3>
                    <p className="text-[#8A8A9A] text-lg leading-relaxed max-w-sm font-body">
                      {plans[activeTab].description}
                    </p>
                  </div>

                  <Link 
                    href="#booking"
                    className="flex h-20 items-center justify-center bg-[#00D4FF] text-black font-heading font-black text-sm uppercase tracking-widest rounded-3xl hover:bg-white hover:scale-[1.02] transition-all group/btn shadow-[0_15px_40px_rgba(0,212,255,0.3)]"
                  >
                    SELECT {plans[activeTab].name} PLAN <ArrowRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] font-black">
                     <ShieldCheck className="w-4 h-4 text-[#00D4FF] shadow-[0_0_10px_#00D4FF]" /> SECURE CHECKOUT — Stripe Verified
                  </div>
                </div>

                <div className="glass-premium border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group/list">
                   <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
                   <h4 className="font-heading font-black text-white uppercase tracking-widest text-xs mb-10 text-white/60">What's included in {plans[activeTab].name}:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {plans[activeTab].features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                           <div className="w-6 h-6 rounded-full bg-[#00D4FF]/10 flex items-center justify-center border border-[#00D4FF]/30 group-hover/item:bg-[#00D4FF]/20 transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#00D4FF]" />
                           </div>
                           <span className="text-white/80 font-heading font-bold uppercase text-xs tracking-wide group-hover/item:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                   </div>
                   <div className="mt-12 pt-8 border-t border-white/5 text-center lg:text-left">
                      <Link href="/pricing" className="text-[10px] font-mono font-black text-[#00D4FF] uppercase tracking-[0.4em] hover:text-white transition-all group/link">
                        VIEW ALL ADD-ONS & FULL COMPARISON <ArrowRight className="inline ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
           <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] mb-8">ONE FIXED MONTHLY FEE. ZERO HIDDEN COST.</p>
           <Link href="/pricing" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-heading text-xs uppercase tracking-widest border-b border-white/10 pb-1">
              SEE FULL PRICING PAGE <ArrowRight className="w-3 h-3" />
           </Link>
        </div>
      </div>
    </section>
  );
}
