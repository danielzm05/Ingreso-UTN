import { SearchBar } from "../components/ui/SearchBar";
import { TestCard } from "../components/ui/TestCard";
import { useDataContext } from "../context/DataContext";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Footer } from "@/components/ui/Footer";

export function Examenes() {
  const { tests, getTests, doneExercisesTest } = useDataContext();
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    getTests();
  }, []);

  const orderTests = tests.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return -1;
    } else if (a.fecha < b.fecha) {
      return 1;
    }

    if (a.Examen_Categoria.categoria > b.Examen_Categoria.categoria) {
      return 1;
    } else if (a.Examen_Categoria.categoria < b.Examen_Categoria.categoria) {
      return -1;
    }

    return 0;
  });

  const filteredTests = orderTests.filter((t) => {
    const search = searchTerm.toLowerCase().trim();
    const year = t.fecha?.toString();

    return t.Examen_Categoria.categoria.toLowerCase().includes(search) || (year && search.includes(year));
  });

  return (
    <>
      <main className="min-h-[90vh] flex flex-col gap-3 p-3 sm:p-10 bg-gradient-to-t from-background3 to-background">
        <SearchBar placeholder="Buscar examen..." onSearch={(query) => setSearchTerm(query)} />

        {filteredTests.length > 0 ? (
          <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {filteredTests.map((t, i) => (
              <Fragment key={t.id_examen}>
                {t.fecha !== filteredTests[i - 1]?.fecha ? <h2 className="text-text2 font-medium text-lg col-span-full">{t.fecha}</h2> : null}
                <TestCard
                  id={t.id_examen}
                  cantEx={t.Ejercicio.length}
                  exDone={doneExercisesTest(t.Ejercicio)}
                  nombre={t.Examen_Categoria.categoria}
                  color={t.Examen_Categoria.color}
                  {...t}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <p className="text-center text-text2">No encontramos el examen que buscabas :/</p>
        )}
      </main>
      <Footer />
    </>
  );
}
