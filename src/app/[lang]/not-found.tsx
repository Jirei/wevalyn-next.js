"use client";
import { getLocaleFromPathname } from "@/lib/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const locale = getLocaleFromPathname(usePathname());
  const dictionary = inFileDictionaries[locale];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-8">
      <h1 className="mx-5 text-3xl text-primary dark:text-primary-dark-theme lg:text-5xl">
        {dictionary.PageNotFound}
      </h1>
      <div className="text-center text-xl leading-relaxed">
        <p>{dictionary.UnfortunatelyWeDidntFindThisPageOnOurSite}</p>
        <p>
          <Link className="underline" href={`/${locale}`}>
            {dictionary.ReturnHome}
          </Link>{" "}
          {dictionary.OrUseTheLinksInTheHeaderOrFooterToContinueYourVisit}
        </p>
      </div>
    </div>
  );
}
// Need in-file dictionaries because not found component can't take props (24th January 2024, Next.js 14.1.0) and it needs to be a client component to take the locale from the pathname
const inFileDictionaries = {
  en: {
    PageNotFound: "Page Not Found.",
    UnfortunatelyWeDidntFindThisPageOnOurSite:
      "Unfortunately, we didn't find this page on our site.",
    ReturnHome: "Return Home",
    OrUseTheLinksInTheHeaderOrFooterToContinueYourVisit:
      "or use the links in the header or footer to continue your visit.",
  },
  jp: {
    PageNotFound: "ページが見つかりませんでした。",
    UnfortunatelyWeDidntFindThisPageOnOurSite:
      "申し訳ありませんが、当サイトに該当するページは見つかりませんでした。",
    ReturnHome: "ホームに戻る",
    OrUseTheLinksInTheHeaderOrFooterToContinueYourVisit:
      "か、ヘッダーやフッターのリンクを使用して訪問を続けてください。",
  },
};
