import { AboutMeProps } from '@/app/domain/entities/aboutMe.entity'
import React from 'react'
import SubHeaderText from '../text/SubHeaderText'
import BodyText from '../text/BodyText'

const AboutMeCard = ({ header, body, children }: AboutMeProps) => {
  return (
    <div className="flex">
      <div className="flex pr-4">{children}</div>
      <div className="flex flex-col gap-1">
        <SubHeaderText>{header}</SubHeaderText>
        <BodyText>{body}</BodyText>
      </div>
    </div>
  )
}

export default AboutMeCard
