// components/ProjectCard.tsx

import Link from "next/link";
import { IconType } from "react-icons";
import { ExternalLink } from "lucide-react";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDjango,
  SiLaravel,
  SiFlask,
  SiC,
  SiLinux,
} from "react-icons/si";

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
        <div className="flex items-center space-x-2 mb-4 gap-2">
          {technologies.map((Icon, index) => {
            let iconColor = "text-blue-500"; // default color

            switch (Icon) {
              case SiC:
                iconColor = "text-blue-800";
                break;
              case SiLinux:
                iconColor = "text-black";
                break;
              case SiNextdotjs:
                iconColor = "text-black";
                break;
              case SiTailwindcss:
                iconColor = "text-blue-500";
                break;
              case SiHtml5:
                iconColor = "text-orange-500";
                break;
              case SiCss3:
                iconColor = "text-blue-500";
                break;
              case SiJavascript:
                iconColor = "text-yellow-500";
                break;
              case SiTypescript:
                iconColor = "text-blue-500";
                break;
              case SiDjango:
                iconColor = "text-green-500";
                break;
              case SiLaravel:
                iconColor = "text-red-500";
                break;
              case SiFlask:
                iconColor = "text-green-500";
                break;
              default:
                break;
            }

            return <Icon key={index} className={`w-5 h-5 ${iconColor}`} />;
          })}
        </div>

        <div className="flex"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
