"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Activity, Cpu, ZapIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: any;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(Math.min((window.innerWidth / 2) - 40, 160));
      } else if (window.innerWidth < 1024) {
        setRadius(170);
      } else {
        setRadius(200);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { [id]: !prev[id] };
      if (newState[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const nodeIndex = timelineData.findIndex(i => i.id === id);
        const totalNodes = timelineData.length;
        const targetAngle = (nodeIndex / totalNodes) * 360;
        setRotationAngle(270 - targetAngle);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }
      return newState;
    });
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (autoRotate) {
        const deltaTime = time - lastTime;
        const deltaAngle = (4 / 1000) * deltaTime;
        setRotationAngle((prev) => (prev + deltaAngle) % 360);
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  return (
    <div
      className="relative w-full h-full min-h-[500px] lg:min-h-[650px] flex items-center justify-center bg-transparent overflow-visible"
      ref={containerRef}
      onClick={() => {
        setExpandedItems({});
        setActiveNodeId(null);
        setAutoRotate(true);
      }}
    >
      {/* Background Ambient Glow for Contrast */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)] opacity-60" />
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        
        {/* SVG Area for connectivity lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <AnimatePresence>
            {activeNodeId && timelineData.find(i => i.id === activeNodeId)?.relatedIds.map(relId => {
              const activeIndex = timelineData.findIndex(i => i.id === activeNodeId);
              const relIndex = timelineData.findIndex(i => i.id === relId);
              const p1 = calculateNodePosition(activeIndex, timelineData.length);
              const p2 = calculateNodePosition(relIndex, timelineData.length);
              
              const viewportWidth = containerRef.current?.offsetWidth || 800;
              const viewportHeight = containerRef.current?.offsetHeight || 600;
              const cx = viewportWidth / 2;
              const cy = viewportHeight / 2;

              return (
                <motion.path
                  key={`line-${activeNodeId}-${relId}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "circOut" }}
                  d={`M ${cx + p1.x} ${cy + p1.y} Q ${cx} ${cy} ${cx + p2.x} ${cy + p2.y}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="12 6"
                  className="animate-[marquee_15s_linear_infinite]"
                />
              );
            })}
          </AnimatePresence>
        </svg>

        {/* Neural Core */}
        <div className="absolute flex items-center justify-center z-20 scale-75 md:scale-100">
          <div className="absolute w-44 h-44 rounded-full bg-blue-400/[0.03] border border-blue-400/20 animate-glow-scan" 
               style={{ background: 'conic-gradient(from 0deg, transparent, rgba(14,165,233,0.3), transparent 30%)' }} />
          <div className="absolute w-36 h-36 rounded-full border border-white/10 animate-reverse-spin duration-[12s]" />
          
          <div className="relative w-28 h-28 rounded-full flex items-center justify-center glass-premium border-blue-400/40 glow-blue-strong overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-purple-500/20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 blur-[1px]" />
            <Cpu className="w-12 h-12 text-blue-400 animate-float" />
            
            {/* Spinning inner data ring */}
            <div className="absolute inset-1 border-2 border-dashed border-blue-400/30 rounded-full animate-[spin_8s_linear_infinite]" />
          </div>
          
          {/* External pulse ripples - Higher Visibility */}
          <div className="absolute w-36 h-36 rounded-full border border-blue-500/30 animate-ping opacity-60" />
          <div className="absolute w-56 h-56 rounded-full border border-blue-400/20 animate-ping [animation-delay:0.5s] opacity-40" />
        </div>

        {/* Global Orbit Line */}
        <div 
          className="absolute rounded-full border border-blue-400/15 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none shadow-[0_0_30px_rgba(14,165,233,0.05)]"
          style={{ width: radius * 2, height: radius * 2 }}
        >
          {/* Energy packets traveling around the orbit - Brighter & Larger */}
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={`packet-${i}`}
              className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(14,165,233,0.8)] blur-[1px]"
              style={{
                offsetPath: `circle(${radius}px at center)`,
                animation: `orbit-particle ${8 + i * 1.5}s linear infinite`,
                animationDelay: `${-i * 2}s`
              }}
            />
          ))}
        </div>

        {/* Timeline Nodes */}
        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isActive = activeNodeId === item.id;
          const isRelated = activeNodeId && (item.relatedIds.includes(activeNodeId) || timelineData.find(i => i.id === activeNodeId)?.relatedIds.includes(item.id));
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-700 cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 500 : position.zIndex,
                opacity: activeNodeId && !isActive && !isRelated ? 0.2 : (isExpanded ? 1 : position.opacity),
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Glossy Node Icon with Specular Highlight */}
              <motion.div
                whileHover={{ scale: 1.25, rotate: 8, filter: 'brightness(1.2)' }}
                className={`
                  relative w-14 h-14 rounded-[1.25rem] flex items-center justify-center
                  glass-premium border-white/20
                  ${isActive ? "border-blue-400 shadow-[0_0_40px_rgba(14,165,233,0.5)] scale-110" : "hover:border-blue-400/60"}
                  transition-all duration-500 overflow-hidden
                `}
              >
                {/* Specular Highlight line */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                {isActive && (
                  <div className="absolute inset-0 bg-blue-400/20 rounded-2xl animate-pulse" />
                )}
                <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-white/70"}`} />
                
                {/* Status indicator mini-pip - Properly Highlighted */}
                <div className={`absolute top-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-black ${item.status === 'completed' ? 'bg-green-400' : 'bg-blue-400'} shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
              </motion.div>

              {/* Label - Higher contrast */}
              <div className={`absolute top-16 left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap ptr-events-none`}>
                 <span className={`font-heading text-[11px] sm:text-[13px] font-black uppercase tracking-[0.15em] ${isActive ? "text-blue-400 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]" : "text-white/50"}`}>
                   {item.title}
                 </span>
                 <div className={`h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 mx-auto ${isActive ? "w-full mt-1.5 opacity-100" : "w-0 opacity-0"}`} />
              </div>

              {/* Expansion Card (High-Fidelity) */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="absolute top-24 left-1/2 -translate-x-1/2 w-[290px] sm:w-[340px] z-[600]"
                  >
                    <div className="relative glass-premium p-7 rounded-[2.5rem] border-white/20 shadow-2xl overflow-hidden group/card bg-black/95">
                      {/* Border Beam Logic - Intensified Glow */}
                      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden rounded-[2.5rem]">
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,#0ea5e9,transparent_30%)] animate-[spin_3s_linear_infinite]" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-5">
                          <Badge className="bg-blue-400/20 border-blue-400/40 text-blue-400 text-[10px] font-black uppercase tracking-wider rounded-full px-4 py-1.5">
                            {item.category}
                          </Badge>
                          <span className="font-mono text-[10px] text-white/40 tracking-widest font-bold">{item.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-heading font-black text-white mb-3 tracking-tighter uppercase leading-tight italic">
                          {item.title}
                        </h3>
                        
                        <p className="text-white/60 text-sm font-mono leading-relaxed mb-8">
                          {item.content}
                        </p>

                        <div className="space-y-5">
                          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-[1.5rem] glow-blue-strong">
                             <div className="flex justify-between items-center mb-3">
                                <span className="flex items-center gap-2 text-[11px] text-white/50 uppercase tracking-[0.2em] font-bold">
                                  <ZapIcon size={14} className="text-blue-400 animate-pulse" /> Neural Impact
                                </span>
                                <span className="text-blue-400 font-mono text-sm font-black">{item.energy}%</span>
                             </div>
                             <div className="h-2 w-full bg-blue-900/20 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${item.energy}%` }}
                                 className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300" 
                               />
                             </div>
                          </div>

                          {item.relatedIds.length > 0 && (
                            <div className="grid grid-cols-1 gap-3">
                               {item.relatedIds.map(relId => {
                                 const rel = timelineData.find(i => i.id === relId);
                                 return (
                                   <button 
                                     key={relId}
                                     onClick={(e) => { e.stopPropagation(); toggleItem(relId); }}
                                     className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-blue-400/10 transition-all group/btn"
                                   >
                                     <span className="text-[11px] font-mono text-white/70 group-hover/btn:text-white uppercase tracking-widest font-black">Sync {rel?.title}</span>
                                     <Activity size={14} className="text-blue-400 transition-transform group-hover/btn:scale-125" />
                                   </button>
                                 )
                               })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
