'use client'

import React, { useState } from 'react'
import ArticleHeader from '../text/ArticleHeader'
import ProjectItemCard from '../card/ProjectItemCard'
import CommonDialog from '../dialog/CommonDialog'
import { ProjectRepository } from '@/app/data/repositories'
import ProjectDialog from '../dialog/ProjectDialog'
import { ProjectItem } from '@/app/domain/entities/project.entity'

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [itemData, setItemData] = useState<ProjectItem | null>(null)

  const projectItemList = ProjectRepository.getProjectList()

  const handleDetailButton = (item: ProjectItem) => {
    setIsOpen(true)
    setItemData(item)
  }

  return (
    <div className="h-full flex flex-col items-center justify-center text-forest">
      <ArticleHeader className="border-forest">PROJECTS</ArticleHeader>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectItemList.map((project, index) => (
          <li key={index}>
            <ProjectItemCard item={project} onClickDetailButton={handleDetailButton} />
          </li>
        ))}
      </ul>
      {itemData && (
        <CommonDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ProjectDialog {...itemData} />
        </CommonDialog>
      )}
    </div>
  )
}

export default Projects
