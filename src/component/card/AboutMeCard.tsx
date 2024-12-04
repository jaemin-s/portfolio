import { AboutMeProps } from "@/data/types/aboutMe.entity";

const AboutMeCard = ({ header, body, children }: AboutMeProps) => {
  return (
    <div className="flex">
      <div className="flex pr-4">{children}</div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl">{header}</h3>
        <p className="text-lg whitespace-pre-wrap">{body}</p>
      </div>
    </div>
  );
};

export default AboutMeCard;
