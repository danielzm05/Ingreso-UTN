import { Link } from "react-router";
export function ExerciseTestCard({ id, numero, consigna }) {
  return (
    <article className="h-16 overflow-hidden border-t border-slate-800 py-3 px-3 cursor-pointer hover:bg-slate-900 hover:rounded-xl transition duration-300 ease-in-out">
      <p className="text-gray-500 text-sm">
        <span className="text-sm font-medium text-white">Ejercicio {numero} </span>
        {consigna}
      </p>
    </article>
  );
}
