function DashboardView({ projects, stats, onSelectProject }) {
  // Find top winners
  const awardWinners = React.useMemo(() => {
    return projects.filter(p => p.award && p.award !== "Pending Review");
  }, [projects]);

  // Category distribution counts
  const maxCount = Math.max(stats.CS, stats.Engineering, stats.Bio, stats.Chem, stats.Physics, stats.Earth, 1);

  return (
    <div className="fade-in space-y-8">
      <div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 dark:text-white mb-2">STEM Showcase Analytics</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Real-time indicators, award tallies, and field-wide metrics.</p>
      </div>

      {/* Stats Cards Row */}
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="glass-card rounded-[24px] p-5 shadow-sm d-flex align-items-center gap-4">
            <div className="bg-blue-600/10 text-blue-600 dark:text-blue-400 p-3.5 rounded-2xl flex items-center justify-center">
              <i className="bi bi-journal-code text-2xl"></i>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Total Submissions</h4>
              <p className="font-display font-extrabold text-3xl mb-0 text-slate-900 dark:text-white">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="glass-card rounded-[24px] p-5 shadow-sm d-flex align-items-center gap-4">
            <div className="bg-amber-500/10 text-amber-500 p-3.5 rounded-2xl flex items-center justify-center">
              <i className="bi bi-trophy text-2xl"></i>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Award Winners</h4>
              <p className="font-display font-extrabold text-3xl mb-0 text-slate-900 dark:text-white">{stats.awarded}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="glass-card rounded-[24px] p-5 shadow-sm d-flex align-items-center gap-4">
            <div className="bg-violet-600/10 text-violet-600 dark:text-violet-400 p-3.5 rounded-2xl flex items-center justify-center">
              <i className="bi bi-building-fill-check text-2xl"></i>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Registered Schools</h4>
              <p className="font-display font-extrabold text-3xl mb-0 text-slate-900 dark:text-white">{stats.schoolsCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Category Chart Card */}
        <div className="col-12 col-lg-7">
          <div className="glass-card rounded-[28px] p-5 md:p-6 shadow-sm h-full">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <i className="bi bi-pie-chart text-blue-500"></i>
              Submissions by Category
            </h3>

            <div className="space-y-4 pt-2">
              {[
                { name: "Computer Science", count: stats.CS, color: "bg-blue-500" },
                { name: "Engineering", count: stats.Engineering, color: "bg-indigo-500" },
                { name: "Biology", count: stats.Bio, color: "bg-green-500" },
                { name: "Chemistry", count: stats.Chem, color: "bg-yellow-500" },
                { name: "Physics", count: stats.Physics, color: "bg-purple-500" },
                { name: "Earth Science", count: stats.Earth, color: "bg-teal-500" }
              ].map(cat => {
                const percentage = (cat.count / maxCount) * 100;
                return (
                  <div key={cat.name}>
                    <div className="d-flex justify-content-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                      <span>{cat.name}</span>
                      <span>{cat.count} {cat.count === 1 ? 'project' : 'projects'}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div 
                        className={`${cat.color} h-full rounded-full transition-all duration-1000`} 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Award Board Leaderboard */}
        <div className="col-12 col-lg-5">
          <div className="glass-card rounded-[28px] p-5 md:p-6 shadow-sm h-full">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <i className="bi bi-star-fill text-amber-500"></i>
              Honorees & Award Board
            </h3>

            {awardWinners.length > 0 ? (
              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
                {awardWinners.map(w => {
                  const meta = AWARD_STYLES[w.award] || AWARD_STYLES["Pending Review"];
                  return (
                    <div 
                      key={w.id}
                      onClick={() => onSelectProject(w)}
                      className="p-3 bg-slate-200/30 dark:bg-slate-950/40 hover:bg-slate-200/60 dark:hover:bg-slate-950/80 border border-slate-300/30 dark:border-slate-800/30 rounded-2xl cursor-pointer transition-all d-flex gap-3 align-items-center"
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${meta.color}`}>
                        <i className={`bi ${meta.icon} text-sm`}></i>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wide leading-none mb-1">
                          {w.award}
                        </h4>
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate mb-0.5">{w.title}</p>
                        <span className="text-[11px] text-slate-500 font-semibold">{w.studentName} &bull; {w.grade}</span>
                      </div>
                      <i className="bi bi-chevron-right text-slate-400"></i>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <i className="bi bi-award text-4xl text-slate-300 mb-2"></i>
                <p className="text-sm text-slate-500 mb-0">No award winners declared yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
