'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShieldCheck } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasShown]);

  if (!isVisible && !hasShown) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-6">
                <ShieldCheck className="w-3 h-3" /> Exclusive Offer
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
                Wait! Get Your <span className="text-blue-400 italic">Free</span> Audit
              </h2>
              
              <p className="text-white/50 font-mono text-sm mb-8 leading-relaxed">
                Before you go, let our AI experts analyze your website and digital performance for free.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/20"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-400 hover:bg-white text-black font-bold py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-white/20 flex items-center justify-center gap-2 group"
                >
                  Claim My Free Audit <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <p className="text-[10px] text-white/20 font-mono uppercase tracking-widest mt-4">
                  No spam. Just pure strategic value.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
