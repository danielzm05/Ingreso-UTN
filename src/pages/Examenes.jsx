import { TestCard } from "../components/Test";
import { useDataContext } from "../context/DataContext";
import { useEffect } from "react";
export function Examenes() {
  const { tests, getTests } = useDataContext();

  useEffect(() => {
    getTests();
    console.log(tests);
  }, []);

  return (
    <>
      <main className="flex flex-col gap-3 px-10 py-11">
        {tests &&
          tests.map((t) => (
            <TestCard key={t.id_examen} id={t.id_examen} nombre={t.nombre} descripcion={t.descripcion} tema={t.tema} fecha={t.fecha} />
          ))}
      </main>
    </>
  );
}
