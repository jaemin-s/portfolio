import { TextProps } from '@/app/domain/entities/Text.entity'
import React from 'react'

const DateText = ({ children, className = '' }: TextProps) => {
  return <p className={`  ${className}`}>{children}</p>
}

export default DateText
