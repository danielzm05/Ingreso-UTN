import { useState } from "react";

export function NewTestForm() {
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
      <label htmlFor="nombre" className="flex flex-col font-medium text-sm gap-1">
        Nombre
        <input type="text" name="nombre" required onChange={handleInput} className="text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>
      <label htmlFor="descripcion" className="flex flex-col font-medium text-sm gap-1">
        Descripción
        <input type="text" name="descripcion" onChange={handleInput} className="text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>
      <label htmlFor="tema" className="flex flex-col font-medium text-sm gap-1">
        Tema
        <input type="number" name="tema" onChange={handleInput} className="text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>
      <label htmlFor="fecha" className="flex flex-col font-medium text-sm gap-1">
        Año
        <input type="number" name="fecha" required onChange={handleInput} className="text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
