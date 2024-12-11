import { useEffect } from "react";
import { ExerciseCard } from "../components/Exercise";
import { useDataContext } from "../context/DataContext";

export function Home() {
  const { exercises, getExercises } = useDataContext();

  useEffect(() => {
    getExercises();
    console.log(exercises);
  }, []);
  return (
    <>
      <main className="flex flex-col gap-3 px-10 py-11">
        {exercises &&
          exercises.map((ex) => (
            <ExerciseCard
              key={ex.id_ejercicio}
              id={ex.id_ejercicio}
              id_examen={ex.Examen.id_examen}
              fecha={ex.Examen.fecha}
              examen={ex.Examen.nombre}
              numero={ex.numero}
              consigna={ex.consigna}
              categorias={ex.Ejercicio_Categoria}
              img={ex.img ? ex.img : "https://www.creativefabrica.com/wp-content/uploads/2019/03/File-Icon-by-Kanggraphic-580x386.jpg"}
            />
          ))}
      </main>
    </>
  );
}
