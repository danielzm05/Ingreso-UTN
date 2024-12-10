import { Home } from "./pages/Home";
import { Examenes } from "./pages/Examenes";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Examenes" element={<Examenes />}></Route>
      </Routes>
    </>
  );
}

export default App;
