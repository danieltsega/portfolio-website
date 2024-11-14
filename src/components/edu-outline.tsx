import Image from "next/image";

interface EduCardProps {
  logo: string;
  eduTitle: string;
  department: string;
  description: string;
  startDate: string;
  endDate: string | "Present";
}

const EduCard: React.FC<EduCardProps> = ({
  logo,
  eduTitle,
  department,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className="bg-gray-50 shadow-sm border rounded-lg p-4 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <Image
        src={logo}
        alt={`${eduTitle} logo`}
        width={60}
        height={60}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h2 className="text-xl font-semibold">{eduTitle}</h2>
        <h3 className="text-gray-600">{department}</h3>
        <p className="text-gray-500 text-sm mb-2">{`${startDate} - ${endDate}`}</p>
        <p className="text-gray-700 text-muted-foreground tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EduCard;
