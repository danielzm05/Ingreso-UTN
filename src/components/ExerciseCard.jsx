import { Link } from "react-router";
export function ExerciseCard({ id, id_examen, numero, fecha, examen, consigna, img, categorias }) {
  return (
    <Link to={`/Examenes/${id_examen}/ejercicio/${id}`}>
      <article className="max-h-40 flex p-3 gap-3 border border-slate-800 rounded-xl cursor-pointer hover:bg-slate-900 transition duration-300 ease-in-out">
        <img className="rounded bg-white aspect-square w-28 h-28 object-contain" src={img} alt={consigna} />
        <section className="flex flex-col gap-1 items-start justify-start">
          <header>
            <p className="text-gray-500 text-sm">
              {examen} {fecha}
            </p>
          </header>
          <h1 className="max-h-12 max-w-full text-base text-start font-semibold text-ellipsis overflow-hidden">{consigna}</h1>
          <div className="flex gap-3 mt-auto">
            {categorias.length > 0
              ? categorias.map((c) => (
                  <div key={c.Categoria.id_categoria} className={`px-2 py-1 rounded-2xl font-medium text-slate-800 bg-yellow-400 text-xs`}>
                    {c.Categoria.nombre}
                  </div>
                ))
              : null}
          </div>
        </section>
      </article>
    </Link>
  );
}
