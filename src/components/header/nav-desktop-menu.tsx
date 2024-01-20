import Link from "next/link";
import { Settings } from "./settings";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";

export default async function NavDesktopMenu({ lang }: { lang: Locale }) {
  const { navDesktop: dictionary, settings: settingsDictionary } =
    await getDictionary(lang);
  return (
    <nav className="max-lg:hidden">
      <ul className="text-primary dark:text-primary-dark-theme flex gap-x-8 font-bold text-xl items-center">
        <li className="">
          <Settings
            menuId="settings-menu-desktop"
            dictionary={settingsDictionary}
          />
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href={`/${lang}`}
          >
            {dictionary.Home}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href={`/${lang}/about`}
          >
            {dictionary.About}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href={`/${lang}#services`}
          >
            {dictionary.Services}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href={`/${lang}#demos`}
          >
            {dictionary.Demos}
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link
            className="p-1 xl:p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme"
            href={`/${lang}#testimonials`}
          >
            {dictionary.Testimonials}
          </Link>
        </li>
        <li className="p-2 xl:p-4">
          <Link
            href={`/${lang}/contact`}
            className="bg-[#C171C2] dark:bg-contact-button-background-dark-theme hover:bg-[#a749a9] dark:hover:bg-contact-button-background-hover-dark-theme  text-white text-xl px-10 py-3 rounded-xl shadow-cta-contact transition-all hover:scale-105"
          >
            {dictionary.Contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
