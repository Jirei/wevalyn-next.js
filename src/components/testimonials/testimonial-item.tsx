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
        "relative bg-pink-100 dark:bg-[#3c3c3c] flex flex-col gap-y-10 text-primary  dark:text-white border-primary dark:border-primary-dark-theme border px-5 pt-16 pb-12 rounded w-[90vw] md:w-[70vw] xl:w-[25vw]",
        index === 1 && "bg-fuchsia-100 !dark:bg-[#383838]"
      )}
      ref={testimonialItemRef}
    >
      <Image
        className={cn(
          " w-56 h-56 object-cover bg-pink-200 dark:bg-primary-very-dark-dark-theme  absolute -z-10 rounded-xl border border-primary dark:border-primary-dark-theme m-auto left-0 right-0 translate-y-[-7rem] transition-transform duration-3000",
          hasAppeared && "translate-y-[-17.5rem]",
          index === 1 && "bg-fuchsia-200"
        )}
        src={imageSources[index]}
        alt="restaurant"
      />
      <h3
        className={cn(
          "text-xl text-center font-bold dark:text-primary-dark-theme",
          lang === "jp" && " text-gray-font"
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
      <div className=" text-lg flex flex-col gap-y-8">
        <p>{testimonial.paragraph1}</p>
        <p>{testimonial.paragraph2}</p>
      </div>
    </li>
  );
}
