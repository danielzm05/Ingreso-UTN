export function StatCard({ title, stat, className, children }) {
  return (
    <article className={`flex flex-col justify-between bg-card rounded-xl p-3 h-full ${className}`}>
      <header>
        <div className="bg-hover w-7 h-7 rounded-md grid place-items-center">{children}</div>
      </header>
      <footer>
        <p className="text-text2 font-semibold text-sm">{title.toUpperCase()}</p>
        <p className="text-3xl font-semibold">{stat}</p>
      </footer>
    </article>
  );
}
