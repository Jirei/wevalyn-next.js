"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ArrowLottie({ className }: { className: string }) {
  return (
    <span aria-hidden={true}>
      <Player
        id="arrow-lottie"
        className={className}
        autoplay
        loop
        src="/contact-button-with-lottie/lottie/arrow.json"
      />
    </span>
  );
}
