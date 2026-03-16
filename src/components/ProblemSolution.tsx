'use client';

import { useState, useRef } from 'react';
import { Activity, Globe, Smartphone, Bot, BarChart3, AlertTriangle } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
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
  
  // HUD update based on active card in stack
  // ScrollStack handles the actual animation logic

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Sticky 3D Diagnostic Environment */}
          <div className="lg:col-span-5 h-auto lg:h-[80vh] sticky top-20 lg:top-[10vh] flex flex-col items-center justify-center gap-6 pointer-events-none z-30">
            
            {/* STAGE HUD */}
            <div className="w-full flex flex-col items-center lg:items-start gap-4 font-mono">
               <div className="text-[10px] text-red-500/60 uppercase tracking-[0.5em] mb-2">Sequence_Status</div>
               <div className="text-3xl font-black text-white">
                 ACTIVE_SCAN<span className="text-red-500 animate-pulse">...</span>
               </div>
            </div>

            <div className="w-full h-[350px] md:h-[450px] lg:h-full relative rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-[0_0_100px_rgba(239,68,68,0.1)] pointer-events-auto">
              <div className="absolute inset-0 z-0">
                 <Canvas 
                   camera={{ position: [0, 0, 10], fov: 35 }}
                   dpr={[1, 1.5]}
                   performance={{ min: 0.5 }}
                   gl={{ antialias: true, powerPreference: "high-performance" }}
                 >
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 10, 10]} intensity={3} />
                    <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={20} color="#ef4444" castShadow />
                    <SystemScanner />
                 </Canvas>
              </div>
              
              {/* Terminal Overlays */}
              <div className="absolute top-0 left-0 p-8 font-mono text-[11px] text-red-500 uppercase tracking-widest z-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                [ SCANNING_CORE_OS ] <br/>
                PRIME_UNIT_01
              </div>
            </div>
          </div>

          {/* Right: Scrollable Cards with Stacking Animation */}
          <div className="lg:col-span-7">
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={120} 
              itemScale={0.015} 
              itemStackDistance={45}
              stackPosition="8%"
              baseScale={0.97}
            >
              {painPoints.map((point, index) => (
                <ScrollStackItem key={point.id}>
                  <div className="relative h-full w-full rounded-[2.3rem] p-6 md:p-10 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 blur-[120px] pointer-events-none`} />
                    
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-red-500/10 border border-red-500/20`}>
                          {(() => {
                             const Icon = point.icon;
                             return <Icon className={`w-6 h-6 text-red-400`} />;
                          })()}
                       </div>
                       <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-1">{point.id}</span>
                          <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight">
                             {point.problem}
                          </h3>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                       <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10">
                          <div className="flex items-center gap-2 mb-2">
                             <AlertTriangle className="w-4 h-4 text-red-500" />
                             <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">Diagnosis</span>
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed font-mono">
                             {point.details}
                          </p>
                       </div>

                       <div className={`p-5 rounded-2xl bg-red-500/10 border border-red-500/30`}>
                          <span className={`text-[10px] font-mono text-red-400 uppercase tracking-widest mb-2 block font-bold`}>Premium Solution</span>
                          <p className="text-base md:text-lg text-white font-bold leading-tight">
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
