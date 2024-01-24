import { cn } from "@/lib/common";
import "@/app/globals.css";
import { Poppins, Arvo, Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "./providers";
import { i18n, type Locale } from "@/internationalization/i18n-config";
import React from "react";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "700"],
});

const arvo = Arvo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arvo",
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      className={cn(
        poppins.variable,
        arvo.variable,
        roboto.variable,
        "scroll-smooth",
        // You need that both for the HTML and body tags because of Mobile Firefox weird behavior
        "w-screen overflow-x-hidden",
      )}
      suppressHydrationWarning
    >
      {/* You need that both for the HTML and body tags because of Mobile Firefox weird behavior */}
      <body className="w-screen min-h-screen flex flex-col justify-between overflow-x-hidden font-normal text-gray-font dark:bg-[#3e3e3e] dark:text-white">
        <Providers>
          <Header lang={params.lang} />
          <main className="flex flex-col items-center justify-center">{children}</main>
          <Footer lang={params.lang} />
        </Providers>
      </body>
    </html>
  );
}
