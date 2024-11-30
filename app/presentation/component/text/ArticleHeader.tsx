import { TextProps } from '@/app/domain/entities/Text.entity'
import React from 'react'

const ArticleHeader = ({ children, className = '' }: TextProps) => {
  return (
    <p className={`font-extrabold text-[12vmin] whitespace-pre-wrap text-center pb-4 border-b-4 mb-8 ${className}`}>
      {children}
    </p>
  )
}

export default ArticleHeader
