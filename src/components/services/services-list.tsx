import { FaWordpress } from "react-icons/fa6";
import { FaElementor } from "react-icons/fa6";
import { ServiceItem } from "./service-item";
import { Locale } from "@/internationalization/i18n-config";

export default function ServicesList({ lang }: { lang: Locale }) {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-5 md:items-stretch gap-y-6 p-2 overflow-hidden">
      {services.map((serviceData, index) => (
        <ServiceItem lang={lang} {...serviceData} key={index} />
      ))}
    </ul>
  );
}

const logos: { [index: string]: JSX.Element } = {
  wordpress: <FaWordpress size="6em" />,
  elementor: <FaElementor size="6em" />,
};

type AppearDirection = "left" | "right";

const services = [
  {
    logos: [logos.wordpress],
    names: {
      en: "Customization of Existing WordPress Theme",
      jp: "既存のWordPressテーマのカスタマイズ",
    },
    descriptions: {
      en: "We personalize a WordPress theme of your choosing.",
      jp: "お選びのWordPressテーマをパーソナライズします。",
    },
    appearFrom: "right" as AppearDirection,
  },
  {
    logos: [logos.elementor, logos.wordpress],
    names: {
      en: "Custom Theme With Elementor",
      jp: "Elementorを使用したカスタムテーマ",
    },
    descriptions: {
      en: "We create a custom Elementor theme according to your needs.",
      jp: "ご要望に応じてカスタムElementorテーマを作成します。",
    },
    appearFrom: "left" as AppearDirection,
  },
  {
    logos: [logos.wordpress],
    names: {
      en: "Custom WordPress Theme From Scratch",
      jp: "ゼロからのカスタムWordPressテーマ",
    },
    descriptions: {
      en: "We create a custom WordPress theme from scratch according to your needs.",
      jp: "お客様のニーズに合わせて、ゼロからカスタムWordPressテーマを作成します。",
    },
    appearFrom: "right" as AppearDirection,
    yellowRibbon: true,
  },
];
