import { RandomExercise } from "../components/ui/RandomExercise";
import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import { Flame } from "lucide-react";
import { MarqueeVertical } from "@/components/ui/MarqueeVertical";
import { Button } from "@/components/ui/Button";
import { Shuffle, TrendingUp } from "lucide-react";
import { Footer } from "@/components/ui/Footer";
import { landingExercises } from "@/assets/LandingExercises";
import ExercisePageCardImg from "../img/ExercisePageCard.png";
import dashboardImg from "../img/dashboard.png";

export function LandingPage() {
  const { getRandomEx, randomEx } = useDataContext();
  useEffect(() => {
    getRandomEx();
  }, []);

  return (
    <>
      <main className="bg-background2">
        <section className="flex flex-col items-center justify-center h-[90vh] gap-20 py-20 px-5 bg-gradient-to-t from-background3 to-background">
          <h1 className="text-center text-4xl sm:text-5xl font-semibold text-text1">
            La herramienta que te ayudará a<br />
            <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">ingresar a la UTN</span>
          </h1>

          <div className="flex flex-col items-center gap-3 w-[90vw] sm:w-[60vw]">
            <h2 className="flex gap-1 items-center text-md font-semibold italic">
              <Flame size={18} /> Comienza con tu primer ejercicio
            </h2>
            <RandomExercise ex={randomEx}>
              <Button onClick={() => getRandomEx()} className={"p-1 flex gap-2 items-center font-semibold max-w-fit text-sm text-text2"}>
                <Shuffle size={14} />
                Nuevo Ejercicio
              </Button>
            </RandomExercise>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center min-h-[70vh] sm:min-h-screen gap-4 bg-gradient-to-t from-background2 via-background3 to-background3">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-text1">Practica con ejercicios de examenes anteriores</h2>
          <MarqueeVertical exercises={landingExercises} />
        </section>
        <section className="flex sm:flex-row flex-col gap-10 sm:gap-4 justify-between items-center min-h-[80vh] sm:min-h-screen pl-5 py-10 sm:pl-10 bg-gradient-to-b from-background2 to-green-900 via-background2 ">
          <div className="*:text-left flex flex-col gap-3">
            <h2 className=" text-3xl sm:text-4xl font-semibold text-text1">Todo lo que necesitas saber para aprobar</h2>
            <p className="text-text2 text-sm sm:text-[1rem] ">
              Encuentra en cada ejercicio su solución <br /> junto con las formulas necesarias para resolverlo.
            </p>
          </div>

          <img src={ExercisePageCardImg} alt="dashboard Image" className="max-h-[80vh]" />
        </section>
        <section className="flex flex-col gap-8 items-center justify-center bg-gradient-to-t from-background2 to-green-900 via-background2 h-[60vh] sm:h-screen px-2 py-10 sm:py-20">
          <div className="*:text-center flex justify-center items-center flex-col gap-3 px-5 ">
            <h2 className="flex flex-col sm:flex-row gap-3 text-nowrap items-center text-3xl sm:text-4xl font-semibold text-text1">
              <TrendingUp size={26} />
              Monitorea tu evolución
            </h2>
            <p className="text-text2 text-sm sm:text-[1rem] ">A medida que realizas ejercicios podrás ver tu progreso en el dashboard.</p>
          </div>

          <img src={dashboardImg} alt="dashboard Image" className="w-full sm:max-w-[1000px] " />
        </section>
      </main>
      <Footer />
    </>
  );
}
