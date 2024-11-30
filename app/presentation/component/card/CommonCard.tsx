import { ChildrenProps } from '@/app/domain/entities/common.entity'
import React from 'react'

const CommonCard = ({ children, className = '' }: ChildrenProps) => {
  return (
    <div
      className={`bg-slate-50 rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export default CommonCard
