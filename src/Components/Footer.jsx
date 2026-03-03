export default function Footer() {
  return (
    /* This creates a 5-color rainbow stripe at the top of the footer */
    <footer className="relative">
      <div className="h-4 w-full flex">
        <div className="flex-1 bg-red-400"></div>
        <div className="flex-1 bg-orange-400"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-green-400"></div>
        <div className="flex-1 bg-blue-400"></div>
        <div className="flex-1 bg-purple-400"></div>
      </div>

      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-400 via-yellow-400 to-purple-500">
          See you next time! 🌈
        </h2>
        <p className="mt-4 text-gray-400 font-bold">© 2026 Kidzy Adventures</p>
        
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <span className="cursor-pointer hover:scale-125 transition-transform">🏠</span>
          <span className="cursor-pointer hover:scale-125 transition-transform">🌟</span>
          <span className="cursor-pointer hover:scale-125 transition-transform">📞</span>
        </div>
      </div>
    </footer>
  );
}