import { Link } from "react-router";
import { Check } from "lucide-react";
import { useRenderKatex } from "@/hooks/useRenderKatex";

export function ExerciseCard({ id, id_examen, tema, fecha, mes, examen, consigna, img, categorias = [], hecho }) {
  return (
    <Link to={`/examenes/${id_examen}/ejercicio/${id}`}>
      <article className="w-full h-28 sm:h-32 flex justify-between p-3 gap-3 bg-card rounded-xl cursor-pointer hover:bg-hover transition duration-300 ease-in-out">
        {img ? <img className="rounded bg-white aspect-square w-28 h-full object-contain" src={img} alt={consigna} /> : null}

        <section className="w-full flex flex-col gap-1 items-start justify-start">
          <header className="flex items-center gap-2">
            {hecho && (
              <span className="bg-primary text-background rounded-full grid place-content-center h-4 w-4">
                <Check size={14} strokeWidth={3} />
              </span>
            )}
            <p className="text-gray-500 text-sm font-semibold">
              {examen} {mes} {fecha} {tema ? `| Tema ${tema}` : null}
            </p>
          </header>
          <h1 className="max-h-16 sm:max-h-12 max-w-full text-sm sm:text-base text-text1 text-start font-semibold text-ellipsis overflow-hidden">
            {useRenderKatex(consigna)}
          </h1>
          <div className="flex gap-3 mt-auto">
            {categorias.length > 0
              ? categorias.map((c) => (
                  <div key={c.Tema.id_tema} className={` font-medium text-text2 text-xs`}>
                    {c.Tema.nombre}
                  </div>
                ))
              : null}
          </div>
        </section>
      </article>
    </Link>
  );
}
