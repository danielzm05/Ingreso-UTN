import { memo } from 'react'

function StatCard({ title, stat, className, children }) {
  return (
    <article className={`flex flex-col justify-between bg-card rounded-xl p-3 h-full ${className}`}>
      <header>
        <div className="bg-hover w-10 h-10 rounded-md grid place-items-center">{children}</div>
      </header>
      <footer>
        <p className="text-text2 font-semibold  text-sm sm:text-md">{title.toUpperCase()}</p>
        <p className="text-3xl font-semibold">{stat}</p>
      </footer>
    </article>
  );
}

export default memo(StatCard)
