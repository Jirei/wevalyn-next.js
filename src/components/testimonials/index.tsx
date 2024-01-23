import { getDictionary } from "@/internationalization/get-dictionary";
import { HomeSectionTitle } from "../home-section-title";
import { Locale } from "@/internationalization/i18n-config";
import { TestimonialsList } from "./testimonials-list";

export async function Testimonials({ lang }: { lang: Locale }) {
  const { testimonials: dictionary } = await getDictionary(lang);
  return (
    <section
      id="testimonials"
      className="mt-14 flex flex-col items-center gap-y-20 md:gap-y-36"
    >
      <HomeSectionTitle>{dictionary.Testimonials}</HomeSectionTitle>
      <p className="text-primary dark:text-primary-dark-theme rounded text-center mx-3 px-5 py-8 text-2xl bg-primary/20 dark:bg-primary-dark-theme/20">
        Below are some interesting testimonials we got from our customers.<br/> <br/> We thank them for kindly allowing us to share their feedback.
      </p>
      <TestimonialsList dictionary={dictionary} lang={lang} />
    </section>
  );
}
