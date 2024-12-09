import { Home } from "./pages/Home";
import { Examenes } from "./pages/Examenes";
import { TestPage } from "./pages/TestPage";
import { ExercisePage } from "./pages/ExercisePage";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Examenes" element={<Examenes />}></Route>
        <Route path="/Examenes/:id_examen" element={<TestPage />}></Route>
        <Route path="/Examenes/:id_examen/Ejercicio/:id" element={<ExercisePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
