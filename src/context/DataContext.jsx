import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  const getExercises = async () => {
    const { data, error } = await supabase.from("Ejercicio").select("*");

    if (error) throw error;
    setExercises(data);
    console.log(exercises);
  };
  return <DataContext.Provider value={{ exercises, getExercises }}>{children}</DataContext.Provider>;
};
