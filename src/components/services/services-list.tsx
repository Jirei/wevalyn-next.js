import { FaWordpress } from "react-icons/fa6";
import { FaElementor } from "react-icons/fa6";
import { ServiceItem } from "./service-item";

export default function ServicesList() {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-5 md:items-stretch gap-y-6 p-2 overflow-hidden">
      {services.map((serviceData, index) => (
        <ServiceItem {...serviceData} key={index} />
      ))}
    </ul>
  );
}

const logos: { [index: string]: JSX.Element } = {
  wordpress: <FaWordpress size="6em" />,
  elementor: <FaElementor size="6em" />,
};

type AppearDirection = "left" | "right";

const services = [
  {
    logos: [logos.wordpress],
    name: "Customization of Existing WordPress Theme",
    description: "We personalize a WordPress theme of your choosing.",
    appearFrom: "right" as AppearDirection,
  },
  {
    logos: [logos.elementor, logos.wordpress],
    name: "Custom Theme With Elementor",
    description: "We create a custom Elementor theme according to your needs.",
    appearFrom: "left" as AppearDirection,
  },
  {
    logos: [logos.wordpress],
    name: "Custom WordPress Theme From Scratch",
    description:
      "We create a custom WordPress theme from scratch according to your needs.",
    appearFrom: "right" as AppearDirection,
    yellowRibbon: true,
  },
];
