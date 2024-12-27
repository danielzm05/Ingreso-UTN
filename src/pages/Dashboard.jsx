import { LucideCircleCheckBig } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { useEffect } from "react";
export function Dashboard() {
  const { getDoneExercises, doneExercises } = useDataContext();

  useEffect(() => {
    getDoneExercises();
  }, []);
  return (
    <main className="py-5 sm:px-5 px-2 ">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <article className="bg-card rounded-xl p-3">
          <h2 className="text-md font-semibold">Proximo Ejercicio</h2>
        </article>
      </section>
    </main>
  );
}
