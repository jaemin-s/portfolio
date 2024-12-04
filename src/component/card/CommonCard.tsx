import { BaseProps } from "@/data/types/common.entity";

const CommonCard = ({ children, className = "" }: BaseProps) => {
  return (
    <div
      className={`bg-slate-50 rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default CommonCard;
