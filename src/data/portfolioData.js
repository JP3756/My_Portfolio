/**
 * Portfolio Content Configuration
 * Customize this file to personalize your portfolio
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: "John Paolo Melijor Cabaluna",
    title: "IT Student & Aspiring Full-Stack Developer",
    tagline: "A service-oriented individual passionate about technology and leadership",
    email: "cabalunajp7@gmail.com",
    location: "Brgy. Buhisan, Cebu City 6000",
    phone: "0960-6079-804",
    avatar: `${process.env.PUBLIC_URL}/avatar.jpg`, // Your professional photo
  },

  // About Section
  about: {
    description: `A service-oriented individual currently pursuing a Bachelor of Science in Information Technology at Don Bosco Technical College. Possesses strong leadership and communication skills, honed through active involvement in various extracurricular activities. Known for being adaptable, eager to learn, and passionate about inspiring and supporting others through collaborative leadership and teamwork. Motivated to apply these strengths in dynamic roles that encourage cooperation, innovation, and personal and professional development.`,
    highlights: [
      "Executive Audit — Don Bosco Supreme Student Council",
      "Strong leadership and public relations experience",
      "Active volunteer in community outreach programs",
      "Excellent team collaboration and communication skills",
      "Passionate about continuous learning and personal growth"
    ]
  },

  // Skills Section
  skills: {
    languages: [
      { name: "JavaScript", level: 75 },
      { name: "HTML & CSS", level: 85 },
      { name: "Python", level: 65 },
      { name: "Java", level: 60 },
      { name: "SQL", level: 70 },
    ],
    frameworks: [
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "Bootstrap", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
    tools: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 85 },
      { name: "Microsoft Office", level: 90 },
      { name: "Google Workspace", level: 85 },
      { name: "Canva", level: 80 },
    ],
    soft: [
      "Leadership",
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Effective Communication",
      "Critical Thinking",
      "Adaptability"
    ]
  },

  // Projects Section
  projects: [
    {
      id: 1,
      title: "Professional Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Node.js. Features dark/light mode, smooth animations, contact form with backend validation, and professional design showcasing skills and projects.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
      image: "/projects/portfolio.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: true
    },
    {
      id: 2,
      title: "Student Council Management System",
      description: "Digital platform for managing student council activities, events, and communications. Streamlines organizational workflows and enhances transparency in student governance.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/projects/council.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/council-system",
      featured: true
    },
    {
      id: 3,
      title: "Community Outreach Tracker",
      description: "Web application to track and manage volunteer activities, outreach programs, and community engagement initiatives. Helps coordinate events and monitor participation.",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/projects/outreach.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/outreach-tracker",
      featured: false
    },
    {
      id: 4,
      title: "Personal Blog & Learning Journal",
      description: "A platform to document learning journey, share insights on technology, leadership, and student life. Features markdown support and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Markdown"],
      image: "/projects/blog.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/blog",
      featured: false
    }
  ],

  // Social Links
  social: {
    github: "https://github.com/JP3756",
    linkedin: "https://linkedin.com/in/jpcabaluna",
    twitter: "https://facebook.com/jp.cabaluna",
    email: "mailto:cabalunajp7@gmail.com",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]
};
