"use client";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useAppear } from "@/hooks/use-appear";
import { cn } from "@/lib/common";
import { DemoWebsiteItemDictionary } from "@/internationalization/dictionaries/types";

export function DemoWebsiteItem({
  name,
  imgURL,
  dictionary,
}: {
  name: string;
  imgURL: StaticImageData;
  dictionary: DemoWebsiteItemDictionary;
}) {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <li
      ref={intersectionRef}
      className={cn(
        "flex flex-col items-center gap-y-9 opacity-0 duration-3000",
        hasAppeared && "opacity-100",
      )}
    >
      <h2 className="text-2xl text-primary-light dark:text-primary-light-dark-theme">
        {name}
      </h2>
      <Image src={imgURL} alt={name + " site screenshot"} />
      <button
        // used to cancel hover in dark theme
        className="rounded border border-transparent bg-primary-gradient px-6 py-4 text-xl text-white transition-transform hover:scale-105 hover:cursor-pointer dark:bg-primary-gradient-dark-theme dark:hover:scale-100 dark:hover:border-primary-light-dark-theme"
      >
        {dictionary.seeLiveDemo}
      </button>
    </li>
  );
}
