export function ArticleTitleLevel3({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="font-bold dark:text-xl dark:text-gray-400">{children}</h3>
  );
}
