import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  site_config: {
    title: "Full Stack Developer Portfolio",
    owner_name: "Ebad Furqan",
    role: "Senior Full Stack Engineer",
    experience_years: 6,
    theme: {
      mode: "dark",
      primary_color: "#00E5FF",
      secondary_color: "#121212",
      font_family: "Inter, sans-serif"
    },
    seo: {
      description: "Portfolio of a Senior Full Stack Developer with 6+ years of experience in scalable web architecture.",
      keywords: ["Full Stack", "React", "Node.js", "Cloud Architecture", "Senior Developer"]
    }
  },
  navigation: [
    { label: "Home", link: "#hero" },
    { label: "About", link: "#about" },
    { label: "Tech Stack", link: "#skills" },
    { label: "Experience", link: "#work-history" },
    { label: "Projects", link: "#projects" },
    { label: "Digital Resume", link: "/resume-view" },
    { label: "Contact", link: "#contact" }
  ],
  sections: {
    hero: {
      headline: "Building Scalable Digital Solutions.",
      sub_headline: "Senior Full Stack Developer with 6+ years of experience transforming complex requirements into robust production software.",
      cta_primary: { text: "View My Work", link: "#projects" },
      cta_secondary: { text: "Contact Me", link: "#contact" },
      availability_status: "Open to Contracts"
    },
    about: {
      summary: "I specialize in end-to-end development, bridging the gap between elegant frontend interfaces and high-performance backend architecture. My focus is on clean code, scalability, and developer experience.",
      stats: [
        { label: "Years Experience", value: "6+" },
        { label: "Projects Delivered", value: "40+" },
        { label: "Companies Served", value: "12" }
      ]
    },
    skills: {
      frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Python (Django/FastAPI)", "Go", "GraphQL", "REST APIs"],
      database: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"],
      devops: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"]
    },
    work_history: [
      {
        id: 1,
        company: "InnovateX Systems",
        role: "Senior Full Stack Engineer",
        period: "Jan 2023 - Present",
        description: "Leading the architectural vision and development of enterprise-scale cloud applications. Managing a cross-functional team of developers to deliver high-performance solutions.",
        achievements: [
          "Architected and deployed a microservices ecosystem on AWS Lambda, handling 1M+ daily requests.",
          "Reduced infrastructure costs by 35% through containerization (Docker/Kubernetes) and resource optimization.",
          "Spearheaded the adoption of Next.js 14, improving SEO and reducing First Contentful Paint by 40%."
        ]
      },
      {
        id: 2,
        company: "Nexus Digital Solutions",
        role: "Full Stack Developer",
        period: "Mar 2021 - Dec 2022",
        description: "Core developer for flagship SaaS products, focusing on backend scalability and frontend performance. Collaborated closely with product managers to define feature roadmaps.",
        achievements: [
          "Developed a real-time analytics dashboard using React, D3.js, and WebSockets.",
          "Optimized PostgreSQL database schemas and queries, improving data retrieval speeds by 60%.",
          "Implemented robust authentication systems (OAuth2, JWT) enhancing application security."
        ]
      },
      {
        id: 3,
        company: "Creative Pulse Agency",
        role: "Frontend Developer",
        period: "Jun 2019 - Feb 2021",
        description: "Focused on delivering pixel-perfect, responsive web interfaces for diverse client projects. Acted as the bridge between design and engineering teams.",
        achievements: [
          "Built and launched 15+ custom websites using React and Headless CMS platforms.",
          "Improved accessibility (WCAG 2.1) across client sites, ensuring compliance and broader reach.",
          "Automated frontend testing workflows, reducing bug reports in production by 25%."
        ]
      }
    ],
    projects: [
      {
        title: "SaaS Analytics Dashboard",
        tech_stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
        description: "Real-time data visualization platform for marketing metrics.",
        live_link: "https://example.com",
        repo_link: "https://github.com/example/repo",
        image_placeholder: "https://placehold.co/600x400/1e1e1e/00E5FF?text=Analytics+Dashboard"
      },
      {
        title: "E-Commerce API Architecture",
        tech_stack: ["NestJS", "MongoDB", "Docker"],
        description: "A scalable REST API handling 10k concurrent requests.",
        live_link: null,
        repo_link: "https://github.com/example/api",
        image_placeholder: "https://placehold.co/600x400/1e1e1e/00E5FF?text=API+Architecture"
      },
      {
        title: "AI Content Studio",
        tech_stack: ["Next.js", "Gemini API", "TypeScript", "Tailwind"],
        description: "Generative AI platform for automated blog post and social media content creation with SEO optimization.",
        live_link: "https://example.com",
        repo_link: "https://github.com/example/ai-studio",
        image_placeholder: "https://placehold.co/600x400/1e1e1e/00E5FF?text=AI+Content+Studio"
      },
      {
        title: "TaskFlow Pro",
        tech_stack: ["React", "Redux Toolkit", "Firebase", "DnD Kit"],
        description: "Enterprise-grade project management tool featuring real-time collaboration and kanban boards.",
        live_link: "https://example.com",
        repo_link: "https://github.com/example/taskflow",
        image_placeholder: "https://placehold.co/600x400/1e1e1e/00E5FF?text=TaskFlow+Pro"
      },
      {
        title: "DeFi Asset Tracker",
        tech_stack: ["Vue.js", "Web3.js", "Go", "Redis"],
        description: "Cryptocurrency portfolio tracker aggregating data from multiple exchanges and wallets in real-time.",
        live_link: null,
        repo_link: "https://github.com/example/defi-tracker",
        image_placeholder: "https://placehold.co/600x400/1e1e1e/00E5FF?text=DeFi+Tracker"
      },
      {
        title: "MediConnect Portal",
        tech_stack: ["Angular", "RxJS", ".NET Core", "SQL Server"],
        description: "HIPAA-compliant patient portal for booking appointments and viewing medical records.",
        live_link: "https://example.com",
        repo_link: null,
        image_placeholder: "https://placehold.co/600x400/1e1e1e/00E5FF?text=MediConnect"
      }
    ],
    digital_resume: {
      feature_enabled: true,
      layout: "standard-a4",
      downloadable_pdf: true,
      sections_included: ["Contact Info", "Summary", "Skills", "Experience", "Education", "Certifications"]
    },
    contact: {
      email: "dev@example.com",
      form_fields: ["Name", "Email", "Project Type", "Budget", "Message"],
      socials: {
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
        twitter: "https://twitter.com/example"
      }
    }
  }
};

export const AI_SYSTEM_INSTRUCTION = `
You are the AI Assistant for Ebad Furqan's personal portfolio website.
Your goal is to professionally represent Ebad to potential recruiters and clients.
Answer questions based STRICTLY on the following portfolio data.
If asked about contact info, guide them to the contact section or provide the email: ${PORTFOLIO_DATA.sections.contact.email}.

Data:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

Tone: Professional, confident, slightly technical but accessible.
Keep responses concise (under 3 sentences unless asked for detail).
`;