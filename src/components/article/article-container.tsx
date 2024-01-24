import React from "react";

export function ArticleContainer({ children }: { children: React.ReactNode }) {
  return (
    <article className="m-auto mb-32 mt-24 flex max-w-[60rem] flex-col gap-y-16 rounded bg-[#e5ecf7] px-12 py-20 text-justify text-lg dark:bg-[#3c3c3c]">
      {children}
    </article>
  );
}
