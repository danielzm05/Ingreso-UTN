import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Input } from "./Input";

export function LoginForm() {
  const { signIn } = useAuthContext();
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn(formValues.email, formValues.password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input label="Email" type="email" name="email" onChange={handleInputChange} placeholder="nombre@gmail.com" required={true} />

      <Input label="Contraseña" type="password" name="password" onChange={handleInputChange} required={true} minLength={6} autoComplete="off" />
      <input type="submit" value="Ingresar" className="p-2 mt-5 rounded-xl font-semibold w-full bg-white text-background cursor-pointer" />
    </form>
  );
}
