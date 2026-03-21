'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import {
  ArrowRight, Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  ArrowUpRight, Bot, Workflow, Users, Target, Star, Shield, Zap, Server,
  Code2, Layers, Database, Cpu, Lock, BarChart3, Mail, MapPin, Send,
  CheckCircle, Rocket, Check, Sparkles, ShieldCheck
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedArchive from '@/components/FeaturedArchive';
import HeroEnvironment from '@/components/HeroEnvironment';
import ProblemSolution from '@/components/ProblemSolution';
import PricingSection from '@/components/PricingSection';
import BenefitStats from '@/components/BenefitStats';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import TrustBar from '@/components/TrustBar';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';

import { View, Preload } from '@react-three/drei';

import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { id: 'web', icon: Globe, title: 'Web Development', desc: 'High-performance, scalable web architectures.', span: 'col-span-1 md:col-span-2 row-span-2', graphic: Code2, color: '#0ea5e9' },
  { id: 'mobile', icon: Smartphone, title: 'Mobile Apps', desc: 'Seamless native experiences.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: Layers, color: '#8b5cf6' },
  { id: 'ai-agents', icon: Phone, title: 'AI Voice Agents', desc: 'Intelligent calling agents handling leads 24/7.', span: 'col-span-1 md:col-span-1 row-span-2', accent: true, graphic: Cpu, color: '#0ea5e9' },
  { id: 'automation', icon: Cog, title: 'Automation', desc: 'End-to-end workflow elimination.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: Workflow, color: '#10b981' },
  { id: 'marketing', icon: TrendingUp, title: 'Marketing', desc: 'Data-driven growth.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: BarChart3, color: '#f59e0b' },
  { id: 'chat', icon: MessageSquare, title: 'AI Chat', desc: 'Smart conversion bots.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: Bot, color: '#ec4899' },
];

// Redundant projects array removed (moved to FeaturedArchive.tsx)

const aboutUsTimelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Web Intel",
    date: "Core",
    content: "Architecting high-fidelity web ecosystems that load at the speed of thought. Engineered for dominance.",
    category: "Web Development",
    icon: Globe,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Mobile Forge",
    date: "Core",
    content: "Sculpting elite mobile experiences for iOS and Android. Zero-latency interfaces designed for touch.",
    category: "Mobile Apps",
    icon: Smartphone,
    relatedIds: [1, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Liquid Chat",
    date: "AI",
    content: "Conversational RAG architectures. We train neural agents on your private knowledge nodes for absolute precision.",
    category: "AI Chat",
    icon: MessageSquare,
    relatedIds: [1, 4],
    status: "completed",
    energy: 95,
  },
  {
    id: 4,
    title: "Neural Voice",
    date: "AI",
    content: "Autonomous conversational intelligence that speaks your brand language. Liquid-smooth lead qualification.",
    category: "AI Voice Agents",
    icon: Phone,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 5,
    title: "Flow Logic",
    date: "Automation",
    content: "Automating the mundane. We connect 1000+ nodes to create a self-optimizing business engine.",
    category: "Automation",
    icon: Cog,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 80,
  },
];

// Interactive 3D Neural Core Component for the Engineering Section
function Floating3DNeuralCore() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 12 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 12 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0); y.set(0);
  }

  return (
    <div 
      ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center perspective-[1200px] group cursor-pointer"
    >
      <motion.div 
        style={{
          rotateX: useTransform(mouseY, [-300, 300], [15, -15]),
          rotateY: useTransform(mouseX, [-300, 300], [-15, 15]),
          x: useTransform(mouseX, [-300, 300], [-10, 10]),
          y: useTransform(mouseY, [-300, 300], [-10, 10]),
        }}
        className="relative z-20 w-4/5 h-4/5 flex items-center justify-center"
      >
        <Image 
          src="/3d-icons/neural_core.png" 
          alt="Neural Core" 
          width={400}
          height={400}
          className="w-full h-full object-contain pointer-events-none mix-blend-screen drop-shadow-[0_0_60px_rgba(14,165,233,0.3)] group-hover:scale-105 transition-transform duration-700" 
          priority
          loading="eager"
          sizes="(max-width: 768px) 250px, 400px"
        />
      </motion.div>
      <motion.div 
        style={{ x: useTransform(mouseX, [-300, 300], [40, -40]), y: useTransform(mouseY, [-300, 300], [40, -40]) }}
        className="absolute z-10 w-64 h-64 rounded-full bg-blue-500/10 blur-[90px] opacity-40 group-hover:opacity-60 transition-opacity"
      />
    </div>
  );
}

// Mini Typewriter Component
function TypewriterSubline() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "We Build Websites.",
    "We Build Mobile Apps.",
    "We Build AI Systems.",
    "We Run Marketing Campaigns."
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return <span className="text-[#0066ff] border-r-2 border-[#0066ff] ml-1 pr-1">{text}</span>;
}

// Stats Counter Component
function StatCounter({ value, label, suffix }: { value: string, label: string, suffix: string }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = 0;
    const step = (target / duration) * 10;
    
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <div ref={ref} className="text-center group cursor-default py-4">
      <div className="relative inline-block mb-2">
        {/* Orbiting Ring Visual */}
        <div className="absolute inset-0 -m-8 border border-blue-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-0 -m-12 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        <div className="text-[3.5rem] md:text-[5rem] font-heading font-black leading-none tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-500">
          {count}{suffix}
        </div>
      </div>
      <div className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-[0.3em] mt-3">
        {label}
      </div>
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mx-auto mt-4 group-hover:w-24 transition-all duration-500" />
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isTabActive, setIsTabActive] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMarqueeInView = useInView(marqueeRef, { amount: 0.1 });

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Visibility API listener to pause animations
    const handleVisibilityChange = () => setIsTabActive(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (headlineRef.current && subheadlineRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(headlineRef.current, 
        { y: 100, opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.out', delay: 0.5 }
      );
      
      tl.fromTo(subheadlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const pauseAnimations = !isTabActive || !isMarqueeInView;

  return (
    <>
      <div className="grainy-overlay" />
      
      {/* 01–03 — HERO SECTION (REDESIGNED) */}
      <section className="relative min-h-[95vh] flex items-center pt-24 lg:pt-0 overflow-hidden bg-[#0A0A0F]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Dynamic Atmospheric Layer (Nebula Blobs) */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-[#7B2FFF]/5 rounded-full blur-[150px] animate-pulse pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-20 max-w-[1550px] mx-auto px-6 w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
            
            {/* LEFT COLUMN: Content (Centered on Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-20 text-center lg:text-left space-y-6 pt-[280px] sm:pt-[320px] lg:pt-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 backdrop-blur-md mx-auto lg:mx-0 scale-90 sm:scale-100">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#00D4FF] font-bold">
                  AI-Powered Digital Agency
                </span>
              </div>

              <h1 className="text-[1.7rem] xs:text-[2rem] sm:text-[3.2rem] md:text-[4rem] font-heading font-black leading-[1.1] tracking-tighter uppercase text-white">
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">WE BUILD DIGITAL</span><br />
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">PRODUCTS THAT</span> <br className="lg:hidden" />
                <span className="italic gradient-text-premium text-glow">GROW</span> YOUR BUSINESS.
              </h1>

              <p className="text-sm sm:text-lg text-[#8A8A9A] max-w-[540px] mx-auto lg:mx-0 font-body leading-relaxed px-4 sm:px-0">
                Websites. Mobile Apps. AI Agents. Automation. Built for businesses that are serious about growth. 
                <span className="text-[#00D4FF] ml-1 font-black">We Build Websites. |</span>
              </p>

              <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-4 pt-2 sm:pt-4">
                <Link href="#booking" className="btn-primary w-full xs:w-auto sm:w-80 px-8 py-4 sm:py-5 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:shadow-[0_0_60px_rgba(0,212,255,0.4)] transition-all">
                  START YOUR PROJECT <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="text-white/40 hover:text-white transition-colors font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] border-b border-white/10 pb-1">
                  SEE OUR WORK
                </Link>
              </div>

              {/* Trust Micro-Stats (Hidden on small mobile for clarity) */}
              <div className="hidden sm:flex items-center justify-center lg:justify-start gap-4 pt-8 opacity-60">
                {[
                  { icon: Zap, text: 'Elite Velocity' },
                  { icon: Bot, text: 'Custom AI' },
                  { icon: ShieldCheck, text: 'Verified Output' },
                ].map((s) => (
                  <div key={s.text} className="flex items-center gap-3">
                    <s.icon className="w-3 h-3 text-[#00D4FF]" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white">
                      {s.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual (Backdrop on Mobile) */}
            <div className="absolute lg:relative inset-0 lg:inset-auto h-[550px] lg:h-[800px] w-full z-10 pointer-events-none lg:pointer-events-auto overflow-hidden">
              {/* Internal Robot Atmosphere Glow */}
              <div className="absolute top-[35%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00D4FF]/20 rounded-full blur-[100px] opacity-30 animate-pulse" />
              
              <div className="absolute inset-0 z-10 scale-[1.1] sm:scale-[1.2] lg:scale-[1.3] translate-y-[-5%] lg:translate-y-[10%] lg:translate-x-12">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 hidden lg:flex"
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#00D4FF] to-transparent" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#00D4FF]/40 rotate-90 origin-left ml-1">Scroll</span>
        </motion.div>
      </section>

      {/* 04 — TRUST BAR */}
      <TrustBar />

      {/* 05 — PROBLEMS SECTION */}
      <ProblemSolution />

      {/* 06 — SERVICES SECTION */}
      <ServicesSection />

      {/* 07 — WHY VEDASTRA (ADVANATGE MATRIX) */}
      <WhyChooseUs />

      {/* 08 — TESTIMONIALS (PROOF) */}
      <Testimonials />

      {/* 09 — PRICING SECTION */}
      <PricingSection />

      {/* 10 — HOW IT WORKS */}
      <HowItWorks />

      {/* 11 — ABOUT / TEAM SECTION */}
      <section id="about" className="relative pt-32 pb-24 lg:py-56 mesh-gradient z-10 overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066ff]/[0.05] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ccff00]/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-12 xl:col-span-10 mx-auto text-center lg:text-center">
                  <AnimatedSection>
                     <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-premium border-white/10 mb-10 mx-auto">
                        <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse shadow-[0_0_10px_#00D4FF]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 font-black">Engineering the Future</span>
                     </div>
                     
                     <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-heading font-black leading-[1] tracking-[0.02em] uppercase text-white mb-16 max-w-6xl mx-auto">
                        WHERE <span className="italic text-[#00D4FF]">ELITE ARCHITECTURE</span> <br/>MEETS <span className="italic text-[#00D4FF]">BUSINESS DOMINANCE</span>
                     </h2>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start text-left">
                        <div className="space-y-8">
                           <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                              We aren&apos;t just another agency. We are a <span className="text-[#00D4FF]">specialized lab</span> of full-stack engineers and data scientists.
                           </p>
                           <p className="text-[#8A8A9A] font-body text-lg leading-relaxed">
                              At Vedastra AI Labs, we translate complex business logic into high-performance digital products. 
                              From server-less scalable architectures to autonomous AI workflows, we bridge the gap between technical complexity and pure operational success.
                           </p>
                        </div>
                        <div className="space-y-8 lg:pt-4">
                           <div className="glass-premium p-8 rounded-[2.5rem] border-white/5 hover:border-[#00D4FF]/30 transition-all duration-700">
                              <h4 className="text-lg font-heading font-black text-white mb-4 uppercase tracking-[0.05em]">Our Core Protocol</h4>
                              <p className="text-[#8A8A9A] font-body text-sm leading-relaxed mb-6">
                                 We diagnose before we build. Every line of code is written with two goals in mind: 
                                 <span className="text-white font-bold"> Extreme Performance</span> and <span className="text-white font-bold">Absolute Scalability</span>.
                              </p>
                              <div className="flex flex-wrap gap-3">
                                 {['Next.js 15', 'RTK Query', 'AI RAG', 'Edge Computing'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/40 uppercase tracking-widest">{tech}</span>
                                 ))}
                              </div>
                           </div>
                           <Link 
                             href="/about" 
                             className="group flex items-center gap-4 px-10 py-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#00D4FF] hover:text-white transition-all duration-500 w-fit mx-auto md:mx-0"
                           >
                              <span className="font-heading font-black uppercase text-sm tracking-widest">Learn Our Full Protocol</span>
                              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                           </Link>
                        </div>
                     </div>
                  </AnimatedSection>
               </div>
            </div>

            <div className="relative pt-16 border-t border-white/5">
                <AnimatedSection className="text-center mb-16">
                   <h3 className="text-2xl md:text-[3.2rem] font-heading font-black leading-[1] tracking-tighter uppercase mb-6 text-white">
            THE <span className="italic text-[#00D4FF]">ENGINEERS</span> BEHIND THE <span className="italic text-[#00D4FF]">VISION</span>
                   </h3>
                   <p className="text-white/30 font-mono text-xs uppercase tracking-[0.25em]">Direct Access to Technical Founders // Verified Architecture</p>
                </AnimatedSection>
                <div className="max-w-6xl mx-auto">
                   <TeamSection />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 — PORTFOLIO PREVIEW */}
      <FeaturedArchive />

      {/* 13 — FAQ SECTION */}
      <FAQSection />

      {/* 14 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}
