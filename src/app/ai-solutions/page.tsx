'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  Phone, MessageSquare, Cog, ArrowRight, CheckCircle2, Zap,
  BarChart3, Brain, Radio, ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import TypewriterSubline from '@/components/TypewriterSubline';

const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });
const DynamicCyberTorus = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CyberTorus), { ssr: false });

// Use the global View component for single-canvas architecture
const View = dynamic(() => import('@react-three/drei').then(mod => mod.View), { ssr: false });
const PerspectiveCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const PresentationControls = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const Environment = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[65vh] flex flex-col justify-center">
        <div className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-blue-400/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-blue-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse inline-block mr-2" />
              AI & Automation
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-extrabold leading-[0.85] tracking-tighter mb-8 max-w-5xl">
              WORK SMARTER WITH <span className="gradient-text italic">CUSTOM AI.</span>
            </h1>
            <TypewriterSubline 
              phrases={[
                "Autonomous Interaction Hubs",
                "Deep Workflow Orchestration",
                "24/7 Operational Autonomy",
                "Neural Processing Architectures"
              ]}
              className="text-lg md:text-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ── AI Voice Agent ── */}
      <section id="calling" className="py-24 relative z-20 bg-black rounded-t-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Context/UI Panel */}
            <AnimatedSection className="lg:col-span-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                <Radio className="w-3 h-3 text-blue-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">AI Voice Agents</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white text-blue-400 text-none uppercase">
                AI VOICE <span className="gradient-text italic">AGENTS</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-10 font-mono font-light">
                Imagine a salesperson who never sleeps. Our AI voice agents handle inbound calls, qualify leads, and book appointments automatically — sounding just like a human.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {['Sub-500ms Latency', 'Multi-Language', 'CRM Auto-Sync', 'Sentiment Analysis'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-white/70 font-mono text-xs uppercase">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="group relative overflow-hidden px-8 py-4 rounded-full text-sm font-bold bg-blue-400 text-black shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                Deploy Voice Agent <ArrowUpRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Interactive Hardware/UI Node */}
            <AnimatedSection delay={0.2} direction="right" className="lg:col-span-6 lg:order-1">
              <div className="glass-panel rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden border-blue-400/20 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Embedded 3D Canvas Replacement */}
            <div className="absolute inset-x-0 top-0 h-80 z-0 opacity-80 mix-blend-screen pointer-events-none group-hover:scale-110 transition-transform duration-700 flex items-center justify-center p-12">
                <div className="relative w-full aspect-square max-w-[350px]">
                    <Image
                      src="/3d-icons/ai_calling.png"
                      alt="Voice AI"
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(14,165,233,0.3)]"
                    />
                </div>
            </div>

                {/* Voice Wave UI overlay */}
                <div className="relative z-10 mt-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase text-white/40">Active Instance</div>
                        <div className="text-sm font-semibold text-white">Lead Qualification</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-400 text-xs font-mono animate-pulse">
                      01:24
                    </div>
                  </div>

                  {/* Animated voice wave */}
                  <div className="flex items-center justify-center gap-[3px] py-4 h-16">
                    {Array.from({ length: 45 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                        animate={{ height: [4, Math.random() * 40 + 5, 8, Math.random() * 30 + 5, 4] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.03, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {[
                      { label: 'Outbound', value: '420' },
                      { label: 'Connected', value: '89%' },
                      { label: 'Converted', value: '24' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-wider font-mono text-white/40 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── AI Messaging Agent ── */}
      <section id="messaging" className="py-24 relative bg-black">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Chat UI Panel */}
            <AnimatedSection direction="left" className="lg:col-span-6">
              <div className="glass-panel rounded-[2.5rem] p-6 lg:p-8 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Omnichannel Bot</div>
                      <div className="text-xs font-mono text-blue-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Online
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { from: 'ai', text: 'INCOMING CONNECTION: Detected high-intent visitor from organic search.', delay: 0 },
                    { from: 'ai', text: 'INITIATING ENGAGEMENT PROTOCOL...', delay: 0.2 },
                    { from: 'user', text: 'Looking for a custom integration solution.', delay: 0.6 },
                    { from: 'ai', text: 'Understood. Parsing requirements. Our engineering team specializes in custom API bridges and legacy system integration. Would you like the technical spec sheet?', delay: 0.9 },
                    { from: 'user', text: 'Yes, please send it.', delay: 1.2 },
                    { from: 'ai', text: 'EXECUTING TRANSFER. Specs sent to provided session email. Transitioning to human architect for scoping...', delay: 1.5 },
                  ].map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: msg.delay + 0.5 }}
                      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm font-mono leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-blue-400/10 border border-blue-400/20 text-blue-100 rounded-br-sm'
                          : 'bg-white/5 border border-white/10 text-white/70 rounded-bl-sm'
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto flex gap-2">
                  <div className="flex-1 px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-sm font-mono text-white/30 flex items-center">
                    Awaiting input stream...
                  </div>
                  <button className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-white hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                <MessageSquare className="w-3 h-3 text-white" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">AI Messaging Agents</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white text-none uppercase">
                24/7 CHAT <span className="gradient-text italic">AGENTS</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-10 font-mono font-light">
                Answer customer questions instantly on your website, WhatsApp, or SMS. Our AI agents learn your business and close more deals 24/7.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Omnichannel Architecture', 'Semantic Search Native', 'Seamless Human Handoff', 'Token-Efficient RAG'].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 font-mono text-sm uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="group px-8 py-4 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
                Deploy Chat Agent <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Automation Engine (3D integration) ── */}
      <section id="automation" className="py-32 relative overflow-hidden">
        {/* Centerpiece Visual Replacement */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] z-0 opacity-40 mix-blend-screen pointer-events-none flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
                <Image
                  src="/3d-icons/automation.png"
                  alt="Automation Logic"
                  fill
                  className="object-contain blur-[2px] group-hover:blur-0 transition-all duration-1000"
                />
            </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto backdrop-blur-xl">
              <Cog className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[3.5rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6 text-white leading-none">
              AUTO-PILOT FOR <br/><span className="text-white/30 italic">YOUR BUSINESS</span>
            </h2>
            <p className="font-mono text-sm text-white/50 uppercase tracking-widest max-w-xl mx-auto">
              Stop wasting hours on repetitive tasks. We automate your emails, CRM, reporting, and data entry — so everything runs on auto-pilot.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-panel border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-2xl bg-black/40">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center mb-16">
                {[
                  { icon: Zap, label: 'Trigger Event', color: 'text-white' },
                  { icon: Brain, label: 'Neural Parse', color: 'text-blue-400' },
                  { icon: Cog, label: 'Execution', color: 'text-white' },
                  { icon: BarChart3, label: 'Data Sync', color: 'text-white/50' },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center gap-6 md:gap-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center bg-white/5 border border-white/10 mb-4 backdrop-blur-md`}>
                        <step.icon className={`w-8 h-8 md:w-10 md:h-10 ${step.color}`} />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-white/60">{step.label}</span>
                    </motion.div>
                    {i < 3 && <div className="hidden md:block w-8 h-px bg-white/20" />}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Pipeline Architecture', desc: 'Secure, robust data pipelines connecting internal databases with external SaaS.' },
                  { title: 'Algorithmic Arbitration', desc: 'Self-correcting AI loops that format and sanitize data streams instantly.' },
                  { title: 'Analytics Sync', desc: 'Push calculated insights directly to live dashboards without chron-job latency.' },
                ].map((item) => (
                  <div key={item.title} className="bg-black/50 rounded-3xl p-8 border border-white/5 hover:border-blue-400/30 transition-colors group">
                    <h4 className="font-heading font-bold text-lg mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-sm font-mono text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-obsidian border-t border-white/5">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6">
              READY TO <span className="text-blue-400 italic">AUTOMATE?</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl mx-auto mb-10">
              Let's see how much time and money we can save you with AI.
            </p>
            <Link href="/contact" className="btn-primary group">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
