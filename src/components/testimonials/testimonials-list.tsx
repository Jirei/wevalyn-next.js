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
    <ul className="mt-64 flex flex-col justify-center gap-x-10 gap-y-64 xl:flex-row">
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
