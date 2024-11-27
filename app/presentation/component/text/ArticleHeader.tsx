import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const ArticleHeader = ({ str, color = '#ffffff' }: TextProps) => {
  return (
    <p className='font-extrabold text-8xl whitespace-pre-wrap text-center pb-4 border-b-4 mb-8' style={{ color }}>{str}</p>
  )
}

export default ArticleHeader