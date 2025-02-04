import { LoginForm } from "../components/form/LoginForm";
import { NavLink } from "react-router";
import { Button } from "../components/ui/Button";
export function LoginPage() {
  return (
    <main className="flex justify-center items-center h-[90vh]">
      <section className="flex flex-col gap-3 p-5 border border-slate-800 rounded-xl w-full max-w-md mx-5">
        <h1 className="font-semibold tracking-tight text-2xl">Iniciar Sesión</h1>
        <LoginForm />
        <NavLink to="/registrarse">
          <Button className={"text-text2 font-medium text-sm"}>¿No tienes cuenta? Regístrate</Button>
        </NavLink>
      </section>
    </main>
  );
}
