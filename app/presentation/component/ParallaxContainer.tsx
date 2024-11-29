import React, { ReactNode } from 'react'

interface ParallaxProps {
  children?: ReactNode
  imgSrc: string
}

const ParallaxContainer: React.FC<ParallaxProps> = ({ children, imgSrc }) => {
  return (
    <section
      className={'min-h-screen h-fit py-4 bg-cover relative parallaxGradient flex items-center justify-center'}
      style={{ backgroundImage: `url('${imgSrc}')`, backgroundAttachment: 'fixed' }}
    >
      {children}
    </section>
  )
}

export default ParallaxContainer
