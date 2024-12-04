import ParallaxContainer from "./component/common/ParallaxContainer";
import { Colors } from "./data/types/enums/color.enum";
import Introduce from "./component/section/Introduce";
import AboutMe from "./component/section/AboutMe";
import Skills from "./component/section/Skills";
import Career from "./component/section/Career";
import Projects from "./component/section/Projects";

function App() {
  return (
    <div className="bg-gray-600 w-screen h-screen overflow-y-scroll break-keep">
      <ParallaxContainer backgroundColor={Colors.CREAM}>
        <Introduce />
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
  );
}

export default App;
