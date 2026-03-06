import React, { useState } from 'react';

export default function Lab() {
  const [showExperiment, setShowExperiment] = useState(false);
  const raindrops = Array.from({ length: 40 });

  // Types of experiments to showcase to parents
  const experimentHighlights = [
    { title: "Volcano Eruptions", icon: "🌋", desc: "Chemical reactions in action!" },
    { title: "Slime Science", icon: "🧪", desc: "Learning about polymers & textures." },
    { title: "Galaxy Jars", icon: "🌌", desc: "Exploring density and space colors." }
  ];

  return (
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
        
        @keyframes bubbleUp {
          0% { transform: translateY(100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-500px) scale(1.5); opacity: 0; }
        }
        .bubble { animation: bubbleUp 3s ease-in infinite; }
        
        @keyframes reactionPop {
          0% { transform: scale(0.8) rotate(-5deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-reaction { animation: reactionPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
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
              thrilling experiments.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">Hands-on Learning 🧤</span>
              <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">STEM Focused 🧠</span>
              <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">Curiosity Driven ⚗️</span>
            </div>
            
            <button 
              onClick={() => setShowExperiment(true)}
              className="bg-yellow-400 text-blue-950 px-12 py-5 rounded-full font-black text-2xl 
                               shadow-[0_8px_0_0_#ca8a04] hover:translate-y-2 active:shadow-none transition-all"
            >
              Join the Experiment!
            </button>
          </div>
        </div>
      </div>

      {/* 🧪 THE "EXPERIMENT LAB" OVERLAY */}
      {showExperiment && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-blue-950/90 backdrop-blur-2xl p-6">
          
          {/* Bubbles animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="bubble absolute bottom-0 text-white opacity-30 text-4xl"
                style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
              >
                🫧
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[4rem] p-10 max-w-4xl w-full animate-reaction shadow-[0_0_100px_rgba(250,204,21,0.3)] border-[15px] border-yellow-400">
            <h3 className="text-4xl font-black text-blue-900 text-center mb-8">
              What We Learn in the Lab ⚗️
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {experimentHighlights.map((exp, i) => (
                <div key={i} className="bg-blue-50 p-6 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-yellow-50 transition-colors">
                  <div className="text-7xl mb-4 group-hover:scale-125 transition-transform">{exp.icon}</div>
                  <h4 className="text-xl font-black text-blue-900 mb-2">{exp.title}</h4>
                  <p className="text-gray-500 font-bold text-sm leading-snug">{exp.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-blue-900/60 font-black mb-6 italic">
                "Real science, made simple and safe for explorers!"
              </p>
              <button 
                onClick={() => setShowExperiment(false)}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xl hover:bg-blue-700 shadow-lg"
              >
                DONE EXPLORING 🔬
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}