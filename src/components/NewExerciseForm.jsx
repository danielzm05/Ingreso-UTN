import { useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { MathfieldElement } from "mathlive";

export function NewExerciseForm() {
  const [formValues, setFormValues] = useState({
    descripcion: "",
    tema: "",
  });

  const [formula, setFormula] = useState("");

  const handleInputFormula = (event) => {
    setFormula(event.target.value);
    console.log(formula);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="numero" className="flex flex-col font-medium text-sm gap-1">
        Número
        <input type="number" name="numero" required onChange={handleInput} className="text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>
      <label htmlFor="consigna" className="flex flex-col font-medium text-sm gap-1">
        Consigna
        <input
          type="text"
          name="consigna"
          required
          onChange={handleInput}
          className="text-sm bg-background border border-slate-800 rounded-md min-h-9"
        />
      </label>
      <label htmlFor="respuesta" className="flex flex-col font-medium text-sm gap-1">
        Respuesta
        <input type="text" name="respuesta" onChange={handleInput} className="text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>

      <div>
        <h3>Editor Interactivo con Mathlive</h3>
        <math-field onInput={handleInputFormula} value={formula} style={{ width: "100%", height: "50px" }}></math-field>
        <div style={{ marginTop: "20px" }}>
          <h4>Vista previa:</h4>
          <BlockMath math={formula} />
        </div>
      </div>

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
