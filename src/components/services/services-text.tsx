import Image from "next/image";
import serviceSkilledWomanTalking from "./images/output_0005.png";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";

export async function ServiceText({ lang }: { lang: Locale }) {
  const { servicesText: dictionary } = await getDictionary(lang);
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-8 justify-center items-center lg:w-[70vw] mx-2">
      <div className="">
        <Image
          className="rounded max-lg:object-cover max-lg:object-[center_30%] max-lg:h-64 h-full"
          src={serviceSkilledWomanTalking}
          alt="Our dear employee talking"
        />
        {/* <video autoPlay loop muted src="/services/videos/services.mp4" /> */}
      </div>
      <div className="flex  flex-col  gap-y-4 text-xl leading-relaxed mx-4 text-primary dark:text-primary-dark-theme">
        <p>{dictionary.paragraph1}</p>
        <p>{dictionary.paragraph2}</p>
      </div>
    </div>
  );
}
