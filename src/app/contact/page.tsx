'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load Canvas for a background element
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex flex-col justify-center bg-black border-b border-white/5">
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-blue-400/[0.04] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-blue-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse inline-block mr-2" />
              Secure Channel
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-extrabold leading-[0.85] tracking-tighter mb-8 max-w-5xl">
              INITIATE <br/><span className="gradient-text italic">CONNECTION</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl font-mono leading-relaxed">
              Open a direct line to our engineering syndicate. Propose architectures, request technical deployments, or inquire about enterprise scaling.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative bg-obsidian">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50 mix-blend-overlay" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info & 3D Interactive Terminal */}
            <div className="lg:col-span-5 space-y-12">
              <AnimatedSection>
                <h2 className="text-3xl font-heading font-bold mb-8 text-white">Transmission Vectors</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email Protocol', value: 'hello@jointwebsolutions.com', href: 'mailto:hello@jointwebsolutions.com' },
                    { icon: Phone, label: 'Voice Link', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                    { icon: MapPin, label: 'Physical Hub', value: '123 Innovation Drive, Tech District, NY 10001', href: '#' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-6 group hover:bg-white/5 p-4 rounded-2xl transition-all border border-transparent hover:border-white/10 -ml-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-400/10 transition-colors">
                        <item.icon className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
                        <div className="text-white font-medium group-hover:text-blue-400 transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>
              
              {/* 3D Decor Element */}
              <AnimatedSection delay={0.2} className="hidden lg:block relative h-[350px] rounded-[2.5rem] glass-panel border-white/10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none z-10" />
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Awaiting Input Signal</span>
                </div>
                
                <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-auto">
                    <DynamicCanvas shadows dpr={[1, 2]}>
                      <DynamicCamera makeDefault position={[0, 0, 4]} fov={50} />
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[2, 5, 2]} intensity={2} color="#0ea5e9" />
                      <DynamicEnv preset="studio" />
                      <DynamicPresentation global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.5, 0.5]}>
                        <DynamicCoreSphere />
                      </DynamicPresentation>
                    </DynamicCanvas>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <AnimatedSection delay={0.2} direction="right">
                <div className="glass-panel border-blue-400/20 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <MessageSquare className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-white">Project Scope Form</h2>
                      <p className="text-xs font-mono text-white/50">Submit your parameters. We reply within 2 hours.</p>
                    </div>
                  </div>

                  {formState === 'success' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 relative z-10">
                      <div className="w-20 h-20 rounded-full bg-blue-400/10 flex items-center justify-center mx-auto mb-6 border border-blue-400/30">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                          <Send className="w-10 h-10 text-blue-400" />
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-heading font-bold mb-4 text-white">Transmission Confirmed</h3>
                      <p className="text-white/50 font-mono text-sm max-w-sm mx-auto">
                        Your data packet has been received by our terminal. A lead architect will contact you shortly.
                      </p>
                      <button onClick={() => setFormState('idle')} className="mt-8 text-blue-400 font-mono text-sm hover:text-white transition-colors underline decoration-blue-400/30 underline-offset-4">
                        Initialize New Request
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-white/50 uppercase tracking-widest block ml-2">Identifier / Name</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-all placeholder:text-white/20"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-white/50 uppercase tracking-widest block ml-2">Comm Link / Email</label>
                          <input
                            type="email"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-all placeholder:text-white/20"
                            placeholder="john@company.io"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/50 uppercase tracking-widest block ml-2">Project Category</label>
                        <select className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-all appearance-none cursor-pointer">
                          <option className="bg-black text-white">Web Architecture</option>
                          <option className="bg-black text-white">Autonomous AI Agent</option>
                          <option className="bg-black text-white">Workflow Automation</option>
                          <option className="bg-black text-white">Full-Stack Mobile</option>
                          <option className="bg-black text-white">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/50 uppercase tracking-widest block ml-2">System Requirements / Message</label>
                        <textarea
                          required
                          rows={6}
                          className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-all resize-none placeholder:text-white/20"
                          placeholder="Detail your operational parameters here..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className={`w-full py-5 rounded-2xl font-bold font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                          formState === 'submitting'
                            ? 'bg-white/10 text-white/50 cursor-not-allowed'
                            : 'bg-blue-400 text-black shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:scale-[1.02]'
                        }`}
                      >
                        {formState === 'submitting' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Transmit Data <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
