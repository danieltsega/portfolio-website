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
  SiDjango,
  SiLaravel,
  SiFlask,
  SiC,
  SiGnubash,
  SiPhp,
  SiMarkdown,
  SiRedis,
  SiLinux,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";

// Get Languages Icons

export const languages = [
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiPython, text: "Python" },
  { icon: SiPhp, text: "PHP" },
  { icon: SiMarkdown, text: "Markdown" },
  { icon: SiHtml5, text: "HTML5" },
  { icon: SiCss3, text: "CSS3" },
  { icon: SiC, text: "C-programming" },
  { icon: SiGnubash, text: "Bash" },
];

// Get Techonologies Icons

export const technologies = [
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: SiTailwindcss, text: "Tailwind CSS" },
  { icon: SiMysql, text: "MySQL" },
  { icon: SiDjango, text: "Django" },
  { icon: SiLaravel, text: "Laravel" },
  { icon: SiFlask, text: "Flask" },
  { icon: BiLogoPostgresql, text: "PostgreSQL" },
  /**{ icon: SiPandas, text: "Pandas" },
  { icon: SiTensorflow, text: "Tensorflow" },**/
  { icon: SiGit, text: "Git" },
  { icon: SiDocker, text: "Docker" },
  { icon: SiLinux, text: "Linux" },
];

// Projects Data

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
    title: "Uchi",
    description:
      "A full-featured google chrome extension to manage sites & bookmarks on browser built with HTML, TailwindCss & JS.",
    technologies: [SiHtml5, SiJavascript, SiTailwindcss],
    liveDemoLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/danieltsega/Uchi",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Car Rental Web App",
    description:
      "This Django-based web application allows users to rent cars, manage bookings, and leave reviews.",
    technologies: [SiDjango, BiLogoPostgresql, SiRedis],
    liveDemoLink: "https://social-media-demo.com",
    githubLink: "https://github.com/danieltsega/car-rental-system",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    technologies: [SiNextdotjs, SiTailwindcss],
    liveDemoLink: "https://portfolio-demo.com",
    githubLink: "https://github.com/danieltsega/portfolio-website",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Simple Shell",
    description:
      "A program that creates a new command line interpreter that is used as a linux shell.",
    technologies: [SiC, SiLinux],
    liveDemoLink: "https://blog-platform-demo.com",
    githubLink: "https://github.com/danieltsega/simple_shell",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Airbnb Clone",
    description:
      "An Airbnb Clone web app built using HTML, CSS, and Flask, featuring a Flask API for handling backend functionality",
    technologies: [SiFlask, SiMysql, SiHtml5, SiCss3],
    liveDemoLink: "https://task-manager-demo.com",
    githubLink: "https://github.com/abdi-bb/AirBnB_clone_v4",
  },
  {
    thumbnail: "/thumbnail.jfif",
    title: "Guday",
    description:
      "A web application built with Nextjs & Django for users to access & hire tasks providers or get instruction on how to do the task themselves.",
    technologies: [SiNextdotjs, SiDjango, SiTailwindcss],
    liveDemoLink: "https://finance-tracker-demo.com",
    githubLink: "https://github.com/danieltsega/guday-frontend",
  },
];

// Work Experience Data

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
  /**{
    logo: "/world.png", // path in the public folder
    companyTitle: "Freelance",
    role: "Full Stack Developer",
    description:
      "Building full-stack applications for various clients, focusing on scalable and efficient solutions using modern web technologies.",
    startDate: "March 2022",
    endDate: "Present",
  },
  **/
  {
    logo: "/ankiyon.jpg",
    companyTitle: "Ankiyon Design",
    role: "Full Stack Developer",
    description:
      "Developing web applications and APIs using Next.js and Django, integrating front-end designs with back-end functionality.",
    startDate: "May 2024",
    endDate: "Present",
  },
  {
    logo: "/dire.png",
    companyTitle: "Dire Dawa University ICT Directorate",
    role: "Network Installer & Full Stack Developer Intern",
    description:
      "Installed and maintained network systems and assisted in developing small web applications as part of the internship program.",
    startDate: "October 2021",
    endDate: "January 2022",
  },
];

// Education Data

interface Education {
  logo: string;
  eduTitle: string;
  department: string;
  description: string;
  startDate: string;
  endDate: string | "Present";
}

// List of Education in chronological order (most recent first)
export const Education: Education[] = [
  {
    logo: "/dire.png", // path in the public folder
    eduTitle: "Dire Dawa University",
    department: "BSc in Electrical & Computer Engineering (Computer Stream)",
    description:
      "Completed a Bachelor of Science degree in Electrical and Computer Engineering with a focus on the Computer stream. This program provided a strong foundation in computer systems, digital logic design, programming, and electronics, equipping me with the technical skills essential for problem-solving and innovation in technology.",
    startDate: "September 2017",
    endDate: "June 2022",
  },
  {
    logo: "/alx.svg",
    eduTitle: "ALX Africa",
    department: "Certificate in Software Engineering (Backend Specialization)",
    description:
      "Earned a certificate in a rigorous one-year Software Engineering program with a specialization in backend development. The program emphasized database management, server-side programming, and API development, providing hands-on experience with modern backend technologies and best practices in building scalable, efficient applications.",
    startDate: "November 2022",
    endDate: "January 2024",
  },
];
