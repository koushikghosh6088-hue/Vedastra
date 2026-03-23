'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Smartphone, MessageSquare, Phone, Cog, Target, 
  CheckCircle2, ArrowRight, Zap, X, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceOrbital, { ServiceItem } from "@/components/ui/radial-orbital-timeline";

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Website Development",
    icon: Globe,
    accent: "#0066ff",
    secondary: "#00ccff",
    headline: "A Website That Turns Visitors Into Paying Customers",
    content: "Your website is your #1 salesperson. We build fast, stunning websites that load in under 2 seconds and look perfect on every device. Designed from the ground up to convert visitors — not just look pretty.",
    benefits: [
      "Loads in under 2 seconds — zero frustration",
      "Looks perfect on mobile, tablet and desktop",
      "Built to rank on Google from day one"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: Smartphone,
    accent: "#8B5CF6",
    secondary: "#D946EF",
    headline: "Put Your Business Directly In Your Customers' Pockets",
    content: "Keep your customers one tap away. We build apps for both iPhone and Android that drive repeat business, enable easy booking or ordering, and make you look like the most professional option in your market.",
    benefits: [
      "Works on both iPhone and Android",
      "Push notifications to bring customers back",
      "In-app booking, ordering or payments"
    ]
  },
  {
    id: 3,
    title: "AI Chat Agent",
    icon: MessageSquare,
    accent: "#10B981",
    secondary: "#34D399",
    headline: "Never Miss A Lead — Even At 2am",
    content: "Our AI replies to customer messages instantly on your website, WhatsApp and Instagram — 24/7. It answers questions, captures lead details and books appointments automatically. Like a salesperson who never sleeps.",
    benefits: [
      "Replies instantly — 24 hours, 7 days a week",
      "Trained on your specific business and services",
      "Works on website, WhatsApp and Instagram"
    ]
  },
  {
    id: 4,
    title: "AI Voice Agent",
    icon: Phone,
    accent: "#F43F5E",
    secondary: "#FB7185",
    headline: "An AI That Calls Your Leads And Books Appointments",
    content: "New lead comes in? Our AI calls them within 60 seconds, has a natural conversation, qualifies them and books them straight into your calendar — without a single human involved. Your sales pipeline runs itself.",
    benefits: [
      "Calls new leads within 60 seconds automatically",
      "Natural conversation — not robotic",
      "Books directly into your calendar"
    ]
  },
  {
    id: 5,
    title: "Business Automation",
    icon: Cog,
    accent: "#F59E0B",
    secondary: "#FBBF24",
    headline: "Stop Doing The Same Tasks Over And Over",
    content: "Invoices, follow-ups, reminders, data entry — all running on autopilot. We automate the repetitive work so your team can focus on what actually grows the business. Most clients save 15–20 hours every single week.",
    benefits: [
      "Invoices and follow-ups sent automatically",
      "Data synced between all your apps instantly",
      "Most clients save 15–20 hours per week"
    ]
  },
  {
    id: 6,
    title: "SEO & Digital Marketing",
    icon: Target,
    accent: "#06B6D4",
    secondary: "#22D3EE",
    headline: "Get Found By Customers Already Searching For You",
    content: "People are searching Google for exactly what you sell right now. We make sure they find you first — not your competitor. More visibility, more clicks, more paying customers.",
    benefits: [
      "Rank higher on Google searches",
      "Google Ads that bring leads without wasting budget",
      "Monthly reports showing exactly what's working"
    ]
  }
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeService = services.find(s => s.id === activeId);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-black overflow-hidden z-10">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-heading font-black leading-[0.9] tracking-tighter uppercase mb-6 text-white text-glow mx-auto">
            EXPLORE WHAT <br/> WE BUILD
          </h2>
          <div className="flex flex-col items-center">
             <p className="font-mono text-cyan-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black">
               Spin to explore our services. Click any icon to learn more.
             </p>
          </div>
        </AnimatedSection>

        {/* Main Interaction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center min-h-[500px] md:min-h-[700px]">
           
           {/* Left: Circular Spinner */}
           <div className="relative flex items-center justify-center order-1 h-[450px] md:h-full overflow-visible">
              <ServiceOrbital 
                services={services} 
                activeServiceId={activeId}
                onServiceSelect={(id) => setActiveId(id)}
                isMobile={isMobile}
              />
           </div>

           {/* Right: Service Detail Panel (Desktop) */}
           {!isMobile && (
             <div className="relative order-2 h-full flex items-center">
                <AnimatePresence mode="wait">
                  {activeService ? (
                    <motion.div
                      key={activeService.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="glass-premium p-12 rounded-[3.5rem] border-white/10 w-full bg-black/40 backdrop-blur-3xl relative overflow-hidden"
                    >
                      {/* Subtle Color Background Glow */}
                      <div 
                        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
                        style={{ background: `radial-gradient(circle at top right, ${activeService.accent}, transparent 70%)` }}
                      />

                      <div className="relative z-10 flex items-center gap-6 mb-10">
                         <div 
                           className="w-16 h-16 rounded-3xl flex items-center justify-center border-2 transition-all duration-500"
                           style={{ 
                             backgroundColor: `${activeService.accent}22`,
                             borderColor: `${activeService.accent}66`,
                             color: activeService.accent,
                             boxShadow: `0 0 20px ${activeService.accent}33`
                           }}
                         >
                            <activeService.icon className="w-8 h-8" />
                         </div>
                         <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter">
                            {activeService.title}
                         </h3>
                      </div>

                      <h4 className="text-xl md:text-2xl font-body font-black italic mb-6 leading-tight relative z-10" style={{ color: activeService.accent }}>
                         &quot;{activeService.headline}&quot;
                      </h4>
                      
                      <p className="text-white/60 text-lg leading-relaxed mb-10 font-body relative z-10">
                         {activeService.content}
                      </p>

                      <div className="space-y-4 mb-12 relative z-10">
                         {activeService.benefits.map((benefit, i) => (
                           <div key={i} className="flex items-center gap-4 text-white/80">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: activeService.accent }} />
                              <span className="font-mono text-sm uppercase tracking-wide">{benefit}</span>
                           </div>
                         ))}
                      </div>

                      <div className="flex flex-wrap gap-4 relative z-10">
                        <Link 
                           href="#contact"
                           className="px-8 py-4 text-black font-heading font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white transition-all"
                           style={{ 
                             backgroundColor: activeService.accent,
                             shadow: `0 0 30px ${activeService.accent}66`
                           }}
                        >
                           GET STARTED <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </Link>
                        <Link 
                           href={`/services/${activeService.id}`}
                           className="px-8 py-4 border border-white/10 text-white font-heading font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-all"
                        >
                           LEARN MORE
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center w-full"
                    >
                       <p className="font-mono text-white/30 text-sm uppercase tracking-[0.4em] animate-pulse">
                         &larr; Spin and click any service to explore what we build
                       </p>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
           )}
        </div>

        {/* Mobile Bottom Sheet */}
        <AnimatePresence>
          {isMobile && activeService && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
                onClick={() => setActiveId(null)}
              />
              
              {/* Bottom Sheet */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  drag="y"
                  dragConstraints={{ top: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                     if (info.offset.y > 100) setActiveId(null);
                  }}
                  className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#111118] rounded-t-[3rem] border-t shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
                  style={{ maxHeight: "85vh", borderColor: `${activeService.accent}66` }}
                >
                   {/* Background Tint */}
                   <div 
                      className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                      style={{ background: `linear-gradient(to bottom, ${activeService.accent}, transparent)` }}
                   />

                   <div className="w-full flex justify-center py-6 cursor-grab active:cursor-grabbing relative z-10">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full" />
                   </div>

                   <div className="px-8 pb-16 overflow-y-auto max-h-[calc(85vh-60px)] relative z-10">
                      <div className="flex items-center gap-5 mb-8">
                         <div 
                           className="w-14 h-14 rounded-2xl flex items-center justify-center border-2"
                           style={{ 
                             backgroundColor: `${activeService.accent}22`,
                             borderColor: `${activeService.accent}44`,
                             color: activeService.accent 
                           }}
                         >
                            <activeService.icon className="w-7 h-7" />
                         </div>
                         <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tighter">
                            {activeService.title}
                         </h3>
                      </div>

                      <h4 className="text-lg font-body font-black italic mb-6 leading-tight" style={{ color: activeService.accent }}>
                         &quot;{activeService.headline}&quot;
                      </h4>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-8 font-body">
                         {activeService.content}
                      </p>

                      <div className="space-y-4 mb-10">
                         {activeService.benefits.map((benefit, i) => (
                           <div key={i} className="flex items-center gap-4 text-white/80">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: activeService.accent }} />
                              <span className="font-mono text-[11px] uppercase tracking-wide">{benefit}</span>
                           </div>
                         ))}
                      </div>

                      <div className="flex flex-col gap-4">
                        <Link 
                           href="#contact"
                           onClick={() => setActiveId(null)}
                           className="w-full py-5 text-black font-heading font-black text-xs uppercase tracking-widest rounded-2xl text-center"
                           style={{ backgroundColor: activeService.accent, boxShadow: `0 10px 30px ${activeService.accent}44` }}
                        >
                           GET STARTED <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </Link>
                        <button 
                           onClick={() => setActiveId(null)}
                           className="w-full py-5 border border-white/10 text-white/40 font-mono text-[10px] uppercase tracking-widest rounded-2xl transition-all"
                        >
                           CLOSE
                        </button>
                      </div>
                   </div>
                </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Tactical Footer CTA */}
        <AnimatedSection className="mt-32 text-center pb-12">
           <div className="max-w-3xl mx-auto border-t border-white/5 pt-20">
              <h4 className="text-2xl md:text-4xl font-heading font-black text-white uppercase italic leading-[1] tracking-tighter mb-6">
                 NOT SURE WHAT YOU NEED?
              </h4>
              <p className="text-[#8A8A9A] text-lg font-body max-w-xl mx-auto mb-12">
                 Book a free 30-minute call — we&apos;ll tell you exactly what to build for your business. <span className="text-white">Zero commitment, zero jargon.</span>
              </p>
              <Link 
                href="#contact"
                className="inline-flex items-center gap-8 px-12 py-7 bg-cyan-400 text-black font-heading font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all rounded-[1rem] shadow-[0_20px_60px_rgba(0,212,255,0.4)] hover:shadow-[0_25px_80px_rgba(0,212,255,0.6)] group"
              >
                 BOOK FREE STRATEGY CALL 
                 <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition-transform group-hover:translate-x-2">
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                 </div>
              </Link>
           </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
