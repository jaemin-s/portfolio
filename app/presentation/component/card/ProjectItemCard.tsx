import { ProjectItemProps } from '@/app/domain/entities/project.entity'
import React from 'react'
import CommonCard from './CommonCard'

const ProjectItemCard = ({ item, onClickDetailButton }: ProjectItemProps) => {
  return (
    <CommonCard className="">
      <div className="w-80 aspect-video">
        <img src={item.image} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
        <p className="text-sm text-stone-600 mb-2">{item.description}</p>
        <p className="text-xs text-stone-500">{item.period}</p>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="text-sm px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => {
              onClickDetailButton(item)
            }}
          >
            상세보기
          </button>
          {!!item.links.demo && (
            <button className="text-sm px-3 py-1 border border-stone-300 text-black rounded-md hover:bg-stone-200">
              <a href={item.links.demo} target="_blank">
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
