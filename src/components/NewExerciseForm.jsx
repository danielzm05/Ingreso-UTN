import { useState, useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import { ImagePlus, Image } from "lucide-react";
import "//unpkg.com/mathlive";
import "katex/dist/katex.min.css";

export function NewExerciseForm() {
  const { tests, getTests, createExercise } = useDataContext();
  const [formula, setFormula] = useState("");
  const [formValues, setFormValues] = useState({
    descripcion: "",
    tema: "",
    respuesta: "",
    img: "",
    solucion: "",
  });

  useEffect(() => {
    getTests();
  }, []);

  const handleFormula = (e) => {
    setFormula(e.target.value);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createExercise(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="id_examen" className="flex flex-col font-medium text-sm gap-1">
        Examen:
        <select
          name="id_examen"
          id="id_examen"
          onChange={handleInput}
          defaultValue=""
          required
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        >
          <option disabled value="">
            Selecciona el examen del ejercicio
          </option>
          {tests.map((t) => (
            <option value={t.id_examen} key={t.id_examen}>
              {t.fecha} {t.nombre} | Tema {t.tema}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="numero" className="flex flex-col font-medium text-sm gap-1">
        Número
        <input
          type="text"
          name="numero"
          required
          onChange={handleInput}
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>
      <label htmlFor="consigna" className="flex flex-col font-medium text-sm gap-1">
        Consigna
        <input
          type="text"
          name="consigna"
          required
          onChange={handleInput}
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>
      <label htmlFor="img" className="flex flex-col font-medium text-sm gap-1">
        <div className="flex gap-1 items-center">
          <ImagePlus size={12} />
          Id Imagen
        </div>

        <div className="flex gap-3">
          <input type="text" name="img" onChange={handleInput} className="w-full px-3 text-sm bg-background border border-slate-800 rounded-md h-9" />
          <img
            src={`https://lh3.googleusercontent.com/d/${formValues?.img}`}
            alt="imagen"
            className="border border-slate-800 rounded-xl max-w-14 max-h-9"
          />
        </div>
      </label>
      <label htmlFor="solucion" className="flex flex-col font-medium text-sm gap-1">
        <div className="flex gap-1 items-center">
          <Image size={12} />
          Id Imagen Solución
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            name="solucion"
            onChange={handleInput}
            className="w-full px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
          />
          <img
            src={`https://lh3.googleusercontent.com/d/${formValues?.solucion}`}
            alt="imagen"
            className="border border-slate-800 rounded-xl max-w-14 max-h-9"
          />
        </div>
      </label>
      <label htmlFor="respuesta" className="flex flex-col font-medium text-sm gap-1">
        Respuesta
        <input
          type="text"
          name="respuesta"
          required
          onChange={handleInput}
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>

      <p>
        {"<math>"}
        {formula}
        {"</math>"}
      </p>
      <math-field
        smart-mode
        name="consigna"
        onInput={handleFormula}
        value={formula}
        style={{ width: "100%", backgroundColor: "transparent", border: "1px solid #1e293b" }}
      ></math-field>
      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
