import { ImCross } from "react-icons/im";
import { cn } from "@/lib/functions";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function NavMobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={cn(
        "lg:hidden flex flex-col items-center justify-center bg-white/50 fixed top-0 translate-x-full duration-700 w-screen overflow-hidden h-screen z-50 transition-all",
        isOpen && "translate-x-0",
      )}
      onClick={(e) => {
        if (!(e.target instanceof HTMLElement)) return;
        const tagName = e.target.tagName;
        if (tagName === "NAV" || tagName === "A") {
          setIsOpen(false);
        }
      }}
    >
      <div className="relative flex flex-col gap-y-5 rounded-xl text-primary bg-white w-3/4 md:w-1/2 p-5 py-16 border border-primary">
        <ImCross
          onClick={() => setIsOpen(false)}
          className="text-2xl absolute top-6 right-6"
        />
        <h2 className="text-center text-2xl font-bold">Menu</h2>
        <ul className="flex flex-col gap-y-3 text-xl justify-center items-center">
          <li>
            <Link className="p-2" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="p-2" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="p-2" href="/#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="p-2" href="/#demos">
              Demos
            </Link>
          </li>
          <li>
            <Link className="p-2" href="/contact">
              Contact
            </Link>
          </li>
          <li className="p-2 text-red-500" onClick={() => setIsOpen(false)}>
            Close
          </li>
        </ul>
      </div>
    </nav>
  );
}
