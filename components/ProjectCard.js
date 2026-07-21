function ProjectCard({ project, onClick }) {
  const award = project.award;
  const hasAward = award && award !== "Pending Review";
  const awardMeta = AWARD_STYLES[award] || AWARD_STYLES["Pending Review"];

  return (
    <div 
      onClick={onClick}
      className="glass-card h-full rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 group d-flex flex-column"
    >
      {/* Card Image Area with category tag overlay */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark tint gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-xl text-[10px] font-extrabold tracking-wider uppercase bg-slate-900/80 backdrop-blur-md text-white border border-white/10 d-flex items-center gap-1.5">
            <i className={`bi ${CATEGORY_ICONS[project.category] || "bi-tag"} text-xs text-blue-400`}></i>
            {project.category}
          </span>
        </div>

        {/* Grade tag */}
        <div className="absolute bottom-4 left-4">
          <span className="text-xs text-slate-200 font-semibold flex items-center gap-1">
            <i className="bi bi-mortarboard text-sm text-slate-300"></i>
            {project.grade}
          </span>
        </div>
      </div>

      {/* Card Body Area */}
      <div className="p-5 flex-grow d-flex flex-column">
        {/* Award badge if present */}
        {hasAward && (
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-bold mb-3 ${awardMeta.color} ${awardMeta.glow} w-fit`}>
            <i className={`bi ${awardMeta.icon}`}></i>
            {award}
          </div>
        )}

        {/* Project Title */}
        <h3 className="font-display font-bold text-lg mb-2 text-slate-900 dark:text-white leading-tight group-hover:text-blue-500 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Student & School information */}
        <div className="mt-1 mb-3 text-slate-500 dark:text-slate-400">
          <p className="text-sm font-semibold mb-0.5 text-slate-700 dark:text-slate-300 flex items-center gap-1">
            <i className="bi bi-person text-sm"></i>
            {project.studentName}
          </p>
          <p className="text-xs flex items-center gap-1">
            <i className="bi bi-building text-xs"></i>
            {project.school}
          </p>
        </div>

        {/* Mini Description snippet */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-grow">
          {project.description}
        </p>

        {/* Action Row */}
        <div className="d-flex align-items-center justify-content-between border-t border-slate-200/50 dark:border-slate-800/50 pt-3 mt-auto">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1">
            View Project Details
            <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
          </span>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
            Mentor: {project.mentor.split(' ').pop()}
          </span>
        </div>
      </div>
    </div>
  );
}
