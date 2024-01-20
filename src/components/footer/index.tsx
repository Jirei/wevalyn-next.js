import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
import Link from "next/link";

export async function Footer({ lang }: { lang: Locale }) {
  const { footer: dictionary } = await getDictionary(lang);
  return (
    <footer>
      <div className="flex flex-col gap-y-5 items-center bg-primary dark:bg-primary-very-dark-dark-theme text-white p-5 py-10">
        <h2 className="font-sans font-bold text-2xl">{dictionary.Wevalyn}</h2>
        {/* Need to use w-28 ml-7 (fixed width and half on margin left) to avoid layout shift when hover on links  */}
        <ul className="flex flex-col gap-y-1 font-sans w-28 ml-7">
          <li>
            <Link href={`/${lang}`} className="py-2 hover:font-bold">
              {dictionary.Home}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/about`} className="py-2 hover:font-bold">
              {dictionary.About}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}#services`} className="py-2 hover:font-bold">
              {dictionary.Services}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}#demos`} className="py-2 hover:font-bold">
              {dictionary.Demos}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}#testimonials`}
              className="py-2 hover:font-bold"
            >
              {dictionary.Testimonials}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/contact`} className="py-2 hover:font-bold">
              {dictionary.Contact}
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#464646] dark:bg-[#2a2a2a] text-white text-sm font-roboto text-center p-2 py-3">
        <p>{dictionary.copyright}</p>
      </div>
    </footer>
  );
}
