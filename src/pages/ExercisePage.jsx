import { useParams } from "react-router";
import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";

export function ExercisePage() {
  const { exercises, getExercises } = useDataContext();
  const { id } = useParams();
  useEffect(() => {
    getExercises(id);
  }, []);

  return (
    exercises && (
      <article className="m-3 flex py-3 px-5 gap-3 border border-slate-800 rounded-xl">
        {exercises[0].img ? (
          <img className="rounded bg-white aspect-square w-32 h-32 object-contain" src={exercises[0].img} alt={exercises[0].consigna} />
        ) : null}
        <section className="flex flex-col gap-2 items-start justify-start">
          <header>
            <p className="text-gray-500 font-semibold">
              {exercises[0].Examen.fecha} {exercises[0].Examen.nombre} {"| Ejercicio"} {exercises[0].numero}
            </p>
          </header>
          <h1 className="max-w-full text-lg text-start font-semibold">
            {exercises[0].numero}
            {") "}
            {exercises[0].consigna}
          </h1>

          <footer className="w-full text-end">
            <p className="w-full text-end font-semibold">RTA: {exercises[0].respuesta}</p>
          </footer>
        </section>
      </article>
    )
  );
}
