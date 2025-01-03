import { CircleCheckBig, FileBadge, Flame } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { CategoryDoughnut } from "../components/charts/CategoryDoughnut";
import { WeekSummary } from "../components/charts/WeekSummary";
import { useEffect } from "react";
import { StatCard } from "../components/ui/StatCard";
export function Dashboard() {
  const { getDoneExercises, doneExercises } = useDataContext();

  useEffect(() => {
    getDoneExercises();
  }, []);

  return (
    <main className="flex flex-col gap-3 py-5 sm:px-5 px-2 ">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section className="grid grid-cols-3 grid-rows-4 gap-4 max-h-screen ">
        <article className="col-span-2 row-span-2 flex flex-col gap-3 bg-card rounded-xl p-3 flex-1">
          <h2 className="text-md font-semibold">Categorias Realizadas</h2>
          <CategoryDoughnut exercises={doneExercises} />
        </article>
        <article className="row-span-2 flex flex-col gap-4 bg-card rounded-xl p-3 flex-1">
          <h2 className="text-md font-semibold">Resumen Semanal</h2>
          <WeekSummary exercises={doneExercises} />
        </article>
        <StatCard title="Ejercicios Completados de Hoy" stat={100}>
          <Flame size={18} />
        </StatCard>
        <StatCard title="Ejercicios completados" stat={doneExercises?.length}>
          <CircleCheckBig size={18} />
        </StatCard>
        <StatCard title="Examenes Completados" stat={100}>
          <FileBadge size={18} />
        </StatCard>
      </section>
    </main>
  );
}
