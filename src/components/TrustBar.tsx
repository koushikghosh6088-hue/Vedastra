'use client';

const techStack = [
  'Next.js',
  'React',
  'React Native',
  'Node.js',
  'Python',
  'TypeScript',
  'Tailwind CSS',
  'OpenAI',
  'LangChain',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'AWS',
  'Vercel',
  'Docker',
  'Stripe',
  'Twilio',
  'Framer Motion',
  'Three.js',
  'Supabase',
];

export default function TrustBar() {
  return (
    <section className="relative py-3.5 bg-[#060608] border-t border-b border-[#00D4FF]/15 overflow-hidden z-20">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-[marquee_50s_linear_infinite] items-center gap-10 sm:gap-14">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="font-mono font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/50">
                {tech}
              </span>
              <div className="w-1 h-1 bg-[#00D4FF]/30 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
