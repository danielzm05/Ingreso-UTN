import { Ejercicios } from "./pages/Ejercicios";
import { Examenes } from "./pages/Examenes";
import { TestPage } from "./pages/TestPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { LandingPage } from "./pages/LandingPage";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage";
import { AdminPage } from "./pages/AdminPage";
import { ExercisePage } from "./pages/ExercisePage";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthContext } from "./context/AuthContext";
import { Route, Routes } from "react-router";
import { ToasterContainer } from "./components/ui/Toaster";
import { Header } from "./components/ui/header/Header";
import { SupportPage } from "./pages/SupportPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { pdfjs } from "react-pdf";
import { PageTracker } from "./components/PageTracker";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

function App() {
  const { user, userInfo } = useAuthContext();
  return (
    <>
      <Header />
      <PageTracker />
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/ejercicios" element={<Ejercicios />}></Route>
        <Route path="/examenes" element={<Examenes />}></Route>
        <Route path="/ayudar" element={<SupportPage />}></Route>
        <Route path="/ingresar" element={<LoginPage />}></Route>
        <Route path="/registrarse" element={<SignupPage />}></Route>
        <Route path="/Examenes/:id_examen" element={<TestPage />}></Route>
        <Route path="/Examenes/:id_examen/Ejercicio/:id" element={<ExercisePage />}></Route>

        {user && userInfo && (
          <>
            <Route
              element={<ProtectedRoute isAuth={user?.aud} roles={[2, 1]} userRol={userInfo?.usuario_rol.map((rol) => rol.id_rol)} redirectTo="/" />}
            >
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/update-password" element={<UpdatePasswordPage />}></Route>
            </Route>

            <Route
              element={<ProtectedRoute isAuth={user?.aud} roles={[1]} userRol={userInfo?.usuario_rol.map((rol) => rol.id_rol)} redirectTo="/" />}
            >
              <Route path="/admin" element={<AdminPage />}></Route>
            </Route>
          </>
        )}
      </Routes>
      <ToasterContainer />
    </>
  );
}

export default App;
