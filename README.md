Kidzy Academy 🌈✨
A high-energy, interactive educational landing page built with React, Vite, and Tailwind CSS. Kidzy Academy takes parents and children on a visual "Weather Journey"—transitioning from a bright sunny hero section, through a storm of games and storytelling, and ending in a beautiful rainbow graduation.

✨ Features
Thematic Weather Journey: A continuous vertical experience using seamless color gradients to transition between different "weather" moods.

Interactive Storytelling Section: A deep-blue sky themed area with drifting clouds and animated elements.

Dynamic Portal System: Custom-built full-screen views for Login and Sign Up that keep the user's scroll position intact when they return to the home page.

Tiered Signup System: Dedicated "Explorer" and "Champion" tiers with themed color palettes (Golden for Champions, Sky Blue for Explorers).

Animated Rainbow Graduation: A custom SVG-animated rainbow that "draws" itself as the user reaches the final section.

Midnight Magic Footer: A high-contrast dark footer featuring twinkling stars and interactive 3D glassmorphism navigation buttons.

🛠️ Technologies Used
Framework: React 19

Build Tool: Vite

Styling: Tailwind CSS

Animations: CSS Keyframes & Intersection Observer API

Icons: Emoji-based 3D UI

📂 Project Structure
Plaintext
src/
├── Components/         # Interactive UI Components
│   ├── Navbar.jsx      # Sticky top navigation with scroll links
│   ├── Hero.jsx        # Sunny intro section
│   ├── Games.jsx       # Interactive play area
│   ├── Creative.jsx    # Art and creativity transition
│   ├── Stories.jsx     # Seamless blue-sky storytelling area
│   ├── Lab.jsx         # Science and experiment section
│   ├── Mentors.jsx     # Team and teacher profiles
│   ├── End.jsx         # Graduation section with animated rainbow
│   ├── Login.jsx       # Full-screen login portal
│   ├── Signup.jsx      # Themed signup portal (Explorer/Champion)
│   └── Footer.jsx      # Midnight sky footer with 3D symbols
├── App.jsx             # Main logic, view state, and scroll management
└── App.css             # Global Tailwind directives and custom animations

🚀 Getting Started

Prerequisites
Ensure you have Node.js installed (v18 or higher recommended).

Installation
Clone the repository:

Bash
git clone https://github.com/priyanshi-codes-12/Kidzy-Academy.git
cd Kidzy-Academy
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
View the app:
Open http://localhost:5173/ in your browser.

📝 Navigation & Logic
View State: The application uses a central view state in App.jsx to toggle between the home landing page and the login/signup portals.

Scroll Memory: When clicking "Back" from a portal, the app resets the view to home and automatically scrolls to the #graduation ID to ensure a seamless user experience.