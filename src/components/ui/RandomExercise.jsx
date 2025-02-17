import { ExerciseCard } from "./ExerciseCard.jsx";

export function RandomExercise({ ex, children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 [&>*]:border-2 [&>*]:border-border1 [&>*]:rounded-xl w-full">
      <ExerciseCard key={ex?.id_ejercicio} id={ex?.id_ejercicio} id_examen={ex?.id_examen} consigna={ex?.consigna} />
      {children}
    </div>
  );
}
