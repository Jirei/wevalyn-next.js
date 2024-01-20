"use client";
import { useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { useClickAway } from "react-use";
import dynamic from "next/dynamic";
import { SettingsDictionary } from "@/internationalization/dictionaries/types";

const SettingsPopover = dynamic(() =>
  import("./settings-popover").then((mod) => mod.SettingsPopover)
);

export function Settings({
  menuId,
  dictionary,
}: {
  menuId: string;
  dictionary: SettingsDictionary;
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const wrappingDivRef = useRef(null);
  useClickAway(wrappingDivRef, () => {
    setIsPopoverOpen(false);
  });
  return (
    <div ref={wrappingDivRef} className="z-30 relative p-4 flex items-center">
      <button
        className="hover:text-primary-light dark:hover:text-primary-light-dark-theme hover:cursor-pointer hover:scale-105 transition-all"
        title={dictionary.Settings}
        aria-label={dictionary.toggleVisiblityButtonAriaLabel}
        aria-controls={menuId}
        aria-expanded={isPopoverOpen}
        onClick={() => setIsPopoverOpen((prev) => !prev)}
      >
        <IoMdSettings size="1.5em" />
      </button>
      <SettingsPopover
        isOpen={isPopoverOpen}
        setIsOpen={setIsPopoverOpen}
        menuId={menuId}
        dictionary={dictionary}
      />
    </div>
  );
}
