import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { Input } from "./Input";

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
      <Input label="Nombre" type="text" name="nombre" required={true} onChange={handleInput} />

      <Input label="Descripción" type="text" name="descripcion" onChange={handleInput} />
      <Input label="Tema" type="number" name="tema" onChange={handleInput} />
      <Input label="Año" type="number" name="fecha" onChange={handleInput} />

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
