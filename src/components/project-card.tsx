// components/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  technologies: IconType[];
  liveDemoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  technologies,
  liveDemoLink,
  githubLink,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex items-center space-x-2 mb-4">
          {technologies.map((Icon, index) => (
            <Icon key={index} className="w-5 h-5 text-blue-500" />
          ))}
        </div>
        <div className="flex space-x-4">
          <Link
            href={liveDemoLink}
            className="text-blue-600 hover:underline"
            passHref
          >
            Live Demo
          </Link>
          <Link
            href={githubLink}
            className="text-blue-600 hover:underline"
            passHref
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
