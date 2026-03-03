export default function Games() {
  const gameList = [
    { name: "Math Monsters", color: "bg-pink-400", icon: "👾" },
    { name: "Word Woods", color: "bg-green-400", icon: "🌳" },
    { name: "Space Shapes", color: "bg-purple-400", icon: "🚀" }
  ];

  return (
    /* We use a gradient from Yellow to Blue to blend with the Hero section */
    <section className="py-20 bg-linear-to-b from-yellow-400 via-blue-300 to-blue-500 px-6 relative overflow-hidden">
      
      {/* 🌧️ Animated Raindrops */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="animate-bounce absolute top-10 left-1/4 text-white text-2xl">💧</div>
        <div className="animate-bounce absolute top-40 left-1/2 text-white text-2xl" style={{ animationDelay: '0.5s' }}>💧</div>
        <div className="animate-bounce absolute top-20 left-3/4 text-white text-2xl" style={{ animationDelay: '0.2s' }}>💧</div>
      </div>

      <h2 className="text-5xl font-black text-center text-white mb-16 drop-shadow-lg">
        Choose Your Adventure!
      </h2>
      
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto relative z-10">
        {gameList.map((game, index) => (
          <div 
            key={index}
            className={`${game.color} w-72 h-96 rounded-[4rem] p-8 flex flex-col items-center justify-center 
                       cursor-pointer shadow-2xl transition-all duration-500 
                       hover:-translate-y-6 hover:rotate-3 active:scale-90 border-8 border-white/30`}
          >
            <span className="text-8xl mb-6 drop-shadow-md">{game.icon}</span>
            <h3 className="text-3xl font-black text-white text-center tracking-tight">
              {game.name}
            </h3>
            <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-black text-lg shadow-lg hover:scale-110 transition-transform">
              Play!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}