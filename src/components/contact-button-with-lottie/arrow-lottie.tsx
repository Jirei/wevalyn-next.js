"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import arrowLottieJSON from "@/assets/lottie/arrow.json";

export default function ArrowLottie({ className }: { className: string }) {
  return (
    <span aria-label="Animated arrow">
      <Player className={className} autoplay loop src={arrowLottieJSON} />
    </span>
  );
}
