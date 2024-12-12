import { useState } from "react";
import { useDataContext } from "../context/DataContext";

export function NewTestForm() {
  const { createTest } = useDataContext();
  const [formValues, setFormValues] = useState({
    descripcion: "",
    tema: null,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTest(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="nombre" className="flex flex-col font-medium text-sm gap-1">
        Nombre
        <input
          type="text"
          name="nombre"
          required
          onChange={handleInput}
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>
      <label htmlFor="descripcion" className="flex flex-col font-medium text-sm gap-1">
        Descripción
        <input type="text" name="descripcion" onChange={handleInput} className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>
      <label htmlFor="tema" className="flex flex-col font-medium text-sm gap-1">
        Tema
        <input type="number" name="tema" onChange={handleInput} className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9" />
      </label>
      <label htmlFor="fecha" className="flex flex-col font-medium text-sm gap-1">
        Año
        <input
          type="number"
          name="fecha"
          required
          onChange={handleInput}
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
