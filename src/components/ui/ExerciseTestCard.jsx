import { Link } from "react-router";
export function ExerciseTestCard({ id, numero, consigna, id_examen }) {
  return (
    <Link to={`/examenes/${id_examen}/ejercicio/${id}`}>
      <article className="min-h-16 overflow-hidden border-t border-border1 py-3 px-3 cursor-pointer hover:bg-hover hover:rounded-xl transition duration-300 ease-in-out">
        <p className="text-gray-500 text-sm overflow-hidden text-ellipsis h-full">
          <span className="text-sm font-medium text-white">Ejercicio {numero} </span>
          {consigna}
        </p>
      </article>
    </Link>
  );
}
