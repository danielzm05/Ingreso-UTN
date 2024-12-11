import { useState } from "react";
import "katex/dist/katex.min.css";
import { MathfieldElement } from "mathlive";

export function NewExerciseForm() {
  const [formValues, setFormValues] = useState({
    descripcion: "",
    tema: "",
    respuesta: "",
  });

  const handleConsigna = (e) => {
    setConsigna(e.target.value);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
        <math-field
          smart-mode
          name="consigna"
          onInput={handleInput}
          style={{ width: "100%", backgroundColor: "transparent", border: "1px solid #1e293b" }}
        ></math-field>
      </label>
      <label htmlFor="respuesta" className="flex flex-col font-medium text-sm gap-1">
        Respuesta
        <math-field
          smart-mode
          name="respuesta"
          onInput={handleInput}
          style={{ width: "100%", backgroundColor: "transparent", border: "1px solid #1e293b" }}
        ></math-field>
      </label>

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
