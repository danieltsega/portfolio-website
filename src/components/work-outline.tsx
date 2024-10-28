import Image from "next/image";

interface WorkCardProps {
  logo: string;
  companyTitle: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | "Present";
}

const WorkCard: React.FC<WorkCardProps> = ({
  logo,
  companyTitle,
  role,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className="bg-white shadow-sm border rounded-lg p-4 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <Image
        src={logo}
        alt={`${companyTitle} logo`}
        width={60}
        height={60}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h2 className="text-xl font-semibold">{companyTitle}</h2>
        <h3 className="text-gray-600">{role}</h3>
        <p className="text-gray-500 text-sm mb-2">{`${startDate} - ${endDate}`}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
