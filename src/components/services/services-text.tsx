"use client";
import Image from "next/image";
import employeeTalking from "./images/employee-talking.png";
import { useAppear } from "@/hooks/use-appear";
import { useRef } from "react";
import { ServicesTextDictionary } from "@/internationalization/dictionaries/types";
import { cn } from "@/lib/common";

export function ServiceText({
  dictionary,
}: {
  dictionary: ServicesTextDictionary;
}) {
  const imageWrappingDivRef = useRef(null);
  const hasAppeared = useAppear(imageWrappingDivRef);
  return (
    <div
      className={cn(
        hasAppeared
          ? "[transform:rotateY(0deg)]"
          : "[transform:rotateY(180deg)]",
        "transition-transform duration-3000 flex flex-col lg:flex-row-reverse gap-8 justify-center items-center lg:w-[70vw] mx-2"
      )}
    >
      <div ref={imageWrappingDivRef}>
        <Image
          className="rounded max-lg:object-cover max-lg:object-[center_30%] max-lg:h-64 h-full"
          src={employeeTalking}
          alt="An employee talking"
        />
      </div>
      <div className="flex flex-col gap-y-4 text-xl leading-relaxed mx-4 text-primary dark:text-primary-dark-theme">
        <p>{dictionary.paragraph1}</p>
        <p>{dictionary.paragraph2}</p>
      </div>
    </div>
  );
}
