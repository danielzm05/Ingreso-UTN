import { NavLink } from "react-router";
import { Radical, FileText, ChartColumn } from "lucide-react";

export function Header() {
  return (
    <header className="py-5 sm:px-5 px-2 flex">
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
          <NavLink to="/dashboard">
            <li className="flex items-center gap-1 outline-none">
              <ChartColumn size={18} />
              Dashboard
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
