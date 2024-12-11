import { useEffect } from "react";
import { useParams } from "react-router";
import { ExerciseTestCard } from "../components/ExerciseTestCard";
import { useDataContext } from "../context/DataContext";

export function TestPage() {
  const { tests, getTests } = useDataContext();
  const { id_examen } = useParams();

  useEffect(() => {
    getTests(id_examen);
    console.log(tests);
  }, []);

  return (
    tests && (
      <article className="m-10 flex flex-col py-3 px-5 gap-1 border border-slate-800 rounded-xl">
        <header className="py-3">
          <h1 className="max-w-full text-3xl text-start font-bold">
            {tests[0].nombre} {tests[0].fecha}
          </h1>
          <p className="text-gray-500 font-semibold">
            {tests[0].tema ? `Tema: ${tests[0].tema}` : ""} {tests[0].descripcion}
          </p>
        </header>

        <section className="flex flex-col">
          {tests[0].Ejercicio.map((ex) => (
            <ExerciseTestCard key={ex.id_ejercicio} id={ex.id_ejercicio} numero={ex.numero} consigna={ex.consigna} />
          ))}
        </section>
      </article>
    )
  );
}
