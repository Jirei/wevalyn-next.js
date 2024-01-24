import backgroundImage from "./images/hero.jpg";
import Image from "next/image";
import "./hero.css";

export default function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //source of the "hack" for the background image: https://github.com/vercel/next.js/discussions/18357
    <div className="relative">
      {/* it was z-50 before, you change it but don't know if you broke something */}
      {/* You put -1px on the positioning of span of the svg because there was a gap */}
      <span className="absolute right-0 top-[-1px] z-10 hidden w-screen lg:block">
        <svg
          width="100%"
          viewBox="0 0 1640 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            width="100%"
            d="M-0.5 0H1640.5V114L-0.5 61V0Z"
            fill="url(#paint0_linear_3_45)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_45"
              x1="806.5"
              y1="-93.5"
              x2="895"
              y2="451.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="hero__stop1" />
              <stop className="hero__stop2" offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {/*clip-path:'inset(0)' is used to hide the fixed image inside of it
      source of the solution: https://stackoverflow.com/a/68466386/14131879
      */}
      <div className="relative [clip-path:inset(0)] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[rgb(0,105,181)]/20 dark:after:bg-[rgb(0,0,0)]/20">
        {/* Be careful when modifying stuff, you  need to keep the image optimized and with a fixed effect: https://stackoverflow.com/questions/73528598/how-can-i-use-next-js-image-and-attach-it-to-the-background */}
        <div className="fixed left-0 top-0 h-full w-full">
          <video
            //style={{ objectPosition: "60%" }}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            {/* Compressed versions aren't used because doesn't seem worth it */}
            <source
              src="/hero/videos/welcoming-personnel.webm"
              type="video/webm"
            />
            <source
              src="/hero/videos/welcoming-personnel.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative z-10 flex h-[80vh] items-center justify-center lg:h-[90vh]">
          <div className="flex items-center justify-center">
            <svg
              className="w-[24rem] max-w-[98vw] md:w-[60vw] md:min-w-[35rem] lg:w-[35rem]"
              viewBox="0 0 213 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                width="100%"
                height="100%"
                cx="106.019"
                cy="52.1803"
                rx="106.019"
                ry="52.1803"
                className="fill-[#0069b5] dark:fill-[#2d4a47]"
                fill=""
                fillOpacity="0.8"
              />
            </svg>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
