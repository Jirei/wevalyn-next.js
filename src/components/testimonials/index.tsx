import { getDictionary } from "@/internationalization/get-dictionary";
import { HomeSectionTitle } from "../home-section-title";
import { Locale } from "@/internationalization/i18n-config";

export async function Testimonials({ lang }: { lang: Locale }) {
  const { testimonials: dictionary } = await getDictionary(lang);
  return (
    <section
      id="testimonials"
      className="mt-14 flex flex-col items-center gap-y-20 md:gap-y-36"
    >
      <HomeSectionTitle>{dictionary.Testimonials}</HomeSectionTitle>
    </section>
  );
}
