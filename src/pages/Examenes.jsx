import { SearchBar } from "../components/ui/SearchBar";
import { TestCard } from "../components/ui/TestCard";
import { useDataContext } from "../context/DataContext";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export function Examenes() {
  const { user } = useAuthContext();
  const { tests, getTests } = useDataContext();
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    getTests();
  }, []);

  const filteredTests = tests.filter((e) => {
    const search = searchTerm.toLowerCase().trim();
    const year = e.fecha?.toString();

    return e.nombre.toLowerCase().includes(search) || (year && search.includes(year));
  });

  const doneExercises = (exercises) => {
    let count = 0;
    exercises.forEach((e) => {
      if (e.Ejercicio_Completado.some((ec) => ec.id_usuario === user?.id)) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <main className="flex flex-col gap-3 p-3 sm:p-10">
      <SearchBar placeholder="Buscar examen..." onSearch={(query) => setSearchTerm(query)} />

      {filteredTests.length > 0 ? (
        <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {filteredTests.map((t, i) => (
            <>
              {t.fecha !== filteredTests[i - 1]?.fecha ? <h2 className="text-text2 font-medium text-lg col-span-full">{t.fecha}</h2> : null}
              <TestCard
                key={t.id_examen}
                id={t.id_examen}
                nombre={t.nombre}
                tema={t.tema}
                fecha={t.fecha}
                cantEx={t.Ejercicio.length}
                exDone={doneExercises(t.Ejercicio)}
              />
            </>
          ))}
        </div>
      ) : (
        <p className="text-center text-text2">No encontramos el examen que buscabas :/</p>
      )}
    </main>
  );
}
