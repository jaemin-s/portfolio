import { TextProps } from '@/app/domain/entities/text.entity'
import React from 'react'

const BodyText = ({ str, color = '#ffffff' }: TextProps) => {
  return (
    <p className="text-lg whitespace-pre-wrap" style={{ color }}>
      {str}
    </p>
  )
}

export default BodyText
