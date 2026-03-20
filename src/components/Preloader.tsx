'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Generate random matrix characters
const MATRIX_CHARS = 'ヴェダストラAILABS01アイラボ＞＜{}[]|/\\+=_-*&^%$#@!~';
const getRandomChar = () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

function MatrixRain({ columns = 20 }: { columns?: number }) {
  const drops = useMemo(() =>
    Array.from({ length: columns }).map((_, i) => ({
      id: i,
      x: (i / columns) * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
      chars: Array.from({ length: 12 }).map(() => getRandomChar()),
    })), [columns]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-0 font-mono text-[10px] leading-tight"
          style={{ left: `${drop.x}%` }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '120vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {drop.chars.map((char, j) => (
            <div
              key={j}
              className={j === 0 ? 'text-white' : 'text-blue-400/60'}
              style={{ opacity: 1 - j * 0.08 }}
            >
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{text}</span>
      {/* Glitch layers */}
      <span
        className="absolute inset-0 text-red-500/70 z-0"
        style={{
          animation: 'glitch-1 2.5s infinite linear alternate-reverse',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        }}
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-cyan-400/70 z-0"
        style={{
          animation: 'glitch-2 3s infinite linear alternate-reverse',
          clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

function OrbitalLoader({ progress }: { progress: number }) {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_15px_#0ea5e9]" />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-purple-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
      </motion.div>

      {/* Progress arc */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(14,165,233,0.1)" strokeWidth="0.5" />
        <motion.circle
          cx="50" cy="50" r="46" fill="none"
          stroke="url(#progressGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 46}`}
          strokeDashoffset={2 * Math.PI * 46 * (1 - progress / 100)}
          style={{ filter: 'drop-shadow(0 0 6px #0ea5e9)' }}
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-br from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Math.floor(progress)}%
        </motion.div>
      </div>
    </div>
  );
}

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [robotLoaded, setRobotLoaded] = useState(false);

  useEffect(() => {
    const onRobotLoad = () => setRobotLoaded(true);
    window.addEventListener('spline-loaded', onRobotLoad);

    let animationFrameId: number;
    const startTime = Date.now();
    const duration = 1800;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      // Eased progress for more dramatic feel
      const linear = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - linear, 3); // easeOutCubic
      const newProgress = eased * 100;
      
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        const checkReady = () => {
          if (robotLoaded) {
            setTimeout(() => setLoading(false), 400);
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('spline-loaded', onRobotLoad);
    };
  }, [robotLoaded]);

  const statusMessages = [
    { threshold: 0, text: '> BOOTING NEURAL CORES...' },
    { threshold: 20, text: '> INITIALIZING AI ENGINES...' },
    { threshold: 40, text: '> LOADING VISUAL MATRIX...' },
    { threshold: 60, text: '> SYNCING DESIGN PROTOCOLS...' },
    { threshold: 80, text: '> CALIBRATING INTERFACE...' },
    { threshold: 95, text: '> SYSTEM ONLINE ▮' },
  ];

  const currentMessage = [...statusMessages].reverse().find(m => progress >= m.threshold)?.text || '';

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: 'blur(20px)',
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Matrix Rain Background */}
          <MatrixRain columns={25} />

          {/* Scan Lines */}
          <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04]"
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(14,165,233,0.1) 2px, transparent 4px)',
               }} />

          {/* Horizontal Scanner */}
          <motion.div
            className="absolute left-0 right-0 h-px z-[2] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.6), rgba(168,85,247,0.4), transparent)',
              boxShadow: '0 0 20px rgba(14,165,233,0.5)',
            }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setLoading(false)}
            className="absolute top-8 right-8 z-50 px-5 py-2.5 bg-white/5 hover:bg-blue-400/10 border border-white/10 hover:border-blue-400/30 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-blue-400 transition-all group backdrop-blur-sm"
          >
            SKIP <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Brand - Glitch Text */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlitchText
                  text="VEDASTRA"
                  className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-white"
                />
                <motion.div
                  className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-blue-400/60 mt-2"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  AI LABS
                </motion.div>
              </motion.div>
            </div>

            {/* Orbital Loader */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            >
              <OrbitalLoader progress={progress} />
            </motion.div>

            {/* Status Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-72 md:w-80"
            >
              {/* Terminal window */}
              <div className="glass-premium border-blue-400/10 rounded-xl p-4 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="ml-2 font-mono text-[8px] text-white/20 uppercase tracking-widest">vedastra_boot.sh</span>
                </div>
                <div className="h-5 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentMessage}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-[11px] text-blue-400/80 tracking-wider"
                    >
                      {currentMessage}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #0ea5e9, #a855f7, #22d3ee)',
                    boxShadow: '0 0 15px #0ea5e9, 0 0 30px rgba(14,165,233,0.3)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 opacity-30">
            <div className="w-8 h-8 border-t-2 border-l-2 border-blue-400/40" />
            <div className="font-mono text-[7px] text-blue-400/40 mt-1 tracking-widest">SYS.01</div>
          </div>
          <div className="absolute bottom-8 left-8 opacity-30">
            <div className="font-mono text-[7px] text-blue-400/40 mb-1 tracking-widest">NODE.V2</div>
            <div className="w-8 h-8 border-b-2 border-l-2 border-blue-400/40" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-30">
            <div className="font-mono text-[7px] text-blue-400/40 mb-1 tracking-widest text-right">NET.OK</div>
            <div className="w-8 h-8 border-b-2 border-r-2 border-blue-400/40" />
          </div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-20">
            <div className="flex gap-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-blue-400/60 rounded-full"
                  animate={{ height: [4, Math.random() * 16 + 4, 4] }}
                  transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>

          {/* Glitch keyframes - injected as style */}
          <style jsx global>{`
            @keyframes glitch-1 {
              0% { transform: translate(0); }
              20% { transform: translate(-2px, 2px); }
              40% { transform: translate(-2px, -2px); }
              60% { transform: translate(2px, 2px); }
              80% { transform: translate(2px, -2px); }
              100% { transform: translate(0); }
            }
            @keyframes glitch-2 {
              0% { transform: translate(0); }
              20% { transform: translate(2px, -2px); }
              40% { transform: translate(2px, 2px); }
              60% { transform: translate(-2px, -2px); }
              80% { transform: translate(-2px, 2px); }
              100% { transform: translate(0); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
