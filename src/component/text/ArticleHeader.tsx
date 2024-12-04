import { BaseProps } from "@/data/types/common.entity";

const ArticleHeader = ({ children, className = "" }: BaseProps) => {
  return (
    <p
      className={`font-extrabold text-[12vmin] whitespace-pre-wrap text-center pb-4 border-b-4 mb-8 ${className}`}
    >
      {children}
    </p>
  );
};

export default ArticleHeader;
