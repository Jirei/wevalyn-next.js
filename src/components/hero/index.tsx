import HeroBackground from "./hero-bg";

export function Hero() {
  return (
    <section>
      <HeroBackground>
        <h1 className="font-sans flex flex-col gap-y-3 absolute w-[85%] text-center text-2xl md:text-4xl text-white">
          <span >Need a website?</span>
          <span className="leading-relaxed">
            <span className="font-bold">Wevalyn</span> is here for you.
          </span>
        </h1>
      </HeroBackground>
    </section>
  );
}
