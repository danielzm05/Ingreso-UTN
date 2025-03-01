import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";
import toast from "react-hot-toast";
import { useAuthContext } from "./AuthContext";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [exercises, setExercises] = useState([]);
  const [randomEx, setRandomEx] = useState([]);
  const [doneExercises, setDoneExercises] = useState([]);
  const [tests, setTests] = useState([]);
  const [topics, setTopics] = useState([]);
  const [formulas, setFormulas] = useState([]);

  const getRandomEx = async () => {
    const SQLfunction = user ? "get_random_exercise_incomplete" : "get_random_exercise";
    const { data, error } = await supabase.rpc(SQLfunction, { id: user?.id });
    if (error) throw error;
    setRandomEx(data[0]);
  };

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
    console.log(data);
    setTests(data);
  };

  const getTopics = async () => {
    const { data, error } = await supabase.from("Tema").select("*");
    if (error) throw error;
    setTopics(data);
  };

  const getFormulas = async () => {
    const { data, error } = await supabase.from("Formula").select("*");
    if (error) throw error;
    setFormulas(data);
  };

  const getDoneExercises = async () => {
    const { data, error } = await supabase.from("Ejercicio_Completado").select("*, Ejercicio(*, Ejercicio_Tema ( Tema(*) )) ");
    if (error) throw error;
    setDoneExercises(data);
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

  const deleteProgress = async () => {
    const { error } = await supabase.from("Ejercicio_Completado").delete().eq("id_usuario", user?.id);
    if (error) throw error;

    getDoneExercises();
    getTests();
    toast.success("Progreso reiniciado");
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

  const addExtraExercise = async (table, topics) => {
    const { error } = await supabase.from(table).insert(topics).select();

    if (error) throw error;
  };

  const checkExercise = async (checked, id_ejercicio, id_usuario) => {
    if (!user?.aud) {
      toast.error("Inicia sesión para marcar como completado");
      return;
    }

    if (checked) {
      const { error } = await supabase.from("Ejercicio_Completado").insert([{ id_ejercicio: id_ejercicio, id_usuario: id_usuario }]);

      if (error) throw error;
      toast.success("Nuevo ejercicio completado!");
    } else {
      const { error } = await supabase.from("Ejercicio_Completado").delete().eq("id_ejercicio", id_ejercicio).eq("id_usuario", id_usuario);
      if (error) throw error;
    }
    getExercises(id_ejercicio);
  };

  const createExercise = async (ex, exTopics, exFormulas) => {
    const exerciseImg = await uploadFile(`${ex.numero}-Ejercicio`, ex.img, ex.id_examen);

    const { data: newEx, error } = await supabase
      .from("Ejercicio")
      .insert([
        {
          consigna: ex.consigna,
          numero: ex.numero,
          respuesta: ex.respuesta,
          id_examen: ex.id_examen,
          img: exerciseImg,
          solucion: ex.solucion,
        },
      ])
      .select();

    if (error) throw error;

    const topics = exTopics?.map((t) => ({ id_tema: t.id_tema, id_ejercicio: newEx[0].id_ejercicio }));
    const formulas = exFormulas?.map((f) => ({ id_formula: f.id_formula, id_ejercicio: newEx[0].id_ejercicio }));
    addExtraExercise("Ejercicio_Tema", topics);
    addExtraExercise("Ejercicio_Formula", formulas);
    toast.success("Ejercicio creado con éxito");
  };

  const getExercises = async (id) => {
    let query = supabase
      .from("Ejercicio")
      .select(` *, Examen(*), Ejercicio_Tema ( Tema(*) ), Ejercicio_Formula ( Formula(*) ), Ejercicio_Completado(*)`);

    if (id) {
      query = query.eq("id_ejercicio", id);
    }

    const { data, error } = await query;
    if (error) throw error;

    setExercises(data);
  };

  return (
    <DataContext.Provider
      value={{
        exercises,
        tests,
        formulas,
        topics,
        doneExercises,
        randomEx,
        getTests,
        createTest,
        getExercises,
        createExercise,
        getFormulas,
        getTopics,
        checkExercise,
        getDoneExercises,
        getRandomEx,
        doneExercisesTest,
        getDoneTests,
        deleteProgress,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
