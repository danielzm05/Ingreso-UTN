import { CircleCheckBig, FileBadge, Flame } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { CategoryDoughnut } from "../components/charts/CategoryDoughnut";
import { WeekSummary } from "../components/charts/WeekSummary";
import { RandomExercise } from "../components/ui/RandomExercise";
import { useEffect } from "react";
import { StatCard } from "../components/ui/StatCard";
import { Shuffle } from "lucide-react";
import { Button } from "../components/ui/Button";
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
      if (t.Ejercicio.length === doneExercisesTest(t.Ejercicio) && t.Ejercicio.length > 0) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <main className="flex flex-col gap-3 py-5 sm:px-5 px-2 bg-gradient-to-t from-background3 to-background">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 grid-rows-6 sm:grid-rows-4 gap-4 max-h-[170vh] sm:max-h-[150vh] *:outline *:outline-1 *:outline-border1">
        <article className="col-span-full flex flex-col gap-4 bg-card rounded-xl p-3 ">
          <h2 className="flex items-center text-md font-semibold">
            <Flame size={24} /> Tu Proximo Ejercicio
          </h2>
          <div className="flex sm:flex-col justify-center items-center gap-3">
            <RandomExercise ex={randomEx} style={"max-h-28"} />
            <Button
              onClick={() => getRandomEx()}
              className={"p-1 flex gap-2 items-center font-semibold max-w-fit text-sm border-2 rounded-md border-border1 text-text2"}
            >
              <Shuffle size={14} />
            </Button>
          </div>
        </article>
        <StatCard title="Ejercicios Completados de Hoy" stat={exercisesToday.length} className={" border-l-4 border-[#FFED3C]"}>
          <Flame size={24} />
        </StatCard>
        <StatCard title="Ejercicios completados" stat={doneExercises?.length} className={" border-l-4 border-[#712AFF]"}>
          <CircleCheckBig size={24} />
        </StatCard>

        <StatCard title="Examenes Completados" stat={doneTests()} className={"col-span-full sm:col-span-1 border-l-4 border-[#FF1E61]"}>
          <FileBadge size={24} />
        </StatCard>

        <article className="col-span-2 row-span-1 sm:row-span-2 flex flex-col gap-4 bg-card rounded-xl p-3 ">
          <h2 className="text-md font-semibold">Tu progreso</h2>
          <WeekSummary exercises={doneExercises} />
        </article>
        <article className="col-span-full sm:col-span-1 row-span-2 flex flex-col gap-3 bg-card rounded-xl p-3 ">
          <h2 className="text-md font-semibold">Categorias Realizadas</h2>
          <CategoryDoughnut exercises={doneExercises} />
        </article>
      </section>
    </main>
  );
}
