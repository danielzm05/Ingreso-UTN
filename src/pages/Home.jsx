import { useEffect } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { useDataContext } from "../context/DataContext";
import parse from "html-react-parser";
import { InlineMath } from "react-katex";
import { SearchBar } from "../components/SearchBar";
import "katex/dist/katex.min.css";

export function Home() {
  const { exercises, getExercises } = useDataContext();

  useEffect(() => {
    getExercises();
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
      <main className="flex flex-col gap-3 p-10">
        <SearchBar placeholder="Buscar ejercicio..." />
        {exercises &&
          exercises.map((ex) => (
            <ExerciseCard
              key={ex.id_ejercicio}
              id={ex.id_ejercicio}
              id_examen={ex.Examen.id_examen}
              fecha={ex.Examen.fecha}
              examen={ex.Examen.nombre}
              numero={ex.numero}
              consigna={renderContent(ex.consigna)}
              categorias={ex.Ejercicio_Categoria}
              img={ex.img ? ex.img : "https://www.creativefabrica.com/wp-content/uploads/2019/03/File-Icon-by-Kanggraphic-580x386.jpg"}
            />
          ))}
      </main>
    </>
  );
}
