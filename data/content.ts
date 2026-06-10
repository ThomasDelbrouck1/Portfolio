export const personal = {
  name: "Thomas Delbrouck",
  tagline:
    "I'm a student developer from Belgium who loves building things for the web. I work across the full stack — from Express APIs and databases to Docker deployments and the occasional quantum experiment.",
  email: "thomas.delbrouck@telenet.be",
  github: "https://github.com/ThomasDelbrouck1",
  status: "Open to opportunities",
  location: "Belgium",
  school: "Applied Computer Science",
};

export const projects = [
  {
    name: "Pokémon Viewer",
    description:
      "A web app for browsing Pokémon and trainer data stored in MongoDB. Built end-to-end — routing, filtering, detail pages, user auth, and Docker deployment.",
    tech: ["TypeScript", "Express", "EJS", "MongoDB", "Docker", "Auth"],
    category: "Web Application",
    status: "Shipped",
    accent: "violet",
  },
  {
    name: "Beerster",
    description:
      "Check-in app for beer enthusiasts. Users register at locations and log which beers they try. Full stack: auth, sessions, and a proper database layer.",
    tech: ["Node.js", "TypeScript", "Express", "EJS", "Sessions", "Auth"],
    category: "Web Application",
    status: "Shipped",
    accent: "violet",
  },
  {
    name: "SchoolAdmin",
    description:
      "A C#/.NET console app modelling a school system with OOP principles — inheritance, interfaces, exception handling — and a full MSTest test suite.",
    tech: ["C#", ".NET", "OOP", "MSTest"],
    category: "Console App",
    status: "Shipped",
    accent: "blue",
  },
  {
    name: "Cloud Deployment Project",
    description:
      "Took an Express app from local to production on a Hetzner VPS. Docker Compose, Traefik as reverse proxy with HTTPS, and GitHub Actions for automated deploys.",
    tech: ["Docker", "Traefik", "Hetzner VPS", "GitHub Actions", "HTTPS"],
    category: "DevOps",
    status: "Live",
    accent: "cyan",
  },
  {
    name: "Quantum ML Project",
    description:
      "Explored quantum machine learning with IBM — quantum neural networks in Qiskit applied to real datasets. A rabbit hole I genuinely enjoyed going down.",
    tech: ["Python", "Qiskit", "Quantum Computing", "Machine Learning"],
    category: "Research",
    status: "Completed",
    accent: "emerald",
  },
] as const;

export type Project = (typeof projects)[number];

export const stackCategories = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "Python", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Node.js", "Express", ".NET", "EJS", "Qiskit"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "Docker",
      "Docker Compose",
      "Traefik",
      "GitHub Actions",
      "Hetzner VPS",
      "Linux",
    ],
  },
  {
    label: "Tools & Concepts",
    items: [
      "Git",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Authentication",
      "MSTest",
      "Jest",
      "CI/CD",
      "Database Design",
    ],
  },
] as const;

export const timeline = [
  {
    year: "2023",
    title: "Started Computer Science",
    description:
      "Enrolled in Applied Computer Science at HoGent. Started from the fundamentals and picked up speed fast — algorithms, OOP, databases, and web from day one.",
    type: "education",
  },
  {
    year: "2024",
    title: "Built My First Real Apps",
    description:
      "Shipped Pokémon Viewer and Beerster as proper full-stack projects. TypeScript, Express, MongoDB, Docker, auth — suddenly everything clicked.",
    type: "project",
  },
  {
    year: "2025",
    title: "Cloud Infra & Quantum Computing",
    description:
      "Deployed a production app on Hetzner with Docker, Traefik, and CI/CD. Then went deep on quantum machine learning with IBM — Qiskit, real data, real results.",
    type: "milestone",
  },
  {
    year: "2026",
    title: "Graduation",
    description:
      "Expected to complete Applied Computer Science. Until then, still building, still learning, still shipping.",
    type: "upcoming",
  },
] as const;
