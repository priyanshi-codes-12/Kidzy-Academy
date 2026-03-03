import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    alert(`Welcome back, ${email}!`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
      {/* 1. The 'group' wrapper senses the mouse entering the form area */}
      <div className="relative group">
        
        {/* 2. THE ESCAPING CARTOON 
            - duration-700: makes the 'escape' move look smooth, not glitchy
            - group-hover:-translate-x-20: moves it left when mouse enters
            - group-hover:translate-y-10: moves it down when mouse enters
            - group-hover:rotate-[360deg]: makes it spin while moving
        */}
        <div className="absolute -top-16 -right-12 w-28 h-28 pointer-events-none z-0">
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png" 
              alt="active-cartoon"
              className="w-full h-full object-contain transition-all duration-700 ease-in-out transform
                         group-hover:-translate-x-40 group-hover:translate-y-20 group-hover:scale-75 group-hover:-rotate-45"
            />
        </div>

        {/* 3. THE LOGIN FORM BOX (z-10 to stay on top) */}
        <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-black mb-2 text-center text-gray-800">Login</h2>
          <p className="text-center text-gray-400 mb-8 text-sm font-medium">He's shy, don't scare him!</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" 
                className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <input 
                type="password" 
                className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transform transition-all active:scale-95 mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;