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
        "mx-2 flex flex-col items-center justify-center gap-8 transition-transform duration-3000 lg:w-[70vw] lg:flex-row-reverse",
      )}
    >
      <div ref={imageWrappingDivRef}>
        <Image
          className="h-full rounded max-lg:h-64 max-lg:object-cover max-lg:object-[center_30%]"
          src={employeeTalking}
          alt="An employee talking"
        />
      </div>
      <div className="mx-4 flex flex-col gap-y-4 text-xl leading-relaxed text-primary dark:text-primary-dark-theme">
        <p>{dictionary.paragraph1}</p>
        <p>{dictionary.paragraph2}</p>
      </div>
    </div>
  );
}
