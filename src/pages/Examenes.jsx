import { SearchBar } from "../components/ui/SearchBar";
import { TestCard } from "../components/ui/TestCard";
import { useDataContext } from "../context/DataContext";
import { Fragment } from "react";
import { useEffect, useState } from "react";

export function Examenes() {
  const { tests, getTests, doneExercisesTest } = useDataContext();
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    getTests();
  }, []);

  const filteredTests = tests.filter((e) => {
    const search = searchTerm.toLowerCase().trim();
    const year = e.fecha?.toString();

    return e.nombre.toLowerCase().includes(search) || (year && search.includes(year));
  });

  return (
    <main className="min-h-[90vh] flex flex-col gap-3 p-3 sm:p-10 bg-gradient-to-t from-background3 to-background">
      <SearchBar placeholder="Buscar examen..." onSearch={(query) => setSearchTerm(query)} />

      {filteredTests.length > 0 ? (
        <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {filteredTests.map((t, i) => (
            <Fragment key={t.id_examen}>
              {t.fecha !== filteredTests[i - 1]?.fecha ? <h2 className="text-text2 font-medium text-lg col-span-full">{t.fecha}</h2> : null}
              <TestCard id={t.id_examen} cantEx={t.Ejercicio.length} exDone={doneExercisesTest(t.Ejercicio)} {...t} />
            </Fragment>
          ))}
        </div>
      ) : (
        <p className="text-center text-text2">No encontramos el examen que buscabas :/</p>
      )}
    </main>
  );
}
