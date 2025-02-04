import { RandomExercise } from "../components/ui/RandomExercise";
import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import { Flame } from "lucide-react";
import { MarqueeVertical } from "@/components/ui/MarqueeVertical";

export function LandingPage() {
  const { getRandomEx, getExercises, randomEx, exercises } = useDataContext();
  useEffect(() => {
    getRandomEx();
    getExercises();
  }, []);
  return (
    <main className="bg-background2">
      <section className="flex flex-col items-center justify-center h-[90vh] gap-20 py-20 px-5 bg-gradient-to-t from-background3 to-background">
        <h1 className="text-center text-4xl sm:text-5xl font-semibold text-text1">
          La herramienta que te ayudará a<br />{" "}
          <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">ingresar a la UTN</span>
        </h1>

        <div className="flex flex-col items-center gap-3 w-[90vw] sm:w-[60vw]">
          <h2 className="flex gap-1 items-center text-md font-semibold italic">
            <Flame size={18} /> Comienza con tu primer ejercicio
          </h2>
          <RandomExercise ex={randomEx} newExercise={() => getRandomEx()} />
        </div>
      </section>
      <section className="flex flex-col sm:flex-row items-center justify-center h-[90vh] gap-20 px-5 bg-gradient-to-t from-background2 via-background3 to-background3">
        <h2 className="text-center sm:text-left text-2xl font-semibold text-text1">Practicá con ejercicios de años anteriores.</h2>
        <MarqueeVertical exercises={exercises} />
      </section>
    </main>
  );
}
