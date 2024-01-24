import { Locale } from "@/internationalization/i18n-config";
import HeroBackground from "./hero-bg";
import "./hero.css";

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section>
      <HeroBackground>
        <h1 className="absolute flex w-[80%] flex-col gap-y-2 text-center font-sans text-2xl text-white md:text-4xl">
          {lang === "en" && (
            <>
              <span className="font-bold">{"Need a website?"}</span>
              <span className="leading-relaxed">
                <span className="wevalyn-effect font-bold">Wevalyn</span> is
                here for{" "}
                <span className="you-glow-effect">
                  <span className="you-effect font-bold text-yellow-300">
                    you.
                  </span>
                </span>
              </span>
            </>
          )}
          {lang === "jp" && (
            <>
              <span className="text-xl font-bold md:text-3xl">
                {"ウェブサイトが欲しいですか"}
              </span>
              <span className="leading-relaxed">
                <span className="wevalyn-effect font-bold">ウェバリン</span>に
                <span className="you-glow-effect">
                  <span className="you-effect font-bold text-yellow-300">
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
