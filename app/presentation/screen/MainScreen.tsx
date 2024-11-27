import React from 'react'
import ParallaxContainer from '../component/ParallaxContainer'
import SimpleIntroduce from '../component/article/SimpleIntroduce'
import AboutMe from '../component/article/AboutMe'
import Skills from '../component/article/Skills'
import Projects from '../component/article/Projects'
import Career from '../component/article/Career'

type Props = {}

const MainScreen = (props: Props) => {
  return (
    <div className="bg-gray-600 w-screen h-screen overflow-y-scroll">
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-01.webp"}>
        <SimpleIntroduce/>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-02.webp"}>
        <AboutMe/>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-03.webp"}>
        <Skills/>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-04.webp"}>
        <Career/>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-05.webp"}>
        <Projects/>
      </ParallaxContainer>
    </div>
  )
}

export default MainScreen