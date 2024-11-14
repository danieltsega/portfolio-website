// components/ProjectCard.tsx

import Link from "next/link";
import { IconType } from "react-icons";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  technologies: IconType[];
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubLink,
}) => {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="p-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <Link
            href={githubLink}
            className="text-blue-600 hover:underline flex gap-2"
            passHref
          >
            <ExternalLink height={20} width={20} />
          </Link>
        </div>
        <p className="text-gray-700 text-lg mb-4 text-muted-foreground tracking-tight">
          {description}
        </p>
        <div className="flex items-center space-x-2 mb-4">
          {technologies.map((Icon, index) => (
            <Icon key={index} className="w-5 h-5 text-blue-500" />
          ))}
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
