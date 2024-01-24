"use client";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { cn } from "@/lib/common";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { NavMobileDictionary } from "@/internationalization/dictionaries/types";
import { Locale } from "@/internationalization/i18n-config";

export default function NavMobileMenu({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: NavMobileDictionary;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label={dictionary.openMobileMenuButtonAriaLabel}
        aria-controls="mobile-menu"
        className="fixed right-2 top-[1.5rem] z-50 overflow-hidden rounded border border-white bg-primary text-white dark:bg-primary-very-dark-dark-theme lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <BiMenu className="bg-inherit text-inherit" size={"3em"} />
      </button>
      <nav
        // for ARIA of the button that opens it and the cross that closes it
        id="mobile-menu"
        role="dialog"
        aria-label={dictionary.mobileNavigationMenuAriaLabel}
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 z-50 flex h-screen w-screen translate-x-full flex-col items-center justify-center overflow-hidden bg-white/50 transition-all duration-700 dark:bg-black/50 lg:hidden",
          isOpen && "translate-x-0",
        )}
        onClick={(e) => {
          if (!(e.target instanceof HTMLElement)) return;
          const tagName = e.target.tagName;
          if (tagName === "NAV" || tagName === "A") {
            setIsOpen(false);
          }
        }}
      >
        <div className="relative flex w-3/4 flex-col gap-y-5 rounded-xl border border-primary bg-white py-16 text-primary dark:border-primary-dark-theme dark:bg-background-dark-theme dark:text-primary-dark-theme md:w-1/2">
          <button
            className="absolute right-6 top-6 text-2xl"
            onClick={() => setIsOpen(false)}
            aria-controls="mobile-menu"
            aria-label={dictionary.closeMobileMenuButtonAriaLabel}
          >
            <ImCross />
          </button>
          <h2 className="text-center text-2xl font-bold">{dictionary.Menu}</h2>
          <ul className="flex flex-col items-center justify-center gap-y-3 text-xl">
            <li>
              <Link className="p-2" href={`/${lang}`}>
                {dictionary.Home}
              </Link>
            </li>
            <li>
              <Link className="p-2" href={`/${lang}/about`}>
                {dictionary.About}
              </Link>
            </li>
            <li>
              <Link className="p-2" href={`/${lang}#services`}>
                {dictionary.Services}
              </Link>
            </li>
            <li>
              <Link className="p-2" href={`/${lang}#demos`}>
                {dictionary.Demos}
              </Link>
            </li>
            <li>
              <Link className="p-2" href={`/${lang}#testimonials`}>
                {dictionary.Testimonials}
              </Link>
            </li>
            <li>
              <Link className="p-2" href={`/${lang}/contact`}>
                {dictionary.Contact}
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <button
                className="p-2 text-red-600 dark:text-red-300"
                aria-controls="mobile-menu"
              >
                {dictionary.Close}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
