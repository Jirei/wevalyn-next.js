import { Locale } from "@/internationalization/i18n-config";
import { ContactButtonWithLottie } from "../contact-button-with-lottie";
import { getDictionary } from "@/internationalization/get-dictionary";

export async function CtaSection({ lang }: { lang: Locale }) {
  const { ctaSection: dictionary } = await getDictionary(lang);
  return (
    <section className="mt-10 flex flex-col gap-y-14">
      <div className="flex flex-col gap-y-5 text-center text-xl text-primary dark:text-primary-dark-theme">
        <p className="leading-relaxed">
          {dictionary.doYouWantToRequestAQuote} <br />
          {dictionary.doYouHaveAnyQuestions}
        </p>
        <p>{dictionary.dropUsALineAndWellGetBackToYouShorty}</p>
      </div>
      <ContactButtonWithLottie lang={lang} />
    </section>
  );
}
