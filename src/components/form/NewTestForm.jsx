import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { Input } from "./Input";

export function NewTestForm() {
  const { createTest } = useDataContext();
  const [formValues, setFormValues] = useState({
    tema: null,
    archivo: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFile = (e) => {
    const { name } = e.target;
    setFormValues({ ...formValues, [name]: e.target?.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTest(formValues);
    document.querySelector("#test-form").reset();
  };

  return (
    <form id="test-form" onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input label="Nombre" type="text" name="nombre" required={true} onChange={handleInput} />

      <Input label="Tema" type="number" name="tema" onChange={handleInput} />
      <Input label="Año" type="number" name="fecha" onChange={handleInput} />
      <Input label="PDF" type="file" name="archivo" onChange={handleFile} />

      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-primary text-card cursor-pointer" />
    </form>
  );
}
