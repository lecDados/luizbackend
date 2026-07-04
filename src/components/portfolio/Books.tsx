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
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Books & Knowledge
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />
        <p className="mt-4 text-muted-foreground">
          Books that shaped my technical foundation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.title}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {book.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {book.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
