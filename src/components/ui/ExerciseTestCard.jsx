import { Link } from "react-router";
import { Check } from "lucide-react";

export function ExerciseTestCard({ id, numero, consigna, id_examen, hecho }) {
  return (
    <Link to={`/examenes/${id_examen}/ejercicio/${id}`}>
      <article className="flex flex-wrap md:flex-nowrap items-center gap-2 min-h-16 overflow-hidden border-t border-border1 py-3 px-3 cursor-pointer hover:bg-hover hover:rounded-xl transition duration-300 ease-in-out">
        <span className="flex gap-1 items-center">
          {hecho && (
            <span className="bg-primary text-background rounded-full grid place-content-center h-3 w-3">
              <Check size={10} strokeWidth={3} />
            </span>
          )}
          <p className="text-sm font-medium text-text1 text-nowrap">Ejercicio {numero} </p>
        </span>

        <p className="text-gray-500 text-sm overflow-hidden text-ellipsis h-full w-full">{consigna}</p>
      </article>
    </Link>
  );
}
