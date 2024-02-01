"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { getLocaleFromPathname } from "@/lib/client";
import { usePathname } from "next/navigation";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  const locale = getLocaleFromPathname(usePathname());
  const dictionary = inFileDictionaries[locale];

  return (
    <div>
      <h2>{dictionary.AnErrorOccurred}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {dictionary.PleaseTryAgain}
      </button>
    </div>
  );
}

const inFileDictionaries = {
  en: {
    AnErrorOccurred: "An error occurred.",
    PleaseTryAgain: "Please try again.",
  },
  jp: {
    AnErrorOccurred: "エラーが発生しました。",
    PleaseTryAgain: "再試行してください。",
  },
};
