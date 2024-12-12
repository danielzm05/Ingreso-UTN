export function ExercisePageCard({ respuesta, consigna, numero, fecha, nombre }) {
  return (
    <article className="m-10 flex py-3 px-5 gap-3 border border-slate-800 rounded-xl">
      <section className="flex flex-col gap-2 items-start justify-start">
        <header>
          <p className="text-gray-500 font-semibold">
            {fecha} {nombre} {"| Ejercicio"} {numero}
          </p>
        </header>
        <h1 className="max-w-full text-lg text-start font-semibold">{consigna}</h1>

        <footer className="w-full text-end">
          <p className="w-full text-end font-semibold">RTA: {respuesta}</p>
        </footer>
      </section>
    </article>
  );
}
