import React from "react";

export function HomeSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl text-primary dark:text-primary-dark-theme">
      {children}
    </h2>
  );
}
