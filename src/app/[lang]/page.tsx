import { CtaSection } from "@/components/cta-section";
import { DemoWebsites } from "@/components/demo-websites";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Locale } from "@/internationalization/i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Web Development Services - Wevalyn",
  description:
    "Welcome to Wevalyn, your dedicated partner for expert WordPress development services. Transform your online presence with our skilled team of web developers, crafting customized solutions to elevate your website's performance and user experience. From responsive design to seamless integration of powerful WordPress features, we bring your vision to life. Explore our comprehensive services tailored for businesses of all sizes. Trust Wevalyn to turn your digital ambitions into reality. Contact us today for a WordPress experience that sets you apart in the online landscape.",
};

export default function HomePage({ params }: { params: { lang: Locale } }) {
  return (
    <div className="mb-20 flex flex-col gap-y-28 xl:gap-y-48">
      <Hero lang={params.lang} />
      <Services lang={params.lang} />
      <DemoWebsites lang={params.lang} />
      <Testimonials lang={params.lang} />
      <CtaSection lang={params.lang} />
    </div>
  );
}
