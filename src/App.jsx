import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Games from "./Components/Games"; 
import Lab from "./Components/Lab";
import Login from "./Components/Login";
import Footer from './Components/Footer';
import Creative from './Components/Creative';
import Stories from './Components/Stories';
import Mentors from './Components/Mentors';
import End from './Components/End';
import Signup from "./Components/Signup"; 

export default function App() {
  const [view, setView] = useState("home");
  const [selectedTier, setSelectedTier] = useState(null);
  
  return (
    <main className="flex flex-col min-h-screen">
      {view === "home" ? (
        <div className="bg-linear-to-b from-yellow-300 via-blue-400 to-indigo-900 min-h-screen">
          <Navbar onLoginClick={() => setView("login")} />
          
          <div className="grow pt-24"> 
            <div id="home"><Hero /></div>
            <div id="games"><Games /></div>
            <div id="art"><Creative /></div>
            <div id="stories"><Stories /></div>
            <div id="science"><Lab /></div>
            <div id="team"><Mentors /></div>
            
            {/* 🚨 Prop passed here to trigger the Signup view */}
            <End onSignup={(tier) => {
              setSelectedTier(tier);
              setView("signup");
            }} />
          </div>

          <Footer /> 
        </div>
      ) : view === "login" ? (
        <Login onBack={() => setView("home")} />
      ) : (
        /* 🚨 Returning to 'home' preserves the scroll position 
           where the user left off at the bottom of the page */
        <Signup tier={selectedTier} onBack={() => setView("home")} />
      )}
    </main>
  );
}