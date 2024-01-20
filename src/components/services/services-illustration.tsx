"use client";
import { useAppear } from "@/hooks/use-appear";
import { cn } from "@/lib/common";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

export default function ServicesIllustration() {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <div
      aria-hidden={true}
      ref={intersectionRef}
      className={cn(
        "mb-32 after:w-[120%] after:h-[120%] after:translate-x-[-10%] after:translate-y-[10%] opacity-0 transition-opacity duration-3000 relative after:absolute after:m-auto after:inset-0 after:rounded-full after:bg-[rgb(0,105,181)]/20 dark:after:bg-primary-dark-theme/5",
        hasAppeared && "opacity-100"
      )}
    >
      <Player
        className="w-[50vw] max-w-[20rem]"
        autoplay
        loop
        src="/services/lottie/services-illustration.json"
        id="service-illustration"
      />
    </div>
  );
}
