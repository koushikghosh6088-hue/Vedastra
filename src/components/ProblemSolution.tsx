'use client';

import { useState } from 'react';
import { AlertCircle, ArrowRight, Ban, Gauge, Smartphone, Moon, Cog, Bot, AlertTriangle, Skull, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const threats = [
  { 
    title: "NO WEBSITE — OR EMBARRASSINGLY OUTDATED", 
    emoji: "🚫",
    stat: "3s",
    statLabel: "to make a first impression",
    preview: "Someone is searching for exactly what you sell. They find your competitor instead.",
    desc: "Right now, someone is searching for exactly what you sell. They find your competitor instead — because you either don’t have a website, or yours looks like it was built in 2010. First impressions online happen in 3 seconds. If yours isn’t making the cut, you’re handing customers to your competition every single day.",
    icon: Ban,
    severity: "CRITICAL"
  },
  { 
    title: "INVISIBLE ON MOBILE — WHERE CUSTOMERS ARE", 
    emoji: "📵",
    stat: "70%",
    statLabel: "browse & buy on phones",
    preview: "No mobile-friendly site in 2025 is like having a shop with no front door.",
    desc: "Over 70% of people browse and buy from their phones. If your website looks broken on mobile, has tiny buttons, or is painful to scroll through — those customers are gone forever. Not having a mobile-friendly site in 2025 is like having a shop with no front door.",
    icon: Smartphone,
    severity: "HIGH"
  },
  { 
    title: "LOSING LEADS EVERY NIGHT WHILE YOU SLEEP", 
    emoji: "💸",
    stat: "10pm",
    statLabel: "leads you're missing",
    preview: "Every missed message outside business hours is money you'll never see.",
    desc: "What happens when a potential customer messages you at 10pm? Nothing — until the next morning, when they’ve already moved on to someone else. Every missed message, every unanswered enquiry outside business hours is money you’ll never see. Your competitors who use AI never miss a lead. You do.",
    icon: Moon,
    severity: "CRITICAL"
  },
  { 
    title: "YOUR TEAM WASTES HOURS ON AUTOMATABLE TASKS", 
    emoji: "⚙️",
    stat: "40+",
    statLabel: "hours wasted per month",
    preview: "Every hour on repetitive tasks is an hour not spent growing your business.",
    desc: "Manually sending invoices. Copy-pasting data between apps. Following up leads one by one. Replying to the same questions over and over. Every hour your team spends on repetitive tasks is an hour not spent on growing your business. These are problems that can be fully automated — and most business owners don’t even realise it.",
    icon: Cog,
    severity: "HIGH"
  },
];

function SeverityBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    CRITICAL: 'bg-[#FF2D55]/20 text-[#FF2D55] border-[#FF2D55]/40 shadow-[0_0_15px_rgba(255,45,85,0.15)]',
    HIGH: 'bg-[#FF6B00]/15 text-[#FF6B00] border-[#FF6B00]/30 shadow-[0_0_15px_rgba(255,107,0,0.1)]',
    MEDIUM: 'bg-[#FFB800]/10 text-[#FFB800] border-[#FFB800]/25',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[8px] font-mono font-black uppercase tracking-[0.25em] border ${colors[level] || colors.MEDIUM}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {level}
    </span>
  );
}

function ThreatCard({ threat, index }: { threat: typeof threats[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={0.08 * index}>
      <div 
        className={`
          group relative bg-white/[0.015] border rounded-2xl overflow-hidden h-full cursor-pointer
          transition-all duration-500 ease-out
          ${expanded 
            ? 'border-[#FF2D55]/40 shadow-[0_0_40px_rgba(255,45,85,0.1)] bg-[#FF2D55]/[0.03]' 
            : 'border-white/[0.06] hover:border-[#FF2D55]/30 hover:shadow-[0_0_30px_rgba(255,45,85,0.08)]'
          }
        `}
        onClick={() => setExpanded(!expanded)}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Top scanning line — animates on hover/expand */}
        <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF2D55] to-transparent transition-opacity duration-500 ${expanded ? 'opacity-60' : 'opacity-0'}`} />
        
        {/* Bottom scanning line */}
        <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/30 to-transparent transition-opacity duration-500 ${expanded ? 'opacity-100' : 'opacity-0'}`} />

        {/* Corner accents — appear on interaction */}
        <div className={`absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 transition-all duration-500 pointer-events-none ${expanded ? 'border-[#FF2D55]/50' : 'border-transparent'}`} />
        <div className={`absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 transition-all duration-500 pointer-events-none ${expanded ? 'border-[#FF2D55]/50' : 'border-transparent'}`} />

        {/* Threat level indicator strip — left edge */}
        <div className={`absolute top-0 left-0 w-[3px] h-full transition-all duration-500 ${expanded ? 'bg-[#FF2D55] shadow-[0_0_10px_rgba(255,45,85,0.5)]' : 'bg-[#FF2D55]/10'}`} />

        <div className="p-7 md:p-8 relative z-10">
          {/* Header Row: Emoji + Severity */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${expanded ? 'bg-[#FF2D55]/15 border-[#FF2D55]/30 shadow-[0_0_20px_rgba(255,45,85,0.2)] scale-110' : 'bg-[#FF2D55]/[0.07] border-[#FF2D55]/15'}`}>
              <span className="text-xl">{threat.emoji}</span>
            </div>
            <SeverityBadge level={threat.severity} />
          </div>

          {/* Title */}
          <h3 className={`text-[15px] md:text-base font-heading font-black mb-3 uppercase tracking-tight leading-tight transition-colors duration-300 ${expanded ? 'text-[#FF2D55]' : 'text-white'}`}>
            {threat.title}
          </h3>

          {/* Stat Callout */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className={`text-3xl font-heading font-black tracking-tighter transition-all duration-500 ${expanded ? 'text-[#FF2D55] drop-shadow-[0_0_20px_rgba(255,45,85,0.4)]' : 'text-[#FF2D55]'}`}>
              {threat.stat}
            </span>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{threat.statLabel}</span>
          </div>
          
          {/* Preview Text (always visible) */}
          <p className={`font-body text-[13px] leading-relaxed transition-all duration-500 ${expanded ? 'text-white/40 mb-3' : 'text-white/35'}`}>
            {threat.preview}
          </p>

          {/* Expanded Detail — full pain point copy */}
          <div className={`overflow-hidden transition-all duration-500 ease-out ${expanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="border-t border-[#FF2D55]/15 pt-4">
              <p className="font-body text-[13px] text-white/55 leading-[1.7]">
                {threat.desc}
              </p>
            </div>
          </div>

          {/* Expand hint */}
          <div className={`flex items-center gap-1.5 mt-4 transition-all duration-300 ${expanded ? 'opacity-0 h-0' : 'opacity-50'}`}>
            <ChevronDown className="w-3 h-3 text-[#FF2D55]" />
            <span className="text-[9px] font-mono text-[#FF2D55]/60 uppercase tracking-[0.2em]">Tap to read more</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ProblemSolution() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden" id="problems">
      
      {/* Cyberpunk Grid Background — CSS only */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 45, 85, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 45, 85, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scanline Effect — CSS only */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,45,85,0.1) 2px, rgba(255,45,85,0.1) 4px)',
        }}
      />

      {/* Top Warning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF2D55]/60 to-transparent" />
      
      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Terminal Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-t-xl bg-[#FF2D55]/5 border border-b-0 border-[#FF2D55]/20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D55] shadow-[0_0_8px_rgba(255,45,85,0.5)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="font-mono text-[9px] text-[#FF2D55]/70 uppercase tracking-[0.3em] ml-3">threat_scanner.exe</span>
            </div>
            <div className="px-6 py-3 rounded-b-xl rounded-tr-xl bg-[#FF2D55]/[0.03] border border-[#FF2D55]/20 mb-10">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#FF2D55] animate-pulse" />
                <span className="font-mono text-[10px] text-[#FF2D55] font-black uppercase tracking-[0.2em]">
                  6 Critical Vulnerabilities Detected
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-black leading-[0.95] tracking-tighter uppercase mb-6 text-white">
            IS YOUR BUSINESS <br className="md:hidden" />
            <span className="italic text-[#FF2D55] drop-shadow-[0_0_30px_rgba(255,45,85,0.3)]">BLEEDING MONEY</span> RIGHT NOW?
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Every day without AI, automation, and a modern website costs you <span className="text-[#FF2D55] font-bold">real customers and real revenue</span>. Hover over each threat to see how it&apos;s hurting you:
          </p>
        </AnimatedSection>

        {/* Threat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16 md:mb-20">
          {threats.map((threat, i) => (
            <ThreatCard key={i} threat={threat} index={i} />
          ))}
        </div>

        {/* Diagnosis CTA */}
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-[#FF2D55]/20 via-[#FF2D55]/40 to-[#FF2D55]/20 opacity-60 blur-[1px]" />
            
            <div className="relative bg-black/90 backdrop-blur-sm rounded-[2rem] border border-[#FF2D55]/15 p-10 md:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,45,85,0.15) 1px, rgba(255,45,85,0.15) 2px)',
                }}
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Skull className="w-5 h-5 text-[#FF2D55]" />
                  <span className="font-mono text-[10px] text-[#FF2D55] font-black uppercase tracking-[0.25em]">System Diagnostic Available</span>
                </div>
                
                <h4 className="text-xl md:text-3xl font-heading font-black text-white mb-3 uppercase tracking-tight">
                  HOW MANY OF THESE <span className="italic text-[#FF2D55]">APPLY TO YOU?</span>
                </h4>
                <p className="text-white/40 font-body text-sm mb-8 max-w-lg mx-auto leading-relaxed">
                  Book a free 30-minute diagnosis call. We&apos;ll audit your entire digital presence and tell you 
                  <span className="text-white font-bold"> exactly</span> what&apos;s leaking revenue — and how to fix it.
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF2D55] text-white font-heading font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-xl shadow-[0_0_40px_rgba(255,45,85,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                >
                  GET FREE DIAGNOSIS <ArrowRight className="w-5 h-5" />
                </Link>
                
                <p className="mt-5 text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">
                  ⚡ Limited spots — Zero commitment — Results in 48hrs
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
