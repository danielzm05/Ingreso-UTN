import { useAuthContext } from "@/context/AuthContext";
import { useDataContext } from "@/context/DataContext";
import { UserIcon, ChartLine, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export function ProfilePage() {
  const { user } = useAuthContext();
  const { getDoneExercises, doneExercises, getDoneTests, deleteProgress } = useDataContext();
  useEffect(() => {
    getDoneExercises();
  }, []);

  return (
    <main className="min-h-[90vh] sm:p-5 p-2 flex flex-col gap-3">
      <h1 className="text-lg font-semibold ">Perfil</h1>
      <section className="flex flex-col gap-2 p-5 bg-background2 rounded-xl border border-border1 w-full ">
        <h2 className="text-md font-semibold flex items-center gap-1">
          <UserIcon size={18} /> Información del usuario
        </h2>
        <p className="text-sm font-semibold">
          Nombre: <span className="text-text2 font-normal">{user?.user_metadata.name}</span>
        </p>
        <p className="text-sm font-semibold">
          Email: <span className="text-text2 font-normal">{user?.email}</span>
        </p>
      </section>
      <section className="flex flex-col gap-2 p-5 bg-background2 rounded-xl border border-border1 w-full ">
        <h2 className="text-md font-semibold flex items-center gap-1">
          <ChartLine size={18} /> Progreso
        </h2>
        <p className="text-sm font-semibold">
          Ejercicios Realizados: <span className="text-text2 font-normal">{doneExercises?.length}</span>
        </p>
        <p className="text-sm font-semibold">
          Examenes Realizados: <span className="text-text2 font-normal">{getDoneTests()}</span>
        </p>
        <Button className={"bg-background max-w-fit p-2 rounded-md text-sm border border-border1 mt-8"} onClick={deleteProgress}>
          Reiniciar Progreso
        </Button>
        <p className="text-sm text-text2">Al reiniciar, se perderán todos tus examenes y ejercicios hechos</p>
      </section>
      <section className="flex flex-col gap-2 p-5 bg-background2 rounded-xl border border-border1 w-full ">
        <h2 className="text-md font-semibold flex items-center gap-1">
          <KeyRound size={18} /> Seguridad
        </h2>

        <Button className={"bg-background max-w-fit p-2 rounded-md text-sm border border-border1 mt-8"}>Cambiar contraseña</Button>
        <p className="text-sm text-text2">Puedes cambiar tu contraseña en cualquier momento. Te enviaremos un email con las instrucciones.</p>
      </section>
    </main>
  );
}
