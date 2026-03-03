import React from 'react';

export default function Mentors() {
  const mentors = [
    { name: "Dr. Spark", role: "Science Wizard", icon: "🧪", trait: "Explosive Fun!" },
    { name: "Miss Melody", role: "Dance Director", icon: "💃", trait: "Rhythmic Magic" },
    { name: "Captain Logic", role: "Math Explorer", icon: "🔢", trait: "Puzzle Master" },
    { name: "Artie", role: "Creative Coach", icon: "🎨", trait: "Color Genius" },
    { name: "Story Sam", role: "Myth Master", icon: "📖", trait: "Legend Weaver" }
  ];

  return (
    /* 1. THE COLOR BRIDGE:
      - Starts with #172554 (The exact Navy from your Lab's 'to' color).
      - Transitions into #60a5fa (Bright Sky Blue).
      - mt-[-2px] ensures there is no gap between the Lab and Mentors.
    */
    <section className="relative py-32 bg-gradient-to-b from-[#172554] via-[#1e3a8a] to-[#60a5fa] overflow-hidden px-6 mt-[-2px]">
      
      {/* 🌧️ CONTINUOUS RAIN ANIMATION */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        {[...Array(35)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white w-[1.5px] h-[35px] rounded-full animate-rain"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `-${Math.random() * 20}%`,
              animationDuration: `${0.6 + Math.random() * 0.4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes rain { 0% { transform: translateY(-50px); } 100% { transform: translateY(110vh); } }
        .animate-rain { animation: rain linear infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-6xl font-black text-white mb-6 drop-shadow-2xl">
          Meet Your <span className="text-yellow-400">Super Mentors!</span>
        </h2>
        <p className="text-2xl text-blue-50 font-bold mb-20 opacity-90">
          The heroes who turn every lesson into an adventure!
        </p>

        {/* MENTOR BLOCKS */}
        <div className="flex flex-wrap justify-center gap-10">
          {mentors.map((mentor, index) => (
            <div 
              key={index} 
              className="group relative w-full md:w-64 bg-white/10 backdrop-blur-2xl border-4 border-white/10 p-8 rounded-[4rem] 
                         transition-all duration-500 hover:-translate-y-6 shadow-2xl"
            >
              <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {mentor.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-2">{mentor.name}</h3>
              <p className="text-yellow-400 font-black uppercase text-sm tracking-widest mb-4">{mentor.role}</p>
              <p className="text-blue-50 font-medium leading-tight opacity-90">{mentor.trait}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}