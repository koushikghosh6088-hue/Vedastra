'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Sparkles } from 'lucide-react';

const team = [
  {
    name: "Koushik Ghosh",
    role: "Founder",
    img: "/team/koushik-ghosh.png",
    color: "#0066ff",
    bio: "Architecting the technical core and high-performance neural systems."
  },
  {
    name: "Anirban",
    role: "Founder",
    img: "/team/anirban-co-founder.png",
    color: "#ccff00",
    bio: "Defining elite logic architectures and cutting-edge AI integrations."
  }
];

export default function TeamSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      <div className="flex flex-row items-start justify-center gap-4 sm:gap-16 md:gap-24">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center text-center group flex-1 min-w-0"
          >
            {/* Round Image Container - Enlarged but fitting side-by-side */}
            <div className={`relative w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mb-6 sm:mb-8 p-1 sm:p-1.5 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/5 overflow-hidden group-hover:border-[${member.color}]/50 transition-all duration-1000 shadow-2xl hover:scale-105`}>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black/40 backdrop-blur-md">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-sm sm:text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tighter transition-colors group-hover:text-white leading-tight">
                {member.name}
              </h3>
              <p className="font-mono text-[9px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="hidden md:block text-xs text-white/40 max-w-[220px] mt-4 leading-relaxed italic font-light">
                {member.bio}
              </p>
            </div>

            {/* Subtle Float Icon */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Shield className="w-4 h-4 text-white/20" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
