export interface Skill {
  name: string;
  icon: string; // Path to icon/logo image
  category: 'frontend' | 'styling' | 'framework' | 'tool' | 'other';
}

export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[]; // Array of image paths
  demoLink?: string;
  repoLink: string;
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

// Personal Information - Update this with your details
export const personalInfo: PersonalInfo = {
  name: "Hassan",
  title: "Frontend Developer",
  description: "Passionate Frontend Developer specializing in building exceptional digital experiences. I create responsive, accessible, and performant web applications using modern technologies and best practices.",
  profileImage: "/profile.svg", // Changed to SVG placeholder - replace with your photo
  email: "hassan@example.com", // Update with your email
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
};

// Skills Array - Add/Remove/Update your skills here
export const skills: Skill[] = [
  // Core Frontend
  { name: "HTML5", icon: "/skills/html.svg", category: "frontend" },
  { name: "CSS3", icon: "/skills/css.svg", category: "frontend" },
  { name: "JavaScript", icon: "/skills/javascript.svg", category: "frontend" },
  { name: "TypeScript", icon: "/skills/typescript.svg", category: "frontend" },
  
  // Styling
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg", category: "styling" },
  { name: "Sass", icon: "/skills/sass.svg", category: "styling" },
  { name: "Bootstrap", icon: "/skills/bootstrap.svg", category: "styling" },
  
  // Frameworks & Libraries
  { name: "React", icon: "/skills/react.svg", category: "framework" },
  { name: "Next.js", icon: "/skills/nextjs.svg", category: "framework" },
  { name: "Vue.js", icon: "/skills/vue.svg", category: "framework" },
  { name: "Nuxt.js", icon: "/skills/nuxt.svg", category: "framework" },
  { name: "Angular", icon: "/skills/angular.svg", category: "framework" },
  
  // Tools & Others
  { name: "Git", icon: "/skills/git.svg", category: "tool" },
  { name: "GitHub", icon: "/skills/github.svg", category: "tool" },
  { name: "Webpack", icon: "/skills/webpack.svg", category: "tool" },
  { name: "Vite", icon: "/skills/vite.svg", category: "tool" },
  { name: "npm", icon: "/skills/npm.svg", category: "tool" },
  { name: "Figma", icon: "/skills/figma.svg", category: "tool" },
  { name: "Redux", icon: "/skills/redux.svg", category: "framework" },
  { name: "jQuery", icon: "/skills/jquery.svg", category: "framework" },
  { name: "Material-UI", icon: "/skills/mui.svg", category: "styling" },
  { name: "Styled Components", icon: "/skills/styled-components.svg", category: "styling" },
  { name: "GraphQL", icon: "/skills/graphql.svg", category: "other" },
  { name: "REST API", icon: "/skills/api.svg", category: "other" },
  { name: "Responsive Design", icon: "/skills/responsive.svg", category: "frontend" },
  { name: "Accessibility", icon: "/skills/accessibility.svg", category: "frontend" },
];

// Projects Array - Add/Remove/Update your projects here
export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, checkout process, and user authentication. Built with modern technologies for optimal performance.",
    images: ["/projects/ecommerce-1.svg", "/projects/ecommerce-2.svg"],
    demoLink: "https://demo-ecommerce.example.com",
    repoLink: "https://github.com/yourusername/ecommerce",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    id: 2,
    name: "Portfolio Dashboard",
    description: "Interactive dashboard for managing portfolio data with real-time analytics, charts, and data visualization. Features include dark mode, responsive design, and smooth animations.",
    images: ["/projects/dashboard-1.svg"],
    demoLink: "https://demo-dashboard.example.com",
    repoLink: "https://github.com/yourusername/dashboard",
    technologies: ["Vue.js", "Nuxt.js", "Chart.js", "Sass"]
  },
  {
    id: 3,
    name: "Weather Application",
    description: "Real-time weather application with location-based forecasts, interactive maps, and beautiful UI. Fetches data from multiple weather APIs for accurate predictions.",
    images: ["/projects/weather-1.svg", "/projects/weather-2.svg"],
    repoLink: "https://github.com/yourusername/weather-app",
    technologies: ["React", "TypeScript", "API Integration", "CSS3"]
  },
  {
    id: 4,
    name: "Task Management App",
    description: "Collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Perfect for agile teams.",
    images: ["/projects/tasks-1.svg"],
    demoLink: "https://demo-tasks.example.com",
    repoLink: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Redux", "Material-UI", "Drag & Drop API"]
  },
  {
    id: 5,
    name: "Blog Platform",
    description: "Modern blogging platform with markdown support, syntax highlighting for code snippets, SEO optimization, and social sharing capabilities.",
    images: ["/projects/blog-1.svg", "/projects/blog-2.svg", "/projects/blog-3.svg"],
    demoLink: "https://demo-blog.example.com",
    repoLink: "https://github.com/yourusername/blog",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"]
  }
];
