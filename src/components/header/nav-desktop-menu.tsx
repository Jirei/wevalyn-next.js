import Link from "next/link";

export default function NavDesktopMenu() {
  return (
    <nav className="max-lg:hidden">
      <ul className="text-primary dark:text-primary-dark-theme flex gap-x-8 font-bold text-xl items-center">
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme" href="/">
            Home
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme" href="/about">
            About
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme" href="/#services">
            Services
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light dark:hover:text-primary-light-dark-theme" href="/#demos">
            Demos
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/contact"
            className="bg-[#C171C2] dark:bg-contact-button-background-dark-theme hover:bg-[#a749a9] dark:hover:bg-contact-button-background-hover-dark-theme  text-white text-xl px-10 py-3 rounded-xl shadow-cta-contact transition-all hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
