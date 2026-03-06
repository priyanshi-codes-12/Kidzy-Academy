import React from 'react';

export default function Footer() {
  
  // 🚀 FUNCTIONAL LOGIC FOR SYMBOLS
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cinematic smooth scroll to top
  };

  const handleMagicClick = () => {
    // This triggers a browser alert, but you can replace it with setView("reviews")
    alert("✨ Magic Stars Incoming! We are gathering our Champion testimonials for you!"); 
  };

  const handleContactClick = () => {
    window.location.href = "mailto:hello@kidzyadventures.com"; // Opens user's email app
  };

  return (
    <footer className="relative overflow-hidden">
      {/* 🌈 6-COLOR RAINBOW STRIPE */}
      <div className="h-4 w-full flex">
        <div className="flex-1 bg-red-400"></div>
        <div className="flex-1 bg-orange-400"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-green-400"></div>
        <div className="flex-1 bg-blue-400"></div>
        <div className="flex-1 bg-purple-400"></div>
      </div>

      {/* 🌌 MIDNIGHT CONTENT AREA */}
      <div className="bg-indigo-950 py-20 px-6 text-center relative">
        
        {/* ✨ TWINKLING STARS ANIMATION */}
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .star { animation: twinkle 3s infinite ease-in-out; }
        `}</style>
        
        {/* Decorative Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="star absolute top-10 left-[15%] text-white text-xs">✨</div>
          <div className="star absolute top-20 right-[20%] text-white text-xs" style={{ animationDelay: '1s' }}>✨</div>
          <div className="star absolute bottom-10 left-[40%] text-white text-xs" style={{ animationDelay: '2s' }}>✨</div>
        </div>

        {/* MAIN HEADING */}
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-pink-400 drop-shadow-2xl">
          See you next time! 🌈
        </h2>
        
        <p className="mt-6 text-indigo-200/60 font-black text-xl tracking-widest uppercase">
          The Adventure Never Ends at Kidzy
        </p>
        
        {/* 🫧 INTERACTIVE 3D GLASS BUBBLES */}
        <div className="flex justify-center gap-10 mt-12">
          {[
            { icon: "🏠", label: "Home", action: handleHomeClick },
            { icon: "🌟", label: "Magic", action: handleMagicClick },
            { icon: "📞", label: "Talk", action: handleContactClick }
          ].map((item, i) => (
            <button 
              key={i}
              onClick={item.action}
              className="group relative w-20 h-20 flex items-center justify-center bg-white/5 backdrop-blur-xl 
                         rounded-[2rem] border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                         transition-all duration-500 hover:scale-125 hover:-translate-y-4 
                         hover:border-yellow-400/50 hover:shadow-yellow-400/20 active:scale-95"
            >
              <span className="text-4xl filter drop-shadow-lg group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </span>

              {/* Hover Label */}
              <span className="absolute -bottom-10 scale-0 group-hover:scale-100 transition-all text-yellow-400 font-black text-xs uppercase tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-indigo-300/40 font-bold">
            © 2026 Kidzy Adventures • Made with Magic 🪄
          </p>
        </div>
      </div>
    </footer>
  );
}