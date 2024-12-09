import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="p-5 flex border border-yellow-500">
      <h1 className="text-lg font-semibold text-nowrap">ⵥ INGRESO UTN</h1>
      <nav className="w-full flex justify-center items-center gap-3 text-gray-500 font-medium">
        <NavLink to="/">Ejercicios</NavLink>
        <NavLink to="/examenes">Examenes</NavLink>
      </nav>
    </header>
  );
}
