'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Rocket, Smartphone, Bot, MessageSquare, Globe, Zap } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

const cards = [
  {
    id: 1,
    title: "Website Development",
    subtitle: "High-Fidelity Web Systems",
    description: "In the digital frontier, milliseconds are the difference between a lead and a lost opportunity. We architect sub-400ms neural ecosystems that aren't just websites—they're high-performance conversion engines designed for global dominance.",
    icon: Globe,
    stats: [
      { label: 'Avg Speed Increase', val: '320%' },
      { label: 'Conversion Lift', val: '45%+' },
    ],
    color: "from-blue-600 to-cyan-400",
    textAccent: "text-blue-400",
    bgAccent: "bg-blue-400/10",
    borderAccent: "border-blue-400/20",
    glowAccent: "bg-blue-400/20",
    nodeBorder: "border-blue-400",
    shadow: "shadow-[0_0_20px_2px_rgba(59,130,246,0.2)]",
    solidColor: "bg-blue-500",
    imageSrc: "/3d-icons/web_dev.png"
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle: "Omnichannel Dominance",
    description: "Your clients are everywhere; your digital presence should be too. We create seamless, platform-agnostic native experiences that adapt liquidly from a 4K desktop display to the smartphone in their pocket.",
    icon: Smartphone,
    stats: [
      { label: 'Mobile Retention', val: '+185%' },
      { label: 'Cross-platform UX', val: '100%' },
    ],
    color: "from-purple-600 to-fuchsia-400",
    textAccent: "text-purple-400",
    bgAccent: "bg-purple-400/10",
    borderAccent: "border-purple-400/20",
    glowAccent: "bg-purple-400/20",
    nodeBorder: "border-purple-400",
    shadow: "shadow-[0_0_20px_2px_rgba(168,85,247,0.2)]",
    solidColor: "bg-purple-500",
    imageSrc: "/3d-icons/mobile_app.png"
  },
  {
    id: 3,
    title: "AI Calling Agent",
    subtitle: "Autonomous Voice Ops",
    description: "Scale your business without the overhead. Our autonomous neural conversational agents handle lead qualification and customer support over the phone 24/7. An intelligent workforce that never sleeps and always sounds human.",
    icon: Bot,
    stats: [
      { label: 'Operating Cost', val: '-60%' },
      { label: 'Response Time', val: 'INSTANT' },
    ],
    color: "from-emerald-600 to-lime-400",
    textAccent: "text-emerald-400",
    bgAccent: "bg-emerald-400/10",
    borderAccent: "border-emerald-400/20",
    glowAccent: "bg-emerald-400/20",
    nodeBorder: "border-emerald-400",
    shadow: "shadow-[0_0_20px_2px_rgba(16,185,129,0.2)]",
    solidColor: "bg-emerald-500",
    imageSrc: "/3d-icons/ai_calling.png"
  },
  {
    id: 4,
    title: "AI Messaging Agent",
    subtitle: "Conversational Supremacy",
    description: "Intercept, engage, and convert website visitors into booked appointments automatically. Our intelligent messaging algorithms adapt to client intent instantly on SMS, WhatsApp, and Web Chat.",
    icon: MessageSquare,
    stats: [
      { label: 'Lead Volume', val: '3x-5x' },
      { label: 'System Uptime', val: '99.9%' },
    ],
    color: "from-sky-600 to-indigo-400",
    textAccent: "text-sky-400",
    bgAccent: "bg-sky-400/10",
    borderAccent: "border-sky-400/20",
    glowAccent: "bg-sky-400/20",
    nodeBorder: "border-sky-400",
    shadow: "shadow-[0_0_20px_2px_rgba(14,165,233,0.2)]",
    solidColor: "bg-sky-500",
    imageSrc: "/3d-icons/ai_messaging.png"
  },
  {
    id: 5,
    title: "Digital Marketing",
    subtitle: "Algorithmic Growth",
    description: "Ditch the guesswork. We deploy data-driven targeting protocols and viral content loops that put your brand exactly where your audience lives. Stop chasing leads; start being the destination they can't ignore.",
    icon: Rocket,
    stats: [
      { label: 'Ad Performance', val: '+210%' },
      { label: 'ROAS Average', val: '8.4x' },
    ],
    color: "from-amber-600 to-orange-400",
    textAccent: "text-amber-400",
    bgAccent: "bg-amber-400/10",
    borderAccent: "border-amber-400/20",
    glowAccent: "bg-amber-400/20",
    nodeBorder: "border-amber-400",
    shadow: "shadow-[0_0_20px_2px_rgba(245,158,11,0.2)]",
    solidColor: "bg-amber-500",
    imageSrc: "/3d-icons/digital_marketing.png"
  }
];

// Interactive 3D Image Component
function Floating3DImage({ imageSrc, solidColor, index }: { imageSrc: string, solidColor: string, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Snappy, responsive spring physics for mouse following
  const mouseX = useSpring(x, { stiffness: 200, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] flex items-center justify-center perspective-[1000px] group cursor-pointer"
    >
      <motion.div 
        style={{
          rotateX: useTransform(mouseY, [-200, 200], [15, -15]),
          rotateY: useTransform(mouseX, [-200, 200], [-15, 15]),
          x: useTransform(mouseX, [-200, 200], [-15, 15]),
          y: useTransform(mouseY, [-200, 200], [-15, 15]),
        }}
        className="relative z-20 w-full h-full flex items-center justify-center"
      >
        <Image
           src={imageSrc}
           alt="3D Service Rendering"
           fill
           priority={index < 2}
           className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] mix-blend-screen hover:scale-105 transition-transform duration-500 ease-out"
        />
      </motion.div>
      
      {/* Dynamic ambient underglow based on mouse movement */}
      <motion.div 
        style={{
          x: useTransform(mouseX, [-200, 200], [30, -30]),
          y: useTransform(mouseY, [-200, 200], [30, -30]),
        }}
        className={`absolute z-10 w-48 h-48 md:w-64 md:h-64 rounded-full ${solidColor} opacity-10 blur-[80px] transition-opacity duration-500 group-hover:opacity-40`}
      />
    </div>
  );
}


export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-40 bg-black overflow-hidden z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-[#0ea5e9] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0ea5e9]">Why Partner With Us</span>
          </div>
          <h2 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-none tracking-tighter uppercase mb-6">
            THE <span className="gradient-text italic text-[#0ea5e9]">NEW STANDARD</span><br/>OF GROWTH
          </h2>
          <p className="font-mono text-sm md:text-base text-white/40 uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Every system below represents a non-negotiable pillar of your digital dominance.
          </p>
        </motion.div>

        {/* Vertical Stacking / Popping Cards Array */}
        <div className="flex flex-col gap-16 md:gap-32 relative">
          {/* Vertical connection line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0" />

          {cards.map((card, index) => {
            const isEven = index % 2 !== 0; // for alternating layout on desktop
            
            return (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, scale: 0.75, y: 150 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 220, 
                  damping: 20, 
                  mass: 0.8,
                  delay: 0.05
                }}
                className={`relative z-10 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-4 lg:gap-16 w-full`}
              >
                
                {/* Content Side */}
                <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} items-center text-center`}>
                  <div className={`mb-6 relative inline-block`}>
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${card.bgAccent} flex items-center justify-center border ${card.borderAccent} relative z-10 backdrop-blur-md`}>
                        <card.icon className={`w-8 h-8 md:w-10 md:h-10 ${card.textAccent}`} />
                    </div>
                    <div className={`absolute -inset-4 ${card.glowAccent} blur-2xl rounded-full opacity-50`} />
                  </div>
                  
                  <div className={`font-mono text-xs md:text-sm ${card.textAccent} uppercase tracking-widest mb-3 font-bold flex items-center gap-2`}>
                    {!isEven && <span className="hidden lg:block w-8 h-px bg-white/20" />}
                    {card.subtitle}
                    {isEven && <span className="hidden lg:block w-8 h-px bg-white/20" />}
                  </div>
                  
                  <h3 className="text-[2rem] md:text-[3.5rem] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                    {card.title}
                  </h3>
                  
                  <p className="text-white/60 font-mono text-sm md:text-base leading-relaxed max-w-lg mb-8">
                    {card.description}
                  </p>

                  <div className={`flex gap-4 w-full justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    {card.stats.map((stat: any) => (
                      <div key={stat.label} className="glass-panel p-4 md:p-5 rounded-2xl border-white/5 min-w-[140px]">
                          <div className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-2">{stat.label}</div>
                          <div className="text-white font-heading font-black text-2xl md:text-3xl tracking-tighter">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive 3D Image Side (Desktop & Mobile) */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative pt-8 lg:pt-0">
                    <Floating3DImage imageSrc={card.imageSrc} solidColor={card.solidColor} index={index} />
                </div>

                {/* Center Node on Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full bg-black border-4 ${card.nodeBorder} ${card.shadow}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
