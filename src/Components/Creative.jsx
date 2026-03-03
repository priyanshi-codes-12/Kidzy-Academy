import React from 'react';

export default function Creative() {
  const activities = [
    { 
      title: "Dance Stars", 
      desc: "Find your rhythm and move to the beat!", 
      icon: "💃", 
      color: "bg-blue-400" 
    },
    { 
      title: "Art Attic", 
      desc: "Paint your dreams and build masterpieces!", 
      icon: "🎨", 
      color: "bg-indigo-400" 
    }
  ];

  return (
    /* 🎨 PERFECT COLOR BRIDGE:
       - from-[#3b82f6]: Matches the exact 'to-blue-500' (Tailwind blue-500) of Games.
       - via-[#2563eb]: A vibrant middle blue to maintain the "Express Yourself" energy.
       - to-[#2563eb]: Matches the 'from-blue-600' (Tailwind blue-600) of your Stories.
       - mt-[-2px]: Pulls the section up slightly to hide any sub-pixel rendering gaps.
    */
    <section className="py-24 relative overflow-hidden bg-linear-to-b from-[#3b82f6] via-[#2563eb] to-[#2563eb] px-6 -mt-0.5">
      
      {/* ☁️ DRIFTING CLOUDS (Subtle and White) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-[-10%] text-[12rem] text-white opacity-20 blur-xl animate-cloud-slow">☁️</div>
        <div className="absolute bottom-10 right-[-10%] text-[15rem] text-white opacity-10 blur-2xl animate-cloud-fast">☁️</div>
      </div>

      <style>{`
        @keyframes driftRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(100vw); }
        }
        @keyframes driftLeft {
          from { transform: translateX(100vw); }
          to { transform: translateX(-50%); }
        }
        .animate-cloud-slow { animation: driftRight 45s linear infinite; }
        .animate-cloud-fast { animation: driftLeft 35s linear infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-6xl font-black text-white mb-4 drop-shadow-lg">
          Express <span className="text-yellow-300">Yourself!</span>
        </h2>
        <p className="text-xl text-blue-50 font-bold mb-16">
          Whether it's painting a masterpiece or dancing to the rhythm, 
          creativity never stops at Kidzy!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {activities.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border-4 border-white/20 p-8 rounded-[4rem] 
                         shadow-2xl transform transition-all duration-500 
                         hover:-translate-y-4 hover:rotate-2 group cursor-pointer"
            >
              <div className={`${item.color} h-64 rounded-[3rem] flex items-center justify-center 
                               text-9xl mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                <span className="drop-shadow-2xl">{item.icon}</span>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-blue-50 text-xl font-medium opacity-80">{item.desc}</p>
              
              <button className="mt-10 w-full py-5 bg-yellow-400 text-blue-900 rounded-3xl 
                                 font-black text-2xl shadow-[0_8px_0_0_#ca8a04] 
                                 active:translate-y-2 active:shadow-none transition-all">
                Join the Fun!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}