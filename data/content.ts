export const personal = {
  name: "Thomas Delbrouck",
  tagline:
    "Student developer with a strong interest in web development, backend systems, databases, cloud deployment, and practical problem-solving.",
  email: "thomas.delbrouck@telenet.be",
  github: "https://github.com/ThomasDelbrouck1",
  status: "Open to opportunities",
  location: "Belgium",
};

export const projects = [
  {
    name: "Pokémon Viewer",
    description:
      "A TypeScript, Express and EJS web application where Pokémon and trainer data are stored in MongoDB. Includes routing, database integration, filtering/detail pages, user authentication and deployment with Docker.",
    tech: ["TypeScript", "Express", "EJS", "MongoDB", "Docker", "Auth"],
    category: "Web Application",
    status: "Shipped",
  },
  {
    name: "Beerster",
    description:
      "A Node.js/Express project where users can check in at locations and register which beers they drink there. Built with TypeScript, Express, EJS, authentication, sessions and database integration.",
    tech: ["Node.js", "TypeScript", "Express", "EJS", "Sessions", "Auth"],
    category: "Web Application",
    status: "Shipped",
  },
  {
    name: "SchoolAdmin",
    description:
      "A C#/.NET console project focused on object-oriented programming. Includes classes such as Person, Student, Course, StudyProgram, Employee and Lecturer, with inheritance, interfaces, exceptions and unit testing using MSTest.",
    tech: ["C#", ".NET", "OOP", "MSTest"],
    category: "Console App",
    status: "Shipped",
  },
  {
    name: "Cloud Deployment Project",
    description:
      "Deployed an Express application on a Hetzner VPS using Docker, Docker Compose and Traefik as a reverse proxy with HTTPS support. Also worked with GitHub Actions for automated deployment.",
    tech: ["Docker", "Traefik", "Hetzner VPS", "GitHub Actions", "HTTPS"],
    category: "DevOps",
    status: "Live",
  },
  {
    name: "Quantum ML Project",
    description:
      "Worked on a project involving Python, Qiskit, quantum neural networks and machine learning concepts using real data, in collaboration with IBM.",
    tech: ["Python", "Qiskit", "Quantum Computing", "Machine Learning"],
    category: "Research",
    status: "Completed",
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
      "GitHub",
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
    title: "Started Higher Education",
    description:
      "Enrolled in Applied Computer Science. Began learning foundational programming, OOP, and web development basics.",
    type: "education",
  },
  {
    year: "2024",
    title: "First Full-Stack Applications",
    description:
      "Built Pokémon Viewer and Beerster — hands-on experience with TypeScript, Express, EJS, MongoDB, authentication and sessions.",
    type: "project",
  },
  {
    year: "2025",
    title: "Cloud & Quantum Computing",
    description:
      "Deployed production apps on Hetzner VPS with Docker and Traefik. Collaborated on an IBM quantum machine learning project using Qiskit.",
    type: "milestone",
  },
  {
    year: "2026",
    title: "Expected Graduation",
    description:
      "On track to complete Applied Computer Science — continuing to ship practical, production-ready software.",
    type: "upcoming",
  },
] as const;
