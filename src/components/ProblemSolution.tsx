'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Activity, Globe, Smartphone, Bot, BarChart3, AlertTriangle } from 'lucide-react';
import { View } from '@react-three/drei';
import { useInView } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SystemScanner from './SystemScanner';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';

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
  const stageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stageRef, { margin: "200px" });
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={containerRef} className="relative py-12 md:py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-[1550px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8 backdrop-blur-md animate-pulse">
              <Activity className="w-4 h-4 text-red-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 font-bold">Deep System Scan</span>
           </div>
           
           <h2 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
              <span className="text-white">DIAGNOSING</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-600 italic">
                YOUR BUSINESS
              </span>
           </h2>
           <p className="font-mono text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wider mb-8">
              Scroll through the automated diagnostic sequence to reveal critical failure points and their solutions.
           </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start min-h-[400vh]">
          
          {/* Left: Sticky 3D Diagnostic Environment */}
          <div className="lg:col-span-5 h-auto lg:h-[80vh] sticky top-20 lg:top-[12vh] flex flex-col items-center justify-center gap-6 pointer-events-none z-30">
            
            {/* STAGE HUD */}
            <div className="w-full flex flex-col items-center lg:items-start gap-4 font-mono">
               <div className="text-[10px] text-red-500/60 uppercase tracking-[0.5em] mb-2 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                 Sequence_Status
               </div>
               <div className="text-4xl font-black text-white tracking-tighter">
                 ACTIVE_SCAN<span className="text-red-600">.</span>
               </div>
            </div>

            <div 
              ref={stageRef}
              className="w-full h-[350px] md:h-[450px] lg:h-[550px] relative rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_100px_rgba(239,68,68,0.15)] pointer-events-auto"
            >
              <div className="absolute inset-0 z-0">
                 {mounted && stageRef.current && isInView && (
                   <View track={stageRef as any}>
                      <ambientLight intensity={1.5} />
                      <pointLight position={[10, 10, 10]} intensity={3} />
                      <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={25} color="#ef4444" castShadow />
                      <SystemScanner />
                   </View>
                 )}
              </div>
              
              {/* Terminal Overlays */}
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] text-red-500/80 uppercase tracking-widest z-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                [ SCANNING_CORE_OS ] <br/>
                PRIME_UNIT_01 // SECURE
              </div>
            </div>
          </div>

          {/* Right: Scrollable Cards with Stacking Animation */}
          <div className="lg:col-span-7">
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={100} 
              itemScale={0.015} 
              itemStackDistance={32}
              stackPosition="5%"
              baseScale={0.97}
            >
              {painPoints.map((point, index) => (
                <ScrollStackItem key={point.id}>
                  <div className="relative h-full w-full rounded-[2rem] p-5 md:p-10 overflow-hidden flex flex-col justify-center">
                    {/* Technical Visuals */}
                    <div className="scroll-stack-card-scan" />
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/[0.03] blur-[120px] pointer-events-none`} />
                    
                    <div className="flex items-center gap-3 md:gap-5 mb-3 md:mb-8 relative z-10">
                       <div className={`w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl flex items-center justify-center bg-red-500/10 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)] shrink-0`}>
                          {(() => {
                             const Icon = point.icon;
                             return <Icon className={`w-4 h-4 md:w-7 md:h-7 text-red-500`} />;
                          })()}
                       </div>
                       <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-red-500/50 font-bold">{point.id}</span>
                            <div className="h-[1px] w-6 md:w-8 bg-red-500/20" />
                          </div>
                          <h3 className="text-base md:text-3xl font-heading font-black text-white uppercase tracking-tighter leading-none truncate">
                             {point.problem}
                          </h3>
                       </div>
                    </div>

                     <div className="grid grid-cols-1 gap-2 md:gap-5 relative z-10">
                       <div className="p-3 md:p-6 rounded-[1rem] md:rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-2 mb-1.5 md:mb-3">
                             <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-600" />
                             <span className="text-[8px] md:text-[10px] font-mono text-red-500/80 uppercase tracking-[0.2em] font-bold">Diagnostic_Report</span>
                          </div>
                          <p className="text-[10px] md:text-base text-white/60 leading-relaxed font-mono">
                             {point.details}
                          </p>
                       </div>

                       <div className={`p-3 md:p-6 rounded-[1rem] md:rounded-[1.5rem] bg-red-500/[0.08] border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.05)]`}>
                          <span className={`text-[8px] md:text-[10px] font-mono text-red-400 uppercase tracking-[0.3em] mb-1.5 md:mb-4 block font-black underline decoration-red-500/30 underline-offset-4 md:underline-offset-8`}>OPTIMIZED_SOLUTION</span>
                          <p className="text-[13px] md:text-2xl text-white font-black leading-[1.1] tracking-tight uppercase">
                             {point.solution}
                          </p>
                       </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
}
