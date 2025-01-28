import { NavLink } from "react-router";
import { Radical, FileText, ChartColumn, LogOutIcon, LogIn } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";
import { Button } from "./ui/Button";
import toast from "react-hot-toast";

export function Header() {
  const { user, logOut } = useAuthContext();
  return (
    <header className="py-5 sm:px-5 px-2 flex items-center">
      <NavLink to="/">
        <h1 className="text-lg font-semibold text-nowrap select-none">
          <span className="text-primary">ⵥ</span> INGRESO UTN
        </h1>
      </NavLink>

      <nav className="w-full flex justify-center items-center">
        <ul className="w-full flex justify-center items-center gap-5 text-gray-500 font-medium flex-wrap">
          <NavLink to="/">
            <li className=" flex items-center gap-1 outline-none">
              <Radical size={18} />
              Ejercicios
            </li>
          </NavLink>
          <NavLink to="/examenes">
            <li className="flex items-center gap-1 outline-none">
              <FileText size={18} />
              Examenes
            </li>
          </NavLink>

          {user ? (
            <NavLink to="/dashboard">
              <li className="flex items-center gap-1 outline-none">
                <ChartColumn size={18} />
                Dashboard
              </li>
            </NavLink>
          ) : null}
        </ul>
      </nav>
      {user ? (
        <Button onClick={() => logOut()} className={"flex items-center gap-1 text-nowrap text-gray-500 font-medium"}>
          <LogOutIcon size={18} />
          Cerrar Sesión
        </Button>
      ) : (
        <div className="flex gap-3 items-center">
          <NavLink to="/registrarse">
            <Button className={"flex items-center gap-1 text-nowrap text-gray-500 font-medium"}>Registrarme</Button>
          </NavLink>
          <NavLink to="/ingresar">
            <Button className={"flex items-center gap-1 p-1 text-nowrap text-text1 font-medium border-primary border-2 rounded-md"}>
              <LogIn size={18} />
              Ingresar
            </Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
