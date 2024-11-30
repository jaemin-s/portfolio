import React from 'react'
import ArticleHeader from '../text/ArticleHeader'
import AboutMeCard from '../card/AboutMeCard'
import IconProfile from '../svg/IconProfile'
import IconCalendar from '../svg/IconCalendar'
import IconLocation from '../svg/IconLocation'
import IconPhone from '../svg/IconPhone'
import IconMail from '../svg/IconMail'
import IconEdu from '../svg/IconEdu'
import { Colors } from '@/app/domain/enums/color.enum'

const AboutMe = () => {
  const size = '48px'
  const edu = `부천대학교
정보통신학과`
  return (
    <div className="h-full flex flex-col items-center justify-center text-cream">
      <ArticleHeader className="border-cream">ABOUT ME</ArticleHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 text-cream">
        <AboutMeCard header="이름" body="심재민">
          <IconProfile width={size} height={size} color={Colors.CREAM} />
        </AboutMeCard>
        <AboutMeCard header="생년월일" body="95.01.25">
          <IconCalendar width={size} height={size} color={Colors.CREAM} />
        </AboutMeCard>
        <AboutMeCard header="위치" body="인천광역시 계양구">
          <IconLocation width={size} height={size} color={Colors.CREAM} />
        </AboutMeCard>
        <AboutMeCard header="연락처" body="010-2083-4033">
          <IconPhone width={size} height={size} color={Colors.CREAM} />
        </AboutMeCard>
        <AboutMeCard header="이메일" body="jaemin4033@gmail.com">
          <IconMail width={size} height={size} color={Colors.CREAM} />
        </AboutMeCard>
        <AboutMeCard header="학력" body={edu}>
          <IconEdu width={size} height={size} color={Colors.CREAM} />
        </AboutMeCard>
      </div>
    </div>
  )
}

export default AboutMe
