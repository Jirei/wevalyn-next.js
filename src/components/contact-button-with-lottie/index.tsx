import Link from "next/link";
import ArrowLottie from "./arrow-lottie";
import { cn } from "@/lib/utils";
export function ContactButtonWithLottie() {
  return (
    <div className="flex gap-x-4 justify-center items-center">
      {/* Keep the left margin matched with the width of the arrow to keep the button centered /!\ */}
      {
        <Link
          href="/contact"
          className={cn(
            "bg-[#C171C2] hover:bg-[#a749a9]  text-white text-xl px-20 py-3 rounded-xl ml-[4rem] shadow-cta-contact transition-all hover:-translate-y-1",
          )}
        >
          Contact
        </Link>
      }
      <ArrowLottie className="w-16 rotate-180" />
    </div>
  );
}
