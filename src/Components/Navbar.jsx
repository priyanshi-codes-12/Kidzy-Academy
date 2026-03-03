import React from 'react';

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#eae8b1] fixed top-0 w-full z-100 shadow-sm overflow-hidden">
      
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes sunToBehindLogin {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(calc(100vw - 235px), -32px) scale(1); opacity: 1; }
        }
        .animate-nav-sun-dance {
          animation: sunToBehindLogin 7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.4));
        }
      `}</style>

      {/* LOGO with Yellow 'z' */}
      <div className="relative z-10">
        <a href="#home">
          <h1 className="text-4xl font-black text-blue-600 flex items-center select-none cursor-pointer">
            Kid<span className="text-yellow-600">z</span>y<span className="text-orange-500">.</span>
          </h1>
        </a>
        <div className="absolute -top-2.5 left-0 pointer-events-none z-0">
          <span className="animate-nav-sun-dance text-5xl block">☀️</span>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="hidden lg:flex gap-8 font-black text-blue-900/60 uppercase text-xs tracking-widest">
        <a href="#games" className="hover:text-blue-600 transition-colors">Games</a>
        <a href="#stories" className="hover:text-blue-600 transition-colors">Stories</a>
        <a href="#team" className="hover:text-blue-600 transition-colors">Team</a>
        <a href="#art" className="hover:text-blue-600 transition-colors">Art</a>
        <a href="#science" className="hover:text-blue-600 transition-colors">Science</a>
      </div>

      {/* LOGIN BUTTON */}
      <div className="relative z-10">
        <button 
          onClick={onLoginClick}
          className="bg-blue-600 text-white px-10 py-3 rounded-full font-black shadow-lg hover:scale-105 transition-transform relative z-20"
        >
          Login
        </button>
      </div>
    </nav>
  );
}