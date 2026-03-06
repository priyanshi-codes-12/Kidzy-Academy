import React, { useState } from 'react';

const Login = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back! Authenticating...`);
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient {
            background: linear-gradient(-45deg, #fdfcf0, #e2f1f8, #e2eafc, #fbf8f1);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
          }
          @keyframes floatUp {
            0% { transform: translateY(110vh) translateX(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            50% { transform: translateY(40vh) translateX(30px) rotate(10deg); }
            90% { opacity: 1; }
            100% { transform: translateY(-20vh) translateX(-20px) rotate(-10deg); opacity: 0; }
          }
          @keyframes driftAcross {
            0% { transform: translateX(-20vw) translateY(0); }
            50% { transform: translateX(50vw) translateY(-15px); }
            100% { transform: translateX(120vw) translateY(0); }
          }
          @keyframes twinkleAndSpin {
            0% { transform: scale(0.8) rotate(0deg); opacity: 0.5; filter: drop-shadow(0 0 5px rgba(255,215,0,0.5)); }
            50% { transform: scale(1.2) rotate(180deg); opacity: 1; filter: drop-shadow(0 0 15px rgba(255,215,0,0.9)); }
            100% { transform: scale(0.8) rotate(360deg); opacity: 0.5; filter: drop-shadow(0 0 5px rgba(255,215,0,0.5)); }
          }
          @keyframes flutter {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(15px, -20px) rotate(15deg); }
            50% { transform: translate(30px, 0px) rotate(-5deg); }
            75% { transform: translate(15px, 20px) rotate(15deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }

          .kid-element {
            position: absolute;
            z-index: 1;
            pointer-events: none;
            user-select: none;
          }
          
          /* Balloons */
          .balloon-1 { animation: floatUp 14s linear infinite; left: 15%; font-size: 4rem; bottom: -10%; }
          .balloon-2 { animation: floatUp 18s linear infinite; right: 20%; font-size: 5rem; bottom: -20%; animation-delay: 4s; }
          .balloon-3 { animation: floatUp 22s linear infinite; left: 75%; font-size: 3.5rem; bottom: -15%; animation-delay: 2s; }
          
          /* Clouds */
          .cloud-1 { animation: driftAcross 40s linear infinite; top: 15%; font-size: 7rem; opacity: 0.8; }
          .cloud-2 { animation: driftAcross 55s linear infinite reverse; top: 65%; font-size: 9rem; opacity: 0.6; }
          .cloud-3 { animation: driftAcross 45s linear infinite; top: 40%; font-size: 6rem; opacity: 0.7; animation-delay: -20s; }
          
          /* Stars */
          .star-1 { animation: twinkleAndSpin 6s ease-in-out infinite; top: 25%; left: 30%; font-size: 2.5rem; }
          .star-2 { animation: twinkleAndSpin 8s ease-in-out infinite reverse; top: 10%; right: 25%; font-size: 3rem; }
          .star-3 { animation: twinkleAndSpin 5s ease-in-out infinite; bottom: 30%; left: 15%; font-size: 2rem; }
          
          /* Butterfly */
          .butterfly-container { animation: floatUp 25s linear infinite; left: 45%; bottom: -10%; animation-delay: 5s; }
          .butterfly { animation: flutter 3s ease-in-out infinite; font-size: 3.5rem; }
        `}
      </style>

      {/* 1. THE MAIN WRAPPER: Forced Fullscreen & Background */}
      <div
        className="animated-gradient"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          overflow: 'hidden',
        }}
      >
        {/* Kid-Friendly Animated Background Elements */}
        {/* Clouds */}
        <div className="kid-element cloud-1" style={{ left: '-20vw' }}>☁️</div>
        <div className="kid-element cloud-2" style={{ right: '-20vw' }}>☁️</div>
        <div className="kid-element cloud-3" style={{ left: '-20vw' }}>☁️</div>

        {/* Stars */}
        <div className="kid-element star-1">⭐</div>
        <div className="kid-element star-2">✨</div>
        <div className="kid-element star-3">⭐</div>

        {/* Balloons */}
        <div className="kid-element balloon-1">🎈</div>
        <div className="kid-element balloon-2">🎈</div>
        <div className="kid-element balloon-3">🪁</div>

        {/* Butterfly Container */}
        <div className="kid-element butterfly-container">
          <div className="butterfly">🦋</div>
        </div>

        <div className="relative group w-full max-w-md p-6 z-10">
          {/* THE SHY BEAR */}
          <div className="absolute -top-16 -right-12 w-28 h-28 pointer-events-none z-0">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"
              alt="bear"
              className="w-full h-full object-contain transition-all duration-700 ease-in-out transform
                       group-hover:-translate-x-40 group-hover:translate-y-20 group-hover:scale-75 group-hover:-rotate-45"
            />
          </div>

          {/* 2. THE LOGIN FORM BOX */}
          <div className="relative z-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
            <h2 className="text-4xl font-black mb-2 text-center text-blue-900">Login</h2>
            <p className="text-center text-gray-500 mb-8 text-sm font-medium">Use the ID provided by your school</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="email"
                className="w-full p-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="name@school.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="w-full p-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Secret Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-blue-700 transition-all active:scale-95">
                Sign In
              </button>
            </form>

            {/* CONTACT US SECTION */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-400 font-medium mb-3">New to Kidzy?</p>
              <button
                type="button"
                onClick={() => window.location.href = 'mailto:hello@kidzy.com'}
                className="px-6 py-2 bg-yellow-400 text-blue-900 rounded-full font-black text-sm hover:bg-yellow-300 shadow-sm"
              >
                Contact Us to Join 🚀
              </button>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="mt-6 w-full text-blue-400 text-sm font-bold hover:text-blue-600 transition-all"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;