import { Link } from "react-router";
export function ExerciseTestCard({ id, numero, consigna }) {
  return (
    <article className="h-14 overflow-hidden border-t border-slate-800 py-3 px-3 cursor-pointer hover:bg-slate-900 hover:rounded-xl transition duration-300 ease-in-out">
      <p className="font-medium text-sm">
        {numero}
        {". "} {consigna}
      </p>
    </article>
  );
}
