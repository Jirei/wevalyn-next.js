import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-y-5 items-center bg-primary dark:bg-primary-very-dark-dark-theme text-white p-5 py-10">
        <h2 className="font-sans font-bold text-2xl">Wevalyn</h2>
        {/* Need to use w-28 ml-7 (fixed width and half on margin left) to avoid layout shift when hover on links  */}
        <ul className="flex flex-col gap-y-1 font-sans w-28 ml-7">
          <li>
            <Link href="/" className="py-2 hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="py-2 hover:font-bold">
              About
            </Link>
          </li>
          <li>
            <Link href="/#services" className="py-2 hover:font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#demos" className="py-2 hover:font-bold">
              Demos
            </Link>
          </li>
          <li>
            <Link href="/contact" className="py-2 hover:font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#464646] dark:bg-[#2a2a2a] text-white text-sm font-roboto text-center p-2 py-3">
        <p>© 2024 www.wevalyn.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
