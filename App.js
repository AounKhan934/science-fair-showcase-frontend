const { useState, useEffect, useMemo, useRef } = React;

function App() {
  // LocalStorage Sync
  const [projects, setProjects] = useState(() => {
    const stored = localStorage.getItem("sf_showcase_projects");
    return stored ? JSON.parse(stored) : INITIAL_PROJECTS;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("sf_showcase_dark");
    return stored ? JSON.parse(stored) : true;
  });

  const [currentTab, setCurrentTab] = useState("gallery");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [selectedAward, setSelectedAward] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  // Save dark mode state
  useEffect(() => {
    localStorage.setItem("sf_showcase_dark", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Save projects state
  useEffect(() => {
    localStorage.setItem("sf_showcase_projects", JSON.stringify(projects));
  }, [projects]);

  // Display short alerts
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Filtered projects selector
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesGrade = selectedGrade === "All" || p.grade === selectedGrade;
      const matchesAward = selectedAward === "All" || 
        (selectedAward === "Awarded" && p.award !== "Pending Review") ||
        (selectedAward === "Pending" && p.award === "Pending Review");
      
      return matchesSearch && matchesCategory && matchesGrade && matchesAward;
    });
  }, [projects, searchQuery, selectedCategory, selectedGrade, selectedAward]);

  // Statistics calculations
  const stats = useMemo(() => {
    const total = projects.length;
    const awarded = projects.filter(p => p.award !== "Pending Review").length;
    const CS = projects.filter(p => p.category === "Computer Science").length;
    const Engineering = projects.filter(p => p.category === "Engineering").length;
    const Bio = projects.filter(p => p.category === "Biology").length;
    const Chem = projects.filter(p => p.category === "Chemistry").length;
    const Physics = projects.filter(p => p.category === "Physics").length;
    const Earth = projects.filter(p => p.category === "Earth Science").length;

    // Distinct schools count
    const schools = new Set(projects.map(p => p.school));
    
    return { total, awarded, CS, Engineering, Bio, Chem, Physics, Earth, schoolsCount: schools.size };
  }, [projects]);

  const handleAddProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
    showToast(`Project "${newProject.title}" registered successfully!`);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.warn("Confetti error", e);
    }
    
    setCurrentTab("gallery");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar component */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Content Area */}
      <main className="flex-grow container-xl px-4 py-8 relative z-10">
        {toast && (
          <div className="fixed top-24 right-4 z-50 animate-bounce glass-card flex items-center gap-3 px-4 py-3 rounded-2xl border-l-4 border-l-emerald-500 shadow-xl max-w-sm">
            <div className="bg-emerald-500/20 text-emerald-500 rounded-full p-1.5 flex items-center justify-center">
              <i className="bi bi-check2-circle text-lg"></i>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{toast.message}</p>
            </div>
          </div>
        )}

        {currentTab === "gallery" && (
          <GalleryView 
            projects={filteredProjects}
            totalCount={projects.length}
            stats={stats}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            selectedAward={selectedAward}
            setSelectedAward={setSelectedAward}
            onSelectProject={setSelectedProject}
          />
        )}

        {currentTab === "dashboard" && (
          <DashboardView 
            projects={projects}
            stats={stats}
            onSelectProject={setSelectedProject}
          />
        )}

        {currentTab === "register" && (
          <RegisterView 
            onSubmit={handleAddProject}
            onCancel={() => setCurrentTab("gallery")}
          />
        )}
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200/50 dark:border-slate-900/60 bg-white/40 dark:bg-slate-950/40 py-6 mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="container-xl px-4">
          <p className="mb-2">Science Fair Project Showcase &copy; 2026. Empowering Next-Gen Researchers.</p>
          <div className="d-flex justify-content-center gap-3">
            <span className="hover:text-blue-500 cursor-pointer">Guidelines</span>
            <span>&bull;</span>
            <span className="hover:text-blue-500 cursor-pointer">Judging Panel</span>
            <span>&bull;</span>
            <span className="hover:text-blue-500 cursor-pointer">STEM Resources</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Mount App ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
