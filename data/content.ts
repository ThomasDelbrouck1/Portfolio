export const personal = {
  name: "Thomas Delbrouck",
  tagline:
    "Graduaat Programmeren student from Belgium with production experience across the full stack — TypeScript APIs, database design, containerised cloud deployments, and quantum ML research. Currently sharpening my Python and data engineering skills ahead of a software internship at BASF.",
  email: "delbrouck.thomas4@gmail.com",
  github: "https://github.com/ThomasDelbrouck1",
  status: "Open to opportunities",
  location: "Belgium",
  school: "Graduaat Programmeren",
  // cv: "/cv.pdf", // uncomment and add your PDF to public/cv.pdf when ready
};

export const nowBuilding = [
  { label: "BASF internship prep", tech: "Python · Dash · data tooling" },
  { label: "This portfolio", tech: "Next.js · Vercel" },
] as const;

export interface Project {
  name: string;
  description: string;
  tech: readonly string[];
  category: string;
  status: string;
  accent: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: "Internship Blog",
    description:
      "A Next.js and Supabase platform where students document their internship journey over time — structured posts, mentor feedback, and ongoing support throughout the internship period.",
    tech: ["Next.js", "TypeScript", "Supabase", "SQL"],
    category: "Personal Project",
    status: "Production",
    accent: "indigo",
    repo: "https://github.com/DVdBdev/blog-app",
  },
  {
    name: "Pokémon Viewer",
    description:
      "A web app for browsing Pokémon and trainer data stored in MongoDB. Built end-to-end — routing, filtering, detail pages, user auth, and Docker deployment.",
    tech: ["TypeScript", "Express", "EJS", "MongoDB", "Docker", "Auth"],
    category: "Web Application",
    status: "Shipped",
    accent: "violet",
    repo: "https://github.com/ThomasDelbrouck1/project_webOntwikkeling_2025",
  },
  {
    name: "Beerster",
    description:
      "Check-in app for beer enthusiasts. Users register at locations and log which beers they try. Full stack: auth, sessions, and a proper database layer.",
    tech: ["Node.js", "TypeScript", "Express", "EJS", "Sessions", "Auth"],
    category: "Web Application",
    status: "Shipped",
    accent: "violet",
    repo: "https://github.com/ThomasDelbrouck1/DoublePump2.0",
  },
  {
    name: "SchoolAdmin",
    description:
      "A C#/.NET console app modelling a school system with OOP principles — inheritance, interfaces, exception handling — and a full MSTest test suite.",
    tech: ["C#", ".NET", "OOP", "MSTest"],
    category: "Console App",
    status: "Shipped",
    accent: "blue",
    // Private repository
  },
  {
    name: "Cloud Deployment Project",
    description:
      "Took an Express app from local to production on a Hetzner VPS. Docker Compose, Traefik as reverse proxy with HTTPS, and GitHub Actions for automated deploys.",
    tech: ["Docker", "Traefik", "Hetzner VPS", "GitHub Actions", "HTTPS"],
    category: "DevOps",
    status: "Live",
    accent: "cyan",
    repo: "https://github.com/ThomasDelbrouck1/CloudProject",
  },
  {
    name: "Quantum ML Project",
    description:
      "Explored quantum machine learning with IBM — quantum neural networks in Qiskit applied to real datasets. A rabbit hole I genuinely enjoyed going down.",
    tech: ["Python", "Qiskit", "Quantum Computing", "Machine Learning"],
    category: "Research",
    status: "Completed",
    accent: "emerald",
    // Private repository
  },
];

export const stackItems = [
  { name: "TypeScript",     category: "Language"  },
  { name: "Python",         category: "Language"  },
  { name: "JavaScript",     category: "Language"  },
  { name: "C#",             category: "Language"  },
  { name: "SQL",            category: "Language"  },
  { name: "Next.js",        category: "Framework" },
  { name: "React",          category: "Framework" },
  { name: "Express",        category: "Framework" },
  { name: "Node.js",        category: "Framework" },
  { name: ".NET",           category: "Framework" },
  { name: "MongoDB",        category: "Database"  },
  { name: "MySQL",          category: "Database"  },
  { name: "Supabase",       category: "Database"  },
  { name: "Docker",         category: "DevOps"    },
  { name: "GitHub Actions", category: "DevOps"    },
  { name: "Linux",          category: "DevOps"    },
  { name: "Hetzner VPS",    category: "DevOps"    },
  { name: "Git",            category: "Tooling"   },
  { name: "REST APIs",      category: "Tooling"   },
  { name: "CI/CD",          category: "Tooling"   },
  { name: "Auth / JWT",     category: "Tooling"   },
  { name: "Testing",        category: "Tooling"   },
  { name: "Qiskit",         category: "ML / AI"   },
  { name: "Quantum ML",     category: "ML / AI"   },
] as const;

export const timeline = [
  {
    year: "2022 – 2024",
    title: "Studied Bachelor Electronics-ICT",
    description:
      "Studied Electronics-ICT at bachelor level for two years, where I built a broader technical foundation before switching to a more practical programming-focused path. This gave me early exposure to software, hardware, networking, electronics, and general IT concepts.",
    type: "education",
    tags: ["Bachelor", "Electronics-ICT", "Software", "Hardware", "Networking", "IT fundamentals"],
  },
  {
    year: "Sep 2024",
    title: "Started Graduaat Programmeren at AP",
    description:
      "Started the Graduaat Programmeren at AP Hogeschool after two years in a bachelor Electronics-ICT program. Continued building my foundation in software development, web development, databases, object-oriented programming, and project-based work, with a stronger focus on practical programming.",
    type: "education",
    tags: ["AP Hogeschool", "Programming", "Web development", "Databases", "C#", "JavaScript"],
  },
  {
    year: "2025",
    title: "IBM Quantum Machine Learning Case",
    description:
      "Worked on an IBM case focused on quantum machine learning. Used Python and Qiskit to explore quantum neural networks, train models on real data, and compare quantum-inspired approaches with classical machine learning concepts.",
    type: "project",
    tags: ["IBM", "Python", "Qiskit", "Quantum machine learning", "QNN", "Machine learning"],
  },
  {
    year: "Now",
    title: "Growing toward data & ML systems",
    description:
      "Currently focused on becoming stronger as a junior developer, with a growing interest in data engineering, machine learning systems, internal tools, dashboards, and clean full-stack applications.",
    type: "milestone",
    tags: ["Data engineering", "ML systems", "Full-stack", "Internal tools", "Python"],
  },
  {
    year: "Sep 2026",
    title: "Internship at BASF",
    description:
      "Starting my internship at BASF, where I will work on practical software and data-related tooling in a professional environment. The internship is expected to involve Python, Dash, internal tools, dashboards, testing automation, and software that supports real business workflows.",
    type: "upcoming",
    tags: ["Internship", "BASF", "Python", "Dash", "Data tooling", "Internal tools"],
  },
  {
    year: "Jan 2027",
    title: "Completing BASF Internship",
    description:
      "Expected to complete my BASF internship in January after working on self-service tooling, dashboard interfaces, testing automation, and data/AI workflow configuration. The experience should give me real insight into how software is built and used inside a large industrial company.",
    type: "upcoming",
    tags: ["BASF", "Internship", "Data tooling", "Testing automation", "Dashboards"],
  },
  {
    year: "2027",
    title: "Expected Graduation",
    description:
      "Expected to graduate from Graduaat Programmeren at AP Hogeschool after completing my internship and final school requirements. Until then, still building, still learning, still shipping.",
    type: "upcoming",
    tags: ["AP Hogeschool", "Graduation", "Junior developer", "Software development"],
  },
] as const;
