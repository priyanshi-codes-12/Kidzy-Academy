import React from 'react';

const Signup = ({ tier, onBack }) => {
  const isChampion = tier === "Champion";

  const handleBack = () => {
    // 1. Immediately swap the view back to "home"
    onBack(); 
    
    // 2. Use a timeout to wait for the home view to exist in the DOM
    setTimeout(() => {
      // 3. Clear the hash first to reset the browser's scroll memory
      window.location.hash = ""; 
      // 4. Set the hash to target your End.jsx ID
      window.location.hash = "graduation";
    }, 20); // Slightly longer timeout for better reliability
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-white overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{ 
          background: isChampion 
            ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' 
            : 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' 
        }} 
      />

      <div className="relative w-full max-w-xl bg-white/95 backdrop-blur-xl p-12 rounded-[4rem] shadow-2xl border-8 border-white z-10 text-center">
        <h2 className="text-5xl font-black text-blue-900 mb-2">
          {tier} Join!
        </h2>
        
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 text-left mt-8">
          <input type="text" placeholder="Child's Name" className="p-5 bg-gray-50 rounded-3xl outline-none" />
          <input type="email" placeholder="Parent's Email" className="p-5 bg-gray-50 rounded-3xl outline-none" />
          <button className={`w-full py-6 rounded-3xl font-black text-white ${isChampion ? 'bg-orange-500' : 'bg-blue-600'}`}>
            Ready to Start! 🚀
          </button>
        </form>

        <button onClick={handleBack} className="mt-8 text-blue-400 font-bold hover:underline">
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Signup;