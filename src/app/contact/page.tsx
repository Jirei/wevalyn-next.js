import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Wevalyn",
  description: "Get in touch with Wevalyn, your reliable partner for WordPress development solutions. Whether you have questions about our services, want a personalized quote, or are ready to kickstart your project, our contact page is your gateway to seamless communication. Our dedicated team is here to listen, understand your needs, and provide expert guidance to bring your web vision to life. Reach out today and let's collaborate on creating a tailored WordPress solution that meets your business goals."
};

export default function ContactPage() {
  return (
    <div className='my-24'>
      <ContactForm />
    </div>
  );
}
