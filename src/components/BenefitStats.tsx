'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StatProps {
  icon: string;
  value: string;
  label: string;
  delay?: number;
}

function CountUp({ end, suffix = "" }: { end: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseFloat(end.replace(/[^0-9.]/g, ''));
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (isInView && isNumeric) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, isNumeric]);

  if (!isNumeric) return <span>{end}</span>;

  return (
    <span ref={ref}>
      {Math.floor(count)}{suffix}
    </span>
  );
}

function StatCard({ icon, value, label, delay = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative gpu-accelerated"
    >
      {/* Animated Glowing Border - Ultra-Intensified */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 rounded-[2.5rem] opacity-40 group-hover:opacity-100 blur-[4px] transition-all duration-500 animate-pulse" />
      
      <div className="relative h-full bg-obsidian/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]">
        
        {/* Pulsing Icon Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-400/10 rounded-full blur-[40px] group-hover:bg-blue-400/20 transition-all duration-700 animate-pulse" />
        
        <div className="text-5xl mb-6 relative z-10 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-500">
          {icon}
        </div>
        
        <div className="text-[2.5rem] md:text-[3rem] font-heading font-black leading-none tracking-tighter mb-3 z-10 glow-cyan">
          {value.includes('%') ? (
            <CountUp end={value.replace('%', '')} suffix="%" />
          ) : value.includes('/') ? (
             <CountUp end={value} />
          ) : (
            value
          )}
        </div>
        
        <div className="text-[0.7rem] font-mono text-[#888888] uppercase tracking-[0.1em] z-10 group-hover:text-white transition-colors">
          {label}
        </div>

        {/* Interior Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function BenefitStats() {
  const stats = [
    { icon: "⚡", value: "1–2 Weeks", label: "Average Delivery Time" },
    { icon: "🎯", value: "Custom Built", label: "Tailored to your needs" },
    { icon: "🛡️", value: "24/7", label: "Support & Monitoring" },
    { icon: "💯", value: "100%", label: "Satisfaction Guaranteed" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} delay={i * 0.15} />
      ))}
    </div>
  );
}
