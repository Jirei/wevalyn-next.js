import React from "react";

export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="m-auto mb-6 w-fit text-center font-normal text-3xl text-primary dark:text-primary-light-dark-theme">
      {children}
    </h1>
  );
}
