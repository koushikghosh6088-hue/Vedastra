'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Activity, Globe, Smartphone, Bot, BarChart3, ChevronRight, AlertTriangle } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import AnimatedSection from './AnimatedSection';
import SystemScanner from './SystemScanner';

const painPoints = [
  {
    id: "SYS-01: WEB",
    problem: "Invisible or Outdated Web Presence",
    details: "You either don't have a website, or your current one is slow, outdated, and actively bleeding potential customers.",
    solution: "We build sub-400ms High-Fidelity Conversion Engines. Dominate your niche with a modern, ultra-fast web architecture.",
    icon: Globe,
    metrics: "40% Visitor Bounce Rate",
    color: "blue"
  },
  {
    id: "SYS-02: MOBILE",
    problem: "Zero Mobile Strategy",
    details: "In a mobile-first world, lacking a native app means you are losing daily engagement and retention to competitors.",
    solution: "Deploy Seamless Omnichannel Native Apps. Keep your brand in your customers' pockets 24/7.",
    icon: Smartphone,
    metrics: "Lost Daily Active Users",
    color: "purple"
  },
  {
    id: "SYS-03: AI",
    problem: "Leads Going Cold",
    details: "Human support is too slow. Leads inquire after hours and go cold before your team can ever respond.",
    solution: "Initialize 24/7 Autonomous Neural Agents. Intercept, qualify, and book leads instantly, at any hour.",
    icon: Bot,
    metrics: "72h Avg. Response Delay",
    color: "emerald"
  },
  {
    id: "SYS-04: GROWTH",
    problem: "Burning Ad Spend",
    details: "Pouring money into generic marketing campaigns that generate clicks but fail to deliver actual ROI.",
    solution: "Implement Algorithmic Growth Loops. Data-driven targeting that puts your brand exactly where it needs to be.",
    icon: BarChart3,
    metrics: "Declining ROAS",
    color: "amber"
  }
];

export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate index based on scroll progress
  const scrollIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, 3]
  );

  useEffect(() => {
    return scrollIndex.onChange((v) => {
      const index = Math.min(Math.floor(v), painPoints.length - 1);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    });
  }, [scrollIndex, activeIndex]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 bg-black overflow-hidden border-t border-white/5 min-h-[300vh]">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-[1550px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8 backdrop-blur-md animate-pulse">
              <Activity className="w-4 h-4 text-red-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 font-bold">System Diagnosis</span>
           </div>
           
           <h2 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
              WHY YOU NEED <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 italic">AN UPGRADE</span>
           </h2>
           <p className="font-mono text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wider mb-8">
              We identify the critical failure points in your current business architecture and deploy high-performance engineering solutions.
           </p>
           <div className="flex flex-col items-center gap-2 text-red-500/40 font-mono text-[10px] tracking-widest uppercase">
              <span>Scroll to Diagnose</span>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-12 bg-gradient-to-b from-red-500/50 to-transparent" 
              />
           </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Sticky 3D Diagnostic Environment */}
          <div className="lg:col-span-5 h-[400px] md:h-[600px] sticky top-32 rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 z-0 mix-blend-screen opacity-80">
               <Canvas 
                 camera={{ position: [0, 0, 5], fov: 45 }}
                 dpr={[1, 1.5]}
                 performance={{ min: 0.5 }}
                 gl={{ antialias: false, powerPreference: "high-performance" }}
               >
                  <ambientLight intensity={0.4} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={10} color="#ef4444" castShadow />
                  <SystemScanner />
               </Canvas>
            </div>
            
            {/* Terminal Overlays */}
            <div className="absolute top-0 left-0 p-6 font-mono text-[10px] text-red-500/80 uppercase tracking-widest z-10 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">
              [ SCANNING_INFRASTRUCTURE ] <br/>
              TARGET: {painPoints[activeIndex].id}
            </div>
            <div className="absolute bottom-0 right-0 p-6 font-mono text-[9px] text-[#0ea5e9]/60 uppercase tracking-tighter text-right z-10">
              ANALYSIS_COMPLETE <br/>
              AWAITING_DEPLOYMENT
            </div>
          </div>

          {/* Right: Interactive Focus Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {painPoints.map((point, i) => {
               const isActive = i === activeIndex;
               
               return (
                 <div 
                   key={point.id}
                   onClick={() => setActiveIndex(i)}
                   className={`relative cursor-pointer transition-all duration-500 overflow-hidden rounded-[2rem] border backdrop-blur-xl ${
                     isActive 
                       ? 'bg-white/[0.05] border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)] p-1' // Active state wrapper
                       : 'bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/[0.02] p-6' // Inactive state
                   }`}
                 >
                    {/* ACTIVE STATE INTERNAL WRAPPER */}
                    {isActive ? (
                       <div className="relative h-full w-full bg-black/80 rounded-[1.8rem] p-6 md:p-8 flex items-start gap-4 md:gap-6 border border-white/5">
                           {/* Active Highlight Glow */}
                           <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-${point.color}-500/10 blur-[100px] pointer-events-none`} />
                           
                           <div className="relative z-10 flex-1">
                               <div className="flex items-center gap-3 mb-6">
                                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${point.color}-500/10 border border-${point.color}-500/20`}>
                                       <point.icon 
                                         className={`w-6 h-6 text-${point.color}-400`} 
                                         style={{ filter: `drop-shadow(0 0 15px rgba(var(--${point.color}-500), 0.5))` }}
                                       />
                                   </div>
                                   <div>
                                       <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-1">{point.id}</span>
                                       <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight">
                                           {point.problem}
                                       </h3>
                                   </div>
                               </div>
                               
                               <div className="space-y-6">
                                   {/* Problem Details */}
                                   <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                       <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                       <div>
                                           <span className="text-[10px] font-mono text-red-500/70 uppercase tracking-widest mb-1 block">Diagnosis</span>
                                           <p className="text-sm text-white/70 leading-relaxed font-mono">
                                               {point.details}
                                           </p>
                                       </div>
                                   </div>

                                   {/* Solution Details */}
                                   <div className={`flex items-start gap-4 p-5 rounded-xl bg-${point.color}-500/10 border border-${point.color}-500/30`}>
                                       <div className={`w-2 h-full absolute left-0 top-0 bottom-0 bg-${point.color}-500 rounded-l-xl opacity-50`} />
                                       <div>
                                           <span className={`text-[10px] font-mono text-${point.color}-400 uppercase tracking-widest mb-2 block font-bold`}>The Solution</span>
                                           <p className="text-base md:text-lg text-white font-bold leading-relaxed shadow-sm">
                                               {point.solution}
                                           </p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    ) : (
                       // INACTIVE STATE
                       <div className="flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity">
                           <div className="flex items-center gap-4">
                               <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
                                   <point.icon className="w-5 h-5 text-white/50" />
                               </div>
                               <div>
                                   <h3 className="text-lg font-heading font-bold text-white uppercase tracking-tight">
                                       {point.problem}
                                   </h3>
                               </div>
                           </div>
                           <ChevronRight className="w-5 h-5 text-white/30" />
                       </div>
                    )}
                 </div>
               );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
