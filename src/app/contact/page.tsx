'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import TypewriterSubline from '@/components/TypewriterSubline';

const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });

// Use the global View component for single-canvas architecture
const View = dynamic(() => import('@react-three/drei').then(mod => mod.View), { ssr: false });
const PerspectiveCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const PresentationControls = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const Environment = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex flex-col justify-center cursor-default">
        {/* Immersive Atmosphere */}
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-blue-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-premium border-blue-400/20 mb-8 magnetic-wrap">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400/80">
                  Secure Channel // Active
                </span>
              </div>
              <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-heading font-extrabold leading-[0.8] tracking-tighter mb-8 text-white">
                INITIATE <br/><span className="gradient-text italic">CONNECTION</span>
              </h1>
              <TypewriterSubline 
                phrases={[
                  "Request Technical Deployment",
                  "Inquire Enterprise Scaling",
                  "Propose Custom Architecture",
                  "Initiate Direct Connection"
                ]}
                className="mb-10 text-xl md:text-2xl justify-center lg:justify-start"
              />
            </motion.div>

            {/* Interactive Hero Visual Piece */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-1 h-[300px] relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[280px]">
                <Image
                  src="/3d-icons/contact_hero.png"
                  alt="Contact Protocol"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(14,165,233,0.4)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-obsidian">
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info & 3D Interactive Terminal */}
            <div className="lg:col-span-5 space-y-12">
              <AnimatedSection>
                <h2 className="text-4xl font-heading font-black mb-12 text-white uppercase tracking-tighter">Transmission <span className="text-blue-400 italic">Vectors</span></h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email Protocol', value: 'hello@jointwebsolutions.com', href: 'mailto:hello@jointwebsolutions.com' },
                    { icon: Phone, label: 'Voice Link', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                    { icon: MapPin, label: 'Physical Hub', value: '123 Innovation Drive, NY 10001', href: '#' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-6 group glass-premium p-6 rounded-3xl transition-all duration-500 hover-3d border-white/5 hover:border-blue-400/30 magnetic-wrap">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-500">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2 group-hover:text-blue-400 transition-colors">{item.label}</div>
                        <div className="text-white font-black font-heading uppercase tracking-tight group-hover:text-white transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>
              
              {/* 3D Decor Element */}
              <AnimatedSection delay={0.2} className="hidden lg:block relative h-[350px] rounded-[3rem] glass-premium border-white/10 overflow-hidden group hover-3d transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-400/5 to-transparent pointer-events-none z-10" />
                <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-glow" />
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.3em]">Awaiting Signal Input</span>
                </div>
                
                <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-auto">
                    <View className="w-full h-full">
                      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[2, 5, 2]} intensity={2} color="#0ea5e9" />
                      <Environment preset="studio" />
                      <PresentationControls 
                        global 
                        rotation={[0, 0, 0]} 
                        polar={[-0.2, 0.2]} 
                        azimuth={[-0.5, 0.5]}
                        snap={true}
                      >
                        <DynamicCoreSphere />
                      </PresentationControls>
                    </View>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <AnimatedSection delay={0.2} direction="right">
                <div className="glass-premium border-blue-400/20 rounded-[3.5rem] p-8 md:p-12 relative overflow-hidden group hover-3d transition-all duration-1000">
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
                  
                  <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter">Project <span className="text-blue-400 italic">Scope</span></h2>
                      <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Submit Parameters // 2hr Response Time</p>
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
