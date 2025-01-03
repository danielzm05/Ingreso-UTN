import { Check, NotebookTextIcon, LightbulbIcon } from "lucide-react";
import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { Link } from "react-router";

export function ExercisePageCard({ respuesta, consigna, img, numero, fecha = "", nombre, solucion, formulas, id_examen, hecho, onChange }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <article className="m-3 sm:m-10 flex flex-col p-5 gap-3 border border-slate-800 rounded-xl">
      <section className="min-w-full flex flex-col gap-2 items-start justify-start">
        <header>
          <Link to={`/examenes/${id_examen}`}>
            <p className="text-gray-500 font-semibold no-underline hover:underline">
              {fecha ? fecha : null} {nombre} {numero ? `Ejercicio: ${numero}` : null}
            </p>
          </Link>
        </header>
        <h1 className="max-w-full text-lg text-start font-semibold">{consigna}</h1>
        {img && (
          <a href={img} target="_blank">
            <img src={img} alt={consigna} className="mt-3 border border-slate-800 rounded-xl max-h-80 object-cover" />
          </a>
        )}

        <footer className="min-w-full flex justify-between mt-6">
          <p className="text-end font-semibold">RTA: {respuesta}</p>
          <div className="flex gap-4 text-gray-500 font-medium">
            <div className="flex items-center gap-1  ">
              <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                <input
                  onChange={onChange}
                  checked={hecho}
                  type="checkbox"
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded-full bg-transparent border-2 border-gray-500 checked:bg-primary checked:border-primary transition ease-in duration-300"
                  id="check-2"
                />
                <span className="absolute text-background opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Check size={14} strokeWidth={3} />
                </span>
              </label>
              <label className={`cursor-pointer ${hecho ? "text-primary" : "text-gray-500"} transition ease-in duration-300`} htmlFor="check-2">
                {hecho ? "Completado" : "Incompleto"}
              </label>
            </div>

            {solucion && (
              <a href="#solution" title="Ver Solución" onClick={() => setShowSolution(!showSolution)} className="grid place-content-center">
                <NotebookTextIcon size={18} />
              </a>
            )}
          </div>
        </footer>
      </section>

      {showSolution && solucion ? (
        <section id="solution" className="py-5 flex justify-between flex-wrap gap-5 border-t border-slate-800">
          <img src={solucion} alt={consigna} className="w-full max-w-4xl rounded-xl" />
          <section className=" text-gray-500 ">
            <h2 className="flex items-center gap-1 text-md font-semibold mb-2">
              <LightbulbIcon size={20} /> Formulas Utilizadas:
            </h2>
            <ul className="flex flex-col gap-1  list-none">
              <li className="hover:bg-slate-800 hover:text-white rounded-lg px-2 transition duration-300 ease-in-out">
                <a href="#" target="_blank" className="flex flex-col text-sm">
                  <span className="font-semibold">Teorema del Coseno</span>
                  <span>a+b=c</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      ) : null}
    </article>
  );
}
