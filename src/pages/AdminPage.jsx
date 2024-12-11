import { NewTestForm } from "../components/NewTestForm";
import { NewExerciseForm } from "../components/NewExerciseForm";
export function AdminPage() {
  return (
    <main className="flex flex-col gap-3 m-10">
      <div className="flex flex-col gap-3 p-3 border border-slate-800 rounded-xl">
        <h2 className="font-semibold tracking-tight text-2xl">Nuevo Examen</h2>
        <NewTestForm />
      </div>
      <div className="flex flex-col gap-3 p-3 border border-slate-800 rounded-xl">
        <h2 className="font-semibold tracking-tight text-2xl">Nuevo Ejercicio</h2>
        <NewExerciseForm />
      </div>
    </main>
  );
}
