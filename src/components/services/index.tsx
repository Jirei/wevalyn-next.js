import { HomeSectionTitle } from "@/components/home-section-title";
import ServicesIllustration from "./services-illustration";
import ServicesList from "./services-list";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export async function Services({ lang }: { lang: Locale }) {
  const { services: dictionary } = await getDictionary(lang);
  return (
    <section
      id="services"
      className="mt-14 flex flex-col items-center gap-y-20 md:gap-y-36"
    >
      <HomeSectionTitle>{dictionary.servicesSectionTitle}</HomeSectionTitle>
      <ServicesIllustration />
      <ServicesList />
    </section>
  );
}
