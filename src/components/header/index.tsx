import dynamic from "next/dynamic";
import NavDesktopMenu from "./nav-desktop-menu";
import Link from "next/link";
import { Settings } from "./settings";
import { Locale } from "@/internationalization/i18n-config";
import { getDictionary } from "@/internationalization/get-dictionary";

const NavMobileMenu = dynamic(() => import("./nav-mobile-menu"));

export async function Header({ lang }: { lang: Locale }) {
  const {
    header: dictionary,
    navMobile: navMobileDictionary,
    settings: settingsDictionary,
  } = await getDictionary(lang);
  return (
    <header>
      <div className="flex h-24 items-center justify-between p-3 xl:p-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-3">
            <Link
              href={`/${lang}`}
              className="font-sans text-3xl font-bold text-primary  transition-colors hover:text-primary-light dark:text-primary-dark-theme dark:hover:text-primary-light-dark-theme"
            >
              {dictionary.agencyName}
            </Link>
            <span className="text-xl text-primary dark:text-primary-dark-theme lg:hidden">
              <Settings
                menuId="settings-menu-mobile"
                dictionary={settingsDictionary}
              />
            </span>
          </div>
        </div>
        <div>
          <NavDesktopMenu lang={lang} />
        </div>
      </div>
      <NavMobileMenu dictionary={navMobileDictionary} lang={lang} />
    </header>
  );
}
