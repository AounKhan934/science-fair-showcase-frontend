function GalleryView({ 
  projects, 
  totalCount, 
  stats, 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  selectedGrade, 
  setSelectedGrade, 
  selectedAward, 
  setSelectedAward,
  onSelectProject
}) {
  const categories = ["All", "Computer Science", "Engineering", "Chemistry", "Physics", "Biology", "Earth Science"];
  const grades = ["All", "9th Grade", "10th Grade", "11th Grade", "12th Grade"];

  return (
    <div className="fade-in">
      {/* Hero Section Banner */}
      <div className="relative glass-card rounded-[32px] p-6 p-md-8 overflow-hidden mb-8 shadow-xl">
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
        
        <div className="row align-items-center g-6">
          <div className="col-lg-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-600/15 border border-blue-500/20 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Annual STEM Competition Open</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
              Where Young Minds <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent glow-text-primary">Shape the Future</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl text-base md:text-lg mb-0 font-medium">
              Welcome to the ultimate directory of student innovation. Dive into research papers, live statistics, dynamic experiments, and award-winning solutions addressing global challenges.
            </p>
          </div>

          {/* Mini Dashboard widgets */}
          <div className="col-lg-4">
            <div className="row g-3">
              <div className="col-6">
                <div className="bg-slate-200/50 dark:bg-slate-900/40 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 uppercase tracking-wide">Projects</p>
                  <h4 className="font-display font-bold text-3xl text-blue-600 dark:text-blue-400 mb-0">{totalCount}</h4>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-slate-200/50 dark:bg-slate-900/40 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 uppercase tracking-wide">Awards</p>
                  <h4 className="font-display font-bold text-3xl text-emerald-500 mb-0">{stats.awarded}</h4>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-slate-200/50 dark:bg-slate-900/40 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 uppercase tracking-wide">Schools</p>
                  <h4 className="font-display font-bold text-3xl text-indigo-500 mb-0">{stats.schoolsCount}</h4>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-slate-200/50 dark:bg-slate-900/40 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 uppercase tracking-wide">STEM rate</p>
                  <h4 className="font-display font-bold text-3xl text-violet-500 mb-0">100%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtering and Search Actions Controls */}
      <div className="glass-card rounded-[24px] p-4 mb-6 shadow-md d-flex flex-column gap-3">
        {/* Search Input bar */}
        <div className="relative">
          <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          <input 
            type="text" 
            placeholder="Search projects by title, student name, school, or abstract details..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <i className="bi bi-x-circle-fill"></i>
            </button>
          )}
        </div>

        {/* Select Dropdowns and Filters */}
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
          {/* Secondary Select filters */}
          <div className="d-flex flex-wrap gap-2 flex-grow-1 flex-sm-grow-0">
            <div className="flex-grow-1">
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="form-select bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm py-2 px-3 rounded-xl dark:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Grade Levels</option>
                {grades.filter(g => g !== "All").map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="flex-grow-1">
              <select 
                value={selectedAward}
                onChange={(e) => setSelectedAward(e.target.value)}
                className="form-select bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm py-2 px-3 rounded-xl dark:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Judged Status</option>
                <option value="Awarded">Award Winners</option>
                <option value="Pending">Pending Review</option>
              </select>
            </div>
          </div>

          {/* Found count indicator */}
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
            Showing {projects.length} of {totalCount} Projects
          </div>
        </div>

        {/* Category selection pills scrollable */}
        <div className="d-flex gap-2 overflow-auto pb-2 border-t border-slate-200/50 dark:border-slate-900/50 pt-3">
          {categories.map(cat => {
            const icon = CATEGORY_ICONS[cat] || "bi-tag-fill";
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 d-flex align-items-center gap-2 border ${
                  isSelected 
                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20" 
                    : "bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <i className={`bi ${icon} text-sm`}></i>
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Grid */}
      {projects.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map(proj => (
            <div className="col" key={proj.id}>
              <ProjectCard project={proj} onClick={() => onSelectProject(proj)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-[24px] p-8 text-center shadow-sm">
          <div className="inline-flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-full p-4 mb-4">
            <i className="bi bi-search text-3xl text-slate-400"></i>
          </div>
          <h4 className="font-display font-semibold text-lg dark:text-white">No Projects Match Your Search</h4>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto text-sm mt-2">
            Try widening your filters, clearing your search query, or checking for alternate spellings of the projects or student names.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedGrade("All");
              setSelectedAward("All");
            }}
            className="mt-4 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
