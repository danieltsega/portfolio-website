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
