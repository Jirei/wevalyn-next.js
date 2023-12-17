"use client";
import { useAppear } from "@/hooks/use-appear";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export function ServiceItem({
  logos,
  name,
  description,
  yellowRibbon,
  appearFrom,
}: {
  logos: JSX.Element[];
  name: string;
  description: string;
  yellowRibbon?: boolean;
  appearFrom: "left" | "right";
}) {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <li
      ref={intersectionRef}
      className={cn(
        "shadow-service-card transition-transform duration-1000 relative max-w-[24rem] text-white rounded-[5px] overflow-hidden",
        appearFrom === "right" &&
          "max-sm:translate-x-[90vw] md:translate-x-[45vw] xl:translate-x-[25vw] 2xl:translate-x-[20vw]",
        appearFrom === "left" &&
          "max-sm:-translate-x-[90vw] md:-translate-x-[45vw] xl:-translate-x-[25vw] 2xl:-translate-x-[20vw]",
        yellowRibbon &&
          "after:h-14 after:w-full after:bg-[#EDDC40] after:absolute after:z-10 after:top-0 after:left-[35%] after:rotate-45",
        hasAppeared && "!translate-x-0",
      )}
    >
      {/* md:h-full so that the smaller card in tablet view is stretched to fill the row height */}
      <div className="flex flex-col gap-y-8 p-5 py-16 items-center bg-primary-gradient md:h-full">
        <div>
          <div className="flex gap-x-4">{[...logos]}</div>
        </div>
        <h2 className="font-bold text-2xl text-center">{name}</h2>
        <p className="text-center text-xl">{description}</p>
      </div>
    </li>
  );
}
