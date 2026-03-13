'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Brain, BarChart3, Zap, Shield, Cpu } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "Conversion Supremacy",
    subtitle: "High-Fidelity Web Systems",
    description: "In the digital frontier, milliseconds are the difference between a lead and a lost opportunity. We architect sub-400ms neural ecosystems that aren't just websites—they're high-performance conversion engines designed for global dominance.",
    icon: Rocket,
    stats: [
      { label: 'Avg Speed Increase', val: '320%' },
      { label: 'Conversion Lift', val: '45%+' },
    ],
    color: "from-blue-600 to-cyan-400",
    accent: "blue-400"
  },
  {
    id: 2,
    title: "Neural Scalability",
    subtitle: "AI-Driven Operations",
    description: "Scale your business without the overhead. Our autonomous agents handle lead qualification, customer support, and complex logic 24/7. It's not just automation; it's an intelligent workforce that never sleeps and always learns.",
    icon: Brain,
    stats: [
      { label: 'Operating Cost', val: '-60%' },
      { label: 'Response Time', val: 'INSTANT' },
    ],
    color: "from-purple-600 to-rose-400",
    accent: "purple-400"
  },
  {
    id: 3,
    title: "Algorithmic Dominance",
    subtitle: "Marketing Excellence",
    description: "Ditch the guesswork. We deploy data-driven targeting protocols and viral content loops that put your brand exactly where your audience lives. Stop chasing leads; start being the destination they can't ignore.",
    icon: BarChart3,
    stats: [
      { label: 'Ad Performance', val: '+210%' },
      { label: 'ROAS Average', val: '8.4x' },
    ],
    color: "from-emerald-600 to-lime-400",
    accent: "emerald-400"
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative bg-black py-20">
      <div className="max-w-[1550px] mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <Zap className="w-3 h-3 text-blue-400" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Why Partner With Us?</span>
        </motion.div>
        <h2 className="text-[3.5rem] md:text-[6rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
          THE <span className="gradient-text italic">NEW STANDARD</span><br/>OF GROWTH
        </h2>
        <p className="font-mono text-sm text-white/40 uppercase tracking-[0.2em] max-w-2xl mx-auto">
          We don&apos;t build for the present. We engineer for the future. Every card below represents a non-negotiable pillar of your digital dominance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative space-y-10 pb-40">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} totalCards={cards.length} />
        ))}
      </div>
    </section>
  );
}

function Card({ card, index, totalCards }: { card: any, index: number, totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Custom hook logic for stacking effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Calculate dynamic scaling and dimming for the "underneath" cards
  // This logic works by making the cards sticky and then transforming them
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div 
      className="sticky top-24 md:top-32 w-full pt-10"
      style={{ 
        zIndex: index + 10,
      }}
    >
      <motion.div
        ref={cardRef}
        className="relative min-h-[500px] md:h-[600px] rounded-[3rem] border border-white/10 overflow-hidden glass-premium group will-change-transform"
        style={{
          scale: index === totalCards - 1 ? 1 : scale,
          opacity: index === totalCards - 1 ? 1 : opacity,
        }}
      >
        {/* Background Accents */}
        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-700`} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[120px] group-hover:bg-white/10 transition-all duration-700" />
        
        <div className="relative z-10 p-8 md:p-16 h-full flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center">
             <div className="mb-8 relative">
                <div className={`w-20 h-20 rounded-2xl bg-${card.accent}/20 flex items-center justify-center border border-${card.accent}/10 relative z-10`}>
                   <card.icon className={`w-10 h-10 text-${card.accent}`} />
                </div>
                <div className={`absolute -inset-4 bg-${card.accent}/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
             </div>
             
             <h3 className="text-[2.5rem] md:text-[4.5rem] font-heading font-black text-white leading-none tracking-tighter uppercase mb-2">
                {card.title}
             </h3>
             <div className={`font-mono text-sm md:text-lg text-${card.accent} uppercase tracking-widest mb-6 font-bold`}>
                {card.subtitle}
             </div>
             
             <p className="text-white/60 font-mono text-base md:text-lg leading-relaxed max-w-xl">
                {card.description}
             </p>
          </div>

          {/* Right Visual / Stats */}
          <div className="flex-1 flex flex-col justify-center gap-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {card.stats.map((stat: any) => (
                   <div key={stat.label} className="glass-premium p-8 rounded-[2rem] border-white/5 group-hover:border-white/10 transition-all">
                      <div className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">{stat.label}</div>
                      <div className="text-white font-heading font-black text-4xl tracking-tighter">{stat.val}</div>
                   </div>
                ))}
             </div>
             
             {/* Abstract Visual Component */}
             <div className="flex-1 glass-strong border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative h-full flex flex-col justify-between">
                   <div className="flex items-center gap-3">
                      <Shield className={`w-5 h-5 text-${card.accent}`} />
                      <span className="text-white/20 text-[10px] font-mono uppercase">System Integrity: Optimal</span>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '85%' }}
                           transition={{ duration: 2 }}
                           className={`h-full bg-gradient-to-r ${card.color}`} 
                         />
                      </div>
                      <div className="h-2 w-3/4 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '65%' }}
                           transition={{ duration: 2, delay: 0.2 }}
                           className={`h-full bg-gradient-to-r ${card.color} opacity-60`} 
                         />
                      </div>
                   </div>
                   
                   <div className="flex justify-between items-end">
                      <Cpu className="w-8 h-8 text-white/5" />
                      <div className="text-right">
                         <div className="text-white font-heading font-black text-2xl">V6.0</div>
                         <div className="text-white/20 text-[8px] font-mono uppercase">Quantum Engine</div>
                      </div>
                   </div>
                </div>
                
                {/* Decorative scanning line */}
                <motion.div 
                  animate={{ y: [0, 400] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-${card.accent}/5 to-transparent pointer-events-none`}
                />
             </div>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
           <Zap className={`w-8 h-8 text-${card.accent}`} />
        </div>
      </motion.div>
    </div>
  );
}
