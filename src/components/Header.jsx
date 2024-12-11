import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="p-5 flex">
      <h1 className="text-lg font-semibold text-nowrap">ⵥ INGRESO UTN</h1>
      <nav className="w-full flex justify-center items-center">
        <ul className="w-full flex justify-center items-center gap-3 text-gray-500 font-medium">
          <NavLink to="/">
            <li className="outline-none">Ejercicios</li>
          </NavLink>
          <NavLink to="/examenes">
            <li className="outline-none">Examenes</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
