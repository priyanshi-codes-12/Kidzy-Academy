import React from 'react';

export default function Stories() {
  return (
    /* 🎨 THE INVISIBLE MERGE: 
       - from-[#2563eb]: Matches the bottom of Creative.jsx exactly.
       - to-[#1e40af]: Matches the top of Lab.jsx exactly.
       - -mt-1: This is the "stitching" that removes the line.
    */
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#2563eb] to-[#1e40af] px-6 group -mt-1 border-none outline-none">
      
      {/* ☁️ CLOUD LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 text-[20rem] text-white opacity-70 blur-sm animate-drift-right select-none">☁️</div>
        <div className="absolute top-1/2 right-0 text-[15rem] text-white opacity-50 blur-md animate-drift-left select-none">☁️</div>
        <div className="absolute bottom-10 left-10 text-[12rem] text-white opacity-30 blur-lg animate-pulse select-none">☁️</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
          Our <span className="text-yellow-400">Unique</span> Storytelling
        </h2>
        
        <p className="text-2xl text-blue-50 font-bold mb-16 max-w-3xl mx-auto leading-relaxed">
          We bring books to life! Using interactive roleplay, we turn every story 
          into a life lesson that stays with your child forever.
        </p>

        <div className="mt-20 flex flex-col items-center">
          <div className="text-9xl animate-bounce filter drop-shadow-[0_0_30px_rgba(249,115,22,0.8)]">🔥</div>
          <p className="text-white font-black mt-4 uppercase tracking-widest text-sm">
            THE ADVENTURE NEVER ENDS
          </p>
        </div>
      </div>

      <style>{`
        @keyframes driftRight { from { transform: translateX(-100%); } to { transform: translateX(100vw); } }
        @keyframes driftLeft { from { transform: translateX(100vw); } to { transform: translateX(-100%); } }
        .animate-drift-right { animation: driftRight 45s linear infinite; }
        .animate-drift-left { animation: driftLeft 35s linear infinite; }
      `}</style>
    </section>
  );
}