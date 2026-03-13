'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight, FolderGit2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load Canvas for a background element
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });
const DynamicCyberTorus = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CyberTorus), { ssr: false });

const categories = ['All', 'Web', 'Mobile', 'AI', 'Automation'];

const projects = [
  { title: 'AI Sales Dashboard', desc: 'Real-time AI analytics platform with predictive insights and automated reporting.', tags: ['React', 'Node.js', 'TensorFlow'], category: 'AI', size: 'col-span-1 md:col-span-2 row-span-2' },
  { title: 'E-Commerce Marketplace', desc: 'Full-stack marketplace with multi-vendor support and recommendation engine.', tags: ['Next.js', 'MongoDB', 'Stripe'], category: 'Web', size: 'col-span-1' },
  { title: 'Health & Fitness App', desc: 'Cross-platform mobile app with workout tracking and social features.', tags: ['React Native', 'Firebase'], category: 'Mobile', size: 'col-span-1' },
  { title: 'Workflow Automation Suite', desc: 'Enterprise automation platform integrating 50+ tools.', tags: ['Python', 'Node.js', 'APIs'], category: 'Automation', size: 'col-span-1 md:col-span-2' },
  { title: 'AI Customer Support Bot', desc: 'Intelligent chatbot with NLP and seamless human handoff.', tags: ['Python', 'OpenAI', 'React'], category: 'AI', size: 'col-span-1' },
  { title: 'FinTech Mobile Banking', desc: 'Secure mobile banking app with biometric auth and investment tools.', tags: ['Flutter', 'Dart', 'Node.js'], category: 'Mobile', size: 'col-span-1' },
  { title: 'SaaS Analytics Platform', desc: 'Custom analytics dashboard with real-time data visualization.', tags: ['Next.js', 'PostgreSQL', 'D3.js'], category: 'Web', size: 'col-span-1 md:col-span-2 row-span-2' },
  { title: 'Invoice Automation System', desc: 'End-to-end invoice processing with OCR and accounting integration.', tags: ['Python', 'React', 'AWS'], category: 'Automation', size: 'col-span-1' },
  { title: 'Enterprise Resource Portal', desc: 'Internal resource management and tracking for a logistics corporation.', tags: ['Vue.js', 'Django', 'Redis'], category: 'Web', size: 'col-span-1' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex flex-col justify-center border-b border-white/5 bg-black">
        <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-blue-400/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        {/* Background 3D element */}
        <div className="absolute inset-y-0 right-10 w-1/3 z-0 opacity-20 mix-blend-screen pointer-events-none hidden lg:block">
            <DynamicCanvas shadows dpr={[1, 2]}>
              <DynamicCamera makeDefault position={[0, 0, 8]} fov={50} />
              <ambientLight intensity={0.2} />
              <directionalLight position={[5, 10, 5]} intensity={2} color="#ccff00" />
              <DynamicEnv preset="studio" />
              <DynamicPresentation global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]}>
                 <DynamicCyberTorus />
              </DynamicPresentation>
            </DynamicCanvas>
        </div>

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-blue-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse inline-block mr-2" />
              Project Archive
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-extrabold leading-[0.85] tracking-tighter mb-8 max-w-5xl">
              DIGITAL <br/><span className="gradient-text italic">FUTURES</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl font-mono leading-relaxed">
              Explore our repository of deployed architectures across high-performance web, scaleable mobile, and autonomous AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-black/80 backdrop-blur-3xl border-b border-white/10">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-white/40 hidden md:block mr-4" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-blue-400 text-black shadow-[0_0_20px_rgba(14,165,233,0.2)] font-bold'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-obsidian relative min-h-screen">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50 mix-blend-overlay" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`${project.size || 'col-span-1'} h-full`}
                >
                  <div className="group glass-panel border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer h-full relative flex flex-col justify-end hover:border-blue-400/30 transition-colors duration-500">
                    
                    {/* Dark gradient overlay */}
                    <div className={`absolute inset-0 ${
                      i % 3 === 0 ? 'bg-gradient-to-t from-blue-400/10 via-black/80 to-black/20' : 'bg-gradient-to-t from-white/10 via-black/80 to-black/20'
                    } group-hover:scale-105 transition-transform duration-700 pointer-events-none`} />

                    {/* Scanline texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />

                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-white/70 uppercase tracking-widest backdrop-blur-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className={`font-heading font-bold mb-3 text-white group-hover:text-blue-400 transition-colors ${
                        project.size?.includes('row-span-2') ? 'text-4xl' : 'text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className="text-white/50 text-sm font-mono leading-relaxed max-w-lg line-clamp-3">
                        {project.desc}
                      </p>
                      
                      <div className="mt-8 flex items-center gap-2 text-blue-400 text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        ACCESS ARCHIVE <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-black border-t border-white/5">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6">
              READY TO <span className="text-blue-400 italic">DEPLOY?</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl mx-auto mb-10">
              Let's engineer a custom architecture for your organization.
            </p>
            <Link href="/contact" className="btn-primary group">
              Initiate Project Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
