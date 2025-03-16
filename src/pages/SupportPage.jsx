import { FileInput, CircleAlert, MessageCircle } from "lucide-react";
import { CafecitoButton } from "@/components/ui/CafecitoButton";

export function SupportPage() {
  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center gap-20 p-3 sm:p-10 bg-gradient-to-t from-background3 to-background">
      <section className="flex flex-col items-center gap-5">
        <h2 className="text-text1 text-3xl font-semibold">Donaciones</h2>
        <p className="text-center">
          Si te gusta nuestro trabajo puedes ayudarnos <br /> a mantenerlo donando un cafecito:
        </p>
        <CafecitoButton />
      </section>
      <section className="w-full flex flex-col items-center gap-5">
        <h2 className="text-text1 text-3xl font-semibold">Aportes</h2>
        <p>
          Escribenos a{" "}
          <a className="text-primary" href="mailto:equipo@utn-ingreso.pro">
            equipo@utn-ingreso.pro
          </a>{" "}
          para:
        </p>
        <ul className="w-full flex justify-center gap-10 [&>*]:flex [&>*]:flex-col [&>*]:text-center [&>*]:items-center [&>*]:gap-2 ">
          <li>
            <MessageCircle size={24} />
            Enviar <br /> feedback
          </li>
          <li>
            <FileInput size={24} />
            Aportar <br />
            examenes
          </li>
          <li>
            <CircleAlert size={24} />
            Reportar <br />
            errores
          </li>
        </ul>
      </section>
    </main>
  );
}
