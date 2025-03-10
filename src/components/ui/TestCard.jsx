import { Link } from "react-router";
import { Check } from "lucide-react";

export function TestCard({ id, fecha, nombre, mes, tema, descripcion, cantEx, exDone, color }) {
  return (
    <Link to={`/Examenes/${id}`}>
      <article className="h-32 flex flex-col py-5 bg-card rounded-xl cursor-pointer hover:bg-hover transition duration-300 ease-in-out">
        <div className="flex gap-4 items-center">
          <div className="min-w-1 h-4 rounded-r-sm" style={{ background: color }}></div>

          <h1 className="text-lg text-start font-semibold text-text1">
            {nombre} {mes} {fecha}
          </h1>

          {exDone === cantEx && cantEx > 0 && (
            <span className="bg-primary text-background rounded-full grid place-content-center h-4 w-4">
              <Check size={14} strokeWidth={3} />
            </span>
          )}
        </div>

        <p className="text-text2 font-semibold px-5">
          {descripcion && `${descripcion} |`}
          {tema && ` Tema: ${tema}`}
        </p>
        <p className="text-gray-500 font-semibold text-sm px-5">
          {exDone && exDone + "/"}
          {cantEx} Ejercicios
        </p>
      </article>
    </Link>
  );
}
