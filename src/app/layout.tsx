import { cn } from "@/lib/common";
import "./globals.css";
import { Poppins, Arvo, Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "./providers";
import Script from "next/script";

// export const runtime = "edge";

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
        "scroll-smooth",
        // You need that both for the HTML and body tags because of Mobile Firefox weird behavior
        "w-screen overflow-x-hidden"
      )}
      suppressHydrationWarning
    >
      {/* You need that both for the HTML and body tags because of Mobile Firefox weird behavior */}
      <body className="font-normal overflow-x-hidden w-screen dark:bg-background-dark-theme">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {getMicrosoftClarityScriptContent()}
        </Script>
      </body>
    </html>
  );
}

function getMicrosoftClarityScriptContent() {
  return `
          (function(c,l,a,r,i,t,y){
             c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
             t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
           })(window, document, "clarity", "script", "kll2e7wfzo");
    `;
}
