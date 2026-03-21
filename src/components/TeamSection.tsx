'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Sparkles, Zap } from 'lucide-react';

const team = [
  {
    name: "Koushik",
    role: "Visionary Architect",
    img: "/3d-icons/founder_1.png",
    accent: "from-blue-500/20 to-cyan-500/20",
    glow: "shadow-blue-500/20",
    signature: "Digital Mastermind",
    skills: ["AI Strategy", "Exoscale Apps"]
  },
  {
    name: "Anirban",
    role: "Elite Neural Lead",
    img: "/3d-icons/founder_2.png",
    accent: "from-[#C1FF00]/20 to-green-500/20",
    glow: "shadow-[#C1FF00]/20",
    signature: "Neural Architect",
    skills: ["Complex Logic", "GPU Graphics"]
  }
];

export default function TeamSection() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#C1FF00]/10 blur-[100px] rounded-full animate-pulse delay-1000" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-center">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative group ${i === 1 ? 'md:mt-24' : ''}`}
          >
            {/* Main Luxury Container */}
            <div className={`relative p-1 rounded-[3rem] bg-gradient-to-br ${member.accent} border border-white/5 overflow-hidden group-hover:border-white/20 transition-all duration-700 shadow-2xl`}>
              
              {/* Internal Glass Panel */}
              <div className="relative bg-black/80 backdrop-blur-3xl rounded-[2.8rem] p-6 md:p-8 overflow-hidden">
                
                {/* Image Area */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  
                  {/* Subtle Scanning Line */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-white/20 z-10"
                  />
                  
                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                  
                  {/* Signature Text Bottom */}
                  <div className="absolute bottom-6 left-6 z-20">
                     <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-1">Status: Active</div>
                     <div className="text-xl font-heading font-black italic text-white tracking-widest leading-none drop-shadow-lg">
                        {member.signature}
                     </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter leading-tight">
                        {member.name}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-widest text-[#C1FF00] font-bold">
                        {member.role}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                       <Shield className="w-5 h-5 text-white/40" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {member.skills.map((skill, si) => (
                      <span key={si} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backglow element */}
              <div className={`absolute -inset-10 bg-gradient-to-br ${member.accent} blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000`} />
            </div>

            {/* Floating Accents */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/2 p-3 rounded-2xl glass-panel border-white/10 z-20 shadow-2xl hidden lg:block"
            >
               <Sparkles className="w-5 h-5 text-[#C1FF00]" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
