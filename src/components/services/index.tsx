import { HomeSectionTitle } from "@/components/home-section-title";
import ServicesIllustration from "./services-illustration";
import ServicesList from "./services-list";

export function Services() {
  return (
    <section
      id="services"
      className="mt-14 flex flex-col items-center gap-y-20 md:gap-y-36"
    >
      <HomeSectionTitle>Services</HomeSectionTitle>
      <ServicesIllustration />
      <ServicesList />
    </section>
  );
}
