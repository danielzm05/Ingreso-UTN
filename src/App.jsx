import { useState } from "react";
import { ExerciseCard } from "./components/Exercise";
import { TestCard } from "./components/Test";
import { Header } from "./components/Header";

function App() {
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

export default App;
