import Link from "next/link";
import ArrowLottie from "./arrow-lottie";
import { cn } from "@/lib/common";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
export async function ContactButtonWithLottie({ lang }: { lang: Locale }) {
  const { contactButton: dictionary } = await getDictionary(lang);
  return (
    <div className="flex items-center justify-center gap-x-4">
      {/* Keep the left margin matched with the width of the arrow to keep the button centered /!\ */}
      {
        <Link
          href="/contact"
          className={cn(
            "ml-[4rem] w-56 rounded-xl bg-[#C171C2] py-3  text-center text-xl font-bold text-white shadow-cta-contact transition-all hover:-translate-y-1 hover:bg-[#a749a9] dark:bg-contact-button-background-dark-theme dark:hover:bg-contact-button-background-hover-dark-theme",
          )}
        >
          {dictionary.Contact}
        </Link>
      }
      <ArrowLottie className="w-16 rotate-180" />
    </div>
  );
}
