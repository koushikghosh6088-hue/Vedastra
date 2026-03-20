'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Check, X, ArrowRight, ShieldAlert, Zap, Search, MessageSquare, Smartphone, Cog, Layout, Bot, Activity } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const problems = [
  {
    id: 1,
    icon: "🌑",
    p_badge: "PROBLEM #1",
    p_title: "You're Invisible on Google",
    p_desc: "When someone searches for your service right now — your competitor shows up. You don't. That's a customer gone forever.",
    p_cost: "💸 Losing 10–30 potential customers every single day",
    s_badge: "OUR FIX",
    s_title: "We Make You Impossible to Miss",
    s_desc: "We build SEO-optimized websites that rank on Google and put your business in front of people actively searching for you.",
    s_result: "✅ Customers find YOU before they find your competitor",
  },
  {
    id: 2,
    icon: "😴",
    p_badge: "PROBLEM #2",
    p_title: "You're Losing Leads While You Sleep",
    p_desc: "A potential customer visits your site at 11pm, has a question, gets no answer — and books your competitor by morning.",
    p_cost: "💸 Every missed enquiry is ₹5,000–₹50,000 walking out the door",
    s_badge: "OUR FIX",
    s_title: "Your AI Never Sleeps — Ever",
    s_desc: "We deploy AI chat agents that answer questions, qualify leads and book appointments automatically — 24/7.",
    s_result: "✅ Wake up every morning to new booked leads in your inbox",
  },
  {
    id: 3,
    icon: "📵",
    p_badge: "PROBLEM #3",
    p_title: "Your Business Has No App — Your Competitor Does",
    p_desc: "Customers are on their phones 6+ hours a day. If your business isn't in their pocket, you're already forgotten.",
    p_cost: "💸 Zero repeat customers, zero push notifications, zero loyalty",
    s_badge: "OUR FIX",
    s_title: "Put Your Business On Every Phone",
    s_desc: "We build iOS & Android apps that keep your brand in your customer's pocket with push notifications and easy bookings.",
    s_result: "✅ Customers come back more often and spend more each time",
  },
  {
    id: 4,
    icon: "🔁",
    p_badge: "PROBLEM #4",
    p_title: "Your Staff Is Drowning in Repetitive Tasks",
    p_desc: "Answering the same questions, manually following up leads — your team is doing robot work instead of real work.",
    p_cost: "💸 Wasting 15–20 hours per week on tasks AI can do for free",
    s_badge: "OUR FIX",
    s_title: "Automate the Boring. Focus on Growth.",
    s_desc: "We build custom automation workflows that handle lead follow-ups, appointment reminders, and review requests.",
    s_result: "✅ Your team saves 15+ hours a week and focuses on scaling",
  },
  {
    id: 5,
    icon: "📉",
    p_badge: "PROBLEM #5",
    p_title: "Your Website Looks Like It Was Built in 2012",
    p_desc: "An outdated website doesn't just look bad — it tells customers you're not trustworthy and drives them away.",
    p_cost: "💸 40% of visitors leave in under 3 seconds if your site looks old",
    s_badge: "OUR FIX",
    s_title: "A Website That Makes Jaws Drop",
    s_desc: "We design fast, modern, conversion-focused websites that make your business look world-class instantly.",
    s_result: "✅ First impressions that build instant trust and drive enquiries",
  },
  {
    id: 6,
    icon: "🤖",
    p_badge: "PROBLEM #6",
    p_title: "Your Competitors Are Using AI — You're Not",
    p_desc: "Other businesses are using AI to respond faster and operate at half the cost. You're falling behind every single day.",
    p_cost: "💸 Every month without AI is market share you'll never get back",
    s_badge: "OUR FIX",
    s_title: "We Bring Enterprise AI to Your Business",
    s_desc: "From AI calling agents to intelligent bots that handle customer service — we build AI that works for you.",
    s_result: "✅ Operate smarter, respond faster, and outcompete anyone",
  }
];

function ProblemCard({ problem, index }: { problem: typeof problems[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[480px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full text-center transition-all duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front: Problem (Pain) */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="h-full w-full bg-[#0a0505] border-2 border-red-900/40 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-start text-left relative overflow-hidden group-hover:border-red-500/50 transition-colors shadow-[0_0_50px_rgba(220,38,38,0.05)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[60px]" />
            
            <div className="text-4xl mb-6">{problem.icon}</div>
            <div className="px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-500 font-mono text-[9px] font-black tracking-widest uppercase mb-4">
              {problem.p_badge}
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter leading-tight mb-4">
              {problem.p_title}
            </h3>
            <p className="text-white/40 font-mono text-xs leading-relaxed uppercase tracking-wide mb-8">
              {problem.p_desc}
            </p>
            
            <div className="mt-auto w-full pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono text-red-400/50 uppercase tracking-[0.2em] block mb-2">Cost of failure:</span>
              <p className="text-red-500 font-mono text-xs font-bold uppercase select-none">
                {problem.p_cost}
              </p>
            </div>

            {/* Hint */}
            <div className="absolute bottom-6 right-8 flex items-center gap-2 text-white/10 animate-pulse">
              <span className="text-[8px] font-mono uppercase tracking-widest">Hover to fix</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Back: Solution (Relief) */}
        <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
          <div className="h-full w-full bg-[#050a05] border-2 border-green-900/40 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-start text-left relative overflow-hidden group-hover:border-green-500/50 transition-colors shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/5 blur-[60px]" />
            
            <div className="text-4xl mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">{problem.icon}</div>
            <div className="px-3 py-1 rounded-full bg-green-950/50 border border-green-500/30 text-green-500 font-mono text-[9px] font-black tracking-widest uppercase mb-4">
              {problem.s_badge}
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-black text-green-400 uppercase tracking-tighter leading-tight mb-4">
              {problem.s_title}
            </h3>
            <p className="text-white/60 font-mono text-xs leading-relaxed uppercase tracking-wide mb-8">
              {problem.s_desc}
            </p>
            
            <div className="mt-auto w-full pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono text-green-400/50 uppercase tracking-[0.2em] block mb-2">The Outcome:</span>
              <p className="text-green-500 font-mono text-xs font-bold uppercase">
                {problem.s_result}
              </p>
            </div>

            <Link href="/contact" className="absolute bottom-8 right-8 px-6 py-2.5 rounded-full bg-green-500 text-black font-mono text-[10px] font-black uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              Fix This Now →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProblemSolution() {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    setCheckedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getDiagnosis = () => {
    const count = checkedIds.length;
    if (count === 0) return { msg: "Select your pain points to see full diagnosis", color: "text-white/30", sub: "", status: "Pending Analysis" };
    if (count <= 1) return { msg: "✅ You're in good shape — but there's always room to grow", color: "text-green-400", sub: "Status: Optimized", status: "SAFE" };
    if (count <= 3) return { msg: "⚠️ Warning: Your business has gaps competitors will exploit", color: "text-yellow-500", sub: "Status: At Risk", status: "WARNING" };
    if (count <= 5) return { msg: "🚨 Critical: You're actively losing customers and revenue", color: "text-red-500", sub: "Status: Insecure", status: "CRITICAL" };
    return { msg: "💀 Emergency: Your competitors are eating your lunch right now", color: "text-red-600", sub: "Status: System Failure", status: "EMERGENCY" };
  };

  const diagnosis = getDiagnosis();

  return (
    <section className="relative py-24 md:py-40 bg-black overflow-hidden" id="problems">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="w-12 h-px bg-red-800/50" />
             <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-600/30 animate-pulse">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-[0.2em]">System Alert: High Opportunity Loss</span>
             </div>
             <div className="w-12 h-px bg-red-800/50" />
          </div>
          <h2 className="text-[2.5rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-none tracking-tighter uppercase mb-6 flex flex-col items-center">
            <span className="text-white/20 text-sm md:text-base font-mono mb-4 tracking-[0.5em]">Critical Inquiry:</span>
            <span>IS YOUR BUSINESS</span>
            <span className="gradient-text italic text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">BLEEDING MONEY?</span>
          </h2>
          <p className="font-mono text-sm md:text-base text-white/40 uppercase tracking-[0.2em] max-w-3xl mx-auto leading-relaxed">
            Every day without the right digital system is a day your competitors are stealing your customers. 
            Here are the 6 signs you're losing — and exactly how we fix them.
          </p>
        </AnimatedSection>

        {/* 6 Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {problems.slice(0, 2).map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.1}>
              <ProblemCard problem={p} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Urgency Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative group overflow-hidden rounded-[2.5rem] p-px bg-gradient-to-r from-red-600/30 via-red-500 to-red-600/30">
            <div className="relative bg-[#0a0505] rounded-[2.5rem] p-8 md:p-12 border border-red-500/20 flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse pointer-events-none" />
              
              <div className="flex items-center gap-6 relative z-10 text-left">
                <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center animate-pulse">
                   <ShieldAlert className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-2">
                    ⚠️ EVERY DAY YOU WAIT = <span className="text-red-500">CUSTOMERS YOUR COMPETITOR KEEPS</span>
                  </h3>
                  <p className="text-white/30 font-mono text-[10px] md:text-xs uppercase tracking-widest max-w-xl">
                    The businesses winning right now started 6 months ago. The best time to fix this was yesterday. 
                    <span className="text-red-500/50"> The second best time is today.</span>
                  </p>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="relative z-10 w-full md:w-auto px-10 py-5 bg-red-600 text-white font-heading font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.4)] group-hover:scale-105 active:scale-95"
              >
                FIX THIS TODAY →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Problems Grid Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {problems.slice(2).map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.1}>
              <ProblemCard problem={p} index={i + 2} />
            </AnimatedSection>
          ))}
        </div>

        {/* Diagnosis Score Widget */}
        <AnimatedSection>
          <div className="glass-premium rounded-[4rem] border-white/5 p-8 md:p-16 relative overflow-hidden text-center">
            {/* Background scanner line */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,0,0,0.05)_50%,transparent_100%)] h-20 w-full animate-scan pointer-events-none" />
            
            <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-4 relative z-10">
              🔍 HOW MANY OF THESE <span className="text-red-500">APPLY TO YOU?</span>
            </h3>
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.3em] mb-12 relative z-10">Select each problem you're currently facing</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto relative z-10">
              {problems.map((p) => (
                <button
                  key={p.id}
                  onClick={() => toggleCheck(p.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                    checkedIds.includes(p.id) 
                    ? 'bg-red-600/10 border-red-500/50 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                    checkedIds.includes(p.id) ? 'bg-red-500' : 'border-2 border-white/10'
                  }`}>
                    {checkedIds.includes(p.id) && <Check className="w-4 h-4 text-black font-bold" />}
                  </div>
                  <span className={`font-mono text-[10px] uppercase tracking-wider text-left ${checkedIds.includes(p.id) ? 'text-white' : 'text-white/40'}`}>
                    {p.p_title}
                  </span>
                </button>
              ))}
            </div>

            {/* Score Bar */}
            <div className="max-w-2xl mx-auto relative z-10">
              <div className="flex justify-between items-end mb-4">
                <div className="text-left">
                  <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.5em] block mb-1">Diagnosis_Result</span>
                  <div className={`text-2xl font-black uppercase tracking-widest ${diagnosis.color}`}>
                    {diagnosis.status}
                  </div>
                </div>
                <div className={`font-mono text-4xl font-black ${diagnosis.color}`}>
                  {checkedIds.length}/6
                </div>
              </div>
              
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(checkedIds.length / 6) * 100}%` }}
                  className={`h-full rounded-full shadow-[0_0_15px_currentColor] transition-colors duration-500 ${
                    checkedIds.length <= 1 ? 'bg-green-500 text-green-500' :
                    checkedIds.length <= 3 ? 'bg-yellow-500 text-yellow-500' :
                    'bg-red-500 text-red-500'
                  }`}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={diagnosis.msg}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8"
                >
                  <p className={`text-lg md:text-xl font-heading font-black uppercase tracking-wide mb-2 ${diagnosis.color}`}>
                    {diagnosis.msg}
                  </p>
                  <p className="text-white/30 font-mono text-[9px] uppercase tracking-[0.4em]">
                    {diagnosis.sub}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
                  Book a free call — we'll fix every single one of these for you
                </p>
                <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-heading font-black text-lg uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all rounded-[2rem] hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                   GET MY FREE DIAGNOSIS CALL <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
