import Link from "next/link";
import { Settings } from "./settings";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";

export default async function NavDesktopMenu({ lang }: { lang: Locale }) {
  const { navDesktop: dictionary, settings: settingsDictionary } =
    await getDictionary(lang);
  return (
    <nav className="max-lg:hidden">
      <ul className="flex items-center gap-x-8 text-xl font-bold text-primary dark:text-primary-dark-theme">
        <li className="">
          <Settings
            menuId="settings-menu-desktop"
            dictionary={settingsDictionary}
          />
        </li>
        <li className="transition-all hover:scale-105">
          <Link
            className="p-1 hover:text-primary-light dark:hover:text-primary-light-dark-theme xl:p-4"
            href={`/${lang}`}
          >
            {dictionary.Home}
          </Link>
        </li>
        <li className="transition-all hover:scale-105">
          <Link
            className="p-1 hover:text-primary-light dark:hover:text-primary-light-dark-theme xl:p-4"
            href={`/${lang}/about`}
          >
            {dictionary.About}
          </Link>
        </li>
        <li className="transition-all hover:scale-105">
          <Link
            className="p-1 hover:text-primary-light dark:hover:text-primary-light-dark-theme xl:p-4"
            href={`/${lang}#services`}
          >
            {dictionary.Services}
          </Link>
        </li>
        <li className="transition-all hover:scale-105">
          <Link
            className="p-1 hover:text-primary-light dark:hover:text-primary-light-dark-theme xl:p-4"
            href={`/${lang}#demos`}
          >
            {dictionary.Demos}
          </Link>
        </li>
        <li className="transition-all hover:scale-105">
          <Link
            className="p-1 hover:text-primary-light dark:hover:text-primary-light-dark-theme xl:p-4"
            href={`/${lang}#testimonials`}
          >
            {dictionary.Testimonials}
          </Link>
        </li>
        <li className="p-2 xl:p-4">
          <Link
            href={`/${lang}/contact`}
            className="rounded-xl bg-[#C171C2] px-10 py-3  text-xl text-white shadow-cta-contact transition-all hover:scale-105 hover:bg-[#a749a9] dark:bg-contact-button-background-dark-theme dark:hover:bg-contact-button-background-hover-dark-theme"
          >
            {dictionary.Contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
