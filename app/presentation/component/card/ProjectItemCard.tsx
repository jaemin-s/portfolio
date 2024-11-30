import { ProjectItem } from '@/app/domain/entities/project.entity'
import React from 'react'
import CommonCard from './CommonCard'
import { ProjectType } from '@/app/domain/enums/project.enum'

const ProjectItemCard = (props: ProjectItem) => {
  return (
    <CommonCard className="">
      <div className="w-80 aspect-video">
        <img src={props.image} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2">{props.title}</h4>
        <p className="text-sm text-stone-600 mb-2">{props.description}</p>
        <p className="text-xs text-stone-500 mb-1">{props.simpleStack}</p>
        <p className="text-xs text-stone-500">{props.period}</p>

        <div className="flex gap-2 mt-4">
          <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">상세보기</button>
          {props.type === ProjectType.PERSONAL && (
            <button className="text-sm px-3 py-1 border border-stone-300 text-black rounded-md hover:bg-stone-200">
              <a href="https://www.netflix.com/kr/" target="_blank">
                바로가기
              </a>
            </button>
          )}
        </div>
      </div>
    </CommonCard>
  )
}

export default ProjectItemCard
