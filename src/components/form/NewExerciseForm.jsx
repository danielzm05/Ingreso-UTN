import { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import { Input, TextArea } from "./Input";
import "//unpkg.com/mathlive";
import "katex/dist/katex.min.css";
import { Select } from "./Select";
import { SelectMultiple } from "./MultipleOption";

export function NewExerciseForm() {
  const { tests, getTests, createExercise, getTopics, topics, formulas, getFormulas } = useDataContext();
  const [formula, setFormula] = useState("");
  const [exTopics, setExTopics] = useState([]);
  const [exFormulas, setExFormulas] = useState([]);
  const [formValues, setFormValues] = useState({
    descripcion: "",
    respuesta: "",
    img: "",
    solucion: "",
  });

  useEffect(() => {
    getTests();
    getTopics();
    getFormulas();
  }, []);

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
    createExercise(formValues, exTopics, exFormulas);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Select label="Examen:" name="id_examen" id="id_examen" onChange={handleInput} defaultValue="">
        <option disabled value="">
          Selecciona el examen del ejercicio
        </option>
        {tests.map((t) => (
          <option value={t.id_examen} key={t.id_examen}>
            {t.fecha} {t.nombre} | Tema {t.tema}
          </option>
        ))}
      </Select>

      <Input label="Número" type="text" name="numero" onChange={handleInput} required={true} />
      <TextArea label="Consigna" type="text" name="consigna" onChange={handleInput} required={true}></TextArea>

      <SelectMultiple
        value={(option) => option.id_tema}
        label={(option) => option.nombre}
        options={topics}
        name="Tema"
        onChange={(option) => setExTopics(option)}
        placeholder="Selecciona el tema del ejercicio"
      />

      <Input label="Imagen consigna" type="file" name="img" onChange={handleImg} />
      <Input label="Solución" type="file" name="solucion" onChange={handleImg} />

      <SelectMultiple
        value={(option) => option.id_formula}
        label={(option) => option.nombre}
        options={formulas}
        name="Formula"
        onChange={(option) => setExFormulas(option)}
        placeholder="Selecciona las formulas utilizadas"
      />
      <Input label="Respuesta" type="text" name="respuesta" required={true} onChange={handleInput} />

      <p className="font-medium">
        {"<math>"}
        {formula}
        {"</math>"}
      </p>
      <math-field
        smart-mode
        name="consigna"
        onInput={(e) => setFormula(e.target.value)}
        value={formula}
        style={{ width: "100%", backgroundColor: "transparent", border: "1px solid #1e293b" }}
      ></math-field>
      <input type="submit" value="Crear" className="p-2 rounded-xl font-semibold w-fit bg-yellow-500 text-slate-900 cursor-pointer" />
    </form>
  );
}
