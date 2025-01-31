import { NavLink } from "react-router";
import { Radical, FileText, ChartColumn } from "lucide-react";

export const HeaderItems = ({ isLogged, className }) => {
  return (
    <ul className={`flex gap-5 text-gray-500 font-medium ${className}`}>
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

      {isLogged ? (
        <NavLink to="/dashboard">
          <li className="flex items-center gap-1 outline-none">
            <ChartColumn size={18} />
            Dashboard
          </li>
        </NavLink>
      ) : null}
    </ul>
  );
};
