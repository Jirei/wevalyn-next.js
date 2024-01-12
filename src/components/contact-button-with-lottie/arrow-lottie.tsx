"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import arrowLottieJSON from "./lottie/arrow.json";

export default function ArrowLottie({ className }: { className: string }) {
  return (
    <span aria-hidden={true}>
      <Player
        id="arrow-lottie"
        className={className}
        autoplay
        loop
        src={arrowLottieJSON}
      />
    </span>
  );
}
