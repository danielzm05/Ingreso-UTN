import { LucideCircleCheckBig } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { CategoryDoughnut } from "../components/charts/CategoryDoughnut";
import { WeekSummary } from "../components/charts/WeekSummary";
import { useEffect } from "react";
export function Dashboard() {
  const { getDoneExercises, doneExercises } = useDataContext();

  useEffect(() => {
    getDoneExercises();
  }, []);

  return (
    <main className="flex flex-col gap-3 py-5 sm:px-5 px-2 ">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section className="flex gap-4 max-h-80 ">
        <article className="flex flex-col gap-3 bg-card rounded-xl p-3 flex-1">
          <h2 className="text-md font-semibold">Categorias Realizadas</h2>
          <CategoryDoughnut exercises={doneExercises} />
        </article>
        <article className="flex flex-col gap-4 bg-card rounded-xl p-3 flex-1">
          <h2 className="text-md font-semibold">Resumen Semanal</h2>
          <WeekSummary exercises={doneExercises} />
        </article>
      </section>
    </main>
  );
}
