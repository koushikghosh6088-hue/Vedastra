'use client';

import Link from 'next/link';
import { Mail, Phone, PhoneCall, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services#web' },
    { label: 'Mobile Apps', href: '/services#mobile' },
    { label: 'AI Calling Agents', href: '/ai-solutions#calling' },
    { label: 'AI Messaging Agents', href: '/ai-solutions#messaging' },
    { label: 'Business Automation', href: '/services#automation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[12rem] md:text-[20rem] font-heading font-bold text-white/[0.02] leading-none tracking-tighter w-full overflow-hidden">
          VEDASTRA
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
             <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full" />
                <Image 
                  src="/logo.png" 
                  alt="Vedastra Logo" 
                  width={40} 
                  height={40} 
                  loading="lazy"
                  sizes="40px"
                  className="relative z-10 w-auto h-8 object-contain brightness-110"
                />
              </div>
              <span className="font-heading font-black text-2xl tracking-tight uppercase glow-green">VEDASTRA</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8 font-body">
              We build websites, apps, and AI tools that help businesses grow faster and work smarter.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-blue-400 hover:text-black hover:border-blue-400 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-[0.75rem] font-heading font-bold mb-6 uppercase tracking-[0.15em] glow-green">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm font-body hover:text-white transition-colors flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.75rem] font-heading font-bold mb-6 uppercase tracking-[0.15em] glow-green">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm font-body hover:text-white transition-colors flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.75rem] font-heading font-bold mb-6 uppercase tracking-[0.15em] glow-green">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@vedastraai.com" className="text-white/70 text-sm font-body hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> hello@vedastraai.com
                </a>
              </li>
              <li>
                <a href="tel:+917003383676" className="text-white/70 text-sm font-body hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 70033 83676 / +91 80176 83428
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[0.65rem] font-mono uppercase tracking-[0.08em]">
            © 2026 VEDASTRA AI LABS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 font-mono text-[0.65rem] uppercase tracking-[0.08em]">
            <Link href="/privacy-policy" className="text-white/30 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white/30 hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="text-white/30 hover:text-blue-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
