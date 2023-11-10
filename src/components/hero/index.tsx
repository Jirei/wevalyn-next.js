import HeroBackground from "./hero-bg";

export default function Hero() {
  return (
    <div>
      <HeroBackground>
        <h1 className='font-sans flex flex-col gap-2 absolute w-[85%] text-center text-3xl text-white'>
          <span>Need a website?</span>
          <span>
            <span className='font-bold'>Wevalyn</span> is here for you.
          </span>
        </h1>
      </HeroBackground>
    </div>
  );
}
