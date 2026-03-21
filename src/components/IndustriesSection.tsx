'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Globe } from 'lucide-react';

const industries = [
  { icon: '\uD83C\uDF55', label: 'Restaurants & Food', accent: '#ef4444' },
  { icon: '\uD83C\uDFE0', label: 'Real Estate', accent: '#3b82f6' },
  { icon: '\uD83D\uDC86', label: 'Salons & Spas', accent: '#ec4899' },
  { icon: '\uD83C\uDFE5', label: 'Clinics & Healthcare', accent: '#22c55e' },
  { icon: '\uD83C\uDFCB\uFE0F', label: 'Fitness & Wellness', accent: '#f97316' },
  { icon: '\uD83D\uDED2', label: 'eCommerce & Retail', accent: '#a855f7' },
  { icon: '\uD83C\uDF93', label: 'Education & Coaching', accent: '#06b6d4' },
  { icon: '\uD83D\uDD27', label: 'Local Services', accent: '#eab308' },
  { icon: '\uD83C\uDFE8', label: 'Hotels & Hospitality', accent: '#14b8a6' },
  { icon: '\uD83D\uDCBC', label: 'Startups & SaaS', accent: '#6366f1' },
  { icon: '\uD83D\uDE97', label: 'Auto & Transport', accent: '#64748b' },
  { icon: '\u2696\uFE0F', label: 'Legal & Finance', accent: '#0ea5e9' },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden z-10">
      {/* Radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-6">
            <Globe className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D4FF]">Industries We Serve</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white">
            WE&apos;VE BUILT FOR <span className="italic text-[#00D4FF]">EVERY INDUSTRY</span>
          </h2>
          <p className="font-mono text-sm text-[#8A8A9A] uppercase tracking-[0.15em] max-w-lg mx-auto">
            Whatever your business — we know your world
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.label} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="relative group cursor-default overflow-hidden rounded-2xl p-[1px] gpu-accelerated"
                style={{
                  background: `linear-gradient(135deg, ${industry.accent}25, transparent 50%, ${industry.accent}15)`,
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${industry.accent}50, transparent 40%, transparent 60%, ${industry.accent}40)`,
                  }}
                />

                {/* Inner card */}
                <div className="relative bg-black/90 rounded-[calc(1rem-1px)] p-5 md:p-6 text-center overflow-hidden">
                  {/* Background glow */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: industry.accent }}
                  />

                  {/* Emoji icon */}
                  <motion.span
                    className="text-4xl md:text-5xl block mb-3 relative z-10"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {industry.icon}
                  </motion.span>

                  {/* Label */}
                  <span className="text-white/70 font-mono text-[11px] md:text-xs uppercase tracking-wider group-hover:text-white transition-colors duration-300 relative z-10 font-bold">
                    {industry.label}
                  </span>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-3/4 transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${industry.accent}, transparent)` }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tagline */}
        <AnimatedSection className="text-center mt-12">
          <p className="font-mono text-xs text-white/20 uppercase tracking-[0.3em]">
            + Many More Industries Across India & Worldwide
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
