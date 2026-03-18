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
  Code2, Layers, Database, Cpu, Lock, BarChart3, Mail, MapPin, Send
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedArchive from '@/components/FeaturedArchive';
import HeroEnvironment from '@/components/HeroEnvironment';
import ProblemSolution from '@/components/ProblemSolution';
import PricingSection from '@/components/PricingSection';

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
          width={640}
          height={640}
          className="w-full h-full object-contain pointer-events-none mix-blend-screen drop-shadow-[0_0_60px_rgba(14,165,233,0.3)] group-hover:scale-105 transition-transform duration-700" 
          priority
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
          {mounted && trackRef.current && (
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
        <div className="absolute right-0 top-[0%] sm:top-0 w-full h-full sm:w-[75%] lg:w-[65%] 2xl:w-[55%] z-[10] scale-[0.55] sm:scale-110 md:scale-100 translate-y-[-10%] sm:translate-y-0">
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
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-shimmer">
                  AI-Powered Digital Agency
                </span>
              </div>

              <h1 
                ref={headlineRef}
                className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[4.8rem] xl:text-[5.8rem] 2xl:text-[7.2rem] font-heading font-black leading-[0.85] tracking-tighter uppercase"
              >
                WE BUILD DIGITAL<br />
                <span className="gradient-text italic opacity-90">PRODUCTS</span>{' '}
                THAT GROW YOUR BUSINESS.
              </h1>

              <p 
                ref={subheadlineRef}
                className="text-sm sm:text-base md:text-lg text-white/60 max-w-md mx-auto lg:mx-0 font-mono font-light leading-relaxed tracking-wide"
              >
                Websites. Mobile Apps. AI Agents. Automation. Built for businesses that are serious about growth.<br/>
                <TypewriterSubline />
              </p>
              
              {/* pointer-events-auto on interactive elements */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 lg:pt-4 pointer-events-auto">
                <div className="magnetic-wrap relative">
                  <div className="absolute -inset-1 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <Link href="/contact" className="btn-primary px-7 sm:px-10 py-4 sm:py-5 text-xs sm:text-base relative">
                    START YOUR PROJECT <ArrowUpRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
                <div className="magnetic-wrap">
                  <Link href="/portfolio" className="text-blue-400/60 hover:text-blue-400 font-mono text-[10px] sm:text-sm uppercase tracking-widest underline underline-offset-8 transition-all whitespace-nowrap">
                    See Our Work
                  </Link>
                </div>
              </div>

              {/* Mini stats */}
              <div className="flex items-center gap-6 sm:gap-8 pt-4 lg:pt-6 justify-center lg:justify-start">
                {[
                  { val: '150+', label: 'Projects Delivered' },
                  { val: '50+', label: 'Happy Clients' },
                  { val: '99.9%', label: 'Uptime' },
                  { val: '4.9★', label: 'Rating' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-base sm:text-lg font-heading font-bold text-white">{s.val}</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-white/30 uppercase tracking-widest">{s.label}</div>
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

      {/* ═══════════ STATS COUNTER BAR ═══════════ */}
      <section className="relative py-16 bg-black z-20 border-t border-b border-white/5">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150', label: 'Projects Delivered', suffix: '+' },
              { value: '50', label: 'Happy Clients', suffix: '+' },
              { value: '99.9', label: 'Uptime', suffix: '%' },
              { value: '4.9', label: 'Rating', suffix: '★' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.15}>
                <StatCounter {...stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT US / BENTO GRID ═══════════ */}
      <section className="relative pt-20 pb-8 lg:py-32 bg-black z-10 rounded-t-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[1550px] mx-auto px-6">
          {/* TEXT + TIMELINE SPLIT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[450px] lg:min-h-[600px]">
            <AnimatedSection>
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-max">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400">Who We Are</span>
                  </div>
                  <h2 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] font-heading font-black leading-[0.85] tracking-tighter uppercase">
                    ABOUT<br/><span className="gradient-text italic text-blue-400">US</span>
                  </h2>
                </div>
                <div className="max-w-xl space-y-6">
                   <p className="font-mono text-sm md:text-base text-white/60 uppercase tracking-[0.1em] leading-relaxed">
                     We are a team of designers, developers, and AI specialists who build digital products that genuinely move the needle. We don't just deliver code — we build tools that bring you more customers, save your team hours every week, and make your business look world-class online.
                   </p>
                   <div className="h-px w-full bg-gradient-to-r from-blue-400/30 to-transparent" />
                   <p className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-[0.3em]">
                     Our Mission: Help every business compete and win in the digital world.
                   </p>
                </div>
              </div>
            </AnimatedSection>

            {/* TIMELINE INTERFACE START */}
            <AnimatedSection className="w-full h-full relative z-20">
               <RadialOrbitalTimeline timelineData={aboutUsTimelineData} />
            </AnimatedSection>
            {/* TIMELINE INTERFACE END */}
          </div>
        </div>
      </section>

      <section className="relative bg-black z-10">
        <ProblemSolution />
      </section>

      <WhyChooseUs />

      <FeaturedArchive />

      <PricingSection />

      {/* ═══════════ RESULTS SECTION ═══════════ */}
      <section className="relative py-24 bg-black overflow-hidden z-20 border-t border-white/5">
        <div className="max-w-[1550px] mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Real Numbers</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] font-heading font-black leading-none tracking-tighter uppercase mb-6">
              RESULTS WE'VE <span className="gradient-text italic text-blue-400">DELIVERED</span> FOR REAL BUSINESSES
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "34%", desc: "Revenue increase for an ecommerce client after we rebuilt their website" },
              { num: "40%", desc: "Of cold leads converted to demo calls using our AI calling agent" },
              { num: "82%", desc: "Customer support tickets automatically resolved by our AI chatbot" },
              { num: "3 sec → 300ms", desc: "Website load time improvement for a SaaS platform — traffic doubled in 60 days" },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-panel p-8 rounded-3xl border-white/10 text-center hover:border-blue-400/30 transition-all">
                  <div className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter italic">{card.num}</div>
                  <p className="font-mono text-xs uppercase text-white/50 leading-relaxed tracking-wider">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CLIENT TRANSMISSIONS ═══════════ */}
      <section ref={marqueeRef} className="relative py-20 md:py-32 bg-black z-10 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-50/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1550px] mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6 backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#0ea5e9]">Client Results</span>
            </div>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-heading font-black leading-none tracking-tighter uppercase mb-4">
              REAL RESULTS FROM <span className="gradient-text italic text-[#0ea5e9]">REAL CLIENTS</span>
            </h2>
            <p className="font-mono text-sm text-white/30 uppercase tracking-[0.2em] max-w-lg mx-auto">
              Here's what business owners say after working with us.
            </p>
          </AnimatedSection>
        </div>

        {/* ── MARQUEE ROW 1 — left scroll ── */}
        <div className="relative mb-6 group overflow-hidden">
          <div className={`flex gap-5 animate-marquee-left group-hover:pause-animation ${pauseAnimations ? 'pause-animation' : ''} whitespace-nowrap w-max will-change-transform`}>
            {[...[
              { quote: "Vedastra AI Labs completely reimagined our digital infrastructure. Their AI agents now handle 70% of our lead qualification autonomously.", name: "Sarah Chen", role: "CTO, Nexus Dynamics", rating: 5, accent: "text-blue-400", border: "border-blue-500/20" },
              { quote: "The performance optimization was insane — our platform went from 3s load times to under 400ms. Revenue jumped 34% in just one quarter.", name: "Marcus Rivera", role: "Head of Product, FlowStack", rating: 5, accent: "text-purple-400", border: "border-purple-500/20" },
              { quote: "We've worked with 6 agencies before Joint. None delivered this level of engineering precision. They don't just build — they architect.", name: "Elena Kowalski", role: "Founder, AetherLabs", rating: 5, accent: "text-emerald-400", border: "border-emerald-500/20" },
              { quote: "Their AI calling agent converted 40% of cold leads into demo calls in the first week. We've never seen results like this.", name: "Raj Patel", role: "VP Sales, QuantumLeap", rating: 5, accent: "text-sky-400", border: "border-sky-500/20" },
            ], ...[
              { quote: "Vedastra AI Labs completely reimagined our digital infrastructure. Their AI agents now handle 70% of our lead qualification autonomously.", name: "Sarah Chen", role: "CTO, Nexus Dynamics", rating: 5, accent: "text-blue-400", border: "border-blue-500/20" },
              { quote: "The performance optimization was insane — our platform went from 3s load times to under 400ms. Revenue jumped 34% in just one quarter.", name: "Marcus Rivera", role: "Head of Product, FlowStack", rating: 5, accent: "text-purple-400", border: "border-purple-500/20" },
              { quote: "We've worked with 6 agencies before Joint. None delivered this level of engineering precision. They don't just build — they architect.", name: "Elena Kowalski", role: "Founder, AetherLabs", rating: 5, accent: "text-emerald-400", border: "border-emerald-500/20" },
              { quote: "Their AI calling agent converted 40% of cold leads into demo calls in the first week. We've never seen results like this.", name: "Raj Patel", role: "VP Sales, QuantumLeap", rating: 5, accent: "text-sky-400", border: "border-sky-500/20" },
            ]].map((t, i) => (
              <div
                key={`r1-${i}`}
                className={`inline-flex shrink-0 w-[340px] md:w-[420px] flex-col justify-between gap-5 glass-panel rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border ${t.border} group/card hover:scale-[1.02] transition-transform duration-300 cursor-default`}
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

        {/* ── MARQUEE ROW 2 — right scroll ── */}
        <div className="relative group overflow-hidden">
          <div className={`flex gap-5 animate-marquee-right group-hover:pause-animation ${pauseAnimations ? 'pause-animation' : ''} whitespace-nowrap w-max will-change-transform`}>
            {[...[
              { quote: "Our ecommerce platform's conversion rate went from 1.8% to 4.9% after Joint rebuilt our funnel. Absolutely transformative work.", name: "Nina Torres", role: "CEO, LuxeCart", rating: 5, accent: "text-amber-400", border: "border-amber-500/20" },
              { quote: "The AI messaging bot they built for us now books 30+ appointments daily on autopilot. The ROI is genuinely incredible.", name: "James Okonkwo", role: "Director, ScaleForce", rating: 5, accent: "text-fuchsia-400", border: "border-fuchsia-500/20" },
              { quote: "We asked for a mobile app and they delivered a full product ecosystem. The design quality rivals top-tier Silicon Valley products.", name: "Priya Nair", role: "CPO, NovaBridge", rating: 5, accent: "text-teal-400", border: "border-teal-500/20" },
              { quote: "Their team understands business, not just code. Everything they built ties directly to our revenue and growth metrics.", name: "Leo Strauss", role: "Co-Founder, ArcVentures", rating: 5, accent: "text-rose-400", border: "border-rose-500/20" },
            ], ...[
              { quote: "Our ecommerce platform's conversion rate went from 1.8% to 4.9% after Joint rebuilt our funnel. Absolutely transformative work.", name: "Nina Torres", role: "CEO, LuxeCart", rating: 5, accent: "text-amber-400", border: "border-amber-500/20" },
              { quote: "The AI messaging bot they built for us now books 30+ appointments daily on autopilot. The ROI is genuinely incredible.", name: "James Okonkwo", role: "Director, ScaleForce", rating: 5, accent: "text-fuchsia-400", border: "border-fuchsia-500/20" },
              { quote: "We asked for a mobile app and they delivered a full product ecosystem. The design quality rivals top-tier Silicon Valley products.", name: "Priya Nair", role: "CPO, NovaBridge", rating: 5, accent: "text-teal-400", border: "border-teal-500/20" },
              { quote: "Their team understands business, not just code. Everything they built ties directly to our revenue and growth metrics.", name: "Leo Strauss", role: "Co-Founder, ArcVentures", rating: 5, accent: "text-rose-400", border: "border-rose-500/20" },
            ]].map((t, i) => (
              <div
                key={`r2-${i}`}
                className={`inline-flex shrink-0 w-[340px] md:w-[420px] flex-col justify-between gap-5 glass-panel rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border ${t.border} group/card hover:scale-[1.02] transition-transform duration-300 cursor-default`}
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

        {/* edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* stat bar */}
        <div className="relative z-10 max-w-[1550px] mx-auto px-6 mt-20 md:mt-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { metric: "98%", label: "Client Retention Rate" },
              { metric: "200+", label: "Projects Delivered" },
              { metric: "4.9★", label: "Average Rating" },
              { metric: "4", label: "Continents Served" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="glass-panel rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/5 text-center hover:border-[#0ea5e9]/30 transition-colors duration-500"
              >
                <div className="text-3xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter mb-2">
                  {s.metric}
                </div>
                <div className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* REDUNDANT ADVANTAGE SECTION REMOVED */}

      {/* ═══════════ TECH PROCESS SECTION ═══════════ */}
      <section className="relative py-40 bg-black overflow-hidden z-10">
        {/* Background circuit lines visual */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{backgroundImage: `radial-gradient(#0ea5e9 1px, transparent 1px)`, backgroundSize: '40px 40px'}} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#0ea5e9]">How It Works</span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3.2rem] font-heading font-black tracking-tighter leading-[0.9] mb-12 uppercase">
                YOUR PROJECT <br/><span className="gradient-text italic text-[#0ea5e9]">IN 3 SIMPLE STEPS</span>
              </h2>
              <div className="space-y-12 mt-16">
                {[
                  { num: '01', title: '1. We Understand Your Business', desc: 'We start with a free consultation to learn about your goals, your customers, and what success looks like for you. No jargon, just a real conversation.', icon: Cpu },
                  { num: '02', title: '2. We Build Fast & Transparently', desc: 'You get regular updates, live previews, and full visibility throughout. Our AI-assisted build process means faster delivery without sacrificing quality.', icon: Shield },
                  { num: '03', title: '3. We Launch & Keep Supporting You', desc: 'We go live on fast, reliable infrastructure and monitor everything. You get ongoing support so your digital product keeps growing with your business.', icon: Server },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 group cursor-default items-start">
                    <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0ea5e9] group-hover:border-[#0ea5e9] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500">
                      <step.icon className="w-6 h-6 text-[#0ea5e9] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-sm font-black text-[#0ea5e9]/30">{step.num}</span>
                        <h4 className="text-xl md:text-2xl font-black font-heading text-white group-hover:text-[#0ea5e9] transition-colors uppercase tracking-tight">{step.title}</h4>
                      </div>
                      <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md font-mono">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="relative">
                {/* Custom 3D Component */}
                <div className="mb-12">
                   <Floating3DNeuralCore />
                </div>

                {/* Floating Code Block */}
                <div className="glass-panel rounded-[2rem] p-6 md:p-8 relative overflow-hidden border-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 transition-colors duration-500 group">
                  <div className="absolute -inset-20 bg-[#0ea5e9]/5 blur-[80px] pointer-events-none group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    </div>
                    <span className="font-mono text-[10px] text-white/30 ml-3 tracking-widest uppercase">joint_protocol_v2.ts</span>
                  </div>

                  <div className="font-mono text-xs md:text-sm leading-6 relative z-10 text-white/70">
                    <div><span className="text-[#0ea5e9]">import</span> {`{`} <span className="text-purple-400">AIBuilder</span> {`}`} <span className="text-[#0ea5e9]">from</span> <span className="text-amber-400">&apos;@joint/engine&apos;</span>;</div>
                    <div className="mt-2"><span className="text-white/20">// Initialize autonomous build sequence</span></div>
                    <div><span className="text-[#0ea5e9]">const</span> <span className="text-white">app</span> = <span className="text-[#0ea5e9]">await</span> <span className="text-purple-400">AIBuilder</span>.<span className="text-green-400">generate</span>({`{`}</div>
                    <div className="pl-6"><span className="text-white/30">vision:</span> <span className="text-cyan-400">&apos;enterprise&apos;</span>,</div>
                    <div className="pl-6"><span className="text-white/30">efficiency:</span> <span className="text-purple-400">0.98</span>,</div>
                    <div className="pl-6"><span className="text-white/30">autoOptimize:</span> <span className="text-purple-400">true</span></div>
                    <div>{`}`});</div>
                    <div className="mt-4"><span className="text-white/20">// AI-monitored global deployment</span></div>
                    <div><span className="text-[#0ea5e9]">await</span> app.<span className="text-green-400">launch</span>({`{`} <span className="text-white/30">clusters:</span> <span className="text-cyan-400">&apos;global&apos;</span> {`}`});</div>
                  </div>
                </div>

                {/* Floating metrics */}
                <div className="absolute -top-12 right-0 glass-premium px-5 py-3 rounded-2xl border-[#0ea5e9]/20 animate-float pointer-events-none backdrop-blur-xl">
                  <p className="font-mono text-[9px] text-[#0ea5e9]/60 mb-1 uppercase tracking-tighter">Throughput</p>
                  <p className="text-white font-black tracking-tight text-xl">1.2M <span className="text-green-400 text-xs">reqs/s</span></p>
                </div>
                <div className="absolute -bottom-8 -left-4 glass-premium px-5 py-3 rounded-2xl border-white/10 animate-float [animation-delay:1.5s] pointer-events-none backdrop-blur-xl">
                  <p className="font-mono text-[9px] text-white/30 mb-1 uppercase tracking-tighter">Global Uptime</p>
                  <p className="text-[#0ea5e9] font-black tracking-tight text-xl">99.999%</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════ TECH INFRASTRUCTURE MARQUEE ═══════════ */}
      <section className="relative py-20 bg-black overflow-hidden border-t border-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-20 items-center pr-20">
            {[
              { icon: Shield, text: "ENCRYPTED PROTOCOLS" },
              { icon: Zap, text: "LOW-LATENCY EDGE" },
              { icon: Server, text: "NODE NEURAL SYNC" },
              { icon: Bot, text: "AUTONOMOUS LOGIC" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <item.icon className="w-8 h-8 text-blue-400" />
                <span className="text-4xl md:text-6xl font-heading font-black text-white/20 uppercase tracking-tighter">{item.text}</span>
                <span className="text-blue-400">•</span>
              </div>
            ))}
            {[
              { icon: Shield, text: "ENCRYPTED PROTOCOLS" },
              { icon: Zap, text: "LOW-LATENCY EDGE" },
              { icon: Server, text: "NODE NEURAL SYNC" },
              { icon: Bot, text: "AUTONOMOUS LOGIC" },
            ].map((item, i) => (
              <div key={i+"dup"} className="flex items-center gap-6">
                <item.icon className="w-8 h-8 text-blue-400" />
                <span className="text-4xl md:text-6xl font-heading font-black text-white/20 uppercase tracking-tighter">{item.text}</span>
                <span className="text-blue-400">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CINEMATIC CONTACT SECTION ═══════════ */}
      <section className="relative py-20 bg-obsidian overflow-hidden z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-400/5 mb-8">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0ea5e9]">Get In Touch</span>
                </div>
                <h2 className="text-[2.2rem] md:text-[3.2rem] font-heading font-black tracking-tighter leading-[0.8] mb-10 uppercase">
                  LET'S GROW YOUR <br/><span className="gradient-text italic text-[#0ea5e9]">BUSINESS TOGETHER</span>
                </h2>
                <p className="text-white/50 text-lg font-mono font-light max-w-xl mb-12 leading-relaxed">
                  Book a free 30-minute consultation. We'll look at your current digital presence, tell you exactly what needs fixing, and show you what we'd build for you — no commitment required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="glass-panel p-6 rounded-3xl border-white/5 hover:border-[#0ea5e9]/30 transition-all group">
                      <Mail className="w-6 h-6 text-[#0ea5e9] mb-4" />
                      <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Email Us</div>
                      <div className="text-sm font-bold text-white">hello@vedastraai.com</div>
                   </div>
                   <div className="glass-panel p-6 rounded-3xl border-white/5 hover:border-[#0ea5e9]/30 transition-all group">
                      <Phone className="w-6 h-6 text-[#0ea5e9] mb-4" />
                      <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Call Us</div>
                      <div className="text-sm font-bold text-white">+1 (555) 123-4567</div>
                   </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={0.2}>
                <div className="glass-premium rounded-[3rem] p-8 md:p-12 border-white/10 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />
                   
                   <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <input
                             type="text"
                             placeholder="IDENTIFIER / NAME"
                             className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 transition-all placeholder:text-white/20"
                           />
                        </div>
                        <div className="space-y-2">
                           <input
                             type="email"
                             placeholder="COMM LINK / EMAIL"
                             className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 transition-all placeholder:text-white/20"
                           />
                        </div>
                      </div>
                      
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-[#0ea5e9] transition-all appearance-none cursor-pointer">
                        <option className="bg-black text-white">WEB ARCHITECTURE</option>
                        <option className="bg-black text-white">AI SOLUTIONS</option>
                        <option className="bg-black text-white">WORKFLOW AUTOMATION</option>
                        <option className="bg-black text-white">OTHER</option>
                      </select>

                      <textarea
                        placeholder="SYSTEM REQUIREMENTS / MESSAGE"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-[#0ea5e9] transition-all resize-none placeholder:text-white/20"
                      />

                      <p className="text-center font-mono text-[10px] uppercase tracking-widest text-blue-400 mb-4 animate-pulse">
                        ⚡ We respond to every inquiry within 24 hours.
                      </p>
                      <button className="w-full py-5 rounded-2xl bg-[#0ea5e9] text-black font-black font-mono tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(14,165,233,0.3)] flex items-center justify-center gap-3">
                        Send Message <Send className="w-4 h-4" />
                      </button>

                   </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
