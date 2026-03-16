'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink, Folder } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "NexaShop",
    subtitle: "E-Commerce Platform",
    description: "High-performance online store with sub-300ms load times and AI-powered product recommendations.",
    tags: ["Next.js", "Stripe", "AI", "Web"],
    image: "/portfolio/ecommerce.png",
    color: "from-blue-600 to-cyan-400",
    border: "border-blue-500/30",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    label: "Web Development"
  },
  {
    id: 2,
    title: "InsightOS",
    subtitle: "SaaS Analytics Dashboard",
    description: "Real-time business intelligence platform with AI-generated insights and predictive analytics.",
    tags: ["React", "Python", "ML", "SaaS"],
    image: "/portfolio/saas.png",
    color: "from-purple-600 to-violet-400",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    label: "AI Solutions"
  },
  {
    id: 3,
    title: "ConnectCRM",
    subtitle: "Mobile CRM Application",
    description: "Native mobile CRM with AI-driven lead scoring, voice-to-notes, and intelligent follow-up scheduling.",
    tags: ["React Native", "AI Agents", "CRM"],
    image: "/portfolio/mobile_crm.png",
    color: "from-emerald-600 to-lime-400",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    label: "Mobile App"
  },
  {
    id: 4,
    title: "OmniBot Pro",
    subtitle: "AI Customer Support Agent",
    description: "24/7 autonomous AI agent for customer support that deflects 82% of tickets with 98% accuracy.",
    tags: ["AI", "NLP", "Automation", "Chat"],
    image: "/portfolio/ai_chatbot.png",
    color: "from-sky-600 to-blue-400",
    border: "border-sky-500/30",
    glow: "shadow-[0_0_40px_rgba(14,165,233,0.15)]",
    label: "AI Agents"
  },
  {
    id: 5,
    title: "Cravings",
    subtitle: "Food Delivery Platform",
    description: "Premium restaurant & delivery web app with real-time order tracking and an AI menu personalization engine.",
    tags: ["Next.js", "Maps API", "Design"],
    image: "/portfolio/restaurant.png",
    color: "from-orange-500 to-amber-400",
    border: "border-orange-500/30",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    label: "Web Development"
  },
  {
    id: 6,
    title: "PropIQ",
    subtitle: "Real Estate Intelligence",
    description: "AI-powered property discovery platform with 3D map view, valuation AI, and automated buyer-matching.",
    tags: ["Next.js", "AI", "Maps", "SaaS"],
    image: "/portfolio/realestate.png",
    color: "from-teal-600 to-cyan-400",
    border: "border-teal-500/30",
    glow: "shadow-[0_0_40px_rgba(20,184,166,0.15)]",
    label: "AI Solutions"
  },
  {
    id: 7,
    title: "FitMind",
    subtitle: "AI Fitness Coach App",
    description: "Adaptive workout and nutrition mobile platform with an AI coach that personalizes every session.",
    tags: ["React Native", "AI", "Health"],
    image: "/portfolio/fitness.png",
    color: "from-rose-600 to-pink-400",
    border: "border-rose-500/30",
    glow: "shadow-[0_0_40px_rgba(244,63,94,0.15)]",
    label: "Mobile App"
  }
];

export default function FeaturedArchive() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const total = projects.length;

  // Intersection Observer to detect if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (!trackRef.current) return;
    const el = trackRef.current.children[index] as HTMLElement;
    if (el) {
      const container = trackRef.current;
      const targetScrollPos = el.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetScrollPos,
        behavior: 'smooth'
      });
    }
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    const nextIdx = (activeIndex + 1) % total;
    scrollToIndex(nextIdx);
  }, [activeIndex, total, scrollToIndex]);

  const prev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + total) % total;
    scrollToIndex(prevIdx);
  }, [activeIndex, total, scrollToIndex]);

  // Auto-slide every 3.5 seconds unless hovered or not in view
  useEffect(() => {
    if (!isHovered && isInView) {
      autoSlideRef.current = setTimeout(next, 3500);
    }
    return () => {
      if (autoSlideRef.current) clearTimeout(autoSlideRef.current);
    };
  }, [isHovered, isInView, next]);

  return (
    <section className="relative py-20 md:py-32 bg-black z-10 overflow-hidden">
      {/* Background glow grid removed */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(14,165,233,0.06)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1550px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6 backdrop-blur-md">
              <Folder className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#0ea5e9]">Featured Archive</span>
            </div>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-heading font-black leading-none tracking-tighter uppercase">
              OUR <span className="gradient-text italic text-[#0ea5e9]">FINEST</span><br/>WORK
            </h2>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="group w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 glass-panel flex items-center justify-center hover:border-[#0ea5e9]/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-white/50 group-hover:text-[#0ea5e9] transition-colors" />
              </button>
              <button
                onClick={next}
                className="group w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 glass-panel flex items-center justify-center hover:border-[#0ea5e9]/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#0ea5e9] transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Slider Track */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-5 md:gap-8 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, delay: i * 0.05 }}
                className={`snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw] xl:w-[30vw] group relative rounded-[2rem] border ${project.border} ${project.glow} overflow-hidden glass-panel flex flex-col cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2`}
              >
                {/* Project Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`font-mono text-[9px] md:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border ${project.border} text-white/70`}>
                      {project.label}
                    </span>
                  </div>
                  {/* ExternalLink icon */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <div className={`w-8 h-8 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-8 flex flex-col flex-1 gap-3">
                  <div>
                    <p className={`font-mono text-[10px] md:text-xs uppercase tracking-widest mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-bold`}>
                      {project.subtitle}
                    </p>
                    <h3 className="font-heading font-black text-white text-xl md:text-2xl lg:text-3xl tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-white/50 font-mono text-xs md:text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress indicator at bottom */}
                  <div className={`mt-4 h-0.5 w-full bg-white/5 rounded-full overflow-hidden`}>
                    <div className={`h-full bg-gradient-to-r ${project.color} w-0 group-hover:w-full transition-all duration-700 ease-out`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Edge fade mask */}
          <div className="absolute right-0 top-0 bottom-6 w-24 md:w-40 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>

        {/* Dot indicator row */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full ${i === activeIndex ? 'w-8 h-2 bg-[#0ea5e9]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
