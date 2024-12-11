import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [tests, setTests] = useState([]);

  const getTests = async (id) => {
    let query = supabase.from("Examen").select("*, Ejercicio(*)");
    if (id) {
      query = query.eq("id_examen", id);
    }

    const { data, error } = await query;
    console.log(data);
    if (error) throw error;
    setTests(data);
  };

  const getExercises = async (id) => {
    let query = supabase.from("Ejercicio").select(` *, Examen(*), Ejercicio_Categoria ( Categoria (*) ) `);

    if (id) {
      query = query.eq("id_ejercicio", id);
    }

    const { data, error } = await query;
    if (error) throw error;

    setExercises(data);
  };

  return <DataContext.Provider value={{ exercises, tests, getTests, getExercises }}>{children}</DataContext.Provider>;
};
