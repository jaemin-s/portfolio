import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const DateText = ({ children, className = '' }: TextProps) => {
  return <p className={`text-base text-gray ${className}`}>{children}</p>
}

export default DateText
