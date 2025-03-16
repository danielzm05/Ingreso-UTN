import { NavLink } from "react-router";
import { Radical, FileText, ChartColumn, UserIcon, HandHeart } from "lucide-react";

export const HeaderItems = ({ isLogged, className }) => {
  return (
    <ul className={`flex gap-5 text-gray-500 font-medium ${className}`}>
      <NavLink to="/ejercicios">
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
        <>
          <NavLink to="/dashboard">
            <li className="flex items-center gap-1 outline-none">
              <ChartColumn size={18} />
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="flex items-center gap-1 outline-none">
              <UserIcon size={18} />
              Perfil
            </li>
          </NavLink>
          <NavLink to="/ayudar">
            <li className="items-center gap-1 outline-none md:hidden sm:flex xl:flex">
              <HandHeart size={18} />
              Ayúdanos
            </li>
          </NavLink>
        </>
      ) : null}
    </ul>
  );
};
