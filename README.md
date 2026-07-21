# Science Fair Project Showcase

A responsive, highly interactive, and visually stunning frontend web application designed to display student science fair projects, their results, and awards. 

## Features

- 🔬 **Interactive Project Gallery**: A grid of beautifully styled cards featuring student projects across various categories (Physics, Chemistry, Biology, Computer Science, Engineering, Earth Science) with category icons and award ribbons.
- 🔍 **Advanced Search & Filtering**: Instant, client-side search by title, student, school, or abstract details, alongside grade level and award status filters.
- 📊 **Statistics & Insights Dashboard**: A real-time dashboard displaying key metrics, award winner tallies, and graphical representations of project distribution across categories.
- 📝 **Wizard Registration Form**: A clean, multi-step project registration wizard with active input validation, glowing states, and custom confetti animations upon successful submission.
- 🌗 **Light & Dark Themes**: Fully-integrated light and dark modes with sleek glassmorphic components, glowing typography, and smooth transitions.
- 💾 **State Persistence**: Submissions and theme settings are saved locally to `localStorage` so they persist even after page refreshes.

## Tech Stack

1. **React (v18)**: Direct CDN import for state management and modular render logic.
2. **Babel Standalone**: In-browser JSX transpilation for modern developer experience without build tools.
3. **Tailwind CSS**: Utility-first styling for layouts, dark mode, custom keyframes, hover triggers, and animations.
4. **Bootstrap (v5)**: Responsive grid scaffolding, fallback styling, and reboot utilities.
5. **Bootstrap Icons**: Crisp SVG iconography for category representation.
6. **Canvas Confetti**: High-performance canvas physics confetti engine for successful project submissions.

## Getting Started

You do not need to install Node.js, `npm`, or any build dependencies to run this application!

### Option A: Double-Click (Zero Setup)
Simply open the folder and double-click **`index.html`** to load the application directly in your web browser. 

### Option B: Local Web Server (Recommended)
If you have **Python** installed on your system, you can run a local web server to prevent browser CORS warnings or restrictions on advanced browser properties.
1. Run **`run_server.bat`** by double-clicking it.
2. Open your browser and navigate to: **`http://localhost:8000`**

---

## File Structure

- **`index.html`**: Entry point containing all the React components, styling configurations, CDN references, mock data, and local storage hooks.
- **`run_server.bat`**: A simple Windows batch script to launch Python's built-in `http.server`.
- **`README.md`**: Project instructions and documentation.
