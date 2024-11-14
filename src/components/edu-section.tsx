import EduCard from "./edu-outline";
import { Education } from "@/lib/data";

const Edu: React.FC = () => {
  return (
    <section className="mt-4 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-start mb-8">📖Education</h1>
      <div>
        {Education.map((edu, index) => (
          <EduCard
            key={index}
            logo={edu.logo}
            eduTitle={edu.eduTitle}
            department={edu.department}
            description={edu.description}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))}
      </div>
    </section>
  );
};

export default Edu;
