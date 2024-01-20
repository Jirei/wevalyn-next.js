import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact - Wevalyn",
  description:
    "Get in touch with Wevalyn, your reliable partner for WordPress development solutions. Whether you have questions about our services, want a personalized quote, or are ready to kickstart your project, our contact page is your gateway to seamless communication. Our dedicated team is here to listen, understand your needs, and provide expert guidance to bring your web vision to life. Reach out today and let's collaborate on creating a tailored WordPress solution that meets your business goals.",
};

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { contactForm: contactFormDictionary } = await getDictionary(
    params.lang
  );
  return (
    <>
      <div className="my-24">
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
