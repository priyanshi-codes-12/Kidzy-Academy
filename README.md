<div align="center">

# 🌈 Kidzy Academy

### *Where Learning Feels Like an Adventure*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

A high-energy, interactive **educational landing page** built for kids and parents. Kidzy Academy takes users on a visual *Weather Journey* — transitioning from a bright sunny hero section, through storms of games and storytelling, and ending in a beautiful rainbow graduation.

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌤️ **Thematic Weather Journey** | A continuous vertical experience using seamless gradients to transition between "weather" moods — sun, storm, night sky |
| 🔐 **Dynamic Portal System** | Custom full-screen portals for Login and Sign Up that preserve scroll position on return |
| 🏆 **Tiered Signup System** | Dedicated **Explorer** (Sky Blue) and **Champion** (Gold) tiers with unique themed palettes |
| 🌈 **Animated Rainbow Graduation** | Custom SVG-animated rainbow that draws itself as the user scrolls to the final section |
| ☁️ **Interactive Storytelling** | Deep-blue sky themed section with drifting clouds and smooth animated elements |
| 🔬 **Science Lab Section** | Immersive experiment-themed section with interactive visuals |
| 🎨 **Creative Arts Section** | Art and creativity transition zone with vibrant visual design |
| 👩‍🏫 **Mentor Profiles** | Clean team/teacher showcase section |
| 🌙 **Midnight Magic Footer** | High-contrast dark footer with twinkling stars and 3D glassmorphism navigation buttons |
| 📱 **Responsive Design** | Fully responsive layout that adapts to all screen sizes |

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | React | ^19.1.0 |
| **Build Tool** | Vite | ^6.3.5 |
| **Styling** | Tailwind CSS | ^4.2.1 |
| **Animations** | CSS Keyframes & Intersection Observer API | — |
| **Linting** | ESLint + React Hooks Plugin | ^9.25.0 |
| **Language** | JavaScript (ESM) | — |

---

## 📂 Project Structure

```
kidzy/
├── public/                     # Static assets
├── src/
│   ├── Components/             # All UI components
│   │   ├── Navbar.jsx          # Sticky navigation with smooth scroll links
│   │   ├── Hero.jsx            # Sunny intro / hero section
│   │   ├── Games.jsx           # Interactive play & games area
│   │   ├── Creative.jsx        # Art & creativity transition section
│   │   ├── Stories.jsx         # Blue-sky storytelling area with drifting clouds
│   │   ├── Lab.jsx             # Science & experiment section
│   │   ├── Mentors.jsx         # Teacher & mentor profile cards
│   │   ├── End.jsx             # Graduation section with animated SVG rainbow
│   │   ├── Login.jsx           # Full-screen login portal
│   │   ├── Signup.jsx          # Themed signup portal (Explorer / Champion)
│   │   └── Footer.jsx          # Midnight sky footer with 3D glassmorphism
│   ├── App.jsx                 # Root component — view state & scroll management
│   ├── App.css                 # Component-level styles
│   ├── index.css               # Global Tailwind directives & custom animations
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML shell
├── vite.config.js              # Vite + React plugin configuration
├── eslint.config.js            # ESLint flat config
└── package.json                # Project metadata & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher — [Download here](https://nodejs.org/)
- **npm** v8 or higher (bundled with Node.js)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/priyanshi-codes-12/Kidzy-Academy.git
cd Kidzy-Academy
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open in your browser**

```
http://localhost:5173/
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Starts Vite dev server with HMR |
| **Build** | `npm run build` | Generates optimized production bundle |
| **Preview** | `npm run preview` | Serves the production build locally |
| **Lint** | `npm run lint` | Runs ESLint across the entire project |

---

## 🧭 Navigation & App Logic

The application uses a **centralized view state** in `App.jsx` to manage page transitions without a router:

```
"home"   →  Full landing page (Navbar + all sections + Footer)
"login"  →  Full-screen Login portal
"signup" →  Full-screen Signup portal (receives selected tier as a prop)
```

- **Scroll Memory:** When a user clicks *Back* from a Login or Signup portal, `App.jsx` resets to `"home"` and scrolls to the `#graduation` anchor, preserving the exact user context.
- **Tiered Signup:** The `End.jsx` component passes the selected tier (`"Explorer"` or `"Champion"`) up to `App.jsx`, which forwards it to `Signup.jsx` for dynamic theming.

---

## 🎨 Design Philosophy

Kidzy Academy is built around a **seamless vertical weather journey** — the entire page is one cohesive visual story:

```
☀️  Sun  →  ⛅ Clouds  →  ⛈️ Storm  →  🌌 Night Sky  →  🌈 Rainbow
Hero       Games/Art     Stories/Lab    Mentors/End          Graduation
```

Gradients, animations, and section themes are carefully coordinated to ensure the transitions feel organic and magical for a young audience.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas to improve the learning experience or add new sections:

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/amazing-section`
3. Commit your changes: `git commit -m 'feat: add amazing section'`
4. Push to the branch: `git push origin feature/amazing-section`
5. Open a **Pull Request**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for curious kids everywhere &nbsp;|&nbsp; **Kidzy Academy** 🌈

</div>