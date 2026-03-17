'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        // Accelerated loading: 0 to 100 in ~1 second
        return prev + Math.random() * 25;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
            className="absolute top-10 right-10 z-50 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-all group"
          >
            SKIP INTRO <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>

          <div className="relative w-80">
            {/* Progress Label */}
            <div className="flex justify-between items-end mb-4">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em]">System Initialization</p>
                <h2 className="text-xl font-heading font-black text-white uppercase tracking-tighter">Joint WebSolutions / Loading...</h2>
              </div>
              <p className="text-xl font-mono text-blue-400 font-bold">{Math.floor(progress)}%</p>
            </div>

            {/* Progress Bar Container */}
            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-blue-400 shadow-[0_0_15px_#0ea5e9]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Status Messages */}
            <div className="mt-8 h-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={Math.floor(progress / 25)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-[9px] font-mono text-white/30 uppercase tracking-widest text-center"
                >
                  {progress < 25 && "Loading Digital Assets..."}
                  {progress >= 25 && progress < 50 && "Establishing Neural Links..."}
                  {progress >= 50 && progress < 75 && "Syncing UI Buffers..."}
                  {progress >= 75 && "Finalizing Environment..."}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Decorative Corners */}
          <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
