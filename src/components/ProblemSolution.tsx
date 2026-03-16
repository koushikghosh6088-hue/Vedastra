'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  {
    problem: "Your website looks outdated and bleeds visitors",
    solution: "We build high-fidelity conversion engines with sub-400ms load times.",
    icon: AlertCircle
  },
  {
    problem: "You have zero mobile presence in a mobile-first world",
    solution: "Seamless, platform-agnostic native experiences for every device.",
    icon: AlertCircle
  },
  {
    problem: "Leads go cold after hours — no one follows up",
    solution: "24/7 Autonomous AI agents that intercept and convert leads instantly.",
    icon: AlertCircle
  },
  {
    problem: "Ad spend is rising but ROI keeps dropping",
    solution: "Data-driven algorithmic targeting and viral growth loops.",
    icon: AlertCircle
  }
];

function ProblemCard({ point, index }: { point: typeof painPoints[0], index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="group relative h-[300px] [perspective:1000px]">
        <motion.div
          className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
          {/* Front: Problem */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md [backface-visibility:hidden]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <point.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-black text-white leading-tight uppercase tracking-tight">
                {point.problem}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-white/30 font-mono text-[10px] uppercase tracking-widest">
              Hover to stabilize <ArrowRight className="w-3 h-3 animate-bounce-x" />
            </div>
          </div>

          {/* Back: Solution */}
          <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-blue-500 p-8 text-black [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center border border-black/10">
                <CheckCircle2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-black leading-tight uppercase tracking-tight">
                THE SOLUTION
              </h3>
              <p className="font-mono text-sm font-bold opacity-80 leading-relaxed">
                {point.solution}
              </p>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-[10px] font-mono uppercase tracking-widest w-fit">
              Protocol Active
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-20 items-end">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-red-500">System Diagnosis</span>
            </div>
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase">
              STOP BLEEDING<br/><span className="text-red-500 italic">REVENUE.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="lg:pb-4">
            <p className="font-mono text-white/40 text-sm md:text-base max-w-xl leading-relaxed uppercase tracking-wider">
              Generic solutions don't survive in the neural age. We identify your architecture's critical failure points and deploy high-performance overrides.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {painPoints.map((point, i) => (
            <ProblemCard key={i} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
