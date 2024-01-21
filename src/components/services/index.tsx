import { HomeSectionTitle } from "@/components/home-section-title";
import ServicesIllustration from "./services-illustration";
import ServicesList from "./services-list";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
import { ServiceText } from "./services-text";

export async function Services({ lang }: { lang: Locale }) {
  const { services: dictionary, servicesText: servicesTextDictionary } =
    await getDictionary(lang);
  return (
    <section
      id="services"
      className="mt-14 flex flex-col items-center gap-y-20 md:gap-y-32"
    >
      <HomeSectionTitle>{dictionary.Services}</HomeSectionTitle>
      <ServicesIllustration />
      <ServiceText dictionary={servicesTextDictionary} />
      <ServicesList lang={lang} />
    </section>
  );
}
