import { NavLink } from "react-router";

export function NotFound() {
  return (
    <div className="flex flex-col  gap-2 justify-center items-center h-screen">
      <h1 className="text-6xl font-bold text-center">404</h1>
      <p>
        Pagina no encontrada.
        <NavLink to="/">
          <span className="text-primary"> Volver a Inicio</span>
        </NavLink>
      </p>
    </div>
  );
}
