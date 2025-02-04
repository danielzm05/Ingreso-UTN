import { SignupForm } from "../components/form/SignupForm";
export function SignupPage() {
  return (
    <main className="flex justify-center items-center h-[90vh]">
      <section className="flex flex-col gap-3 p-5 border border-slate-800 rounded-xl w-full max-w-md mx-5">
        <h1 className="font-semibold tracking-tight text-2xl ">Regístrate para comenzar</h1>
        <SignupForm />
      </section>
    </main>
  );
}
