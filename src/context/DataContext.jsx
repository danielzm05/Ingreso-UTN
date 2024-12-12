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

  const createTest = async (newTest) => {
    const { error } = await supabase
      .from("Examen")
      .insert([{ nombre: newTest.nombre, descripcion: newTest.descripcion, tema: newTest.tema, fecha: newTest.fecha }])
      .select("*");

    if (error) throw error;
  };

  const createExercise = async (newEx) => {
    console.log(newEx);
    const { error } = await supabase
      .from("Ejercicio")
      .insert([{ consigna: newEx.consigna, numero: newEx.numero, respuesta: newEx.respuesta, id_examen: newEx.id_examen }])
      .select("*");

    if (error) throw error;
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

  return <DataContext.Provider value={{ exercises, tests, getTests, createTest, getExercises, createExercise }}>{children}</DataContext.Provider>;
};
