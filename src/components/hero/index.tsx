import HeroBackground from "./hero-bg";

export default function Hero() {
  return (
    <section>
      <HeroBackground>
        <h1 className='font-sans flex flex-col gap-3 absolute w-[85%] text-center text-3xl md:text-5xl text-white'>
          <span>Need a website?</span>
          <span className='leading-relaxed'>
            <span className='font-bold'>Wevalyn</span>{' '}
            is here for you.
          </span>
        </h1>
      </HeroBackground>
    </section>
  );
}
