// pages/projects.tsx

import ProjectCard from "./project-card";
import { projects } from "@/lib/data";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-start mb-8">🛠️Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <Link
       href="https://www.github.com/danieltsega/"
       className="text-blue-600 hover:underline flex gap-2 mt-8 text-lg"
       passHref
       target="_blank"
      >
        View more project on github
      </Link>
    </section>
  );
};

export default Projects;
