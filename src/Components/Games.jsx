import React, { useState } from 'react';

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const gameList = [
    { name: "Math Monsters", color: "bg-pink-400", icon: "👾", message: "Sharpening monster teeth... I mean, pencils! ✏️" },
    { name: "Word Woods", color: "bg-green-400", icon: "🌳", message: "Planting new words in the forest... 🌲" },
    { name: "Space Shapes", color: "bg-purple-400", icon: "🚀", message: "Fueling the rocket for takeoff! 👨‍🚀" }
  ];

  return (
    <section id="games" className="py-20 bg-linear-to-b from-yellow-400 via-blue-300 to-blue-500 px-6 relative overflow-hidden">
      
      {/* 🌧️ Falling Raindrops */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-rain { animation: fall 3s linear infinite; }
        .animate-pop { animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      {/* RAIN ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1.5, 0.8, 2.2, 1.1].map((delay, i) => (
          <div 
            key={i} 
            className="animate-rain absolute text-white/40 text-3xl" 
            style={{ left: `${10 + i * 20}%`, animationDelay: `${delay}s` }}
          >
            💧
          </div>
        ))}
      </div>

      <h2 className="text-5xl md:text-7xl font-black text-center text-white mb-16 drop-shadow-xl">
        Choose Your Adventure!
      </h2>
      
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto relative z-10">
        {gameList.map((game, index) => (
          <div 
            key={index}
            className={`${game.color} w-72 h-96 rounded-[4rem] p-8 flex flex-col items-center justify-center 
                       cursor-pointer shadow-2xl transition-all duration-500 
                       hover:-translate-y-6 hover:rotate-3 active:scale-90 border-8 border-white/30 group`}
          >
            <span className="text-8xl mb-6 drop-shadow-md group-hover:scale-125 transition-transform duration-500">
              {game.icon}
            </span>

            <h3 className="text-3xl font-black text-white text-center tracking-tight">
              {game.name}
            </h3>

            <button 
              onClick={() => setSelectedGame(game)}
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-black text-lg 
                             shadow-lg hover:scale-110 hover:bg-yellow-300 hover:text-blue-900 transition-all">
              Play!
            </button>
          </div>
        ))}
      </div>

      {/* 🌟 THE "LOADING" MAGIC OVERLAY */}
      {selectedGame && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-blue-900/80 backdrop-blur-xl p-6">
          <div className="bg-white rounded-[3rem] p-12 text-center max-w-sm animate-pop shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="text-9xl mb-6 animate-bounce">
              {selectedGame.icon}
            </div>
            <h4 className="text-3xl font-black text-blue-900 mb-4">
              Starting {selectedGame.name}!
            </h4>
            <p className="text-gray-500 font-bold mb-8 italic">
              {selectedGame.message}
            </p>
            <button 
              onClick={() => setSelectedGame(null)}
              className="bg-pink-500 text-white px-10 py-3 rounded-full font-black shadow-lg hover:scale-105 transition-transform"
            >
              WAIT, I FORGOT! ✋
            </button>
          </div>
        </div>
      )}
    </section>
  );
}