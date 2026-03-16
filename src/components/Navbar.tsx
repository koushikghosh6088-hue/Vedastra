'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/ai-solutions', label: 'AI Solutions' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [showSticky, setShowSticky] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    setShowSticky(latest > 600);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-8 left-0 right-0 z-50 px-6 transition-all duration-500`}
    >
      <div className="max-w-[1550px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/20 transition-all duration-300 group-hover:scale-105">
            <span className="text-black font-heading font-bold text-2xl tracking-tighter">J</span>
          </div>
        </Link>

        {/* Desktop Navigation (Pill shape) */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.05] backdrop-blur-[16px] border border-white/10 rounded-full px-4 py-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <AnimatePresence>
            {showSticky && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link
                  href="/contact"
                  className="bg-blue-400 text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-105 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" /> Book a call
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="flex items-center gap-6 bg-white/[0.02] backdrop-blur-[12px] border border-white/5 rounded-full p-1.5 pr-2">
            <div className="flex items-center gap-2 pl-4 pr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-fast inline-block" />
              System Online
            </div>
            {!showSticky && (
              <Link
                href="/contact"
                className="bg-white text-black hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-bold"
              >
                Start Project
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 bg-obsidian/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      pathname === link.href
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-white/10"
              >
                <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/50 px-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-fast inline-block" />
                  System Online
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-400 block text-center text-black font-bold px-6 py-4 rounded-xl text-sm"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
