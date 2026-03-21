'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const faqs = [
  { q: 'How long does it take to build my website or app?', a: 'Most websites take 1\u20132 weeks. Mobile apps take 3\u20135 weeks. Enterprise projects take 6\u201310 weeks. We give you a fixed timeline before we start \u2014 no guessing, no delays.' },
  { q: 'Do I need to be technical to work with you?', a: 'Not at all. We handle everything from design to development to launch. You just tell us your goals and we take care of the rest.' },
  { q: 'What if I don\u2019t like the design?', a: 'We do unlimited revisions until you are 100% happy. We never move to development until you have approved every detail.' },
  { q: 'Do you work with businesses outside India?', a: 'Yes \u2014 we work with clients globally via WhatsApp, Zoom and email.' },
  { q: 'What happens after my website launches?', a: 'We offer maintenance packages starting at \u20B96,500 per month \u2014 updates, security, backups and priority support included.' },
  { q: 'Can I start small and upgrade later?', a: 'Absolutely. Start with Starter and add mobile app, AI or automation anytime as your business grows.' },
  { q: 'How much does it cost?', a: 'Starter from $799. Growth from $2,500. Enterprise from $6,000. Every project gets a custom quote \u2014 no hidden fees ever.' },
  { q: 'Will my website rank on Google?', a: 'Every website includes basic SEO \u2014 meta tags, sitemap, speed optimization and mobile responsiveness. Advanced SEO packages available for faster ranking.' },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left glass-panel rounded-2xl p-6 border-white/10 hover:border-blue-400/20 transition-all duration-300 group"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base md:text-lg font-heading font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors pr-4">
            {q}
          </h3>
          <ChevronDown className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="text-white/60 font-mono text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </AnimatedSection>
  );
}

export default function FAQSection() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden z-10 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D4FF]">FAQ</span>
          </div>
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-heading font-black leading-none tracking-tighter uppercase mb-4 text-white">
            QUESTIONS? <span className="italic text-[#00D4FF]">WE&apos;VE GOT ANSWERS</span>
          </h2>
          <p className="font-mono text-sm text-[#8A8A9A] uppercase tracking-[0.15em] max-w-lg mx-auto">
            Everything you want to know before working with us
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
