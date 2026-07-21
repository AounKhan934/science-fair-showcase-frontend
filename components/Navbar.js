function Navbar({ currentTab, setCurrentTab, darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-40 glass-nav transition-all">
      <div className="container-xl py-3 px-4 d-flex justify-content-between align-items-center">
        {/* Logo and Brand */}
        <div className="d-flex align-items-center gap-3 cursor-pointer" onClick={() => setCurrentTab("gallery")}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 text-white rounded-xl p-2.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <i className="bi bi-mortarboard-fill text-xl"></i>
          </div>
          <div>
            <h1 className="font-display font-bold text-lg md:text-xl leading-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              STEM Showcase
            </h1>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Science Fair Project Hub
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="d-none d-md-flex align-items-center gap-1 bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-300/40 dark:border-slate-800/40">
          <button 
            onClick={() => setCurrentTab("gallery")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${currentTab === "gallery" ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
          >
            <i className="bi bi-grid-fill me-2"></i>Project Gallery
          </button>
          <button 
            onClick={() => setCurrentTab("dashboard")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${currentTab === "dashboard" ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
          >
            <i className="bi bi-bar-chart-fill me-2"></i>Statistics & Insights
          </button>
          <button 
            onClick={() => setCurrentTab("register")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${currentTab === "register" ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
          >
            <i className="bi bi-plus-circle-fill me-2"></i>Register Project
          </button>
        </nav>

        {/* Action controls */}
        <div className="d-flex align-items-center gap-2 md:gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-200/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300/40 dark:border-slate-800/40 rounded-xl p-2.5 flex items-center justify-center transition-all duration-200"
            aria-label="Toggle Theme"
          >
            <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"} text-base`}></i>
          </button>
          <button 
            onClick={() => setCurrentTab("register")}
            className="btn btn-primary d-none d-sm-flex align-items-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-sm shadow-lg shadow-blue-500/20"
          >
            <i className="bi bi-plus-lg"></i>
            Submit Project
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation bar */}
      <div className="d-md-none border-t border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-slate-950/60 p-2">
        <div className="d-flex justify-around gap-1">
          <button 
            onClick={() => setCurrentTab("gallery")}
            className={`flex-1 py-2 text-center rounded-xl text-xs font-bold transition-all ${currentTab === "gallery" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "text-slate-500"}`}
          >
            <i className="bi bi-grid-fill d-block text-lg mb-0.5"></i>Gallery
          </button>
          <button 
            onClick={() => setCurrentTab("dashboard")}
            className={`flex-1 py-2 text-center rounded-xl text-xs font-bold transition-all ${currentTab === "dashboard" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "text-slate-500"}`}
          >
            <i className="bi bi-bar-chart-fill d-block text-lg mb-0.5"></i>Insights
          </button>
          <button 
            onClick={() => setCurrentTab("register")}
            className={`flex-1 py-2 text-center rounded-xl text-xs font-bold transition-all ${currentTab === "register" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "text-slate-500"}`}
          >
            <i className="bi bi-plus-circle-fill d-block text-lg mb-0.5"></i>Register
          </button>
        </div>
      </div>
    </header>
  );
}
