import { cn } from "@/lib/common";
import "./globals.css";
import { Poppins, Arvo, Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";

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
  display: "fallback",
  variable: "--font-roboto",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        poppins.variable,
        arvo.variable,
        roboto.variable,
        "scroll-smooth"
      )}
    >
      <body className="font-normal overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE !== "on" && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
