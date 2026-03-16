'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-[100] group"
    >
      {/* Pulse Rings */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      <div className="absolute inset-0 bg-green-500 rounded-full animate-[ping_2s_infinite] opacity-10" />

      <a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none">
          CHAT WITH US ON WHATSAPP
        </div>
      </a>
    </motion.div>
  );
}
