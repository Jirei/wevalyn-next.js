"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ArrowLottie({ className }: { className: string }) {
  return (
    <span aria-label="Animated arrow">
      <Player className={className} autoplay loop src="/lottie/arrow.json" />
    </span>
  );
}
