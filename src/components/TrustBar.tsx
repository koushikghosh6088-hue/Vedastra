'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Globe, Zap, Trophy, Lock } from 'lucide-react';

const trustItems = [
  { icon: Star, text: 'Rated on Google (5.0)' },
  { icon: Trophy, text: 'Clutch Verified Agency' },
  { icon: Globe, text: 'Clients in India & Worldwide' },
  { icon: Zap, text: '50+ Projects Delivered' },
  { icon: Lock, text: '256-bit Secure Infrastructure' },
];

export default function TrustBar() {
  return (
    <section className="relative py-4 bg-[#111118] border-t border-b border-[#00D4FF]/20 overflow-hidden z-20">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-[marquee_40s_linear_infinite] items-center gap-12 sm:gap-16">
          {[...trustItems, ...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <item.icon className="w-4 h-4 text-[#00D4FF]" />
              <span className="font-heading font-bold text-[10px] sm:text-xs uppercase tracking-widest text-white/80">
                {item.text}
              </span>
              <div className="w-1 h-1 bg-[#00D4FF]/40 rounded-full mx-4" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
