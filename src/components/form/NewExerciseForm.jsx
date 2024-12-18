import { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import { ImagePlus, Image } from "lucide-react";
import { Input } from "./Input";
import "//unpkg.com/mathlive";
import "katex/dist/katex.min.css";

export function NewExerciseForm() {
  const { tests, getTests, createExercise } = useDataContext();
  const [formula, setFormula] = useState("");
  const [formValues, setFormValues] = useState({
    descripcion: "",
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

  const handleImg = (e) => {
    const { name } = e.target;
    setFormValues({ ...formValues, [name]: e.target?.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
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

      <Input label="Número" type="text" name="numero" onChange={handleInput} required={true} />
      <Input label="Consigna" type="text" name="consigna" onChange={handleInput} required={true} />
      <Input label="Imagen consigna" type="file" name="img" onChange={handleImg} />

      <Input label="Solución" type="file" name="solucion" onChange={handleImg} />

      <Input label="Respuesta" type="text" name="respuesta" required={true} onChange={handleInput} />

      <p className="font-medium">
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
