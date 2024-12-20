import { Link } from "react-router";
export function ExerciseCard({ id, id_examen, numero, tema, fecha, examen, consigna, img, categorias }) {
  return (
    <Link to={`/Examenes/${id_examen}/ejercicio/${id}`}>
      <article className="h-36 flex justify-between p-3 gap-3 border border-slate-800 rounded-xl cursor-pointer hover:bg-slate-900 transition duration-300 ease-in-out">
        {img ? <img className="rounded bg-white aspect-square w-28 h-full object-contain" src={img} alt={consigna} /> : null}

        <section className="w-full flex flex-col gap-1 items-start justify-start">
          <header>
            <p className="text-gray-500 text-sm">
              {examen} {fecha} {tema ? `| Tema ${tema}` : null}
            </p>
          </header>
          <h1 className="max-h-12 max-w-full text-base text-start font-semibold text-ellipsis overflow-hidden">{consigna}</h1>
          <div className="flex gap-3 mt-auto">
            {categorias.length > 0
              ? categorias.map((c) => (
                  <div key={c.Tema.id_tema} className={`px-2 py-1 rounded-2xl font-medium text-slate-800 bg-yellow-400 text-xs`}>
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
