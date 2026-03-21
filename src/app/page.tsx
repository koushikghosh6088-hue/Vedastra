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
  CheckCircle, Rocket, Check, Sparkles
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

  return <span className="text-blue-400 border-r-2 border-blue-400 ml-1 pr-1">{text}</span>;
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
  const isMarqueeInView = useInView(marqueeRef, { amount: 0.1 });

  useEffect(() => {
    setMounted(true);
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
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const pauseAnimations = !isTabActive || !isMarqueeInView;

  return (
    <>
      {/* ═══════════ CINEMATIC HERO ═══════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden cursor-default bg-obsidian"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

        {/* R3F Hero Scene — High-Impact UI */}
        <div ref={trackRef} className="absolute inset-0 z-[2] opacity-40 pointer-events-none" id="hero-3d-container">
          {mounted && (
            <View track={trackRef as any}>
              <HeroEnvironment />
            </View>
          )}
        </div>

        {/* Cinematic Spotlight focal point */}
        <Spotlight 
          className="-top-40 left-0 md:left-60 md:-top-20 z-[3]" 
          fill="rgba(14,165,233,0.15)" 
        />

        {/* Spline 3D Robot — Positioned right, on top of gradients for clarity */}
        <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-0 w-[160%] sm:w-[75%] lg:w-[65%] 2xl:w-[55%] h-full z-[10] scale-[0.58] sm:scale-110 md:scale-100 translate-y-[-20%] sm:translate-y-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Dark gradient overlay for text readability — refined for robot clarity */}
        <div className="absolute inset-0 z-[4] pointer-events-none bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent sm:via-obsidian/40 lg:via-obsidian/30" />
        <div className="absolute inset-0 z-[4] pointer-events-none bg-gradient-to-t from-obsidian/40 via-transparent to-obsidian/20 lg:from-transparent lg:to-transparent" />

        {/* Text Content — pointer-events-none so mouse passes through to Spline */}
        <div className="relative z-20 max-w-[1550px] mx-auto px-5 sm:px-6 lg:px-20 w-full pointer-events-none">
          <div className="flex flex-col justify-center min-h-screen pt-[45vh] sm:pt-48 pb-20 lg:pt-20 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg sm:max-w-xl lg:max-w-4xl space-y-6 lg:space-y-8 mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 rounded-full glass-premium border-blue-400/20">
                <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse-glow" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] glow-green">
                  AI-Powered Digital Agency
                </span>
              </div>

              <h1 
                ref={headlineRef}
                className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[4.8rem] xl:text-[5.8rem] 2xl:text-[7.2rem] font-heading font-black leading-[0.95] tracking-tighter uppercase glow-white"
              >
                WE BUILD DIGITAL<br />
                PRODUCTS THAT <span className="glow-green italic">GROW</span> YOUR BUSINESS.
              </h1>

              <p 
                ref={subheadlineRef}
                className="text-sm sm:text-base md:text-lg text-[#888888] max-w-[520px] mx-auto lg:mx-0 font-body font-normal leading-relaxed tracking-wide"
              >
                Websites. Mobile Apps. AI Agents. Automation. Built for businesses that are serious about growth.<br/>
                <TypewriterSubline />
              </p>
              
              {/* pointer-events-auto on interactive elements */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 lg:pt-4 pointer-events-auto">
                <div className="magnetic-wrap relative">
                  <div className="absolute -inset-1 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <Link href="/contact" className="btn-primary px-7 sm:px-10 py-4 sm:py-5 text-[0.8rem] font-heading font-bold uppercase tracking-[0.1em] relative">
                    START YOUR PROJECT <ArrowUpRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
                <div className="magnetic-wrap">
                  <Link href="/portfolio" className="text-white/60 hover:text-[#00d4ff] font-heading font-bold text-[0.8rem] uppercase tracking-widest underline underline-offset-8 transition-all whitespace-nowrap">
                    See Our Work
                  </Link>
                </div>
              </div>

              {/* Mini stats */}
              <div className="flex items-center gap-6 sm:gap-8 pt-4 lg:pt-6 justify-center lg:justify-start">
                {[
                  { val: '1–2 Wks', label: 'Delivery' },
                  { val: 'AI-First', label: 'Tech' },
                  { val: '24/7', label: 'Support' },
                  { val: '100%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-base sm:text-lg font-heading font-bold text-white">{s.val}</div>
                    <div className="text-[0.7rem] font-mono text-[#888888] uppercase tracking-[0.1em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4 z-20 hidden lg:flex"
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-400/50 to-transparent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 rotate-90 origin-left ml-2">Scroll</span>
        </motion.div>
      </section>

      {/* 04 — TRUST BAR */}
      <TrustBar />

      {/* 05 — PROBLEMS SECTION */}
      <section className="relative bg-black z-10">
        <ProblemSolution />
      </section>

      {/* 06 — SERVICES SECTION */}
      <ServicesSection />

      {/* 07 — ABOUT US */}
      <section id="about" className="relative pt-32 pb-12 lg:py-48 bg-black z-10 overflow-hidden">
        {/* Elite Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-32">
            
            {/* Top Area: Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-12 xl:col-span-10">
                  <AnimatedSection>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold italic">Executive Mission</span>
                     </div>
                     
                     <h2 className="text-[2.8rem] md:text-[4.5rem] lg:text-[6.5rem] font-heading font-black leading-[0.9] tracking-tighter uppercase text-white mb-12">
                        WE ARE THE <span className="font-outline-sm text-transparent border-white/40">ARCHITECTS</span> OF YOUR <span className="gradient-text italic text-[#0ea5e9]">GROWTH</span>
                     </h2>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <p className="text-xl md:text-3xl font-bold text-white leading-tight tracking-tight max-w-xl group">
                           A focused lab of engineers who spend every waking hour <span className="text-[#C1FF00] italic group-hover:not-italic transition-all duration-500 underline decoration-[#C1FF00]/30 underline-offset-8">building the future</span> of your business.
                        </p>
                        <div className="space-y-8">
                           <p className="text-white/50 font-mono text-sm leading-relaxed max-w-lg">
                              We are not a traditional agency. We are a dedicated growth partner. 
                              We don&apos;t count hours, we count results. We don&apos;t follow instructions, we diagnose problems and architect solutions that scale.
                           </p>
                           <Link 
                             href="/about" 
                             className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0ea5e9]/50 transition-all duration-500"
                           >
                              <span className="text-white font-bold tracking-tight uppercase text-sm">Our Full Story</span>
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </div>
                           </Link>
                        </div>
                     </div>
                  </AnimatedSection>
               </div>
            </div>

            {/* Bottom Area: Team & Orbital Synergy (High Class Composition) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
               
               {/* Team Portraits Section */}
               <div className="lg:col-span-7 xl:col-span-6 relative">
                  <AnimatedSection delay={0.2}>
                     <TeamSection />
                  </AnimatedSection>
               </div>

               {/* Orbital Logic Section */}
               <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-center">
                  <AnimatedSection delay={0.4}>
                     <div className="relative p-10 lg:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-colors duration-700">
                        {/* Title for Orbital area */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center w-full">
                           <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/20 mb-2">Neural Coordination</div>
                           <h4 className="text-lg font-heading font-black text-white/40 uppercase tracking-widest italic leading-none">THE CORE ENGINE</h4>
                        </div>
                        
                        <div className="scale-75 md:scale-95 lg:scale-100 xl:scale-110">
                           <RadialOrbitalTimeline timelineData={aboutUsTimelineData} />
                        </div>

                        {/* Status Strip Bottom */}
                        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 opacity-30">
                           {['SYNC: 100%', 'FRAME: 60FPS', 'THREAT: NONE'].map((status, si) => (
                             <span key={si} className="text-[8px] font-mono uppercase tracking-[0.3em] text-white">{status}</span>
                           ))}
                        </div>
                     </div>
                  </AnimatedSection>
               </div>
            </div>

            {/* Elite Trust Strip */}
            <AnimatedSection delay={0.6}>
               <div className="py-12 border-t border-b border-white/5 flex flex-wrap justify-center md:justify-around gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-1000">
                  {[
                    { icon: Zap, text: "1–2 Week Velocity" },
                    { icon: Sparkles, text: "Elite AI Toolstack" },
                    { icon: Shield, text: "24/7 Strategic Support" },
                    { icon: Target, text: "Result-First Diagnostic" }
                  ].map((item, ii) => (
                    <div key={ii} className="flex items-center gap-4 group">
                       <item.icon className="w-5 h-5 text-white/40 group-hover:text-[#C1FF00] transition-colors" />
                       <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold">{item.text}</span>
                    </div>
                  ))}
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 08 — PORTFOLIO PREVIEW */}
      <FeaturedArchive />

      {/* 09 — HOW IT WORKS */}
      <section id="process" className="relative py-24 md:py-40 bg-black overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(193,255,0,0.02)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-bold">The Process</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-black leading-none tracking-tighter uppercase mb-6">
              FROM IDEA TO LAUNCH IN <span className="gradient-text italic text-[#0ea5e9]">3 SIMPLE STEPS</span>
            </h2>
            <p className="font-mono text-sm md:text-base text-white/40 uppercase tracking-[0.2em] max-w-2xl mx-auto">
              No technical knowledge needed. No confusing jargon. Just results.
            </p>
          </AnimatedSection>

          {/* Steps Timeline Container */}
          <div className="relative">
            {/* Desktop: Horizontal connecting line */}
            <div className="hidden lg:block absolute top-[100px] left-[15%] right-[15%] h-1 bg-white/5 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: '100%' }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-cyan-500 via-green-500 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] relative"
               >
                 <div className="absolute top-0 bottom-0 flex gap-20 animate-marquee-left pointer-events-none opacity-50">
                   {Array.from({ length: 20 }).map((_, i) => (
                     <div key={i} className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                   ))}
                 </div>
               </motion.div>
            </div>

            {/* Mobile: Vertical connecting line */}
            <div className="lg:hidden absolute left-[28px] top-10 bottom-10 w-1 bg-white/5 overflow-hidden">
               <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full bg-gradient-to-b from-cyan-500 via-green-500 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] relative"
               />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
              {[
                { 
                  num: '01', 
                  icon: Phone, 
                  badge: "FREE — No commitment", 
                  title: "We Have a Free Call", 
                  desc: "Book a free 30-minute call with us. Tell us about your business, your goals and what success looks like for you. We will tell you exactly what we would build — no jargon, no pressure.", 
                  duration: "⏱ 30 minutes", 
                  color: "text-cyan-400", 
                  border: "border-cyan-500/20", 
                  bg: "bg-cyan-500/5", 
                  bullet: "bg-cyan-400" 
                },
                { 
                  num: '02', 
                  icon: Cog, 
                  badge: "FAST & TRANSPARENT", 
                  title: "We Build Your Project", 
                  desc: "Once you approve the plan, we get to work immediately. You receive weekly updates and live previews at every stage. You always know exactly what is happening — no surprises, no excuses.", 
                  duration: "⏱ 1–6 weeks depending on project", 
                  color: "text-green-400", 
                  border: "border-green-500/20", 
                  bg: "bg-green-500/5", 
                  bullet: "bg-green-400" 
                },
                { 
                  num: '03', 
                  icon: Rocket, 
                  badge: "ONGOING SUPPORT INCLUDED", 
                  title: "We Launch and Stay With You", 
                  desc: "Your project goes live on fast, reliable infrastructure. We monitor everything, fix any issues instantly and continue supporting you long after launch. You grow — we grow with you.", 
                  duration: "⏱ Ongoing — we never disappear", 
                  color: "text-purple-400", 
                  border: "border-purple-500/20", 
                  bg: "bg-purple-500/5", 
                  bullet: "bg-purple-400" 
                },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.2}>
                  <div className="group relative glass-panel p-8 pt-12 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 lg:text-center flex flex-col items-center lg:items-center text-left md:text-center lg:min-h-[480px]">
                    {/* Background decorative number */}
                    <div className="absolute -top-6 lg:top-10 left-8 lg:left-1/2 lg:-translate-x-1/2 font-heading font-black text-8xl lg:text-9xl text-white/[0.03] select-none z-0">
                      {step.num}
                    </div>

                    {/* Step Icon Container */}
                    <div className={`relative z-10 w-20 h-20 rounded-full ${step.bg} border ${step.border} flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                      <step.icon className={`w-10 h-10 ${step.color} filter drop-shadow-[0_0_8px_currentColor]`} />
                      <div className={`absolute -inset-4 ${step.bg.replace('5/', '20/')} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>

                    {/* Badge */}
                    <div className={`relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${step.bg} border ${step.border} mb-6`}>
                       <div className={`w-1.5 h-1.5 rounded-full ${step.bullet} animate-pulse`} />
                       <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${step.color}`}>{step.badge}</span>
                    </div>

                    <h4 className="relative z-10 text-2xl font-heading font-black text-white mb-4 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                      {step.title}
                    </h4>

                    <p className="relative z-10 text-white/50 font-mono text-sm leading-relaxed mb-8 max-w-xs group-hover:text-white/70 transition-colors">
                      {step.desc}
                    </p>

                    <div className="mt-auto relative z-10 pt-6 border-t border-white/5 w-full">
                       <span className={`font-mono text-xs uppercase tracking-widest ${step.color} font-bold opacity-60`}>{step.duration}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Reassurance Strip */}
          <AnimatedSection delay={0.8}>
            <div className="mt-20 md:mt-32 glass-panel p-6 md:p-8 rounded-[2rem] border-white/5 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-green-500/[0.02] via-transparent to-green-500/[0.02]" />
               {[
                 "Free consultation — zero commitment",
                 "Fixed timeline — no delays",
                 "Unlimited revisions — until you love it"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3 relative z-10 group/item">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-green-400 font-black" />
                    </div>
                    <span className="text-white/80 font-heading font-bold uppercase tracking-tight text-sm md:text-base">{text}</span>
                 </div>
               ))}
            </div>
          </AnimatedSection>

          {/* Final Process CTA */}
          <AnimatedSection delay={1} className="text-center mt-20">
            <p className="font-mono text-sm text-white/40 uppercase tracking-[0.2em] mb-8">Ready to start? Book your free call today</p>
            <Link 
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-[#C1FF00] text-black font-heading font-black text-xl uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(193,255,0,0.3)] hover:shadow-[0_0_50px_rgba(193,255,0,0.5)] active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span>BOOK FREE CALL</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 10 — WHY CHOOSE US (MOVED BELOW PROCESS) */}
      <WhyChooseUs />

      {/* 11 — INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* 12 — PRICING SECTION */}
      <PricingSection />

      {/* 13 — FAQ */}
      <FAQSection />

      {/* 14 — TESTIMONIALS */}
      <section ref={marqueeRef} className="relative py-20 md:py-32 bg-black z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-50/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1550px] mx-auto px-6">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6 backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#0ea5e9]">Client Results</span>
            </div>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-heading font-black leading-none tracking-tighter uppercase mb-4">
              WHAT OUR <span className="gradient-text italic text-[#0ea5e9]">CLIENTS SAY</span>
            </h2>
            <p className="font-mono text-sm text-white/30 uppercase tracking-[0.2em] max-w-lg mx-auto">
              We are just getting started — your testimonial could be here.
            </p>
          </AnimatedSection>
        </div>

        <div className="relative mb-6 group overflow-hidden">
          <div className="flex gap-5 animate-marquee-left group-hover:pause-animation whitespace-nowrap w-max gpu-accelerated">
            {[...[
              { quote: "We are just getting started — your success story could be featured here. Be our next happy client and see real results.", name: "Your Name", role: "Your Business", rating: 5, accent: "text-blue-400", border: "border-blue-500/20" },
              { quote: "Vedastra AI Labs is building a track record of excellence. We deliver results that speak for themselves — stay tuned.", name: "Vedastra", role: "AI Labs", rating: 5, accent: "text-purple-400", border: "border-purple-500/20" },
            ], ...[
              { quote: "We are just getting started — your success story could be featured here. Be our next happy client and see real results.", name: "Your Name", role: "Your Business", rating: 5, accent: "text-blue-400", border: "border-blue-500/20" },
              { quote: "Vedastra AI Labs is building a track record of excellence. We deliver results that speak for themselves — stay tuned.", name: "Vedastra", role: "AI Labs", rating: 5, accent: "text-purple-400", border: "border-purple-500/20" },
            ]].map((t, i) => (
              <div
                key={`r1-${i}`}
                className={`inline-flex shrink-0 w-[340px] md:w-[420px] flex-col justify-between gap-5 glass-panel rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border ${t.border} group/card hover:scale-[1.02] transition-transform duration-300 cursor-default gpu-accelerated`}
              >
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className={`w-3.5 h-3.5 ${t.accent} fill-current`} />
                  ))}
                </div>
                <p className="text-white/70 text-sm md:text-base font-mono leading-relaxed whitespace-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className={`flex items-center gap-4 pt-4 border-t border-white/5`}>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border ${t.border} flex items-center justify-center shrink-0`}>
                    <span className={`font-heading font-black text-sm ${t.accent}`}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <div className="flex gap-5 animate-marquee-right group-hover:pause-animation whitespace-nowrap w-max gpu-accelerated">
            {[...[
              { quote: "The future is AI, and Vedastra is the bridge. Their commitment to speed and quality is something we haven't seen elsewhere.", name: "Future Vision", role: "Partner", rating: 5, accent: "text-emerald-400", border: "border-emerald-500/20" },
              { quote: "Highly recommend for any business looking to automate their workflows and scale up efficiently. A true 10/10 experience.", name: "ScaleUp", role: "SaaS Founder", rating: 5, accent: "text-blue-400", border: "border-blue-500/20" },
            ], ...[
              { quote: "The future is AI, and Vedastra is the bridge. Their commitment to speed and quality is something we haven't seen elsewhere.", name: "Future Vision", role: "Partner", rating: 5, accent: "text-emerald-400", border: "border-emerald-500/20" },
              { quote: "Highly recommend for any business looking to automate their workflows and scale up efficiently. A true 10/10 experience.", name: "ScaleUp", role: "SaaS Founder", rating: 5, accent: "text-blue-400", border: "border-blue-500/20" },
            ]].map((t, i) => (
              <div
                key={`r2-${i}`}
                className={`inline-flex shrink-0 w-[340px] md:w-[420px] flex-col justify-between gap-5 glass-panel rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border ${t.border} group/card hover:scale-[1.02] transition-transform duration-300 cursor-default gpu-accelerated`}
              >
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className={`w-3.5 h-3.5 ${t.accent} fill-current`} />
                  ))}
                </div>
                <p className="text-white/70 text-sm md:text-base font-mono leading-relaxed whitespace-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className={`flex items-center gap-4 pt-4 border-t border-white/5`}>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border ${t.border} flex items-center justify-center shrink-0`}>
                    <span className={`font-heading font-black text-sm ${t.accent}`}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}
