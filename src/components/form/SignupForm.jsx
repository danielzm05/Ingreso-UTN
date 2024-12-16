import { Input } from "./Input";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export function SignupForm({}) {
  const { signUp } = useAuthContext();
  const [formValues, setFormValues] = useState();
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUp(formValues.nombre, formValues.email, formValues.password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input label="Nombre Completo" type="text" name="nombre" onChange={handleInputChange} required={true} />
      <Input label="Email" type="email" name="email" onChange={handleInputChange} placeholder="nombre@gmail.com" required={true} />

      <Input label="Contraseña" type="password" name="password" onChange={handleInputChange} required={true} minLength={6} autoComplete="off" />
      <input type="submit" value="Registrarse" className="p-2 mt-5 rounded-xl font-semibold w-full bg-white text-background cursor-pointer" />
    </form>
  );
}
