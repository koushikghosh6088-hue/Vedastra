'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Star, Rocket, TrendingUp, Trophy } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const plans = [
  {
    name: "Starter",
    price: 799,
    icon: Rocket,
    color: "#0066ff",
    tagline: "Small Business Launchpad",
    features: [
      { name: "5–7 Page Website", status: "✅" },
      { name: "Mobile App", status: "❌" },
      { name: "Basic AI Chatbot", status: "✅" },
      { name: "WhatsApp Sync", status: "✅" },
      { name: "SEO Foundation", status: "✅" },
      { name: "Lead Capture", status: "✅" }
    ]
  },
  {
    name: "Growth",
    price: 2500,
    icon: TrendingUp,
    color: "#ccff00",
    tagline: "Scale Your Operations",
    isPopular: true,
    features: [
      { name: "Full Web Ecosystem", status: "✅" },
      { name: "Mobile App (iOS/Android)", status: "✅" },
      { name: "Advanced AI Agent", status: "✅" },
      { name: "WhatsApp AI Sales", status: "✅" },
      { name: "1 Custom Automation", status: "✅" },
      { name: "Priority Support", status: "✅" }
    ]
  },
  {
    name: "Enterprise",
    price: 6000,
    icon: Trophy,
    color: "#ffffff",
    tagline: "Digital Dominance Suite",
    features: [
      { name: "Custom Web App / CRM", status: "✅" },
      { name: "AI Voice Calling Agent", status: "✅" },
      { name: "Unlimited AI Agents", status: "✅" },
      { name: "Full Business Automation", status: "✅" },
      { name: "Dedicated Dev Team", status: "✅" },
      { name: "24/7 Elite Support", status: "✅" }
    ]
  }
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(1); // Growth by default

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 font-mono text-[10px] uppercase tracking-widest text-white/40">
            <Star className="w-3 h-3 text-[#ccff00]" /> High Precision Pricing
          </div>
          <h2 className="text-[2.2rem] md:text-[4.5rem] lg:text-[5rem] font-heading font-black uppercase tracking-tighter text-white mb-6">
            CHOOSE YOUR <span className="italic text-[#0066ff]">PROTOCOL</span>
          </h2>
        </AnimatedSection>

        {/* Tab Switcher */}
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-12 p-2 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <button
              key={plan.name}
              onClick={() => setActiveTab(i)}
              className={`relative flex items-center justify-between md:justify-center gap-4 py-4 md:py-5 px-6 md:px-8 rounded-[2rem] transition-all flex-1 ${
                activeTab === i 
                ? 'bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)]' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <plan.icon className={`w-4 h-4 ${activeTab === i ? 'text-black' : 'text-white/20'}`} />
                <span className="font-heading font-black text-sm uppercase tracking-tighter">{plan.name}</span>
              </div>
              <span className={`font-mono text-xs font-bold ${activeTab === i ? 'text-black/60' : 'text-white/20'}`}>${plan.price}</span>
              {plan.isPopular && activeTab !== i && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ccff00] rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-premium rounded-[3rem] p-8 md:p-16 border-white/5 overflow-hidden"
            >
              {/* Decorative Background */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 blur-[120px] opacity-10 pointer-events-none"
                style={{ backgroundColor: plans[activeTab].color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  {plans[activeTab].isPopular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ccff00] text-black font-mono text-[9px] font-black uppercase tracking-widest">Most Deployed</span>
                  )}
                  <h3 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter">
                    {plans[activeTab].name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-7xl font-heading font-black text-white">$ {plans[activeTab].price}</span>
                    <span className="text-white/30 font-mono text-xs uppercase tracking-widest leading-loose">starting from</span>
                  </div>
                  <p className="text-white/50 font-mono text-sm uppercase tracking-widest leading-relaxed">
                    {plans[activeTab].tagline}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black font-heading font-black tracking-widest uppercase rounded-2xl hover:bg-[#0066ff] hover:text-white transition-all w-full justify-center mt-4">
                    INITIATE DEPLOYMENT <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="lg:col-span-7 bg-white/5 rounded-[2rem] p-6 md:p-10 border border-white/10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                      {plans[activeTab].features.map((feature, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">{feature.name}</span>
                           <span className={feature.status === '✅' ? 'text-[#ccff00]' : 'text-white/10'}>{feature.status}</span>
                        </div>
                      ))}
                   </div>
                   <div className="mt-10 text-center lg:text-left">
                      <Link href="/pricing" className="text-[10px] font-mono font-black text-[#0066ff] uppercase tracking-[0.3em] hover:text-white transition-colors">
                         SEE ALL FEATURES & ADD-ONS IN DETAIL →
                      </Link>
                   </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
           <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] mb-8">Not sure which plan matches your scale?</p>
           <Link href="/contact" className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest border-b border-white/10 pb-1">
              Book a Free Technology Audit <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </div>
    </section>
  );
}
