import React from 'react';

export default function Lab() {
  const raindrops = Array.from({ length: 40 });

  return (
    /* MATCHING COLORS:
       - We start with #1e40af (The exact bright blue from your Stories bottom)
       - We transition into a deeper indigo so the white rain still pops
       - mt-[-2px] ensures there is zero gap between components
    */
    <section className="relative py-32 bg-gradient-to-b from-[#1e40af] via-[#1e3a8a] to-[#172554] overflow-hidden px-6 mt-[-2px]">
      
      {/* 🌧️ RAIN ANIMATION LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {raindrops.map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/30 w-[1.5px] h-[35px] rounded-full animate-rain"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `-${Math.random() * 20}%`,
              animationDuration: `${0.4 + Math.random() * 0.4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes rain { 0% { transform: translateY(-50px); } 100% { transform: translateY(110vh); } }
        .animate-rain { animation: rain linear infinite; }
      `}</style>

      {/* 🔬 CONTENT BOX */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-3xl border-[10px] border-white/10 rounded-[5rem] p-12 flex flex-col md:flex-row items-center gap-16 shadow-2xl">
          
          <div className="w-64 h-64 bg-blue-500/20 rounded-full border-[12px] border-yellow-400 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.4)] animate-pulse">
            <span className="text-9xl">🧪</span>
          </div>

          <div className="text-white flex-1 text-center md:text-left">
            <h2 className="text-6xl font-black mb-6 tracking-tight">
              Science <span className="text-yellow-400">&</span> Discovery
            </h2>
            
            <p className="text-2xl font-bold opacity-90 mb-8 leading-relaxed">
              How do we learn? By getting our hands messy! We offer kids a 
              chance to explore the "Why" behind the world through safe, 
              thrilling experiments that turn curiosity into real knowledge.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">Hands-on Learning 🧤</span>
              <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">STEM Focused 🧠</span>
              <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">Curiosity Driven ⚗️</span>
            </div>
            
            <button className="bg-yellow-400 text-blue-950 px-12 py-5 rounded-full font-black text-2xl 
                               shadow-[0_8px_0_0_#ca8a04] hover:translate-y-2 active:shadow-none transition-all">
              Join the Experiment!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}