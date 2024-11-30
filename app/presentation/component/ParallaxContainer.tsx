import { ParallaxProps } from '@/app/domain/entities/parallax.entity'
import React from 'react'

const ParallaxContainer = ({ children, imgSrc, backgroundColor }: ParallaxProps): JSX.Element => {
  const backgroundStyle = !!imgSrc ? { backgroundImage: `url('${imgSrc}')` } : { background: backgroundColor }

  return (
    <section
      className={'min-h-screen h-fit py-4 bg-cover relative parallaxGradient flex items-center justify-center'}
      style={{ ...backgroundStyle, backgroundAttachment: 'fixed' }}
    >
      {children}
    </section>
  )
}

export default ParallaxContainer
