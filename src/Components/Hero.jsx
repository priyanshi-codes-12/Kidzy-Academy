export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-yellow-400 min-h-[70vh] px-6">
      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-black text-blue-900 tracking-tight drop-shadow-sm">
        Play & Learn with Friends!
      </h1>

      {/* The 'Grow' Text */}
      <h2 className="text-5xl md:text-7xl font-black text-white mt-4 drop-shadow-md animate-pulse">
        Grow
      </h2>

      {/* UPDATED SUB-TEXT: Fun and Engaging */}
      <p className="mt-8 text-xl md:text-2xl text-blue-800 font-bold max-w-2xl leading-relaxed">
        Unlock magic powers, solve giant puzzles, and build your very own 
        world of wonders! Are you ready to explore?
      </p>

      {/* Bouncy CTA Button */}
      <div className="mt-12">
        <button className="bg-orange-500 text-white px-10 py-5 rounded-full font-black text-2xl 
                           shadow-[0_8px_0_0_#c2410c] hover:shadow-[0_4px_0_0_#c2410c] 
                           hover:translate-y-1 active:shadow-none active:translate-y-2 
                           transition-all duration-150 uppercase tracking-wide">
          Let's Go! 🚀
        </button>
      </div>
    </section>
  );
}