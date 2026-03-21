'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, X, ArrowRight, Phone, Rocket, TrendingUp, Trophy, Zap, Search, FileText, Gauge, MessageCircle, Cog, Upload, Share2, Star } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

interface PriceProps {
  value: number;
  duration?: string;
}

function AnimatedPrice({ value }: PriceProps) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block"
    >
      ${value.toLocaleString()}
    </motion.span>
  );
}

export default function PricingSection() {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [activeTab, setActiveTab] = useState<'Starter' | 'Growth' | 'Enterprise'>('Growth');

  const packages = [
    {
      name: "Starter",
      badge: "BEST FOR SMALL BUSINESSES",
      icon: <Rocket className="w-8 h-8" />,
      price: 799,
      maintenance: 79,
      tagline: "Get your business online fast with a professional website and AI chatbot",
      glowColor: "rgba(0, 102, 255, 0.4)", // Electric Blue
      borderColor: "border-[#0066ff]/20",
      accentColor: "text-[#0066ff]",
      btnClass: "bg-[#0066ff] text-white hover:scale-[1.02] shadow-[0_0_30px_rgba(0,102,255,0.2)]",
      included: [
        "Custom Website Design (5–7 Pages)",
        "Mobile Responsive Design",
        "Basic AI Chatbot",
        "Contact Form + WhatsApp Integration",
        "Google Maps Embed",
        "Social Media Links",
        "Basic SEO Setup",
        "Google Analytics Installed",
        "SSL Certificate (https)",
        "Fast Hosting Setup",
        "3 Months Free Support & Maintenance"
      ],
      notIncluded: [
        "Mobile App",
        "AI Calling Agent",
        "Automation Workflows",
        "Web App / Dashboard"
      ]
    },
    {
      name: "Growth",
      badge: "⭐ MOST POPULAR",
      icon: <TrendingUp className="w-8 h-8" />,
      price: 2500,
      maintenance: 149,
      tagline: "Full digital presence with mobile app, AI agents and automation",
      glowColor: "rgba(204, 255, 0, 0.4)", // Neon Lime
      borderColor: "border-[#ccff00]/40",
      accentColor: "text-[#ccff00]",
      btnClass: "bg-[#ccff00] text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(204,255,0,0.3)]",
      highlight: true,
      included: [
        "Everything in Starter PLUS:",
        "Mobile App (iOS + Android)",
        "Advanced AI Chat Agent",
        "AI Messaging on WhatsApp + Website",
        "1 Custom Automation Workflow",
        "Google Calendar Integration",
        "Push Notifications",
        "User Login & Profile in App",
        "Priority Support",
        "Scalable Hosting",
        "6 Months Free Support & Maintenance"
      ],
      notIncluded: [
        "AI Calling Agent",
        "Web App / Admin Dashboard",
        "Multiple Automation Workflows",
        "Analytics Dashboard"
      ]
    },
    {
      name: "Enterprise",
      badge: "FOR SERIOUS BUSINESSES",
      icon: <Trophy className="w-8 h-8" />,
      price: 6000,
      maintenance: 299,
      tagline: "Complete AI-powered digital ecosystem built for scale",
      glowColor: "rgba(255, 255, 255, 0.2)", // White/Silver
      borderColor: "border-white/20",
      accentColor: "text-white",
      btnClass: "bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]",
      included: [
        "Everything in Growth PLUS:",
        "Full Custom Web App (Dashboard + Admin)",
        "AI Calling Agent (Natural Voice)",
        "Omnichannel AI Agent (Website, WA, IG)",
        "2–3 Custom Automation Workflows",
        "Custom Analytics Dashboard",
        "CRM Integration",
        "Dedicated Development Team",
        "Premium Hosting & Security",
        "Advanced SEO Setup",
        "24/7 Support & Monitoring",
        "12 Months Free Support & Maintenance",
        "Direct WhatsApp Line to Developer"
      ],
      notIncluded: []
    }
  ];

  const addons = [
    { icon: <Search className="w-5 h-5" />, name: "SEO Setup", price: "+$150–$300", desc: "Rank higher on search engines" },
    { icon: <FileText className="w-5 h-5" />, name: "Extra Page", price: "+$50–$100", desc: "Add more content to your site" },
    { icon: <Gauge className="w-5 h-5" />, name: "Speed Optimization", price: "+$100–$200", desc: "Blazing fast load times" },
    { icon: <MessageCircle className="w-5 h-5" />, name: "WhatsApp AI Bot", price: "+$300–$600", desc: "Autonomous sales on WA" },
    { icon: <Cog className="w-5 h-5" />, name: "Extra Automation", price: "+$200–$500", desc: "Complex business logic" },
    { icon: <Upload className="w-5 h-5" />, name: "Monthly Content", price: "+$50–$100/mo", desc: "Regular updates & blogs" },
    { icon: <Share2 className="w-5 h-5" />, name: "Hosting Setup", price: "+$50", desc: "Professional server config" },
    { icon: <Star className="w-5 h-5" />, name: "Social Media Setup", price: "+$100–$200", desc: "Branded profile creation" },
  ];

  const comparison = [
    { feature: "Website", s: "✅", g: "✅", e: "✅" },
    { feature: "Mobile App", s: "❌", g: "✅", e: "✅" },
    { feature: "Web App / Dashboard", s: "❌", g: "❌", e: "✅" },
    { feature: "Basic AI Chatbot", s: "✅", g: "✅", e: "✅" },
    { feature: "Advanced AI Agent", s: "❌", g: "✅", e: "✅" },
    { feature: "AI Calling Agent", s: "❌", g: "❌", e: "✅" },
    { feature: "WhatsApp Integration", s: "✅", g: "✅", e: "✅" },
    { feature: "Automation Workflows", s: "❌", g: "1", e: "2–3" },
    { feature: "Analytics Dashboard", s: "❌", g: "❌", e: "✅" },
    { feature: "CRM Integration", s: "❌", g: "❌", e: "✅" },
    { feature: "SEO Setup", s: "Basic", g: "Basic", e: "Advanced" },
    { feature: "Support Period", s: "3 months", g: "6 months", e: "12 months" },
    { feature: "Maintenance", s: "$79/mo", g: "$149/mo", e: "$299/mo" },
    { feature: "Starting Price", s: "$799", g: "$2,500", e: "$6,000" },
  ];

  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden" id="pricing">
      {/* Background Decor - Optimized for Mobile */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none hidden md:block" />

      <div className="max-w-[1550px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#ccff00]">Fair & Simple</span>
            </div>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6.5rem] font-heading font-black leading-none tracking-tighter uppercase mb-8 text-white">
              SIMPLE, TRANSPARENT <span className="italic text-[#0066ff]">PRICING.</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12">
              No hidden fees. No surprise bills. Pick your package and let's build something great.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`font-mono text-[9px] uppercase tracking-[0.2em] transition-colors ${!isMaintenance ? 'text-white' : 'text-white/30'}`}>One-time Price</span>
              <button 
                onClick={() => setIsMaintenance(!isMaintenance)}
                className="relative w-16 h-8 rounded-full bg-white/5 border border-white/10 p-1 flex items-center transition-all group"
              >
                <motion.div 
                  animate={{ x: isMaintenance ? 32 : 0 }}
                  className={`w-6 h-6 rounded-full ${isMaintenance ? 'bg-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.5)]' : 'bg-[#0066ff] shadow-[0_0_15px_rgba(0,102,255,0.5)]'}`}
                />
              </button>
              <div className="flex flex-col items-start text-left">
                <span className={`font-mono text-[9px] uppercase tracking-[0.2em] transition-colors ${isMaintenance ? 'text-[#ccff00]' : 'text-white/30'}`}>Monthly Maintenance</span>
                {isMaintenance && <span className="text-[8px] font-mono text-[#ccff00]/50 uppercase tracking-tighter -mt-1">Active</span>}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-32">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.1} className="h-full">
              <div className={`relative h-full flex flex-col p-8 md:p-12 rounded-[3.5rem] border ${pkg.borderColor} bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:-translate-y-4 group overflow-hidden ${pkg.highlight ? 'scale-105 z-10' : 'z-0'}`} style={{ contain: 'content' }}>
                
                {/* Glow Effect */}
                <div 
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none" 
                  style={{ backgroundColor: pkg.glowColor, opacity: pkg.highlight ? 0.2 : 0.1 }}
                />
                
                {/* Animated Border for Growth */}
                {pkg.highlight && (
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[2px] opacity-20 bg-[conic-gradient(from_0deg,transparent_0%,#ccff00_50%,transparent_100%)] rounded-[3.5rem] pointer-events-none will-change-transform"
                   />
                )}

                <div className="mb-10 relative z-10 text-left">
                  <span className={`font-mono text-[9px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase mb-6 inline-block ${pkg.highlight ? 'bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                    {pkg.badge}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 ${pkg.accentColor}`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-[2.2rem] font-heading font-black text-white uppercase tracking-tighter mb-4 leading-none text-left">
                    {pkg.name}
                  </h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-heading font-black text-white leading-none tracking-tighter">
                      <AnimatedPrice value={isMaintenance ? pkg.price + pkg.maintenance : pkg.price} />
                    </span>
                    <span className="text-white/40 font-mono text-[0.6rem] uppercase mb-1 tracking-widest">Starting from</span>
                  </div>
                  {isMaintenance && (
                    <div className="text-[#ccff00] font-mono text-[9px] uppercase tracking-widest mb-4">
                      + ${pkg.maintenance}/mo Maintenance added
                    </div>
                  )}
                  <p className="text-white/30 font-body text-[0.75rem] leading-relaxed uppercase tracking-wide h-12 font-medium">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="space-y-4 mb-12 flex-1 relative z-10">
                  {pkg.included.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white/60 font-body text-[0.7rem] uppercase tracking-tight font-medium leading-[1.4]">
                      <div className="w-4 h-4 rounded-full bg-[#ccff00]/20 flex items-center justify-center shrink-0 border border-[#ccff00]/40 shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                        <Check className="w-2.5 h-2.5 text-[#ccff00]" />
                      </div>
                      <span className={idx === 0 && (pkg.name === "Growth" || pkg.name === "Enterprise") ? "text-white font-black" : ""}>{feat}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white/20 font-body text-[0.7rem] uppercase tracking-tight font-medium leading-[1.4]">
                      <div className="w-4 h-4 rounded-full bg-red-500/5 flex items-center justify-center shrink-0 border border-red-500/20">
                        <X className="w-2.5 h-2.5 text-red-500/40" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 relative z-10">
                  <Link 
                    href="/contact" 
                    className={`w-full py-5 rounded-2xl font-black font-heading tracking-widest uppercase transition-all flex items-center justify-center gap-3 text-[0.8rem] ${pkg.btnClass}`}
                  >
                    GET STARTED — FROM ${pkg.price} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="w-full text-center font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors py-2 block"
                  >
                    Book a Free Call First →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Comparison Table */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-16 px-4">
            <h3 className="text-[3rem] md:text-[5rem] font-heading font-black tracking-tighter text-white uppercase mb-4 leading-none">DEEP DIVE <span className="italic text-[#0066ff]">COMPARISON</span></h3>
            <p className="font-mono text-[0.65rem] text-white/30 uppercase tracking-[0.3em] mb-8">Every feature, laid out transparently.</p>
            
            {/* Mobile Tab Switcher */}
            <div className="lg:hidden flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              {(['Starter', 'Growth', 'Enterprise'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[90px] py-3 px-4 rounded-xl font-mono text-[0.6rem] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab 
                    ? tab === 'Starter' ? 'bg-[#00d4ff] text-black shadow-[0_0_15px_rgba(0,212,255,0.3)]' : tab === 'Growth' ? 'bg-[#00ff9d] text-black shadow-[0_0_15px_rgba(0,255,157,0.3)]' : 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="glass-premium rounded-[2.5rem] md:rounded-[3rem] border-white/5 overflow-hidden backdrop-blur-2xl">
            <div className="overflow-x-auto lg:overflow-visible">
              <table className="w-full text-left border-collapse">
                <thead>
                  {/* Desktop Header */}
                  <tr className="border-b border-white/10 bg-white/[0.02] hidden lg:table-row">
                    <th className="p-8 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/40 w-1/3">Feature</th>
                    <th className="p-8 font-heading font-black text-2xl text-white text-center uppercase">STARTER</th>
                    <th className="p-8 font-heading font-black text-2xl text-[#ccff00] text-center uppercase">GROWTH</th>
                    <th className="p-8 font-heading font-black text-2xl text-white text-center uppercase opacity-80">ENTERPRISE</th>
                  </tr>
                  {/* Mobile Header */}
                  <tr className="border-b border-white/10 bg-white/[0.04] lg:hidden">
                    <th className="p-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 w-[45%]">Feature</th>
                    <th className={`p-5 font-heading font-black text-sm text-center tracking-tighter ${
                      activeTab === 'Starter' ? 'text-[#0066ff]' : activeTab === 'Growth' ? 'text-[#ccff00]' : 'text-white'
                    }`}>
                      {activeTab.toUpperCase()} PLAN
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => {
                    const mobileValue = activeTab === 'Starter' ? row.s : activeTab === 'Growth' ? row.g : row.e;
                    return (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                        <td className="p-5 md:p-8 font-mono text-[0.7rem] text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">{row.feature}</td>
                        
                        {/* Desktop Values */}
                        <td className="p-5 md:p-8 text-center font-mono text-[0.7rem] text-white hidden lg:table-cell">
                          {row.s === '✅' ? <Check className="w-5 h-5 text-[#ccff00] mx-auto drop-shadow-[0_0_10px_rgba(204,255,0,0.6)]" /> : 
                           row.s === '❌' ? <X className="w-5 h-5 text-red-500/40 mx-auto" /> : row.s}
                        </td>
                        <td className="p-5 md:p-8 text-center font-mono text-[0.7rem] text-white bg-white/[0.02] hidden lg:table-cell">
                          {row.g === '✅' ? <Check className="w-5 h-5 text-[#ccff00] mx-auto drop-shadow-[0_0_10px_rgba(204,255,0,1)]" /> : 
                           row.g === '❌' ? <X className="w-5 h-5 text-red-500/40 mx-auto" /> : row.g}
                        </td>
                        <td className="p-5 md:p-8 text-center font-mono text-[0.7rem] text-white hidden lg:table-cell">
                          {row.e === '✅' ? <Check className="w-5 h-5 text-[#ccff00] mx-auto drop-shadow-[0_0_10px_rgba(204,255,0,0.6)]" /> : 
                           row.e === '❌' ? <X className="w-5 h-5 text-red-500/40 mx-auto" /> : row.e}
                        </td>

                        {/* Mobile Active Tab Value */}
                        <td className="p-5 text-center font-mono text-[0.65rem] text-white lg:hidden">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="flex justify-center items-center h-5"
                            >
                              {mobileValue === '✅' ? <Check className="w-5 h-5 text-[#ccff00] drop-shadow-[0_0_10px_rgba(204,255,0,0.7)]" /> : 
                               mobileValue === '❌' ? <X className="w-5 h-5 text-red-500/50" /> : mobileValue}
                            </motion.div>
                          </AnimatePresence>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* Add-ons */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-[3rem] md:text-[5rem] font-heading font-black tracking-tighter text-white uppercase mb-4 leading-none">⚡ POWER-UPS <span className="italic text-[#0066ff]"> — ADD TO ANY PACKAGE</span></h3>
            <p className="font-mono text-[0.65rem] text-white/30 uppercase tracking-[0.3em]">Customize your package with these add-ons</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, i) => (
              <div key={i} className="glass-premium p-8 rounded-[2.5rem] border-white/5 hover:border-[#00d4ff]/30 transition-all duration-500 group flex flex-col justify-between h-full bg-white/[0.01]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0066ff] group-hover:text-white transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]">
                    {addon.icon}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[0.75rem] font-heading font-black text-white uppercase tracking-tight">{addon.name}</h4>
                    <span className="text-[#0066ff] font-mono text-[9px] font-black">{addon.price}</span>
                  </div>
                  <p className="text-[9px] font-body text-white/40 uppercase tracking-widest leading-relaxed mb-6 font-medium">
                    {addon.desc}
                  </p>
                </div>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black font-mono uppercase tracking-[0.25em] hover:bg-white/10 hover:text-white transition-all text-white/50">
                  + Add Option
                </button>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection className="pb-24">
          <div className="relative glass-premium rounded-[4rem] border-white/10 p-12 md:p-24 overflow-hidden text-center group">
            {/* Pulsing BG */}
            <div className="absolute inset-0 bg-blue-500/5 animate-pulse-slow" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(14,165,233,0.1),transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="text-[2.5rem] md:text-[4.5rem] font-heading font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
                Not sure which package is <span className="italic text-[#0066ff]">right for you?</span>
              </h2>
              <p className="font-body text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Book a free 30-minute call. We'll tell you exactly what you need — <span className="text-[#ccff00] font-black">no pressure, no commitment.</span>
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-4 bg-[#ccff00] text-black px-12 py-6 rounded-[2rem] font-black font-heading tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(204,255,0,0.3)] hover:bg-white"
              >
                <Phone className="w-5 h-5 fill-current" />
                BOOK FREE CONSULTATION
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
