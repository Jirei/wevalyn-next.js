"use client";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useAppear } from "@/hooks/use-appear";
import { cn } from "@/lib/utils";

export function DemoWebsiteItem({
  name,
  imgURL,
}: {
  name: string;
  imgURL: StaticImageData;
}) {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <li
      ref={intersectionRef}
      className={cn(
        "opacity-0 duration-3000 flex flex-col items-center gap-y-9",
        hasAppeared && "opacity-100",
      )}
    >
      <h2 className="text-primary-light text-2xl">{name}</h2>
      <Image src={imgURL} alt={name + " site screenshot"} />
      <button className="bg-primary-gradient text-white text-xl px-6 py-4 rounded hover: hover:cursor-pointer hover:scale-105">
        See live demo
      </button>
    </li>
  );
}
