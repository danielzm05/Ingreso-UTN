import { Link } from "react-router";
import { Check } from "lucide-react";

export function TestCard({ id, fecha, nombre, tema, descripcion, cantEx, exDone }) {
  return (
    <Link to={`/Examenes/${id}`}>
      <article className="h-32 flex flex-col items-start p-5 bg-card rounded-xl cursor-pointer hover:bg-hover transition duration-300 ease-in-out">
        <h1 className="flex gap-2 items-center text-lg text-start font-semibold text-text1">
          {nombre}
          {exDone === cantEx && cantEx > 0 && (
            <span className="bg-primary text-background rounded-full grid place-content-center h-4 w-4">
              <Check size={14} strokeWidth={3} />
            </span>
          )}
        </h1>

        <p className="text-text2 font-semibold text-md">
          {descripcion && `${descripcion} |`}
          {tema && ` Tema: ${tema}`}
        </p>
        <p className="text-gray-500 font-semibold text-sm">
          {exDone && exDone + "/"}
          {cantEx} Ejercicios
        </p>
      </article>
    </Link>
  );
}
