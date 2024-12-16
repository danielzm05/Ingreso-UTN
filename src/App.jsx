import { Home } from "./pages/Home";
import { Examenes } from "./pages/Examenes";
import { TestPage } from "./pages/TestPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignUpPage";
import { AdminPage } from "./pages/AdminPage";
import { ExercisePage } from "./pages/ExercisePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthContext } from "./context/AuthContext";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";

function App() {
  const { user, userInfo } = useAuthContext();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Examenes" element={<Examenes />}></Route>
        <Route path="/Ingresar" element={<LoginPage />}></Route>
        <Route path="/Registrarse" element={<SignupPage />}></Route>
        <Route path="/Admin" element={<AdminPage />}></Route>
        <Route element={<ProtectedRoute isAuth={user?.aud} roles={[1]} userRol={userInfo?.usuario_rol.map((rol) => rol.id_rol)} redirectTo="/" />}>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Route>
        <Route path="/Examenes/:id_examen" element={<TestPage />}></Route>
        <Route path="/Examenes/:id_examen/Ejercicio/:id" element={<ExercisePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
