import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const BodyText = ({ str, color = '#000000' }: TextProps) => {
  return <p className="text-lg whitespace-pre-wrap">{str}</p>
}

export default BodyText
