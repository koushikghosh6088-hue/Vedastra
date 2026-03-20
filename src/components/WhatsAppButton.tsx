'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ExternalLink, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    { 
      label: '+91 70033 83676', 
      wa: 'https://wa.me/917003383676',
      tel: 'tel:+917003383676',
      title: 'Primary Line'
    },
    { 
      label: '+91 80176 83428', 
      wa: 'https://wa.me/918017683428',
      tel: 'tel:+918017683428',
      title: 'Secondary Line'
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-24 right-0 mb-2 w-80 glass-premium border-blue-400/20 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-400/5 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">Contact Protocols</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                {contactOptions.map((opt, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between px-2">
                       <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">{opt.title}</span>
                       <span className="text-[10px] font-bold text-white/80">{opt.label}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={opt.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 group glass-premium p-3 rounded-2xl border-white/5 hover:border-green-500/30 transition-all duration-300 hover:bg-green-500/10"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-[10px] font-bold text-white group-hover:text-green-500">WhatsApp</span>
                      </a>
                      <a
                        href={opt.tel}
                        className="flex items-center justify-center gap-2 group glass-premium p-3 rounded-2xl border-white/5 hover:border-blue-400/30 transition-all duration-300 hover:bg-blue-400/10"
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[10px] font-bold text-white group-hover:text-blue-400">Call Now</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center pt-4 border-t border-white/5">
                <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Encrypted Channel // Active 24/7</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-black shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all duration-300 border-2 border-white/20 z-50 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center justify-center"
            >
              <MessageSquare className="w-7 h-7 text-black" strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect for visibility */}
        {!isOpen && (
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-40 shrink-0" />
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-30 shrink-0" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
