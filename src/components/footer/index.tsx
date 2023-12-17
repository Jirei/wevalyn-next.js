import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex flex-col gap-y-5 items-center bg-primary text-white p-5 py-10">
        <h2 className="font-sans font-bold text-2xl">Wevalyn</h2>
        <ul className="flex flex-col gap-y-1 font-sans">
          <li>
            <Link className="py-2 hover:font-bold" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="py-2 hover:font-bold" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className='relative py-2 font-bold text-transparent after:content-["Services"] after:absolute after:left-0 after:font-normal after:font-sans after:hover:font-bold after:text-white'
            >
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
      <div className="bg-[#474646] text-white text-sm font-roboto text-center p-2 py-3">
        <p>© 2024 www.wevalyn.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
