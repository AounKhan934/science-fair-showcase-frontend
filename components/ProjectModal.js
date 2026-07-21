function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = React.useState("overview");
  const modalRef = React.useRef(null);

  // Close modal on click outside content
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Disable body scroll when modal open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const awardMeta = AWARD_STYLES[project.award] || AWARD_STYLES["Pending Review"];

  return (
    <div 
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl rounded-[28px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 d-flex flex-column max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="relative bg-slate-950 text-white p-6 md:p-8">
          {/* Image background layer */}
          <div className="absolute inset-0 opacity-40">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/70 to-slate-950/30"></div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white border border-white/20 rounded-full w-9 h-9 flex items-center justify-center transition-all z-10"
            aria-label="Close Modal"
          >
            <i className="bi bi-x text-2xl"></i>
          </button>

          <div className="relative z-10">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold tracking-wider uppercase bg-blue-500 text-white border border-blue-400/20 mb-3 inline-block">
              {project.category}
            </span>

            <h2 className="font-display font-bold text-xl md:text-3xl mb-3 pr-8 leading-tight">
              {project.title}
            </h2>

            <div className="d-flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <i className="bi bi-person-circle"></i>
                <strong className="text-white">{project.studentName}</strong> ({project.grade})
              </span>
              <span className="d-none d-sm-inline opacity-50">|</span>
              <span className="flex items-center gap-1.5">
                <i className="bi bi-building"></i>
                {project.school}
              </span>
              <span className="d-none d-sm-inline opacity-50">|</span>
              <span className="flex items-center gap-1.5">
                <i className="bi bi-star"></i>
                Mentor: {project.mentor}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Tabs Selector */}
        <div className="d-flex bg-slate-100 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all ${activeTab === "overview" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
          >
            Overview & Summary
          </button>
          <button 
            onClick={() => setActiveTab("methodology")}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all ${activeTab === "methodology" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
          >
            Scientific Methodology
          </button>
          <button 
            onClick={() => setActiveTab("results")}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all ${activeTab === "results" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
          >
            Results & Data Points
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow bg-slate-50 dark:bg-slate-900/40">
          
          {activeTab === "overview" && (
            <div className="fade-in space-y-6">
              {/* Award Spotlight */}
              <div className={`p-4 border rounded-2xl d-flex align-items-center gap-4 ${awardMeta.color} ${awardMeta.glow}`}>
                <div className="bg-white/20 dark:bg-black/20 p-3 rounded-xl flex items-center justify-center">
                  <i className={`bi ${awardMeta.icon} text-2xl`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-0.5 text-slate-500 dark:text-slate-400">Award Status</h4>
                  <p className="font-display font-bold text-lg mb-0">{project.award}</p>
                </div>
              </div>

              {/* Abstract Section */}
              <div>
                <h4 className="font-display font-bold text-base md:text-lg mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                  <i className="bi bi-file-earmark-text text-blue-500"></i>
                  Abstract / Project Summary
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Quick details card Grid */}
              <div className="bg-slate-200/40 dark:bg-slate-950/60 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4">
                <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Project Metadata</h5>
                <div className="row g-3 text-sm">
                  <div className="col-6 col-sm-3">
                    <span className="text-slate-500 dark:text-slate-400 d-block text-xs">Research Area</span>
                    <strong className="dark:text-white">{project.category}</strong>
                  </div>
                  <div className="col-6 col-sm-3">
                    <span className="text-slate-500 dark:text-slate-400 d-block text-xs">Institution</span>
                    <strong className="dark:text-white">{project.school}</strong>
                  </div>
                  <div className="col-6 col-sm-3">
                    <span className="text-slate-500 dark:text-slate-400 d-block text-xs">Student Lead</span>
                    <strong className="dark:text-white">{project.studentName}</strong>
                  </div>
                  <div className="col-6 col-sm-3">
                    <span className="text-slate-500 dark:text-slate-400 d-block text-xs">Principal Advisor</span>
                    <strong className="dark:text-white">{project.mentor}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "methodology" && (
            <div className="fade-in space-y-6">
              {/* Hypothesis Box */}
              <div className="bg-blue-500/10 dark:bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4">
                <h4 className="font-display font-bold text-sm text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                  <i className="bi bi-lightbulb"></i>
                  Hypothesis Statement
                </h4>
                <p className="text-sm font-medium italic text-slate-700 dark:text-slate-300 mb-0">
                  &ldquo;{project.hypothesis}&rdquo;
                </p>
              </div>

              {/* Methodology Timeline */}
              <div>
                <h4 className="font-display font-bold text-base md:text-lg mb-4 text-slate-900 dark:text-white">
                  Methodological Timeline
                </h4>
                
                <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-3 pl-6 space-y-6">
                  {project.methodology.map((m, index) => (
                    <div className="relative" key={index}>
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1 bg-blue-600 border-4 border-slate-50 dark:border-slate-900 rounded-full w-4.5 h-4.5"></div>
                      
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">Step {index + 1}</span>
                      <h5 className="font-bold text-sm md:text-base text-slate-900 dark:text-white mb-1">{m.step}</h5>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium mb-0">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="fade-in space-y-6">
              {/* Detailed summary of findings */}
              <div>
                <h4 className="font-display font-bold text-base md:text-lg mb-2 text-slate-900 dark:text-white">
                  Experimental Findings & Conclusion
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {project.results}
                </p>
              </div>

              {/* Key Metrics / Data Grid */}
              <div>
                <h4 className="font-display font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Core Metrics Recorded
                </h4>
                <div className="row g-3">
                  {project.dataPoints && project.dataPoints.map((dp, i) => (
                    <div className="col-6 col-sm-3" key={i}>
                      <div className="bg-slate-200/40 dark:bg-slate-950/40 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4 text-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-bold d-block mb-1">{dp.label}</span>
                        <strong className="font-display font-bold text-xl md:text-2xl text-blue-600 dark:text-blue-400">{dp.value}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive mock data visualization chart */}
              <div className="bg-slate-200/30 dark:bg-slate-950/30 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl p-4">
                <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Experimental Trend Chart (Simulated)</h5>
                <div className="h-32 d-flex align-items-end justify-between gap-2 px-4 pb-1 border-b border-slate-300 dark:border-slate-800">
                  <div className="bg-blue-500/30 w-full rounded-t-lg transition-all hover:bg-blue-500/50" style={{ height: '20%' }} title="Baseline: 20%"></div>
                  <div className="bg-blue-500/40 w-full rounded-t-lg transition-all hover:bg-blue-500/60" style={{ height: '45%' }} title="Phase 1: 45%"></div>
                  <div className="bg-blue-500/60 w-full rounded-t-lg transition-all hover:bg-blue-500/80" style={{ height: '70%' }} title="Phase 2: 70%"></div>
                  <div className="bg-blue-500 w-full rounded-t-lg transition-all hover:bg-blue-600" style={{ height: '95%' }} title="Observed Result: 95%"></div>
                </div>
                <div className="d-flex justify-between text-[10px] font-bold text-slate-400 mt-2 px-1">
                  <span>Baseline Control</span>
                  <span>Phase 1 Trial</span>
                  <span>Phase 2 Trial</span>
                  <span>Final Conclusion</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="d-flex justify-content-end bg-slate-100 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800 p-4 gap-3">
          <button 
            onClick={onClose}
            className="btn btn-outline-secondary rounded-xl text-sm font-semibold px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
          <button 
            onClick={() => {
              try {
                window.print();
              } catch (e) {
                alert("Print feature is not fully supported in this environment.");
              }
            }}
            className="btn btn-primary rounded-xl text-sm font-semibold px-4 py-2 d-flex align-items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <i className="bi bi-printer"></i>
            Print Abstract
          </button>
        </div>
      </div>
    </div>
  );
}
