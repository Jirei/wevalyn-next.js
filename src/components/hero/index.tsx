import { Locale } from "@/i18n-config";
import HeroBackground from "./hero-bg";
import "./hero.css";

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section>
      <HeroBackground>
        <h1 className="font-sans flex flex-col gap-y-2 absolute w-[80%] text-center text-2xl md:text-4xl text-white">
          {lang === "en" && (
            <>
              <span className="font-bold">{"Need a website?"}</span>
              <span className="leading-relaxed">
                <span className="font-bold wevalyn-effect">Wevalyn</span> is
                here for{" "}
                <span className="you-glow-effect">
                  <span className="text-yellow-300 font-bold you-effect">
                    you.
                  </span>
                </span>
              </span>
            </>
          )}
          {lang === "jp" && (
            <>
              <span className="font-bold text-xl md:text-3xl">
                {"ウェブサイトが欲しいですか"}
              </span>
              <span className="leading-relaxed">
                <span className="font-bold wevalyn-effect">ウェバリン</span>に
                <span className="you-glow-effect">
                  <span className="text-yellow-300 font-bold you-effect">
                    任せて！
                  </span>
                </span>
              </span>
            </>
          )}
        </h1>
      </HeroBackground>
    </section>
  );
}
