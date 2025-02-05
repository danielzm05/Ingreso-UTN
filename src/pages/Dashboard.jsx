import { CircleCheckBig, FileBadge, Flame } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { CategoryDoughnut } from "../components/charts/CategoryDoughnut";
import { WeekSummary } from "../components/charts/WeekSummary";
import { RandomExercise } from "../components/ui/RandomExercise";
import { useEffect } from "react";
import { StatCard } from "../components/ui/StatCard";
export function Dashboard() {
  const { getDoneExercises, doneExercises, getRandomEx, randomEx, getTests, tests, doneExercisesTest } = useDataContext();

  useEffect(() => {
    getDoneExercises();
    getRandomEx();
    getTests();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const exercisesToday = doneExercises.filter((e) => e.fecha.split("T")[0] === today);

  const doneTests = () => {
    let count = 0;
    tests.forEach((t) => {
      if (t.Ejercicio.length === doneExercisesTest(t.Ejercicio)) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <main className="flex flex-col gap-3 py-5 sm:px-5 px-2 bg-gradient-to-t from-background3 to-background">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 grid-rows-6 sm:grid-rows-4 gap-4 max-h-[260vh] sm:max-h-[150vh]">
        <article className="col-span-3 flex flex-col gap-4 bg-card rounded-xl p-3 ">
          <h2 className="flex items-center text-md font-semibold">
            <Flame size={24} /> Tu Proximo Ejercicio
          </h2>
          <RandomExercise ex={randomEx} newExercise={() => getRandomEx()} />
        </article>

        <StatCard title="Ejercicios Completados de Hoy" stat={exercisesToday.length} className={" border-l-4 border-primary"}>
          <Flame size={24} />
        </StatCard>
        <StatCard title="Ejercicios completados" stat={doneExercises?.length} className={" border-l-4 border-primary"}>
          <CircleCheckBig size={24} />
        </StatCard>
        <StatCard title="Examenes Completados" stat={doneTests()} className={"border-l-4 border-primary"}>
          <FileBadge size={24} />
        </StatCard>

        <article className="col-span-2 row-span-1 sm:row-span-2 flex flex-col gap-4 bg-card rounded-xl p-3 ">
          <h2 className="text-md font-semibold">Tu progreso</h2>
          <WeekSummary exercises={doneExercises} />
        </article>

        <article className="col-span-2 sm:col-span-1 row-span-2 flex flex-col gap-3 bg-card rounded-xl p-3 ">
          <h2 className="text-md font-semibold">Categorias Realizadas</h2>
          <CategoryDoughnut exercises={doneExercises} />
        </article>
      </section>
    </main>
  );
}
