import ParallaxContainer from "./presentation/component/ParallaxContainer";

export default function Home() {
  return (
    <div className="bg-gray-600 w-screen h-screen overflow-y-scroll">
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-01.webp"}>
        <article className="h-screen flex items-center justify-center text-2xl">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </article>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-02.webp"}>
        <article className="h-screen flex items-center justify-center text-2xl">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </article>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-03.webp"}>
        <article className="h-screen flex items-center justify-center text-2xl">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </article>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-04.webp"}>
        <article className="h-screen flex items-center justify-center text-2xl">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </article>
      </ParallaxContainer>
      <ParallaxContainer imgSrc={"https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/bg-05.webp"}>
        <article className="h-screen flex items-center justify-center text-2xl">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </article>
      </ParallaxContainer>
    </div>
  );
}
