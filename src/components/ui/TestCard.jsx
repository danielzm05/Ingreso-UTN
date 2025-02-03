import { Link } from "react-router";
import { Check } from "lucide-react";

export function TestCard({ id, fecha, nombre, tema, cantEx, exDone }) {
  return (
    <Link to={`/Examenes/${id}`}>
      <article className="h-32 flex flex-col items-start p-5 gap-1 bg-card rounded-xl cursor-pointer hover:bg-hover transition duration-300 ease-in-out">
        <h1 className="flex gap-2 items-center text-lg text-start font-semibold">
          {exDone === cantEx && (
            <span className="bg-primary text-background rounded-full grid place-content-center h-4 w-4">
              <Check size={14} strokeWidth={3} />
            </span>
          )}
          {fecha} {nombre}
        </h1>
        <p className="text-gray-500 font-semibold">
          {exDone && exDone + "/"}
          {cantEx} Ejercicios {tema && `| Tema: ${tema}`}
        </p>
      </article>
    </Link>
  );
}
