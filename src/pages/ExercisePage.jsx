import { useParams } from "react-router";
import { useEffect } from "react";
import { ExercisePageCard } from "../components/ui/ExercisePageCard";
import { useDataContext } from "../context/DataContext";
import parse from "html-react-parser";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export function ExercisePage() {
  const { exercises, getExercises } = useDataContext();
  const { id } = useParams();
  useEffect(() => {
    getExercises(id);
  }, []);

  const renderContent = (htmlString) =>
    parse(htmlString, {
      replace: (domNode) => {
        if (domNode.name === "math") {
          return <InlineMath math={domNode.children[0].data} />;
        }
      },
    });

  return exercises.length > 1 ? null : (
    <ExercisePageCard
      respuesta={renderContent(exercises[0]?.respuesta)}
      consigna={renderContent(exercises[0]?.consigna)}
      img={exercises[0]?.img}
      solucion={exercises[0]?.solucion}
      numero={exercises[0]?.numero}
      fecha={exercises[0]?.Examen.fecha}
      nombre={exercises[0]?.Examen.nombre}
    />
  );
}
