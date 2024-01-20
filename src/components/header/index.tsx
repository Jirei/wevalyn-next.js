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
      <div className="flex items-center justify-between h-24 p-3 xl:p-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-3">
            <Link
              href={`/${lang}`}
              className="font-sans text-primary dark:text-primary-dark-theme hover:text-primary-light  dark:hover:text-primary-light-dark-theme font-bold text-3xl transition-colors"
            >
              {dictionary.agencyName}
            </Link>
            <span className="lg:hidden text-primary dark:text-primary-dark-theme text-xl">
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
