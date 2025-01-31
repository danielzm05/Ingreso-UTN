import { NavLink } from "react-router";
import { HeaderItems } from "./HeaderItems";
import { LogOutIcon, Menu } from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";
import { useState } from "react";
import { Button } from "../Button";
import { SideMenu } from "./SideMenu";

export function Header() {
  const { user, logOut } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="py-5 sm:px-5 px-2 flex items-center justify-between">
      <NavLink to="/">
        <h1 className="text-lg font-semibold text-nowrap select-none">
          <span className="text-primary">ⵥ</span> INGRESO UTN
        </h1>
      </NavLink>

      <nav className="hidden md:flex">
        <HeaderItems isLogged={user} className="w-full flex justify-center items-center flex-wrap" />
      </nav>

      <div className="flex items-center gap-5">
        {user ? (
          <Button onClick={() => logOut()} className={"flex items-center gap-1 text-nowrap text-gray-500 font-medium"}>
            <LogOutIcon size={18} />
            Cerrar Sesión
          </Button>
        ) : (
          <NavLink to="/ingresar">
            <Button className={"flex items-center gap-1 py-1 px-2 text-nowrap text-background2 font-medium bg-primary rounded-md"}>Ingresar</Button>
          </NavLink>
        )}
        <Button className={"md:hidden"} onClick={() => setShowMenu(!showMenu)}>
          <Menu size={18} />
        </Button>
      </div>

      {showMenu && <SideMenu setShow={() => setShowMenu(false)} />}
    </header>
  );
}
