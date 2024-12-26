import { SearchBar } from "../components/ui/SearchBar";
import { TestCard } from "../components/ui/TestCard";
import { useDataContext } from "../context/DataContext";
import { useEffect, useState } from "react";

export function Examenes() {
  const { tests, getTests } = useDataContext();
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    getTests();
  }, []);

  const filteredTests = tests.filter((e) => e.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || e.fecha?.toString().includes(searchTerm));
  return (
    <main className="flex flex-col gap-3 p-3 sm:p-10">
      <SearchBar placeholder="Buscar examen..." onSearch={(query) => setSearchTerm(query)} />
      {filteredTests.length > 0 ? (
        filteredTests.map((t) => (
          <TestCard key={t.id_examen} id={t.id_examen} nombre={t.nombre} descripcion={t.descripcion} tema={t.tema} fecha={t.fecha} />
        ))
      ) : (
        <p className="text-center text-slate-800">No encontramos el examen que buscabas :/</p>
      )}
    </main>
  );
}
