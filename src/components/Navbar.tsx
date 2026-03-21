'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/ai-solutions', label: 'AI Solutions' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      {/* Frosted Glass Background */}
      <div className="absolute inset-0 glass-premium transition-all duration-300" />
      
      {/* Bottom Glowing Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />

      <div className="max-w-[1550px] mx-auto px-6 relative flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#00D4FF]/20 blur-xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
            <Image 
              src="/logo.png" 
              alt="Vedastra Logo" 
              width={40} 
              height={40} 
              priority
              className="relative z-10 w-auto h-8 object-contain drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]"
            />
          </div>
          <span className="font-heading font-black text-xl tracking-tighter uppercase text-white group-hover:text-glow transition-all">
            Vedastra <span className="text-[#00D4FF]">AI</span>
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.7rem] font-heading font-black uppercase tracking-[0.2em] transition-all hover:text-[#00D4FF] relative ${
                  isActive ? 'text-[#00D4FF] nav-glow' : 'text-white/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/917003383676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 text-[#00FF88] text-[0.7rem] font-heading font-bold uppercase tracking-widest hover:bg-[#00FF88]/10 transition-all"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Us
          </a>
          <Link
            href="#booking"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00D4FF] text-black text-[0.7rem] font-heading font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:scale-105 transition-all animate-pulse-subtle"
            style={{ animation: 'pulse-subtle 2s infinite ease-in-out' }}
          >
            Book Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Slide Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-[#0A0A0F] border-l border-white/10 z-[120] lg:hidden flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-heading font-black text-xl uppercase tracking-tighter">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-white/5 rounded-lg">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-auto">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-heading font-bold uppercase tracking-widest ${
                      pathname === link.href ? 'text-[#00D4FF]' : 'text-white/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <a
                  href="https://wa.me/917003383676"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-[#00FF88]/30 bg-[#00FF88]/5 text-[#00FF88] font-heading font-bold uppercase tracking-widest"
                >
                  <MessageSquare className="w-5 h-5" /> WhatsApp Us
                </a>
                <Link
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#00D4FF] text-black font-heading font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                >
                  Book Free Call <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); transform: scale(1); }
          50% { box-shadow: 0 0 35px rgba(0, 212, 255, 0.5); transform: scale(1.02); }
        }
      `}</style>
    </motion.nav>
  );
}
