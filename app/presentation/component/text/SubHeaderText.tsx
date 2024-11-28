import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const SubHeaderText = ({ str, color = '#000000' }: TextProps) => {
  return <h3 className="font-bold text-xl">{str}</h3>
}

export default SubHeaderText
