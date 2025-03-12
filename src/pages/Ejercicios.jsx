import { useEffect, useState, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ExerciseCard } from "../components/ui/ExerciseCard";
import { useDataContext } from "../context/DataContext";
import { useAuthContext } from "../context/AuthContext";
import { SearchBar } from "../components/ui/SearchBar";
import { Footer } from "@/components/ui/Footer";

export function Ejercicios() {
  const { user } = useAuthContext();
  const { exercises, getExercises } = useDataContext();
  const [search, setSearch] = useState("");
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getExercises();
  }, []);

  const filteredExercises = useMemo(() => {
    return exercises.filter((ejercicio) => ejercicio.consigna.toLowerCase().includes(search.toLowerCase()));
  }, [search, exercises]);

  useEffect(() => {
    setDisplayedExercises(filteredExercises.slice(0, itemsPerPage));
    setPage(1);
  }, [filteredExercises]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    const newExercises = filteredExercises.slice(0, nextPage * itemsPerPage);
    setDisplayedExercises(newExercises);
    setPage(nextPage);
  };

  return (
    <>
      <main className="min-h-[90vh] flex flex-col gap-3 p-3 sm:p-10 bg-gradient-to-t from-background3 to-background">
        <SearchBar placeholder="Buscar ejercicio..." onSearch={setSearch} />

        <InfiniteScroll
          dataLength={displayedExercises.length}
          next={fetchMoreData}
          hasMore={displayedExercises.length < filteredExercises.length}
          loader={<span className="text-primary text-center animate-spin">ⵥ</span>}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {displayedExercises.map((ex) => (
            <ExerciseCard
              key={ex.id_ejercicio}
              id={ex.id_ejercicio}
              id_examen={ex.Examen.id_examen}
              fecha={ex.Examen.fecha}
              examen={ex.Examen.Examen_Categoria.categoria + " " + ex.Examen.mes}
              tema={ex.Examen.tema}
              categorias={ex.Ejercicio_Tema}
              hecho={user ? ex.Ejercicio_Completado.some((e) => e.id_usuario === user?.id && e.id_ejercicio === ex.id_ejercicio) : false}
              {...ex}
            />
          ))}
        </InfiniteScroll>
      </main>
      <Footer />
    </>
  );
}
