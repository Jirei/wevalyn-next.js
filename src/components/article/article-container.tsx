export function ArticleContainer({ children }: { children: React.ReactNode }) {
  return (
    <article className="text-justify mb-32 mt-24 px-12 py-20 rounded text-lg flex flex-col m-auto gap-y-16 text-gray-font max-w-[60rem] bg-[#e5ecf7]">
      {children}
    </article>
  );
}
