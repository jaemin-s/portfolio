import React from 'react'
import ParallaxContainer from '../component/ParallaxContainer'
import SimpleIntroduce from '../component/article/SimpleIntroduce'
import AboutMe from '../component/article/AboutMe'
import Skills from '../component/article/Skills'
import Projects from '../component/article/Projects'
import Career from '../component/article/Career'
import { Colors } from '@/app/domain/enums/Color.enum'

const MainScreen = () => {
  return (
    <div className="bg-gray-600 w-screen h-screen overflow-y-scroll">
      {/* <ParallaxContainer imgSrc={'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-green-clean.webp'}> */}
      <ParallaxContainer backgroundColor={Colors.CREAM}>
        <SimpleIntroduce />
      </ParallaxContainer>
      <ParallaxContainer imgSrc="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-green-dandelion.webp">
        <AboutMe />
      </ParallaxContainer>
      <ParallaxContainer imgSrc="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-white-magazine.webp">
        <Skills />
      </ParallaxContainer>
      <ParallaxContainer backgroundColor={Colors.SAND}>
        <Career />
      </ParallaxContainer>
      <ParallaxContainer backgroundColor={Colors.SAND}>
        <Projects />
      </ParallaxContainer>
    </div>
  )
}

export default MainScreen
