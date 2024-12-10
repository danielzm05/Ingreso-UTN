import { TestCard } from "../components/Test";
export function Examenes() {
  return (
    <>
      <main className="flex flex-col gap-3 px-10 py-11">
        <TestCard fecha="2023" nombre={"Final"} descripcion={"Turno Mañana - Tema 3"} />
      </main>
    </>
  );
}
