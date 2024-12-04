import { BaseProps } from "@/data/types/common.entity";

const TechBadge = ({ children, className = "" }: BaseProps) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-600 text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default TechBadge;
