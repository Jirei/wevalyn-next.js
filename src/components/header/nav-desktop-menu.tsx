import Link from "next/link";
import { Settings } from "./settings";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function NavDesktopMenu({ lang }: { lang: Locale }) {
  const { navDesktop: dictionary } = await getDictionary(lang);
  return (
    <nav className="max-lg:hidden">
      <ul className="text-primary dark:text-primary-dark-theme flex gap-x-8 font-bold text-xl items-center">
        <li className="">
          <Settings menuId="settings-menu-desktop" />
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href="/"
          >
            {dictionary.home}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href="/about"
          >
            {dictionary.about}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href="/#services"
          >
            {dictionary.services}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href="/#demos"
          >
            {dictionary.demos}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href="/#testimonials"
          >
            {dictionary.testimonials}
          </Link>
        </li>
        <li className="p-2 xl:p-4">
          <Link
            href="/contact"
            className="bg-[#C171C2] dark:bg-contact-button-background-dark-theme hover:bg-[#a749a9] dark:hover:bg-contact-button-background-hover-dark-theme  text-white text-xl px-10 py-3 rounded-xl shadow-cta-contact transition-all hover:scale-105"
          >
            {dictionary.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
