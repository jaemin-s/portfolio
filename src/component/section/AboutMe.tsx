import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import AboutMeCard from "../card/AboutMeCard";
import ArticleHeader from "../text/ArticleHeader";

const AboutMe = () => {
  const size = "48";
  const edu = `부천대학교
정보통신학과`;
  return (
    <div className="h-full flex flex-col items-center justify-center text-cream">
      <ArticleHeader>ABOUT ME</ArticleHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 text-cream">
        <AboutMeCard header="이름" body="심재민">
          <MdOutlinePersonOutline size={size} />
        </AboutMeCard>
        <AboutMeCard header="생년월일" body="95.01.25">
          <MdOutlineCalendarToday size={size} />
        </AboutMeCard>
        <AboutMeCard header="위치" body="인천광역시 계양구">
          <MdOutlineLocationOn size={size} />
        </AboutMeCard>
        <AboutMeCard header="연락처" body="010-2083-4033">
          <MdOutlineSmartphone size={size} />
        </AboutMeCard>
        <AboutMeCard header="이메일" body="jaemin4033@gmail.com">
          <MdOutlineMail size={size} />
        </AboutMeCard>
        <AboutMeCard header="학력" body={edu}>
          <MdOutlineSchool size={size} />
        </AboutMeCard>
      </div>
    </div>
  );
};

export default AboutMe;
