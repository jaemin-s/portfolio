import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const BodyText = ({ children, className = '' }: TextProps) => {
  return <p className={`text-lg whitespace-pre-wrap ${className}`}>{children}</p>
}

export default BodyText
