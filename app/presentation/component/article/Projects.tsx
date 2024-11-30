import React from 'react'
import ArticleHeader from '../text/ArticleHeader'
import ProjectItemCard from '../card/ProjectItemCard'
import { ProjectType } from '@/app/domain/enums/project.enum'

const Projects = () => {
  const projectItemList = [
    {
      title: '오초이스',
      description: '오초이스 설명 입니다',
      simpleStack: 'React JavaScript Tizen WebOS',
      detailStacks: [{ title: 'React', description: '리액트 사용 이유' }],
      period: '2024.01 ~ 2024.12',
      image: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/portfolio/netflix.webp',
      type: ProjectType.WORK,
      features: [''],
      company: '(주)홈초이스',
      links: { demo: '', github: '' },
    },
    {
      title: '오초이스',
      description: '오초이스 설명 입니다',
      simpleStack: 'React JavaScript Tizen WebOS',
      detailStacks: [{ title: 'React', description: '리액트 사용 이유' }],
      period: '2024.01 ~ 2024.12',
      image: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/portfolio/tving.webp',
      type: ProjectType.PERSONAL,
      features: [''],
      company: '(주)홈초이스',
      links: { demo: 'https://www.tving.com', github: '' },
    },
    {
      title: '오초이스',
      description: '오초이스 설명 입니다',
      simpleStack: 'React JavaScript Tizen WebOS',
      detailStacks: [{ title: 'React', description: '리액트 사용 이유' }],
      period: '2024.01 ~ 2024.12',
      image: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/portfolio/netflix.webp',
      type: ProjectType.PERSONAL,
      features: [''],
      company: '(주)홈초이스',
      links: { demo: 'https://www.netflix.com/kr/', github: '' },
    },
    {
      title: '오초이스',
      description: '오초이스 설명 입니다',
      simpleStack: 'React JavaScript Tizen WebOS',
      detailStacks: [{ title: 'React', description: '리액트 사용 이유' }],
      period: '2024.01 ~ 2024.12',
      image: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/portfolio/tving.webp',
      type: ProjectType.WORK,
      features: [''],
      company: '(주)홈초이스',
      links: { demo: '', github: '' },
    },
    {
      title: '오초이스',
      description: '오초이스 설명 입니다',
      simpleStack: 'React JavaScript Tizen WebOS',
      detailStacks: [{ title: 'React', description: '리액트 사용 이유' }],
      period: '2024.01 ~ 2024.12',
      image: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/portfolio/netflix.webp',
      type: ProjectType.WORK,
      features: [''],
      company: '(주)홈초이스',
      links: { demo: '', github: '' },
    },
    {
      title: '오초이스',
      description: '오초이스 설명 입니다',
      simpleStack: 'React JavaScript Tizen WebOS',
      detailStacks: [{ title: 'React', description: '리액트 사용 이유' }],
      period: '2024.01 ~ 2024.12',
      image: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/portfolio/netflix.webp',
      type: ProjectType.WORK,
      features: [''],
      company: '(주)홈초이스',
      links: { demo: '', github: '' },
    },
  ]

  return (
    <div className="h-full flex flex-col items-center justify-center text-forest">
      <ArticleHeader className="border-forest">PROJECTS</ArticleHeader>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectItemList.map((project, index) => (
          <li key={index}>
            <ProjectItemCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
