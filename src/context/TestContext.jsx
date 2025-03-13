import { createContext, useContext, useState} from 'react'
import { supabase } from "../backend/client";
import toast from "react-hot-toast";
import { useAuthContext } from "./AuthContext";


const TestContext = createContext()

export const useTestContext = () => {
  return useContext(TestContext)
}

export const TestProvider = ({children}) => {
  const { user } = useAuthContext();
  const [tests, setTests] = useState([]);
  
  const getTests = async (id) => {
    let query = supabase
      .from("Examen")
      .select("*, Examen_Categoria (*),Ejercicio(*, Ejercicio_Completado(*))")
      .order("numero", { referencedTable: "Ejercicio", ascending: true })
      .order("fecha", { ascending: false });
    if (id) {
      query = query.eq("id_examen", id);
    }

    const { data, error } = await query;
    if (error) throw error;
    setTests(data);
  };

  const doneExercisesTest = (exercises) => {
    let count = 0;
    exercises.forEach((e) => {
      if (e.Ejercicio_Completado.some((ec) => ec.id_usuario === user?.id)) {
        count += 1;
      }
    });
    return count;
  };

  const getDoneTests = () => {
    getTests();
    let count = 0;
    tests.forEach((t) => {
      if (t.Ejercicio.length === doneExercisesTest(t.Ejercicio) && t.Ejercicio.length > 0) {
        count += 1;
      }
    });
    return count;
  };

  const createTest = async (newTest) => {
    const { data: test, error: insertError } = await supabase
      .from("Examen")
      .insert([
        {
          mes: newTest.mes,
          tema: newTest.tema,
          fecha: newTest.fecha,
          autor: newTest.autor,
          descripcion: newTest.descripcion,
          id_examen_categoria: newTest.categoria,
        },
      ])
      .select();

    if (insertError) throw insertError;

    const TestFile = await uploadFile(`Archivo_Examen`, newTest.archivo, test[0].id_examen);
    const { error } = await supabase.from("Examen").update({ archivo: TestFile }).eq("id_examen", test[0].id_examen);

    if (error) throw error;

    getTests();
    toast.success("Examen creado con éxito");
  };

  const uploadFile = async (nombre, file, examenId) => {
    if (!file) return;

    const { error } = await supabase.storage.from("Ejercicios").upload(`${examenId}/${nombre}`, file);

    if (error) throw error;

    const { data: urlImg } = supabase.storage.from("Ejercicios").getPublicUrl(`${examenId}/${nombre}`);

    return urlImg.publicUrl;
  };


  return (
    <TestContext.Provider value={{tests, getTests, createTest, uploadFile, getDoneTests, doneExercisesTest}}>
      {children}
    </TestContext.Provider>
  )
}

