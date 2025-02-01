import { useEffect, useState } from "react";
import { ExerciseCard } from "../components/ui/ExerciseCard";
import { useDataContext } from "../context/DataContext";
import { useAuthContext } from "../context/AuthContext";
import { SearchBar } from "../components/ui/SearchBar";

export function Ejercicios() {
  const { user } = useAuthContext();
  const { exercises, getExercises } = useDataContext();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getExercises();
  }, []);

  const filteredExercises = exercises.filter((e) => e.consigna.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
      <main className="flex flex-col gap-3 p-3 sm:p-10">
        <SearchBar placeholder="Buscar ejercicio..." onSearch={(query) => setSearchTerm(query)} />
        {filteredExercises.length > 0 ? (
          filteredExercises.map((ex) => (
            <ExerciseCard
              key={ex.id_ejercicio}
              id={ex.id_ejercicio}
              id_examen={ex.Examen.id_examen}
              fecha={ex.Examen.fecha}
              examen={ex.Examen.nombre}
              tema={ex.Examen.tema}
              numero={ex.numero}
              consigna={ex.consigna}
              categorias={ex.Ejercicio_Tema}
              img={ex.img}
              hecho={user ? ex.Ejercicio_Completado.some((e) => e.id_usuario === user?.id && e.id_ejercicio === ex.id_ejercicio) : false}
            />
          ))
        ) : (
          <p className="text-center text-slate-800">No encontramos el ejercicio que buscabas :/</p>
        )}
      </main>
    </>
  );
}
