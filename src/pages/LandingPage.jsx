import { RandomExercise } from "../components/ui/RandomExercise";
import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import { Flame } from "lucide-react";

export function LandingPage() {
  const { getRandomEx, randomEx } = useDataContext();
  useEffect(() => {
    getRandomEx();
  }, []);
  return (
    <main className="sm:px-5 px-2 bg-background2">
      <section className="flex flex-col items-center justify-between h-[90vh] gap-20 pt-32 pb-10">
        <h1 className="text-center text-4xl sm:text-5xl font-semibold text-text1">
          La herramienta gratuita que te ayudará a<br /> <span className="text-primary">ingresar a la UTN</span>
        </h1>

        <div className="flex flex-col items-center gap-3 w-[90vw] sm:w-[60vw]">
          <h2 className="flex gap-1 items-center text-md font-semibold italic">
            <Flame size={18} /> Comienza con tu primer ejercicio
          </h2>
          <RandomExercise ex={randomEx} newExercise={() => getRandomEx()} />
        </div>
      </section>
    </main>
  );
}
