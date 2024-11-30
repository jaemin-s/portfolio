import { TextProps } from '@/app/domain/entities/Text.entity'
import React from 'react'

const SubHeaderText = ({ children, className = '' }: TextProps) => {
  return <h3 className={`font-bold text-xl ${className}`}>{children}</h3>
}

export default SubHeaderText
