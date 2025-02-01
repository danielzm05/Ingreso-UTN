import { ExerciseCard } from "./ExerciseCard.jsx";
import { Button } from "./Button.jsx";
import { Shuffle } from "lucide-react";

export function RandomExercise({ ex, newExercise }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 [&>*]:border-2 [&>*]:border-border1 [&>*]:rounded-xl w-full">
      <ExerciseCard key={ex?.id_ejercicio} id={ex?.id_ejercicio} id_examen={ex.id_examen} consigna={ex.consigna} />

      <Button onClick={newExercise} className={"p-1 flex gap-2 items-center font-semibold max-w-fit text-sm text-text2"}>
        <Shuffle size={14} />
        Nuevo Ejercicio
      </Button>
    </div>
  );
}
