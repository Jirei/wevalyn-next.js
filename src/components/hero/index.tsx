import { cn } from "@/lib/common";
import HeroBackground from "./hero-bg";
import "./hero.scss";

export function Hero() {
  return (
    <section>
      <HeroBackground>
        <h1 className="font-sans flex flex-col gap-y-2 absolute w-[80%] text-center text-2xl md:text-4xl text-white">
          <span className="font-bold">Need a website?</span>
          <span className="leading-relaxed">
            <span className="font-bold wevalyn-effect">Wevalyn</span> is here
            for{" "}
            <span className="you-glow-effect">
              <span className="text-yellow-300 font-bold you-effect">YOU.</span>
            </span>
          </span>
        </h1>
      </HeroBackground>
    </section>
  );
}
