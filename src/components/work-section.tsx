import WorkCard from "./work-outline";
import { workExperiences } from "@/lib/data";

const Work: React.FC = () => {
  return (
    <section className="mt-4 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-start mb-8">Work Experience</h1>
      <div>
        {workExperiences.map((work, index) => (
          <WorkCard
            key={index}
            logo={work.logo}
            companyTitle={work.companyTitle}
            role={work.role}
            description={work.description}
            startDate={work.startDate}
            endDate={work.endDate}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
