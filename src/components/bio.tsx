// src/components/Bio.tsx

import Image from "next/image";
import developerPhoto from "../../public/developer.jpg"; // Adjust the path if necessary

const Bio = () => {
  return (
    <section
      id="bio"
      className="my-10 p-4 flex flex-col md:flex-row items-center justify-center"
    >
      <div className="w-32 h-32 md:w-1/3 md:h-auto md:rounded-none rounded-full overflow-hidden">
        <Image
          src={developerPhoto}
          alt="Developer Photo"
          layout="responsive"
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-4 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-3">Hi, I'm John Doe</h2>
        <p>
          I'm a passionate developer with over 5 years of experience in building
          web applications. My expertise lies in Django for backend development
          and Next.js for the front-end. I thrive on solving complex problems
          and creating seamless user experiences. In my spare time, I contribute
          to open-source projects and write technical blogs.
        </p>
      </div>
    </section>
  );
};

export default Bio;
