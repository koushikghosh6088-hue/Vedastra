'use client';

import AnimatedSection from '@/components/AnimatedSection';
import PricingSection from '@/components/PricingSection';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[50vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-[#00d4ff]/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse-glow" />
              <span className="text-[0.65rem] font-mono uppercase tracking-widest text-[#00ff9d] glow-green">Transparent Pricing</span>
            </div>
            <h1 className="text-[4rem] md:text-[6.5rem] lg:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter mb-8 text-white uppercase glow-white">
              SIMPLE <br/><span className="glow-cyan italic">HONEST PRICING</span>
            </h1>
            <p className="text-white/60 text-xl font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              No hidden fees. No surprises. Pick a plan that fits your business and let&apos;s build something amazing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reuse existing PricingSection */}
      <PricingSection />

      {/* Bottom CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[3rem] md:text-[5rem] font-heading font-black uppercase tracking-tighter mb-8 text-white glow-white">
              NOT SURE WHICH <span className="glow-cyan italic">PLAN</span> IS RIGHT?
            </h2>
            <p className="text-white/50 font-mono text-[0.7rem] uppercase tracking-[0.25em] mb-12 leading-relaxed glow-white">
              Book a free 30-minute call. We&apos;ll tell you exactly what your business needs — no pressure, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="group px-10 py-5 rounded-2xl text-[0.85rem] font-heading font-black uppercase tracking-[0.12em] bg-[#00ff9d] text-black shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:scale-[1.05] transition-all duration-300 flex items-center justify-center gap-3">
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/917003383676" target="_blank" rel="noopener noreferrer" className="group px-10 py-5 rounded-2xl text-[0.85rem] font-heading font-black uppercase tracking-[0.12em] bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                <MessageSquare className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
