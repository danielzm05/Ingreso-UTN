import { useEffect, useState, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ExerciseCard } from "../components/ui/ExerciseCard";
import { useDataContext } from "../context/DataContext";
import { useAuthContext } from "../context/AuthContext";
import SearchBar from "../components/ui/SearchBar";
import { Footer } from "@/components/ui/Footer";
import { SelectMultiple } from "@/components/form/MultipleOption";

export function Ejercicios() {
  const { user } = useAuthContext();
  const { exercises, getExercises, topics, getTopics, getExercisesByFilter } = useDataContext();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getTopics();
  }, []);

  useEffect(()=>{
    if(filter){
      getExercisesByFilter(filter.id_tema)
    }else{
      getExercises();
    }
  },[filter])

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
        <div className="flex gap-3">
          <SearchBar placeholder="Buscar ejercicio..." onSearch={setSearch} />
          <SelectMultiple
            isMulti={false}
            value={(option) => option.id_tema}
            label={(option) => option.nombre}
            options={topics}
            name="Tema"
            onChange={(options)=>setFilter(options)}
            placeholder="Filtrar"
            isSearchable={false}
            style="min-w-[180px] h-12 px-3 flex items-center gap-1 rounded-xl bg-background2 text-text2 hover:cursor-pointer"
          />
        </div>

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
              examen={ex.Examen.Examen_Categoria.categoria}
              mes={ex.Examen.mes}
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
