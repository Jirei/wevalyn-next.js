"use client";
import Image from "next/image";
import restaurantPersonImage from "./images/restaurant-person.png";
import hairsalonPersonImage from "./images/cropped.png";
import languageSchoolPerson from "./images/language-school-person.png";
import { cn } from "@/lib/common";
import { Locale } from "@/internationalization/i18n-config";
import { useAppear } from "@/hooks/use-appear";
import { useRef } from "react";
const imageSources = [
  restaurantPersonImage,
  hairsalonPersonImage,
  languageSchoolPerson,
];
export function TestimonialItem({
  index,
  lang,
  name,
  company,
  testimonial,
}: {
  index: number;
  lang: Locale;
  name: string;
  company: string;
  testimonial: { paragraph1: string; paragraph2: string };
}) {
  const testimonialItemRef = useRef(null);
  const hasAppeared = useAppear(testimonialItemRef);
  return (
    <li
      className={cn(
        "relative flex w-[90vw] flex-col gap-y-10 rounded border  border-primary bg-pink-100 px-5 pb-12 pt-16 text-primary dark:border-primary-dark-theme dark:bg-[#3c3c3c] dark:text-white md:w-[70vw] xl:w-[25vw]",
        index === 1 && "!dark:bg-[#383838] bg-fuchsia-100",
      )}
      ref={testimonialItemRef}
    >
      <Image
        className={cn(
          " absolute left-0 right-0 -z-10 m-auto  h-56 w-56 translate-y-[-7rem] rounded-xl border border-primary bg-pink-200 object-cover transition-transform duration-3000 dark:border-primary-dark-theme dark:bg-primary-very-dark-dark-theme",
          hasAppeared && "translate-y-[-17.5rem]",
          index === 1 && "bg-fuchsia-200",
        )}
        src={imageSources[index]}
        alt="restaurant"
      />
      <h3
        className={cn(
          "text-center text-xl font-bold dark:text-primary-dark-theme",
          lang === "jp" && " text-gray-font",
        )}
      >
        {lang === "en" && (
          <>
            {name} from <i>{company}</i>
          </>
        )}
        {lang === "jp" && (
          <>
            <i>{company}</i>の
            <span className="text-primary dark:text-primary-light-dark-theme">
              {name}
            </span>
          </>
        )}
      </h3>
      <div className="flex flex-col gap-y-8 text-lg">
        <p>{testimonial.paragraph1}</p>
        <p>{testimonial.paragraph2}</p>
      </div>
    </li>
  );
}
