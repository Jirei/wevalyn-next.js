export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="w-fit mb-6 m-auto text-primary text-3xl font-normal text-center">
      {children}
    </h1>
  );
}
