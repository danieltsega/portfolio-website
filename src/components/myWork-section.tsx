import MyWorkCard from "./myWork-outline";
import { myWorks } from "@/lib/data";

const MyWork: React.FC = () => {
  return (
    <section className="mt-12 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-start mb-8">
        💼My Works
      </h1>
      <div>
        {myWorks.map((work, index) => (
          <MyWorkCard
            key={index}
            logo={work.logo}
            companyName={work.companyName}
            associatedCompany={work.associatedCompany}
            description={work.description}
            technologies={work.technologies}
            liveLink={work.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default MyWork;