import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiDocker,
  SiTailwindcss,
  SiPandas,
  SiTensorflow,
  SiDjango,
  SiLaravel,
  SiFlask,
  SiC,
  SiGnubash,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";

export const languages = [
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiPython, text: "Python" },
  { icon: SiHtml5, text: "HTML5" },
  { icon: SiCss3, text: "CSS3" },
  { icon: SiC, text: "C-programming" },
  { icon: SiGnubash, text: "Bash" },
];

export const technologies = [
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: SiTailwindcss, text: "Tailwind CSS" },
  { icon: SiMysql, text: "MySQL" },
  { icon: SiDjango, text: "Django" },
  { icon: SiLaravel, text: "Laravel" },
  { icon: SiFlask, text: "Flask" },
  { icon: BiLogoPostgresql, text: "PostgreSQL" },
  { icon: SiPandas, text: "Pandas" },
  { icon: SiTensorflow, text: "Tensorflow" },
  { icon: SiGit, text: "Git" },
  { icon: SiDocker, text: "Docker" },
];

interface Project {
  thumbnail: string;
  title: string;
  description: string;
  technologies: IconType[];
  liveDemoLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    thumbnail: "/thumbnail.jfif",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Tailwind CSS.",
    technologies: [SiNextdotjs, SiTailwindcss],
    liveDemoLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Social Media App",
    description:
      "A social media application built with Django and Tailwind CSS.",
    technologies: [SiPython, SiDjango, SiTailwindcss],
    liveDemoLink: "https://social-media-demo.com",
    githubLink: "https://github.com/yourusername/social-media-app",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    technologies: [SiNextdotjs, SiTailwindcss],
    liveDemoLink: "https://portfolio-demo.com",
    githubLink: "https://github.com/yourusername/portfolio-website",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Blog Platform",
    description: "A blogging platform built with Django and Tailwind CSS.",
    technologies: [SiPython, SiDjango, SiTailwindcss],
    liveDemoLink: "https://blog-platform-demo.com",
    githubLink: "https://github.com/yourusername/blog-platform",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Task Management Tool",
    description: "A task management tool built with Next.js and Tailwind CSS.",
    technologies: [SiNextdotjs, SiTailwindcss],
    liveDemoLink: "https://task-manager-demo.com",
    githubLink: "https://github.com/yourusername/task-manager",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Finance Tracker",
    description: "A finance tracking app built with Django and Tailwind CSS.",
    technologies: [SiPython, SiDjango, SiTailwindcss],
    liveDemoLink: "https://finance-tracker-demo.com",
    githubLink: "https://github.com/yourusername/finance-tracker",
  },
];

// src/workData.ts

interface WorkExperience {
  logo: string;
  companyTitle: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | "Present";
}

// List of work experiences in chronological order (most recent first)
export const workExperiences: WorkExperience[] = [
  {
    logo: "/world.jfif", // path in the public folder
    companyTitle: "Freelance",
    role: "Full Stack Developer",
    description:
      "Building full-stack applications for various clients, focusing on scalable and efficient solutions using modern web technologies.",
    startDate: "June 2023",
    endDate: "Present",
  },
  {
    logo: "/ankiyon.jpg",
    companyTitle: "Ankiyon Design",
    role: "Full Stack Developer",
    description:
      "Developing web applications and APIs using Next.js and Django, integrating front-end designs with back-end functionality.",
    startDate: "February 2024",
    endDate: "Present",
  },
  {
    logo: "/dire.jfif",
    companyTitle: "Dire Dawa Inistitute & Technology",
    role: "Network Installer & Full Stack Developer Intern",
    description:
      "Installed and maintained network systems and assisted in developing small web applications as part of the internship program.",
    startDate: "September 2021",
    endDate: "February 2022",
  },
];
