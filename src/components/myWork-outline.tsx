import Image from "next/image";
import { IconType } from "react-icons";
import { ExternalLink, Building2Icon } from "lucide-react";
import Link from "next/link";

import {
  SiNextdotjs,
  SiDjango,
  SiLaravel,
} from "react-icons/si";

interface MyWorkCardProps {
    logo: string;
    companyName: string;
    associatedCompany: string;
    description: string;
    technologies: IconType[];
    liveLink: string;
}

const MyWorkCard: React.FC<MyWorkCardProps> = ({
  logo,
  companyName,
  associatedCompany,
  description,
  technologies,
  liveLink,
}) => {
  return (
    <div className="bg-gray-50 shadow-sm border rounded-lg p-4 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <Image
        src={logo}
        alt={`${companyName} logo`}
        width={60}
        height={60}
        className={`w-16 h-16 object-contain ${logo.includes('hello-coffee-logo') ? 'filter invert' : ''}`}
        />

      <div>
        <h2 className="text-xl font-semibold">{companyName}</h2>
        <h3 className="text-gray-600 mb-2 italic flex items-center gap-2">
          <Building2Icon className="h-5 w-5"></Building2Icon>
          {associatedCompany}
          </h3>
        <p className="text-gray-700 text-muted-foreground tracking-tight">
          {description}
        </p>
        <hr className="mb-4 mt-4" />
        <div className="flex flex-row-reverse justify-between">
            <Link
                href={liveLink}
                className="text-blue-600 hover:underline flex gap-2"
                passHref
                target="__blank"
            >
            View Site
          </Link>

          <div className="flex items-center space-x-2 gap-2">
                  {technologies.map((Icon, index) => {
                    let iconColor = "text-blue-500"; // default color
        
                    switch (Icon) {
                      case SiNextdotjs:
                        iconColor = "text-black";
                        break;
                      case SiDjango:
                        iconColor = "text-green-500";
                        break;
                      case SiLaravel:
                        iconColor = "text-red-500";
                        break;
                      default:
                        break;
                    }
        
                    return <Icon key={index} className={`w-5 h-5 ${iconColor}`} />;
                  })}
                </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkCard;
