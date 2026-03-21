'use client';

import { motion } from 'framer-motion';
import { Quote, Star, User, Building2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: "Vedastra didn't just build a site; they built a revenue engine. Our lead conversion jumped 40% in the first two weeks.",
    author: "Jameson Wright",
    role: "Founder of Nexus Logistics",
    accent: "#00D4FF"
  },
  {
    quote: "The AI Voice agent they deployed handles 90% of our discovery calls. It's like having a 24/7 sales team that never sleeps.",
    author: "Sarah Chen",
    role: "CEO at Bloom Health",
    accent: "#7B2FFF"
  },
  {
    quote: "Elite speed. We went from a wireframe to a high-performance web app in 9 days. Unheard of in this industry.",
    author: "Marcus Thorne",
    role: "CTO of Zenith Fintech",
    accent: "#FF2D55"
  },
  {
    quote: "The strategic diagnostic call alone was worth it. They identified bottlenecks we didn't even know existed.",
    author: "Elena Rossi",
    role: "Founder of Moda AI",
    accent: "#00FF88"
  },
  {
    quote: "Finally, an agency that speaks business, not just code. They understood our ROI goals from day one.",
    author: "David Miller",
    role: "Director at Prime Estates",
    accent: "#FFB000"
  },
  {
    quote: "Their 'Pause Anytime' model gave us the confidence to start. We haven't paused yet because the results are too good.",
    author: "Liam O'Connor",
    role: "Founder of Stealth Saas",
    accent: "#00D4FF"
  }
];

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="py-24 bg-[#0A0A0F] overflow-hidden border-t border-white/5">
      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-6 font-mono text-[10px] uppercase tracking-widest text-[#00D4FF] font-black">
            Partners & Proof
          </div>
          <h2 className="text-[2.2rem] md:text-[4rem] font-heading font-black uppercase tracking-tighter text-white mb-6">
            PROOF IN THE <span className="italic text-[#00D4FF]">PERFORMANCE</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto font-body">
            We don't just talk. We deliver. Here's what our partners say about the Vedastra advantage.
          </p>
        </AnimatedSection>

        {/* Infinite Moving Grid */}
        <div className="space-y-8">
          {/* Row 1: Left to Right */}
          <div className="flex gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
              className="flex gap-8 shrink-0 py-4"
              animate={{ x: [0, -1920] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...firstRow, ...firstRow, ...firstRow].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
              className="flex gap-8 shrink-0 py-4"
              animate={{ x: [-1920, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...secondRow, ...secondRow, ...secondRow].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, accent }: any) {
  return (
    <div className="w-[450px] p-8 bg-[#111118] border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-[#00D4FF]/30 transition-all duration-500">
      <div 
        className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity"
        style={{ background: accent }}
      />
      
      <Quote className="w-10 h-10 mb-6 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: accent }} />
      
      <p className="text-white/80 font-heading font-bold uppercase text-base leading-relaxed mb-10 tracking-tight">
        "{quote}"
      </p>

      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <User className="w-6 h-6 text-white/20" />
        </div>
        <div>
          <div className="text-white font-heading font-black text-sm uppercase tracking-widest">{author}</div>
          <div className="text-[#8A8A9A] font-mono text-[10px] uppercase tracking-widest">{role}</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-[#00D4FF] text-[#00D4FF]" />)}
        </div>
      </div>
    </div>
  );
}
