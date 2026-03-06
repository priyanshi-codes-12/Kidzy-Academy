import React, { useEffect, useRef, useState } from 'react';

export default function End({ onSignup }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      /* 🎯 CRITICAL ID: Matches window.location.hash in Signup.jsx */
      id="graduation"
      className="relative pt-32 pb-16 bg-linear-to-b from-[#60a5fa] to-white overflow-x-hidden px-6 mt-[-2px]"
    >
      
      {/* ☀️ THE SUN */}
      <div className="absolute top-10 right-10 z-0 pointer-events-none select-none">
        <div className="text-9xl animate-pulse opacity-80 filter drop-shadow-[0_0_50px_rgba(255,255,0,0.5)]">
          ☀️
        </div>
      </div>

      {/* 🌈 SLOW ANIMATED RAINBOW */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-end overflow-hidden">
        <svg 
          viewBox="0 0 1000 500" 
          className="w-[140%] md:w-full h-auto opacity-40 -mb-12.5 max-w-none"
        >
          <g fill="none" strokeWidth="40" strokeLinecap="round" className={isVisible ? "animate-rainbow" : "opacity-0"}>
            <path d="M100,500 A400,400 0 0,1 900,500" stroke="#ff4d4d" className="arc-red" />
            <path d="M150,500 A350,350 0 0,1 850,500" stroke="#ffa500" className="arc-orange" />
            <path d="M200,500 A300,300 0 0,1 800,500" stroke="#ffff00" className="arc-yellow" />
            <path d="M250,500 A250,250 0 0,1 750,500" stroke="#4ade80" className="arc-green" />
            <path d="M300,500 A200,200 0 0,1 700,500" stroke="#60a5fa" className="arc-blue" />
            <path d="M350,500 A150,150 0 0,1 650,500" stroke="#a855f7" className="arc-purple" />
          </g>
        </svg>
      </div>

      <style>{`
        .animate-rainbow path {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawRainbow 6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes drawRainbow { to { stroke-dashoffset: 0; } }
        .arc-red { animation-delay: 0.2s; }
        .arc-orange { animation-delay: 0.6s; }
        .arc-yellow { animation-delay: 1.0s; }
        .arc-green { animation-delay: 1.4s; }
        .arc-blue { animation-delay: 1.8s; }
        .arc-purple { animation-delay: 2.2s; }
      `}</style>

      {/* CONTENT AREA */}
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-7xl font-black text-blue-900 mb-6 drop-shadow-md">
          Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-yellow-500 to-purple-500">Join Us?</span>
        </h2>
        <p className="text-2xl text-blue-800/70 font-bold mb-20">
          The storm has passed, and your child is ready to shine!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-32">
          {['Explorer', 'Champion'].map((tier) => (
            <div key={tier} className="bg-white/90 backdrop-blur-md p-10 rounded-[4rem] shadow-2xl border-b-12 border-blue-600">
               <h3 className="text-3xl font-black text-gray-800">{tier}</h3>
               <button 
                 onClick={() => onSignup(tier)}
                 className="mt-8 w-full py-5 bg-blue-600 text-white rounded-3xl font-black hover:scale-105 active:scale-95 transition-all shadow-lg"
               >
                 Sign Up Now!
               </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}