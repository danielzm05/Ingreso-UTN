import { Header } from "../components/Header";
import { ExerciseCard } from "../components/Exercise";
import { TestCard } from "../components/Test";

export function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-3 px-10 py-11">
        <ExerciseCard />
        <TestCard />
      </main>
    </>
  );
}
