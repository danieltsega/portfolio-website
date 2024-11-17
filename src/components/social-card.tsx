// components/SocialLinks.tsx

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-white shadow-sm border rounded-lg p-4 flex flex-col sm:flex-row items-center justify-center gap-6 space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <div className="flex justify-center space-x-6">
        <Link
          href="https://github.com/danieltsega"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-gray-800 hover:text-gray-600 w-6 h-6 transition-colors duration-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/danieltsega/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-blue-800 hover:text-blue-600 w-6 h-6 transition-colors duration-300" />
        </Link>
        <Link
          href="https://x.com/TsegaDanie79064"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="text-blue-900 hover:text-blue-600 w-6 h-6 transition-colors duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
