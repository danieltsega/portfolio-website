// pages/projects.tsx

import ProjectCard from "./project-card";
import { projects } from "@/lib/data";

const Projects: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
