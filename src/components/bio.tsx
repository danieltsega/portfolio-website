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
          <br /> am Daniel Tsega
        </h2>
        <p className="text-lg text-muted-foreground tracking-tight">
          Am a dedicated developer specializing in{" "}
          <span className="font-bold">Next.js</span> for front-end and
          <span className="font-bold"> Django </span>
          for back-end, with past experience in Laravel. Currently, am diving
          into AI, focusing on machine learning, deep learning, and computer
          vision, while also nurturing a deep interest in computer architectures
          and low-level computing concepts.
        </p>
      </div>
    </section>
  );
};

export default Bio;
