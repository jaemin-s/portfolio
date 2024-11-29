import React from 'react'
import ArticleHeader from '../text/ArticleHeader'
import SkillCategoryComponent from '../section/SkillCategory'
import { skillRepository } from '@/app/data/repositories'

const Skills = async () => {
  const skillCategoryList = await skillRepository.getSkillCategories()

  return (
    <div className="min-h-full h-fit flex flex-col items-center justify-center">
      <ArticleHeader str="SKILLS" color="#000000" />
      <section className="flex flex-col gap-8">
        {skillCategoryList.map((item) => (
          <SkillCategoryComponent key={item.categoryName} categoryName={item.categoryName} skillList={item.skillList} />
        ))}
      </section>
    </div>
  )
}

export default Skills
