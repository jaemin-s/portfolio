import { SvgStyle } from '@/app/domain/entities/svgStyle.entity'
import React from 'react'

const IconCalendar = ({ color = '#ffffff', width = '24px', height = '24px' }: SvgStyle) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color}>
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
    </svg>
  )
}

export default IconCalendar
