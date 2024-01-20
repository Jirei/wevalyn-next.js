"use client";
import { cn } from "@/lib/common";
import { CSSTransition } from "react-transition-group";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { ImCross } from "react-icons/im";
import "./settings-popover.css";
import { useHydrationSafeTheme } from "@/hooks/use-hydration-safe-theme";
import { usePathname, useRouter } from "next/navigation";
import { SettingsDictionary } from "@/internationalization/dictionaries/types";

export function SettingsPopover({
  isOpen,
  setIsOpen,
  menuId,
  dictionary,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuId: string;
  dictionary: SettingsDictionary;
}) {
  const { theme, setTheme } = useTheme();
  const hydrationSafeTheme = useHydrationSafeTheme(theme);
  const popoverMenuRef = useRef(null);
  const router = useRouter();
  const pathName = usePathname();
  return (
    <CSSTransition
      ref={popoverMenuRef}
      in={isOpen}
      timeout={500}
      classNames="settings-popover-menu"
    >
      <div
        id={menuId}
        ref={popoverMenuRef}
        className={cn(
          "hidden absolute top-[100%] font-normal text-lg border-gray-400 border bg-white p-6 py-8 pt-10 rounded dark:bg-background-dark-theme "
        )}
      >
        <button
          className="absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-primary-light-dark-theme"
          onClick={() => setIsOpen(false)}
          title={dictionary.Close}
          aria-controls={menuId}
          aria-label={dictionary.closeSettingsMenuButtonAriaLabel}
        >
          <ImCross />
        </button>
        <div className="flex flex-col gap-y-3">
          <label htmlFor={`${menuId}-ui-select`}>{dictionary.Theme}:</label>
          <select
            id={`${menuId}-ui-select`}
            className="dark:bg-gray-800 p-3 px-5 rounded border border-gray-400"
            onChange={(e) => setTheme(e.target.value)}
            value={hydrationSafeTheme}
            disabled={!hydrationSafeTheme}
            aria-busy={!hydrationSafeTheme}
          >
            {!hydrationSafeTheme && <option>{dictionary.Loading}...</option>}
            <option value="system">{dictionary.System}</option>
            <option value="light">{dictionary.Light}</option>
            <option value="dark">{dictionary.Dark}</option>
          </select>
          <label htmlFor={`${menuId}-language-select`}>
            {dictionary.Language}:
          </label>
          <select
            defaultValue={pathName.split("/")[1]}
            onChange={(e) => {
              const segments = pathName.split("/");
              segments[1] = e.target.value;
              const pathWithNewLocale = segments.join("/");
              router.push(pathWithNewLocale);
            }}
            id={`${menuId}-language-select`}
            className="p-3 px-5 rounded dark:bg-gray-800  border border-gray-400"
          >
            <option value="en">English</option>
            <option value="jp">日本語</option>
          </select>
        </div>
      </div>
    </CSSTransition>
  );
}
