import { LoginForm } from "../components/LoginForm";
export function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="flex flex-col gap-3 p-5 border border-slate-800 rounded-xl w-full max-w-md">
          <h1 className="font-semibold tracking-tight text-2xl">Iniciar Sesión</h1>
          <LoginForm />
        </section>
      </main>
    </>
  );
}
