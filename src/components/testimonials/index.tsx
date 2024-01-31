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
      <p className="mx-3 flex flex-col gap-y-3 rounded bg-primary/20 px-5 py-8 text-center text-2xl text-primary dark:bg-primary-dark-theme/20 dark:text-primary-dark-theme">
        <span>
          {dictionary.BelowAreSomeInterestingTestimonialsWeGotFromOurCustomers}
        </span>
        <span>
          {dictionary.WeThankThemForKindlyAllowingUsToShareTheirFeedback}
        </span>
      </p>
      <TestimonialsList dictionary={dictionary} lang={lang} />
    </section>
  );
}
