import { ResumeFile } from './types';

export const resumeFiles: Record<string, ResumeFile> = {
  'about_me.json': {
    name: 'about_me.json',
    language: 'json',
    icon: '💛',
    content: `{
  "name": "Michael Roedelbronn",
  "title": "Full-Stack Developer & Entrepreneur",
  "location": "Neuss, Germany",
  "languages": ["German (Native)", "Ukrainian (Native)", "Russian (Native)", "English (Intermediate)"],
  "summary": "A highly disciplined full-stack developer with a strong entrepreneurial background. Former international elite athlete turned business operator, now translating 8+ years of sales, operations, and asset management experience into building robust, scalable web architectures. Exceptional at bridging the gap between business logic and clean, efficient code.",
  "coreTraits": [
    "Elite Discipline & Grit",
    "Agnostic Problem Solver",
    "Business & Product-Minded",
    "Relentless Learner"
    ]
  "contact": {
    "email": "mikledanse@mail.ru",
    "github": "github.com/NoobStyleee",
    "linkedin": "linkedin.com/in/michael-roedelbronn-noobstyle/"
  },
  "summary": "Passionate junior developer specialized in building functional, secure, and responsive web applications. Driven by writing clean, modular code and continually adding new tools to my tech stack.",
  "interests": [
    "Coding Challenges",
    "Gaming",
    "Dancing",
    "Traveling"
  ]
}`
  },
  'skills.ts': {
    name: 'skills.ts',
    language: 'typescript',
    icon: '🔷',
    content: `export const frontendSkills: string[] = [
  'React.js', 
  'Next.js (App Router)', 
  'TypeScript', 
  'JavaScript (ES6+)', 
  'Tailwind CSS', 
  'HTML5/CSS3'
];

export const backendSkills: string[] = [
  'Node.js',
];

export const developerTools: string[] = [
  'Git & GitHub', 
  'Vercel',
];`
  },
  'experience.md': {
    name: 'experience.md',
    language: 'markdown',
    icon: '📝',
    content: `# Professional Experience

## Full-Stack Developer Trainee | GoIT Academy (2025 - Present)
- Completing an intensive 9-month full-stack engineering program, mastering modern web architectures, database design, and asynchronous state management.
- Acted as a key contributor in agile team projects, translating functional user requirements into clean JavaScript/TypeScript and React components.
- Developed structural backend REST APIs using Node.js/Express and designed relational/non-relational database models.

## Co-Founder & Operations Manager | Roedelbronn Markisen GmbH (2021 - Present)
- Orchestrated end-to-end business operations, client-facing sales strategies, and supply chain management for a localized B2C/B2B awning enterprise.
- Designed, optimized, and maintained internal operational workflows, honing a deep understanding of data organization, product logic, and system efficiencies.
- Managed vendor communication and negotiated high-stakes procurement contracts.

## Co-Founder & Asset Manager | MiNi Immobilien eGbR (2024 - Present)
- Co-founded a strategic real estate acquisition firm with a target portfolio scale of 100+ units (currently managing 3 active properties).
- Conducted rigorous financial modeling, data analytics, and ROI forecasting to determine high-yield asset investments.

## Certified Sales Agent | Vorwerk Germany (2017 - 2020)
- Successfully completed the rigorous corporate "Ausbildung zum Vertriebsagenten" and earned the official Diploma.
- Developed elite negotiation, direct-to-consumer communication, and behavioral psychology skills through top-tier corporate performance metrics.

## Professional Athlete & Dance Coach | International Ballroom/Latin (1999 - 2017)
- Represented Germany in global World Cups; achieved German Viezemeister honors.
- Cultivated intense psychological grit, a 15+ year habit of rigorous daily testing/iteration, and exceptional collaborative teamwork dynamics.
- Mentored and trained youth competitive teams, refining leadership and clear, constructive communication.`
    },
  
  'projects.json': {
    name: 'projects.json',
    language: 'json',
    icon: '🚀',
    content: `[
  {
    "title": "DevSpace Portfolio Hub",
    "techStack": ["Next.js", "TypeScript", "CSS Modules"],
    "description": "An interactive, web-based VS Code clone designed to showcase my engineering skills, professional history, and project details natively in-browser.",
    "liveLink": "https://my-resume-mikledansee-9799s-projects.vercel.app/",
    "githubRepo": "https://github.com/NoobStyleee/my-resume"
  },
  {
    "title": "Note-Hub",
    "techStack": ["React", "Node.js", "Express", "MongoDB"],
    "description": "A full-stack architecture note-taking application featuring secure user authentication. Supports full CRUD operations, protected API routes, and synchronized database session management.",
    "liveLink": "https://09-auth-delta-seven.vercel.app/",
    "githubRepo": "https://github.com/NoobStyleee/09-auth"
  },
  {
    "title": "меблерія-project",
    "techStack": ["HTML5", "CSS3", "JavaScript", "Swiper.js", "iziToast"],
    "description": "A collaborative, multi-page e-commerce platform built within an agile team framework. Engineered utilizing modular vanilla JavaScript logic and integrated third-party libraries for dynamic carousels and async state notifications.",
    "liveLink": "https://vitaliypolets.github.io/webcrafters-project-02/",
    "githubRepo": "https://github.com/vitaliypolets/webcrafters-project-02"
  },
  {
    "title": "EcoTote",
    "techStack": ["HTML5", "CSS3", "BEM Methodology"],
    "description": "A fully responsive landing page for a sustainable brand, built with semantic HTML structures and modern CSS layout techniques ensuring cross-browser layout pixel-perfection.",
    "liveLink": "https://noobstyleee.github.io/system-eight-team-project/",
    "githubRepo": "https://github.com/NoobStyleee/system-eight-team-project"
  }
]`
  }
};