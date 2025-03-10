import { Check, EyeIcon, EyeClosedIcon, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PDfViewer } from "./PdfViewer";
import { Link } from "react-router";
import parse from "html-react-parser";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export function ExercisePageCard({
  respuesta,
  consigna,
  img,
  numero,
  fecha = "",
  categoria = "",
  mes = "",
  solucion,
  formulas,
  id_examen,
  hecho = false,
  onChange,
  archivo,
  autor,
}) {
  const [showSolution, setShowSolution] = useState(true);

  const renderContent = (htmlString) =>
    parse(htmlString, {
      replace: (domNode) => {
        if (domNode.name === "math") {
          return <InlineMath math={domNode.children[0].data} />;
        }
      },
    });

  return (
    <article className="m-3 sm:m-10 flex flex-col p-5 gap-3 border border-slate-800 rounded-xl bg-card">
      <section className="min-w-full flex flex-col gap-2 items-start justify-start">
        <header>
          <Link to={`/examenes/${id_examen}`}>
            <p className="text-gray-500 font-semibold no-underline hover:underline">
              {fecha} {categoria} {mes} {numero ? `Ejercicio: ${numero}` : null}
            </p>
          </Link>
        </header>
        <h1 className="max-w-full text-lg text-start font-semibold text-text1">{renderContent(consigna ? consigna : "")}</h1>
        {img && (
          <a href={img} target="_blank">
            <img src={img} alt={consigna} className="mt-3 border border-slate-800 rounded-xl max-h-80 object-cover" />
          </a>
        )}

        <footer className="min-w-full flex justify-between mt-6 ">
          <p className="text-end font-semibold text-text2">RTA: {renderContent(respuesta ? respuesta : "")}</p>
          <div className="flex gap-4 text-gray-500 font-medium">
            <div className="flex items-center gap-1  ">
              <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                <input
                  onChange={onChange}
                  defaultChecked={hecho}
                  type="checkbox"
                  className={`peer h-4 w-4 cursor-pointer appearance-none rounded-full border-2 ${
                    hecho ? "bg-primary border-primary" : "bg-transparent border-gray-500 "
                  } transition ease-in duration-300`}
                  id="check-2"
                />
                {hecho && (
                  <span className="absolute text-background opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <Check size={14} strokeWidth={3} />
                  </span>
                )}
              </label>
              <label className={`cursor-pointer ${hecho ? "text-primary" : "text-gray-500"} transition ease-in duration-300`} htmlFor="check-2">
                {hecho ? "Completado" : "Incompleto"}
              </label>
            </div>

            {solucion && (
              <a href="#solution" title="Ver Solución" onClick={() => setShowSolution(!showSolution)} className="grid place-content-center">
                {showSolution ? <EyeIcon size={18} /> : <EyeClosedIcon size={20} />}
              </a>
            )}
          </div>
        </footer>
      </section>

      {showSolution && solucion ? (
        <section id="solution" className="min-h-[60vh] max-h-fit py-5 flex justify-between flex-wrap gap-5 border-t border-border1 ">
          {formulas.length > 0 && (
            <section>
              <h2 className="text-md font-semibold mb-2 text-text1 ">Formulas Utilizadas</h2>
              <ul className="flex flex-col list-none">
                {formulas.map((f) => (
                  <li className="hover:bg-slate-800 hover:text-white rounded-lg transition duration-300 ease-in-out" key={f.Formula.id_formula}>
                    <a href={f.Formula.link} target="_blank" className="flex justify-between text-sm py-2 gap-1">
                      <span className="flex gap-1 items-center font-semibold text-text2">
                        <ChevronRight size={14} /> {f.Formula.nombre.toUpperCase()}
                      </span>
                      <span className="pl-5 text-[16px] text-text1">{renderContent(f.Formula.formula)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="flex flex-col gap-3">
            <PDfViewer url={archivo} page={solucion} />
            {autor && <p className="text-text2 text-sm">Realizado por: {autor}</p>}
          </div>
        </section>
      ) : null}
    </article>
  );
}
