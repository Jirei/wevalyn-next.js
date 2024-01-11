import { DemoWebsiteItem } from "./demo-website-item";
import { HomeSectionTitle } from "@/components/home-section-title";
import languageSchoolImage from "./images/language-school/main.png";
import hairdresserImage from "./images/hairdresser/main.png";
import restaurantImage from "./images/restaurant/main.png";

export function DemoWebsites() {
  return (
    <section id="demos" className="flex flex-col items-center gap-y-28">
      <HomeSectionTitle>Demo Websites</HomeSectionTitle>
      <p className="text-primary dark:text-primary-dark-theme rounded text-center mx-3 p-5 py-8 text-2xl bg-primary/20 dark:bg-primary-dark-theme/20">
        You can see below some of our creations.
      </p>
      <ul className="flex flex-col xl:flex-row lg:gap-x-3 gap-y-32">
        {demoWebsites.map(({ name, imgURL }, index) => (
          <DemoWebsiteItem key={index} name={name} imgURL={imgURL} />
        ))}
      </ul>
    </section>
  );
}

const demoWebsites = [
  { name: "Online Language School", imgURL: languageSchoolImage },
  { name: "Hairdresser", imgURL: hairdresserImage },
  { name: "Restaurant", imgURL: restaurantImage },
];
