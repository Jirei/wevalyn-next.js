import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";
import Link from "next/link";

export async function Footer({ lang }: { lang: Locale }) {
  const { footer: dictionary } = await getDictionary(lang);
  return (
    <footer>
      <div className="flex flex-col items-center gap-y-5 bg-primary p-5 py-10 text-white dark:bg-primary-very-dark-dark-theme">
        <h2 className="font-sans text-2xl font-bold">{dictionary.Wevalyn}</h2>
        {/* Need to use w-28 ml-7 (fixed width and half on margin left) to avoid layout shift when hover on links  */}
        <ul className="ml-7 flex w-28 flex-col gap-y-1 font-sans">
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
      <div className="bg-[#464646] p-2 py-3 text-center font-roboto text-sm text-white dark:bg-[#2a2a2a]">
        <p>{dictionary.copyright}</p>
      </div>
    </footer>
  );
}
