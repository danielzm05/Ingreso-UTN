import { useEffect, useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { useDataContext } from "../context/DataContext";
import parse from "html-react-parser";
import { InlineMath } from "react-katex";
import { SearchBar } from "../components/SearchBar";
import "katex/dist/katex.min.css";

export function Home() {
  const { exercises, getExercises } = useDataContext();
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredExercises = exercises.filter((e) => e.consigna.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
      <main className="flex flex-col gap-3 p-10">
        <SearchBar placeholder="Buscar ejercicio..." onSearch={(query) => setSearchTerm(query)} />
        {filteredExercises.length > 0 ? (
          filteredExercises.map((ex) => (
            <ExerciseCard
              key={ex.id_ejercicio}
              id={ex.id_ejercicio}
              id_examen={ex.Examen.id_examen}
              fecha={ex.Examen.fecha}
              examen={ex.Examen.nombre}
              numero={ex.numero}
              consigna={renderContent(ex.consigna)}
              categorias={ex.Ejercicio_Categoria}
              img={ex.img}
            />
          ))
        ) : (
          <p className="text-center text-slate-800">No encontramos el ejercicio que buscabas :/</p>
        )}
      </main>
    </>
  );
}
