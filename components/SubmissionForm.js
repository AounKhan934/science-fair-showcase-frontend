function RegisterView({ onSubmit, onCancel }) {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    title: "",
    category: "Computer Science",
    studentName: "",
    grade: "11th Grade",
    school: "",
    mentor: "",
    description: "",
    hypothesis: "",
    methodologyStep1: "",
    methodologyStep2: "",
    methodologyStep3: "",
    methodologyStep4: "",
    results: "",
    metricLabel: "",
    metricValue: ""
  });

  const [errors, setErrors] = React.useState({});

  const validateStep = (currentStep) => {
    const stepErrors = {};
    if (currentStep === 1) {
      if (!form.title.trim()) stepErrors.title = "Project Title is required";
      if (!form.studentName.trim()) stepErrors.studentName = "Student Name is required";
      if (!form.school.trim()) stepErrors.school = "School Name is required";
      if (!form.mentor.trim()) stepErrors.mentor = "Mentor Name is required";
    } else if (currentStep === 2) {
      if (!form.description.trim()) stepErrors.description = "Abstract/Description is required";
      if (form.description.length < 30) stepErrors.description = "Description must be at least 30 characters";
      if (!form.hypothesis.trim()) stepErrors.hypothesis = "Hypothesis statement is required";
    } else if (currentStep === 3) {
      if (!form.methodologyStep1.trim()) stepErrors.methodologyStep1 = "Methodology Step 1 is required";
      if (!form.results.trim()) stepErrors.results = "Results statement is required";
    }
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleFieldChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    // Construct standard structure from form state
    const generatedId = "proj_" + Date.now();
    const categoryImages = {
      "Computer Science": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      "Engineering": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      "Chemistry": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
      "Physics": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      "Biology": "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
      "Earth Science": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
    };

    const newProject = {
      id: generatedId,
      title: form.title,
      category: form.category,
      studentName: form.studentName,
      grade: form.grade,
      school: form.school,
      mentor: form.mentor,
      award: "Pending Review",
      image: categoryImages[form.category] || "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      description: form.description,
      hypothesis: form.hypothesis,
      methodology: [
        { step: "Initial Phase", desc: form.methodologyStep1 },
        ...(form.methodologyStep2 ? [{ step: "Assembly & Build", desc: form.methodologyStep2 }] : []),
        ...(form.methodologyStep3 ? [{ step: "Testing & Validation", desc: form.methodologyStep3 }] : []),
        ...(form.methodologyStep4 ? [{ step: "Refining Outcomes", desc: form.methodologyStep4 }] : [])
      ],
      results: form.results,
      dataPoints: [
        ...(form.metricLabel && form.metricValue ? [{ label: form.metricLabel, value: form.metricValue }] : []),
        { label: "Review Status", value: "Awaiting Jury" }
      ]
    };

    onSubmit(newProject);
  };

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 dark:text-white">Register a Project</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Register your experiment in the competition index.</p>
      </div>

      {/* Form Wizard Progress Indicator */}
      <div className="glass-card rounded-2xl p-4 mb-6 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step {step} of 3</span>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {step === 1 && "General Student Details"}
            {step === 2 && "Scientific Core Details"}
            {step === 3 && "Execution & Findings Summary"}
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-350" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form container */}
      <form onSubmit={handleSubmit} className="glass-card rounded-[28px] p-5 md:p-8 shadow-md space-y-6">
        
        {step === 1 && (
          <div className="fade-in space-y-4">
            <h3 className="font-display font-semibold text-lg text-slate-950 dark:text-white pb-2 border-b border-slate-200/50 dark:border-slate-800/50">
              Researcher Information
            </h3>
            
            {/* Project Title */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Project Title</label>
              <input 
                type="text"
                value={form.title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                placeholder="e.g. Bio-inspired Nano Filtration"
                className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.title ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.title}</p>}
            </div>

            {/* Category & Grade */}
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => handleFieldChange("category", e.target.value)}
                  className="form-select w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm py-3 px-4 rounded-xl dark:text-slate-300 focus:ring-2 focus:ring-blue-500"
                >
                  <option>Computer Science</option>
                  <option>Engineering</option>
                  <option>Chemistry</option>
                  <option>Physics</option>
                  <option>Biology</option>
                  <option>Earth Science</option>
                </select>
              </div>
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Grade Level</label>
                <select
                  value={form.grade}
                  onChange={(e) => handleFieldChange("grade", e.target.value)}
                  className="form-select w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm py-3 px-4 rounded-xl dark:text-slate-300 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option>9th Grade</option>
                  <option>10th Grade</option>
                  <option>11th Grade</option>
                  <option>12th Grade</option>
                </select>
              </div>
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Lead Researcher(s)</label>
              <input 
                type="text"
                value={form.studentName}
                onChange={(e) => handleFieldChange("studentName", e.target.value)}
                placeholder="e.g. Maya Lin"
                className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.studentName ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:text-white`}
              />
              {errors.studentName && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.studentName}</p>}
            </div>

            {/* Institution/School & Mentor */}
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">School</label>
                <input 
                  type="text"
                  value={form.school}
                  onChange={(e) => handleFieldChange("school", e.target.value)}
                  placeholder="e.g. Oakwood Academy"
                  className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.school ? "border-red-500 ring-2 ring-red-500/20/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
                />
                {errors.school && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.school}</p>}
              </div>
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Jury Advisor / Mentor</label>
                <input 
                  type="text"
                  value={form.mentor}
                  onChange={(e) => handleFieldChange("mentor", e.target.value)}
                  placeholder="e.g. Dr. Helen Thorne"
                  className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.mentor ? "border-red-500 ring-2 ring-red-500/20/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
                />
                {errors.mentor && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i class="bi bi-exclamation-triangle-fill me-1"></i>{errors.mentor}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in space-y-4">
            <h3 className="font-display font-semibold text-lg text-slate-950 dark:text-white pb-2 border-b border-slate-200/50 dark:border-slate-800/50">
              Scientific Foundation
            </h3>

            {/* Abstract Description */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Abstract / Summary Description</label>
              <textarea 
                rows="4"
                value={form.description}
                onChange={(e) => handleFieldChange("description", e.target.value)}
                placeholder="Summarize the core premise, goals, and significance of your project..."
                className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.description ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
              ></textarea>
              {errors.description && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.description}</p>}
            </div>

            {/* Hypothesis */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Hypothesis Statement</label>
              <textarea 
                rows="3"
                value={form.hypothesis}
                onChange={(e) => handleFieldChange("hypothesis", e.target.value)}
                placeholder="e.g. If white-rot fungi is introduced to diesel soil, then hydrocarbon rates will drop..."
                className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.hypothesis ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
              ></textarea>
              {errors.hypothesis && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.hypothesis}</p>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="fade-in space-y-4">
            <h3 className="font-display font-semibold text-lg text-slate-950 dark:text-white pb-2 border-b border-slate-200/50 dark:border-slate-800/50">
              Execution & Outcomes
            </h3>

            {/* Methodology Step 1 */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Methodology: Setup (Step 1)*</label>
              <input 
                type="text"
                value={form.methodologyStep1}
                onChange={(e) => handleFieldChange("methodologyStep1", e.target.value)}
                placeholder="e.g. Demineralized crab and shrimp waste shells..."
                className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.methodologyStep1 ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:text-white`}
              />
              {errors.methodologyStep1 && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.methodologyStep1}</p>}
            </div>

            {/* Optional Methodology Steps */}
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Testing/Assembly (Step 2 - Opt)</label>
                <input 
                  type="text"
                  value={form.methodologyStep2}
                  onChange={(e) => handleFieldChange("methodologyStep2", e.target.value)}
                  placeholder="e.g. Connected transducers in parallel..."
                  className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                />
              </div>
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Refining (Step 3 - Opt)</label>
                <input 
                  type="text"
                  value={form.methodologyStep3}
                  onChange={(e) => handleFieldChange("methodologyStep3", e.target.value)}
                  placeholder="e.g. Subjected mesh to glutaraldehyde vapor..."
                  className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                />
              </div>
            </div>

            {/* Results statement */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Results & Conclusion</label>
              <textarea 
                rows="3"
                value={form.results}
                onChange={(e) => handleFieldChange("results", e.target.value)}
                placeholder="Provide a final summary statement of your scientific findings..."
                className={`w-full bg-slate-100 dark:bg-slate-900 border ${errors.results ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 dark:border-slate-800"} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
              ></textarea>
              {errors.results && <p className="text-red-500 text-xs mt-1.5 font-semibold"><i className="bi bi-exclamation-triangle-fill me-1"></i>{errors.results}</p>}
            </div>

            {/* Mock core data point key/value */}
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Core Metric Label (Opt)</label>
                <input 
                  type="text"
                  value={form.metricLabel}
                  onChange={(e) => handleFieldChange("metricLabel", e.target.value)}
                  placeholder="e.g. Capture Efficiency"
                  className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:text-white"
                />
              </div>
              <div className="col-12 col-sm-6">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Metric Value (Opt)</label>
                <input 
                  type="text"
                  value={form.metricValue}
                  onChange={(e) => handleFieldChange("metricValue", e.target.value)}
                  placeholder="e.g. 98.4%"
                  className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="d-flex justify-content-between border-t border-slate-200/50 dark:border-slate-800 pt-4 mt-6">
          <div>
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-outline-secondary rounded-xl text-sm font-semibold px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
          </div>

          <div className="d-flex gap-2">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="btn btn-outline-primary rounded-xl text-sm font-semibold px-4 py-2 hover:bg-blue-500/10/10"
              >
                <i className="bi bi-chevron-left me-1"></i>Back
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary rounded-xl text-sm font-semibold px-4 py-2 shadow-lg shadow-blue-500/20"
              >
                Next<i className="bi bi-chevron-right ms-1"></i>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success rounded-xl text-sm font-semibold px-4 py-2 shadow-lg shadow-emerald-500/20"
              >
                Submit Project<i className="bi bi-check-lg ms-1"></i>
              </button>
            )}
          </div>
        </div>

      </form>
    </div>
  );
}
