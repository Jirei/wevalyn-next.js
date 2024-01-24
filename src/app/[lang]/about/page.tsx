import { ArticleContainer } from "@/components/article/article-container";
import { ArticleTitle } from "@/components/article/article-title";
import { ArticleTitleLevel2 } from "@/components/article/article-title-level-2";
import { ArticleTitleLevel3 } from "@/components/article/article-title-level-3";
import { ContactButtonWithLottie } from "@/components/contact-button-with-lottie";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
import { Metadata } from "next";
import Image from "next/image";
import welcomingWevalynTeam from "./images/welcoming-personnel.png";

export const metadata: Metadata = {
  title: "About - Wevalyn",
  description:
    "Welcome to Wevalyn, your dedicated partner for expert WordPress development services. Transform your online presence with our skilled team of web developers, crafting customized solutions to elevate your website's performance and user experience. From responsive design to seamless integration of powerful WordPress features, we bring your vision to life. Explore our comprehensive services tailored for businesses of all sizes. Trust Wevalyn to turn your digital ambitions into reality. Contact us today for a WordPress experience that sets you apart in the online landscape.",
};

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { about: dictionary } = await getDictionary(params.lang);
  return (
    <ArticleContainer>
      <ArticleTitle>{dictionary.AboutUs}</ArticleTitle>
      <figure className="self-center">
        <Image
          className="rounded max-lg:w-screen max-lg:max-w-none"
          src={welcomingWevalynTeam}
          alt="Welcoming Wevalyn Team Members standing together"
        />
        <figcaption className="mt-2 text-center text-xl italic">
          {dictionary.TheWevalynTeam}
        </figcaption>
      </figure>
      <div className="flex flex-col gap-y-4">
        <ArticleTitleLevel2>{dictionary.OurGenesis}</ArticleTitleLevel2>
        <p>{dictionary.ourGenesisText}</p>
      </div>

      <div className="flex flex-col gap-y-4">
        <ArticleTitleLevel2>{dictionary.OurMission}</ArticleTitleLevel2>
        <p>{dictionary.ourMissionText}</p>
      </div>

      <div className="flex flex-col gap-y-9">
        <ArticleTitleLevel2>
          {dictionary.TheWevalynDifference}
        </ArticleTitleLevel2>
        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>{dictionary.TechnicalMastery}</ArticleTitleLevel3>
          <p>{dictionary.technicalMasteryText}</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>
            {dictionary.CreativeIngenuity}
          </ArticleTitleLevel3>
          <p>{dictionary.creativeIngenuityText}</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>
            {dictionary.ClientCentricApproach}
          </ArticleTitleLevel3>
          <p>{dictionary.clientCentricApproachText}</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>
            {dictionary.FutureProofSolutions}
          </ArticleTitleLevel3>
          <p>{dictionary.futureProofSolutionsText}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <ArticleTitleLevel2>{dictionary.OurPortfolio}</ArticleTitleLevel2>
        <p>{dictionary.ourPortfolioText}</p>
      </div>
      <div className="flex flex-col gap-y-9">
        <ArticleTitleLevel2>
          {dictionary.JoiningForcesWithWevalyn}
        </ArticleTitleLevel2>
        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>
            {dictionary.LetsInnovateTogether}
          </ArticleTitleLevel3>
          <p>{dictionary.letsInnovateTogetherText}</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>
            {dictionary.YourSuccessOurPriority}
          </ArticleTitleLevel3>
          <p>{dictionary.yourSuccessOurPriorityText}</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>
            {dictionary.ExperienceTheWevalynMagic}
          </ArticleTitleLevel3>
          <p>{dictionary.experienceTheWevalynMagicText}</p>
        </div>
      </div>
      <ContactButtonWithLottie lang={params.lang} />
    </ArticleContainer>
  );
}
