import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-background3 min-h-[25vh] border-t border-border1 py-5 sm:px-5 px-2 flex gap-7">
      <div className="flex flex-col justify-between max-w-[30%] gap-3">
        <h2 className="text-md font-semibold text-nowrap select-none text-text1">
          <span className="text-primary">ⵥ</span> utn-ingreso.pro
        </h2>
        <p className="text-text2 text-sm">
          Con tu aporte nos ayudas a que el proyecto crezca y <br />
          mejore cada día.
        </p>
        <a href="https://cafecito.app/utn-ingreso" rel="noopener" target="_blank">
          <img
            srcset="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      </div>
      <nav className="flex flex-col gap-2 text-sm text-text2 font-semibold border-l px-4 border-border1">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/ejercicios">Ejercicios</NavLink>
        <NavLink to="/examenes">Examenes</NavLink>
      </nav>
      <nav className="flex flex-col gap-2 text-sm text-text2 font-semibold border-l px-4 border-border1">
        <NavLink to="/ingresar">Ingresar</NavLink>
        <NavLink to="/registrarse">Registrarse</NavLink>
      </nav>
    </footer>
  );
}
