import { useState } from "react";
export function NewExerciseForm() {
  const [formValues, setFormValues] = useState({
    descripcion: "",
    tema: "",
  });

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

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
