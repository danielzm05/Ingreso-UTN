import { useEffect } from "react";
import { useParams } from "react-router";
import { ExerciseTestCard } from "../components/ui/ExerciseTestCard";
import { useDataContext } from "../context/DataContext";
import { useAuthContext } from "../context/AuthContext";
import { FileTextIcon } from "lucide-react";
import { Footer } from "@/components/ui/Footer";
import parse from "html-react-parser";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export function TestPage() {
  const { user } = useAuthContext();
  const { tests, getTests } = useDataContext();
  const { id_examen } = useParams();

  useEffect(() => {
    getTests(id_examen);
  }, []);

  const renderContent = (htmlString) =>
    parse(htmlString, {
      replace: (domNode) => {
        if (domNode.name === "math") {
          return <InlineMath math={domNode.children[0].data} />;
        }
      },
    });

  return (
    <>
      <main className="min-h-[90vh] grid  bg-gradient-to-t from-background3 to-background">
        {tests.length > 0 && (
          <article className="m-3 sm:m-10 flex flex-col py-3 px-5 gap-1 bg-card rounded-xl border border-slate-800" key={tests[0].id_examen}>
            <header className="pb-6 pt-6">
              <h1 className="max-w-full text-3xl text-start font-bold text-text1">
                {tests[0].nombre} {tests[0].fecha}
              </h1>
              <p className="text-gray-500 font-semibold">
                {tests[0].descripcion} {tests[0].tema && `| Tema: ${tests[0].tema}`}
              </p>
            </header>

            <section className="flex flex-col">
              <div className=" pb-2 flex justify-between items-center text-text2 font-semibold ">
                <h3>Ejercicios:</h3>
                {tests[0].archivo ? (
                  <a href={tests[0].archivo} target="_blank" title="Ver PDF" className="flex gap-1 items-center">
                    <FileTextIcon size={18} />
                    PDF
                  </a>
                ) : null}
              </div>
              {tests[0].Ejercicio.map((ex) => (
                <ExerciseTestCard
                  key={ex.id_ejercicio}
                  id={ex.id_ejercicio}
                  numero={ex.numero}
                  id_examen={id_examen}
                  consigna={renderContent(ex.consigna)}
                  hecho={ex.Ejercicio_Completado.some((e) => e.id_usuario === user?.id && e.id_ejercicio === ex.id_ejercicio)}
                />
              ))}
            </section>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}
