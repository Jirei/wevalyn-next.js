"use client";
import { useLockBodyScroll } from "react-use";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import dynamic from "next/dynamic";
import NavDesktopMenu from "./nav-desktop-menu";
import Link from "next/link";
import { Settings } from "./settings";

const NavMobileMenu = dynamic(() => import("./nav-mobile-menu"));

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);
  return (
    <header>
      <div className="flex items-center justify-between h-24 p-3 xl:p-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-3">
            <Link
              href="/"
              className="font-sans text-primary dark:text-primary-dark-theme hover:text-primary-light-dark-theme font-bold text-3xl"
            >
              Wevalyn
            </Link>
            <span className="lg:hidden text-primary dark:text-primary-dark-theme text-xl">
              <Settings menuId="settings-menu-mobile" />
            </span>
          </div>
        </div>
        <div>
          <NavDesktopMenu />
        </div>
      </div>
      {/* Mobile Menu */}
      <button
        aria-label="Button to open mobile menu"
        aria-controls="mobile-menu"
        className="lg:hidden rounded text-white border border-white overflow-hidden bg-primary dark:bg-primary-very-dark-dark-theme fixed top-[1.5rem] right-2 z-50"
        onClick={() => setIsOpen(true)}
      >
        <BiMenu className="text-inherit bg-inherit" size={"3em"} />
      </button>
      <NavMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
