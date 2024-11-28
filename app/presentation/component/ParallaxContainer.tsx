import React, { ReactNode } from 'react'

interface ParallaxProps {
  children?: ReactNode
  imgSrc: string
}

const ParallaxContainer: React.FC<ParallaxProps> = ({ children, imgSrc }) => {
  return (
    <section
      className={'h-screen bg-cover relative parallaxGradient '}
      style={{ backgroundImage: `url('${imgSrc}')`, backgroundAttachment: 'fixed' }}
    >
      {children}
    </section>
  )
}

export default ParallaxContainer
