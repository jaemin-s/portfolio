import React from 'react'
import SubHeaderText from '../text/SubHeaderText'
import { Skill, SkillCategory } from '@/app/domain/entities/skill.entity'

const SkillCategoryComponent = ({ categoryName, skillList }: SkillCategory) => {
  function getLogoUrl(item: Skill) {
    const baseUrl = 'https://img.shields.io/badge/'
    const param = !!item.logoName
      ? `${item.name}-${item.color}?style=flat-square&logo=${item.logoName}&logoColor=ffffff`
      : `${item.name}-444444?style=flat-square`
    return baseUrl + param
  }

  return (
    <section className="flex flex-col md:flex-row gap-6">
      <div className="w-36">
        <SubHeaderText str={categoryName} />
      </div>
      <div className="flex flex-wrap gap-2 w-80 md:w-[36rem]">
        {skillList.map((item) => (
          <img className="h-7" alt="Static Badge" key={item.name} src={getLogoUrl(item)} />
        ))}
      </div>
    </section>
  )
}

export default SkillCategoryComponent
