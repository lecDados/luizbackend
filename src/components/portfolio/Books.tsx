
const books = [
  {
    title: "Complete Software Architecture",
    points: [
      "Software architecture principles",
      "Project organization",
      "Scalability",
      "Separation of responsibilities",
      "Best practices for maintainable applications",
    ],
  },
  {
    title: "JavaScript with Dashboards",
    points: [
      "JavaScript fundamentals",
      "DOM manipulation",
      "Interactive interfaces",
      "Dynamic dashboards",
      "Practical frontend concepts",
    ],
  },
];

export function Books() {
  return (
    <section id="books" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Books &amp; Knowledge
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />
            <p className="mt-4 text-muted-foreground">
              Books that shaped my technical foundation.
            </p>
          </div>

          {/* Livro aberto + formas geométricas de estudo */}
          <div aria-hidden="true" className="flex items-center gap-4 text-orange-500">
            <div className="h-6 w-10 rotate-6 rounded-sm border-2 border-orange-500/60" />
            <div className="h-12 w-12 rounded-full border-2 border-orange-500/70" />
            <div className="h-0 w-0 border-x-[16px] border-b-[28px] border-x-transparent border-b-orange-500/70" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.title}
              className="rounded-xl border border-border bg-card p-6 shadow-card transition-colors hover:border-orange-500/40"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {book.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {book.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
