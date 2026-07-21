// --- Mock Seed Data ---
const INITIAL_PROJECTS = [
  {
    id: "proj_1",
    title: "AI-Powered Plant Pathology Diagnostic System",
    category: "Computer Science",
    studentName: "Sophia Patel",
    grade: "11th Grade",
    school: "Lincoln High School",
    mentor: "Dr. Marcus Vance",
    award: "1st Place & Best in Category",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=800&auto=format&fit=crop",
    description: "A lightweight convolutional neural network (CNN) model optimized to run on low-power mobile devices for agricultural plant pathology detection.",
    hypothesis: "A customized mobile-optimized CNN architecture (based on MobileNetV3) can achieve greater than 95% classification accuracy on common crop leaf diseases under varying natural light conditions, providing instant diagnostics to farmers without internet connectivity.",
    methodology: [
      { step: "Data Acquisition", desc: "Compiled dataset of 8,500 leaf images of Tomato, Potato, and Apple plants from open datasets and local farms." },
      { step: "Model Architecture", desc: "Customized a MobileNetV3-Small backbone, adding custom dense layers and dropout to minimize overfitting." },
      { step: "Quantization & Porting", desc: "Applied INT8 post-training quantization to reduce model size from 45MB to 4.2MB, maintaining accuracy." },
      { step: "Field Testing", desc: "Deployed on an entry-level smartphone and tested live across 15 agricultural test sites in various weather states." }
    ],
    results: "The optimized model reached a validation accuracy of 97.2%. The inference latency on the mobile processor was 185ms. On-site farming checks demonstrated a 92% diagnostic success rate, allowing farmers to isolate infected plants days before physical signs propagated widely.",
    dataPoints: [
      { label: "Validation Accuracy", value: "97.2%" },
      { label: "Model File Size", value: "4.2 MB" },
      { label: "Inference Time", value: "185 ms" },
      { label: "Field Match Rate", value: "92.0%" }
    ]
  },
  {
    id: "proj_2",
    title: "Piezoelectric Energy Harvesting Floor Tiles",
    category: "Engineering",
    studentName: "Liam Carter & Jackson Reed",
    grade: "12th Grade",
    school: "Riverdale Technical Institute",
    mentor: "Ms. Clara Higgins",
    award: "2nd Place Award",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    description: "Designing and testing mechanical floor tiles that convert step energy in crowded corridors into electricity to run low-power emergency path displays.",
    hypothesis: "Placing custom physical tiles embedded with a parallel array of PZT ceramic piezoelectric transducers under high-traffic school hallways can generate at least 500 milliwatts per step and store enough energy to power continuous corridor safety markers.",
    methodology: [
      { step: "Tile Mechanical Design", desc: "Designed a spring-loaded wooden and polymer housing to allow 3mm of downward travel without causing tripping." },
      { step: "Transducer Configuration", desc: "Connected 12 PZT piezoelectric disks in parallel with bridge rectifiers to accumulate DC current from high frequency taps." },
      { step: "Storage System", desc: "Wired the rectified current to a bank of 5.5V supercapacitors connected to an active step-up voltage converter." },
      { step: "Live Data Analysis", desc: "Installed the prototype tile in the school's central entrance corridor for 5 consecutive school days." }
    ],
    results: "Each active compression yielded a peak output of 6.2mW. In active transition periods, the tiles accumulated a total of 780 Joules per hour. This successfully kept a connected 15-meter emergency pathway guidance strip lit throughout the school day.",
    dataPoints: [
      { label: "Output / Step", value: "6.2 mW" },
      { label: "Accumulated Energy", value: "780 J/hr" },
      { label: "System Voltage", value: "5.5 V" },
      { label: "LED Strip Runtime", value: "Continuous" }
    ]
  },
  {
    id: "proj_3",
    title: "Microplastic Bio-Filtration Chitin Membranes",
    category: "Chemistry",
    studentName: "Maya Lin",
    grade: "10th Grade",
    school: "Oakwood Prep Academy",
    mentor: "Dr. Helen Thorne",
    award: "Innovative Design Award",
    image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=800&auto=format&fit=crop",
    description: "Synthesizing bio-degradable membranes using chitin extracted from shrimp shells to filter microplastic particles out of wastewater streams.",
    hypothesis: "A membrane constructed from cross-linked chitin nanofibers will capture microplastics (down to 1 micron) with an efficiency of over 95% while maintaining a flow rate comparable to commercial polymer filters.",
    methodology: [
      { step: "Chitin Extraction", desc: "Demineralized and deproteinized crab and shrimp waste shells to extract high-purity raw chitin powder." },
      { step: "Nanofiber Synthesis", desc: "Dissolved chitin in ionic liquids and electrospun the mixture onto a conductive collector grid." },
      { step: "Cross-linking Treatment", desc: "Subjected the mesh to glutaraldehyde vapor to improve structural stability and water resistance." },
      { step: "Flow and Filtration Testing", desc: "Passed water with high-density polystyrene micro-beads through the filter and measured remaining particles via microscopy." }
    ],
    results: "The bio-composite membrane showed a microplastic retention rate of 98.4% for particles larger than 1.5 microns. The flow rate was maintained at 5.4 L/min per square meter, rivaling petroleum-based polyethersulfone (PES) filters. The membrane fully composted in soil within 35 days.",
    dataPoints: [
      { label: "Particle Capture", value: "98.4%" },
      { label: "Flow Rate", value: "5.4 L/min/m²" },
      { label: "Biodegradability", value: "35 Days" },
      { label: "Tensile Strength", value: "24.5 MPa" }
    ]
  },
  {
    id: "proj_4",
    title: "Analyzing Orbital Debris Hazards in Low Earth Orbit",
    category: "Physics",
    studentName: "Aaron Chen",
    grade: "11th Grade",
    school: "St. Jude College Preparatory",
    mentor: "Prof. Derek Vance",
    award: "3rd Place Award",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description: "A computational physics simulation mapping satellite collision paths in low Earth orbit (LEO) using public astrometry datasets.",
    hypothesis: "Incorporating orbital perturbation vectors (such as atmospheric drag and solar radiation pressure) into standard orbital calculations yields a 20% reduction in close-approach prediction errors over 7-day windows.",
    methodology: [
      { step: "Data Integration", desc: "Retrieved orbital parameters (TLEs) for 15,000 cataloged debris pieces from public databases." },
      { step: "Algorithm Design", desc: "Coded a dynamic simulation in JavaScript applying Runge-Kutta integration to calculate orbital decay." },
      { step: "Perturbation Injection", desc: "Added variable solar flux and Earth geopotential anomalies (J2 effect) into the equations of motion." },
      { step: "Historical Verification", desc: "Tested predictive calculations against known actual close-approach histories recorded by space agencies." }
    ],
    results: "The augmented dynamic simulation decreased standard orbital calculation drift by 26.5% over the 7-day predictive timeline. The calculations successfully flagged a historical satellite near-miss within 150 meters, demonstrating significant utility for orbital safety planning.",
    dataPoints: [
      { label: "Prediction Improvement", value: "26.5%" },
      { label: "Objects Simulated", value: "15,000+" },
      { label: "Calculation Window", value: "7 Days" },
      { label: "Maximum Error Margin", value: "±42 meters" }
    ]
  },
  {
    id: "proj_5",
    title: "Mycoremediation of Diesel-Contaminated Soils",
    category: "Biology",
    studentName: "Isabella Rossi",
    grade: "12th Grade",
    school: "Pinecrest High School",
    mentor: "Dr. Thomas Gellar",
    award: "Honorable Mention",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
    description: "Using white-rot fungi (Pleurotus ostreatus) to break down hazardous hydrocarbons in soil contaminated with diesel fuel.",
    hypothesis: "Soil inoculated with Pleurotus ostreatus mycelium substrate will show an 80% reduction in Total Petroleum Hydrocarbons (TPH) within 30 days compared to untreated soil.",
    methodology: [
      { step: "Soil Preparation", desc: "Prepared test soil flats contaminated with a controlled concentration of 2.0% commercial diesel fuel." },
      { step: "Inoculation Setup", desc: "Mixed inoculated grain spawn of Pleurotus ostreatus into the experimental flats at a 1:10 ratio by volume." },
      { step: "Climate Controls", desc: "Maintained a consistent moisture level (60% field capacity) and a dark, warm growth environment." },
      { step: "Hydrocarbon Testing", desc: "Extracted soil samples weekly and analyzed hydrocarbon concentration levels through solvent extraction." }
    ],
    results: "By day 30, the mycelium-treated flats demonstrated an 85.3% reduction in TPH. The control group (subjected only to natural attenuation) saw a drop of only 11.4%. The treated soil successfully supported the germination of rye grass seeds within 45 days, proving high biological restoration.",
    dataPoints: [
      { label: "Hydrocarbon Decrease", value: "85.3%" },
      { label: "Control Decrease", value: "11.4%" },
      { label: "Mycelial Spread Rate", value: "1.2 cm/day" },
      { label: "Subsequent Germination", value: "95%" }
    ]
  },
  {
    id: "proj_6",
    title: "Wearable PID-Controlled Tremor Suppressor",
    category: "Engineering",
    studentName: "Ethan Hunt & Chloe Martinez",
    grade: "12th Grade",
    school: "Valley Science Academy",
    mentor: "Dr. Evelyn Zhang",
    award: "Best Engineering Project",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop",
    description: "A wearable wristband incorporating accelerometer feedback and vibrational balancing motors to damp involuntary muscle tremors.",
    hypothesis: "A closed-loop system utilizing a PID controller and high-frequency eccentric rotating mass (ERM) motors can damp simulated Parkinsonian tremors by at least 60% in real-time.",
    methodology: [
      { step: "Hardware Assembly", desc: "Engineered a low-profile wristband using 3D printed TPU, enclosing an MPU6050 accelerometer, an Arduino Nano, and four ERM vibration motors." },
      { step: "Algorithm Design", desc: "Programmed a fast-loop proportional-integral-derivative (PID) algorithm to read tremor frequencies and output phase-shifted balancing signals." },
      { step: "Simulated Testing", desc: "Mounted the wristband onto an mechanical arm configured to wobble at variable frequencies (4 to 8 Hz)." },
      { step: "Data Recording", desc: "Logged residual acceleration values both with the PID active and deactivated." }
    ],
    results: "The wearable device successfully reduced tremor displacement by an average of 67.2% across the 4-8 Hz range. The device operated on a low battery draw of 120mA, translating to a practical continuous run-time of approximately 8 hours on a standard lithium cell.",
    dataPoints: [
      { label: "Tremor Reduction", value: "67.2%" },
      { label: "Response Latency", value: "18 ms" },
      { label: "Battery Life", value: "8.2 Hours" },
      { label: "Device Weight", value: "85 grams" }
    ]
  }
];

// --- Category Icons Mapping ---
const CATEGORY_ICONS = {
  "All": "bi-grid-fill",
  "Computer Science": "bi-cpu",
  "Engineering": "bi-gear-fill",
  "Chemistry": "bi-bezier2",
  "Physics": "bi-rocket-takeoff",
  "Biology": "bi-virus2",
  "Earth Science": "bi-globe-americas"
};

// --- Award Badges Mapping ---
const AWARD_STYLES = {
  "1st Place & Best in Category": {
    color: "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40",
    icon: "bi-trophy-fill",
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.25)]"
  },
  "2nd Place Award": {
    color: "bg-slate-300/20 text-slate-700 dark:text-slate-300 border-slate-400/40",
    icon: "bi-award-fill",
    glow: "shadow-[0_0_15px_rgba(148,163,184,0.15)]"
  },
  "3rd Place Award": {
    color: "bg-orange-600/20 text-orange-700 dark:text-orange-300 border-orange-500/40",
    icon: "bi-award",
    glow: "shadow-[0_0_15px_rgba(234,88,12,0.15)]"
  },
  "Innovative Design Award": {
    color: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/40",
    icon: "bi-lightbulb-fill",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.25)]"
  },
  "Best Engineering Project": {
    color: "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/40",
    icon: "bi-tools",
    glow: "shadow-[0_0_15px_rgba(99,102,241,0.25)]"
  },
  "Honorable Mention": {
    color: "bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/40",
    icon: "bi-star-fill",
    glow: "shadow-[0_0_15px_rgba(20,184,166,0.15)]"
  },
  "Pending Review": {
    color: "bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/40",
    icon: "bi-hourglass-split",
    glow: "shadow-none"
  }
};
