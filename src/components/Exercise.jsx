export function ExerciseCard({ fecha, consigna, img, categorias }) {
  return (
    <article className="max-h-40 flex p-3 gap-3 border border-slate-800 rounded-xl cursor-pointer hover:bg-slate-900 transition duration-300 ease-in-out">
      <img className="rounded bg-white aspect-square w-32 h-32 object-contain" src={img} alt={consigna} />
      <section className="flex flex-col gap-2 items-start justify-start">
        <header>
          <p className="text-gray-500 font-semibold">{fecha}</p>
        </header>
        <h1 className="max-h-14 max-w-full text-lg text-start font-semibold text-ellipsis overflow-hidden">{consigna}</h1>
        <div className="flex gap-3">
          {categorias.length > 0
            ? categorias.map((c) => (
                <div key={c.Categoria.id_categoria} className={`px-2 py-1 rounded-2xl bg-${c.Categoria.color} text-xs`}>
                  {c.Categoria.nombre}
                </div>
              ))
            : null}
        </div>
      </section>
    </article>
  );
}
