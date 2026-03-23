"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Square, X, Info } from "lucide-react";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";

export interface ServiceItem {
  id: number;
  title: string;
  headline?: string;
  content: string;
  benefits?: string[];
  icon: React.ElementType;
  accent?: string;
  secondary?: string;
  date?: string;
  category?: string;
  status?: string;
  energy?: number;
  relatedIds?: number[];
}

interface ServiceOrbitalProps {
  services: ServiceItem[];
  activeServiceId: number | null;
  onServiceSelect: (id: number | null) => void;
  isMobile?: boolean;
}

export default function ServiceOrbital({
  services,
  activeServiceId,
  onServiceSelect,
  isMobile = false,
}: ServiceOrbitalProps) {
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHint, setShowHint] = useState(true);
  
  const velocityRef = useRef(0);
  const rotationRef = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Constants
  const RADIUS = isMobile ? 130 : 200;
  const FRICTION = 0.98; // Natural decay
  const MAX_VELOCITY = 15;
  const ACCELERATION = 0.5;

  // Auto-spin on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVelocity(5); // Start slow spin
      velocityRef.current = 5;
      setIsSpinning(true);
      
      // Stop after 2s
      setTimeout(() => {
        setIsSpinning(false);
        setShowHint(false);
      }, 2000);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Physics Engine
  useAnimationFrame((time, delta) => {
    if (isDragging.current) return;

    let currentVelocity = velocityRef.current;

    if (isSpinning) {
      // Accelerate to max
      currentVelocity = Math.min(currentVelocity + ACCELERATION, MAX_VELOCITY);
    } else {
      // Natural decay
      currentVelocity *= FRICTION;
      if (currentVelocity < 0.1) currentVelocity = 0;
    }

    // Slow down on hover (Desktop) or if modal is open
    if (!isMobile && isHovered && !isSpinning) {
       currentVelocity *= 0.5;
    }

    velocityRef.current = currentVelocity;
    rotationRef.current = (rotationRef.current + currentVelocity) % 360;
    setRotation(rotationRef.current);
  });

  const handleToggleSpin = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSpinning(!isSpinning);
    if (!isSpinning) {
       // Optional boost logic removed as per "smooth acceleration" requirement
    }
  };

  // Drag Logic
  const handleStart = (clientX: number, clientY: number) => {
    isDragging.current = true;
    lastMousePos.current = { x: clientX, y: clientY };
    setIsSpinning(false);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging.current) return;
    
    // Calculate simple angle difference based on mouse movement relative to center
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle1 = Math.atan2(lastMousePos.current.y - centerY, lastMousePos.current.x - centerX);
    const angle2 = Math.atan2(clientY - centerY, clientX - centerX);
    
    let diff = (angle2 - angle1) * (180 / Math.PI);
    
    rotationRef.current = (rotationRef.current + diff) % 360;
    velocityRef.current = diff * 0.8; // Set velocity based on drag speed
    setRotation(rotationRef.current);
    
    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={() => {
        handleEnd();
        if (!isMobile) setIsHovered(false);
      }}
      onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleEnd}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
    >
      {/* Visual Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Main Orbit Ring */}
        <div 
          className="absolute rounded-full border border-cyan-400/15"
          style={{ width: RADIUS * 2, height: RADIUS * 2 }}
        />
        {/* Secondary Inner Ring */}
        <div 
          className="absolute rounded-full border border-cyan-400/5"
          style={{ width: RADIUS * 1.7, height: RADIUS * 1.7 }}
        />
        
        {/* Rotating Dashed Arc (Parallax) */}
        <motion.div
           className="absolute border-2 border-dashed border-cyan-400/10 rounded-full"
           style={{ width: RADIUS * 2.2, height: RADIUS * 2.2 }}
           animate={{ rotate: rotation * 0.25 }}
        />

        {/* Satellite Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00D4FF]"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ x: RADIUS }}
            />
        </div>

        {/* Drag Hint Circle */}
        <AnimatePresence>
           {isDragging.current && (
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1.1 }}
               exit={{ opacity: 0 }}
               className="absolute rounded-full border border-dashed border-cyan-400/30"
               style={{ width: RADIUS * 2.2, height: RADIUS * 2.2 }}
             />
           )}
        </AnimatePresence>
      </div>

      {/* Center SPIN/STOP Button */}
      <div className="relative z-50">
        <button
          onClick={handleToggleSpin}
          className={`
            w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center transition-all duration-300
            ${isSpinning 
              ? 'bg-red-500/10 border-[1.5px] border-red-500 shadow-[0_0_20px_rgba(255,45,85,0.3)]' 
              : 'bg-[#0A0A0F] border-[1.5px] border-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.3)]'
            }
          `}
        >
          {isSpinning ? (
            <Square className="w-6 h-6 text-white fill-current" />
          ) : (
            <Play className="w-6 h-6 text-cyan-400 fill-current ml-1" />
          )}
          <span className={`text-[9px] font-mono font-black tracking-[3px] mt-1 ${isSpinning ? 'text-white' : 'text-cyan-400'}`}>
            {isSpinning ? 'STOP' : 'SPIN'}
          </span>

          {/* Pulsing Border Ring */}
          {!isSpinning && (
            <motion.div 
              className="absolute inset-[-4px] border border-cyan-400/30 rounded-full"
              animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </button>
      </div>

      {/* Services Nodes */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {services.map((service, index) => {
          const angle = (index / services.length) * 360;
          const isActive = activeServiceId === service.id;
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translate(${RADIUS}px) rotate(-${angle}deg) rotate(-${rotation}deg)`
              }}
            >
              <div 
                className="relative cursor-pointer pointer-events-auto group"
                onClick={(e) => {
                   e.stopPropagation();
                   onServiceSelect(service.id);
                   if (isMobile) {
                      setRotation(prev => prev); // Pause visually
                      velocityRef.current = 0;
                   }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2"
                  style={{
                    backgroundColor: isActive ? service.accent : '#111118',
                    borderColor: isActive ? service.secondary : `${service.accent || '#00D4FF'}44`,
                    boxShadow: isActive ? `0 0 30px ${service.accent}` : 'none',
                    color: isActive ? '#000' : (service.accent || '#fff')
                  }}
                  aria-label={`Explore ${service.title}`}
                  role="button"
                >
                  {(() => {
                    const NodeIcon = service.icon as any;
                    return <NodeIcon className="w-6 h-6 transition-colors duration-300" />;
                  })()}
                </motion.div>

                {/* Tooltip (Desktop) */}
                {!isMobile && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-400 text-black text-[10px] font-black px-2 py-1 rounded whitespace-nowrap pointer-events-none uppercase">
                    {service.title}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint Label */}
      <AnimatePresence>
        {showHint && (
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0 }}
             className="absolute bottom-10 font-mono text-cyan-400 text-[10px] tracking-widest flex items-center gap-2"
           >
             <span className="animate-pulse">↻</span> DRAG TO SPIN OR CLICK THE BUTTON
           </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
