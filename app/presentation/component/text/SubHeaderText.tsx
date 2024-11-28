import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const SubHeaderText = ({ str, color = '#ffffff' }: TextProps) => {
  return (
    <h3 className="font-bold text-xl" style={{ color }}>
      {str}
    </h3>
  )
}

export default SubHeaderText
