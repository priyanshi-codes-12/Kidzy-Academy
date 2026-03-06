import React, { useState } from 'react';

export default function Creative() {
  const [activePortal, setActivePortal] = useState(null);

  const activities = [
    { 
      title: "Dance Stars", 
      desc: "Find your rhythm and move to the beat!", 
      icon: "💃", 
      color: "bg-blue-400",
      magic: "disco",
      details: ["Rhythm & Coordination 🎵", "Confidence Building ✨", "Group Performance 🤝"]
    },
    { 
      title: "Art Attic", 
      desc: "Paint your dreams and build masterpieces!", 
      icon: "🎨", 
      color: "bg-indigo-400",
      magic: "paint",
      details: ["Color Theory 🌈", "Fine Motor Skills 🖌️", "Creative Expression 💡"]
    }
  ];

  return (
    <section id="art" className="py-24 relative overflow-hidden bg-linear-to-b from-[#3b82f6] via-[#2563eb] to-[#2563eb] px-6 -mt-0.5">
      
      <style>{`
        /* 🖌️ CUSTOM CURSOR LOGIC */
        .cursor-paintbrush:active {
          cursor: url('https://cdn-icons-png.flaticon.com/32/588/588395.png'), auto !important;
        }

        /* If you want the cursor to be a paintbrush while the Art Modal is open */
        .art-modal-active {
          cursor: url('https://cdn-icons-png.flaticon.com/32/588/588395.png'), auto !important;
        }

        @keyframes floatMagic {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) rotate(20deg); opacity: 0; }
        }
        @keyframes splatPop {
          0% { transform: scale(0.5) rotate(-10deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .magic-item { animation: floatMagic 3s linear infinite; }
        .portal-animate { animation: splatPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-6xl font-black text-white mb-4 drop-shadow-lg">
          Express <span className="text-yellow-300">Yourself!</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
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
              
              <button 
                onClick={() => setActivePortal(item)}
                /* Applied the custom cursor class here for the Art card only */
                className={`mt-10 w-full py-5 bg-yellow-400 text-blue-900 rounded-3xl 
                           font-black text-2xl shadow-[0_8px_0_0_#ca8a04] 
                           active:translate-y-2 active:shadow-none transition-all
                           ${item.title === "Art Attic" ? "cursor-paintbrush" : ""}`}
              >
                Join the Fun!
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🎭 THE CREATIVE PORTAL OVERLAY */}
      {activePortal && (
        <div className={`fixed inset-0 z-[1000] flex items-center justify-center bg-indigo-950/90 backdrop-blur-2xl p-6 
                        ${activePortal.magic === 'paint' ? 'art-modal-active' : ''}`}>
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="magic-item absolute text-5xl opacity-40"
                style={{ left: `${Math.random() * 100}%`, bottom: '0', animationDelay: `${Math.random() * 2}s` }}
              >
                {activePortal.magic === 'disco' ? '🎶' : '🎨'}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[4rem] p-12 max-w-2xl w-full portal-animate shadow-2xl border-[15px] border-yellow-400 text-center">
            <div className="text-[10rem] mb-6 animate-bounce drop-shadow-xl">
              {activePortal.icon}
            </div>
            
            <h3 className="text-5xl font-black text-blue-900 mb-6">
              Welcome to {activePortal.title}!
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {activePortal.details.map((detail, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-black text-lg">
                  {detail}
                </span>
              ))}
            </div>

            <button 
              onClick={() => setActivePortal(null)}
              className="bg-blue-600 text-white px-12 py-4 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-lg"
            >
              EXIT PORTAL 🚪
            </button>
          </div>
        </div>
      )}
    </section>
  );
}