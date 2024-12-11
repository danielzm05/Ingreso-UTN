import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [tests, setTests] = useState([]);

  const getTests = async () => {
    const { data, error } = await supabase.from("Examen").select("*");

    if (error) throw error;
    setTests(data);
  };

  const getExercises = async () => {
    const { data, error } = await supabase.from("Ejercicio").select(` *, Ejercicio_Categoria ( Categoria (*) ) `);

    if (error) throw error;
    console.log(data);
    setExercises(data);
  };

  return <DataContext.Provider value={{ exercises, tests, getTests, getExercises }}>{children}</DataContext.Provider>;
};
