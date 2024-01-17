"use client";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { cn } from "@/lib/common";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function NavMobileMenu({
  dictionary,
}: {
  dictionary: {
    home: string;
    about: string;
    services: string;
    demos: string;
    testimonials: string;
    contact: string;
    close: string;
    menu: string;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Button to open mobile menu"
        aria-controls="mobile-menu"
        className="lg:hidden rounded text-white border border-white overflow-hidden bg-primary dark:bg-primary-very-dark-dark-theme fixed top-[1.5rem] right-2 z-50"
        onClick={() => setIsOpen(true)}
      >
        <BiMenu className="text-inherit bg-inherit" size={"3em"} />
      </button>
      <nav
        // for ARIA of the button that opens it and the cross that closes it
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
        className={cn(
          "lg:hidden flex flex-col items-center justify-center bg-white/50 dark:bg-black/50 fixed top-0 translate-x-full duration-700 w-screen overflow-hidden h-screen z-50 transition-all",
          isOpen && "translate-x-0"
        )}
        onClick={(e) => {
          if (!(e.target instanceof HTMLElement)) return;
          const tagName = e.target.tagName;
          if (tagName === "NAV" || tagName === "A") {
            setIsOpen(false);
          }
        }}
      >
        <div className="relative flex flex-col gap-y-5 rounded-xl text-primary dark:text-primary-dark-theme bg-white dark:bg-background-dark-theme w-3/4 md:w-1/2 py-16 border border-primary dark:border-primary-dark-theme">
          <button
            className="text-2xl absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
            aria-controls="mobile-menu"
            aria-label="Button to Close Mobile Menu"
          >
            <ImCross />
          </button>
          <h2 className="text-center text-2xl font-bold">{dictionary.menu}</h2>
          <ul className="flex flex-col gap-y-3 text-xl justify-center items-center">
            <li>
              <Link className="p-2" href="/">
                {dictionary.home}
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/about">
                {dictionary.about}
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/#services">
                {dictionary.services}
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/#demos">
                {dictionary.demos}
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/contact">
                {dictionary.contact}
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <button
                className="p-2 text-red-600 dark:text-red-300"
                aria-controls="mobile-menu"
              >
                {dictionary.close}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
