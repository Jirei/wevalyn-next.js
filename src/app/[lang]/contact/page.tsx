import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
import { Metadata } from "next";
import Script from "next/script";

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { contactForm: contactFormDictionary } = await getDictionary(
    params.lang,
  );
  return (
    <>
      <div className="my-24 w-full">
        <ContactForm dictionary={contactFormDictionary} />
      </div>
      {process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE !== "on" && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      )}
    </>
  );
}

export function generateMetadata({ params }: { params: { lang: Locale } }) {
  return metadatas[params.lang];
}

const metadatas: { en: Metadata; jp: Metadata } = {
  en: {
    title: "Contact - Wevalyn",
    description:
      "Get in touch with Wevalyn, your reliable partner for WordPress development solutions. Whether you have questions about our services, want a personalized quote, or are ready to kickstart your project, our contact page is your gateway to seamless communication. Our dedicated team is here to listen, understand your needs, and provide expert guidance to bring your web vision to life. Reach out today and let's collaborate on creating a tailored WordPress solution that meets your business goals.",
  },
  jp: {
    title: "お問い合わせ - ウェバリン",
    description:
      "WordPress開発ソリューションにおける信頼できるパートナー、ウェバリンにご連絡ください。サービスに関する質問、パーソナライズされた見積もりの要望、またはプロジェクトを開始したい場合でも、お問い合わせページからスムーズにコミュニケーションを取ることができます。私たちの専任チームは、あなたのニーズを理解し、ウェブビジョンを実現するための専門的なガイダンスを提供するためにここにいます。今日ご連絡いただき、あなたのビジネス目標に合わせたカスタマイズされたWordPressソリューションを共に創造しましょう。",
  },
};
