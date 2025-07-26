// src/components/Bio.tsx

import Image from "next/image";
import developerPhoto from "../../public/developer.jpg"; // Adjust the path if necessary

const Bio = () => {
  return (
    <section
      id="bio"
      className="md:relative md:mb-44 my-10 shadow-lg border rounded-lg p-4 flex flex-col gap-2 md:flex-row items-center justify-center"
    >
      <div className="w-32 h-32 md:w-1/3 md:h-auto md:rounded-none rounded-full overflow-hidden">
        <Image
          src={developerPhoto}
          alt="Developer Photo"
          layout="responsive"
          className="object-cover rounded-full border"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-4 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-3">
          <span className="text-5xl py-2">
            Hi{" "}
            <span
              role="img"
              aria-label="waving hand"
              className="text-yellow-500 text-3xl"
            >
              👋
            </span>
          </span>
          <br /> am Danny
        </h2>
        <p className="md:absolute bg-gray-50 top-44 text-lg p-4 shadow-md border rounded-lg text-muted-foreground tracking-tight">
          I have always been drawn to how computers evolved — from early machines to the birth of programming. That curiosity turned into a passion for building things with code. I enjoy solving problems, understanding how tools work under the hood, and crafting clean, efficient systems that actually make a difference.
        </p>
      </div>
    </section>
  );
};

export default Bio;
