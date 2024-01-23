import { TestimonialsDictionary } from "@/internationalization/dictionaries/types";
import { TestimonialItem } from "./testimonial-item";
import { Locale } from "@/internationalization/i18n-config";

export function TestimonialsList({
  dictionary,
  lang,
}: {
  dictionary: TestimonialsDictionary;
  lang: Locale;
}) {
  return (
    <ul className="mt-64 flex flex-col xl:flex-row gap-y-64 gap-x-10 justify-center">
      {dictionary.testimonialsData.map((testimonialData, index) => (
        <TestimonialItem
          key={index}
          index={index}
          lang={lang}
          {...testimonialData}
        />
      ))}
    </ul>
  );
}
