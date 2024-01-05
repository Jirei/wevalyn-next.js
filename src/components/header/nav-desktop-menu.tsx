import Link from "next/link";

export default function NavDesktopMenu() {
  return (
    <nav className="max-lg:hidden">
      <ul className="text-primary flex gap-x-8 font-bold text-xl items-center">
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light" href="/">
            Home
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light" href="/about">
            About
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light" href="/#services">
            Services
          </Link>
        </li>
        <li className="hover:scale-105 transition-all">
          <Link className="p-4 hover:text-primary-light" href="/#demos">
            Demos
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/contact"
            className="bg-[#C171C2] hover:bg-[#a749a9]  text-white text-xl px-10 py-3 rounded-xl shadow-cta-contact transition-all hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
