'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

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
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden mt-12 rounded-b-[2.5rem]">
      {/* Massive Background Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[12rem] md:text-[20rem] font-heading font-bold text-white/[0.03] leading-none tracking-tighter w-full overflow-hidden">
          SUPER
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Giant CTA Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">Ready to initiate</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-6">
              LET'S BUILD<br/>
              <span className="text-blue-400 italic pr-4">SOMETHING</span>
            </h3>
          </div>
          <div className="flex lg:justify-end">
            <Link 
              href="/contact"
              className="group relative overflow-hidden bg-blue-400 text-black px-12 py-8 rounded-full text-2xl font-bold transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(14,165,233,0.15)] flex items-center gap-4 w-full md:w-auto justify-between"
            >
              <span className="relative z-10">Start Project</span>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center relative z-10 group-hover:bg-white transition-colors duration-300">
                <ArrowUpRight className="w-6 h-6 text-blue-400 group-hover:text-black transition-colors" />
              </div>
              {/* Hover background slide up */}
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-full" />
            </Link>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
             <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                <span className="text-black font-heading font-bold text-xl tracking-tighter">J</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight uppercase">Joint WebSolutions</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8 font-mono">
              ENGINEERING NEXT-GEN DIGITAL EXPERIENCES THROUGH AI AND HIGH-PERFORMANCE WEB ARCHITECTURES.
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
            <h4 className="text-xs font-mono text-white/40 mb-6 uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 mb-6 uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 mb-6 uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@jointwebsolutions.com" className="text-white/70 text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> hello@jointwebsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white/70 text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
            © 2026 JOINT WEBSOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
            <Link href="#" className="text-white/30 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/30 hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
