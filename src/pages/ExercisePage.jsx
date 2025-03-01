import { useParams } from "react-router";
import { useEffect } from "react";
import { ExercisePageCard } from "../components/ui/ExercisePageCard";
import { useDataContext } from "../context/DataContext";
import { useAuthContext } from "../context/AuthContext";
import { Footer } from "../components/ui/Footer";

export function ExercisePage() {
  const { user } = useAuthContext();
  const { exercises, getExercises, checkExercise } = useDataContext();
  const { id } = useParams();
  useEffect(() => {
    getExercises(id);
  }, []);

  const changeDone = (e) => {
    let checked = e.target.checked;
    checkExercise(checked, exercises[0]?.id_ejercicio, user?.id);
  };

  return (
    <>
      <main className="min-h-[90vh] bg-gradient-to-t from-background3 to-background">
        {exercises.length > 1 ? null : (
          <ExercisePageCard
            key={exercises[0]?.Examen.id_examen}
            respuesta={exercises[0]?.respuesta}
            consigna={exercises[0]?.consigna}
            img={exercises[0]?.img}
            solucion={exercises[0]?.solucion}
            autor={exercises[0]?.Examen.autor}
            numero={exercises[0]?.numero}
            fecha={exercises[0]?.Examen.fecha}
            nombre={exercises[0]?.Examen.nombre}
            id_examen={exercises[0]?.Examen.id_examen}
            archivo={exercises[0]?.Examen.archivo}
            formulas={exercises[0]?.Ejercicio_Formula}
            hecho={exercises[0]?.Ejercicio_Completado.some((e) => e.id_usuario === user?.id && e.id_ejercicio === exercises[0]?.id_ejercicio)}
            onChange={changeDone}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
