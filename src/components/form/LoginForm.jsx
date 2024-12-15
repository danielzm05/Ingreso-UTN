import { useState } from "react";
import { supabase } from "../../backend/client";
import { useNavigate } from "react-router";
import { Input } from "./Input";

export function LoginForm() {
  const [errorLogin, setErrorLogin] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input label="Email" type="email" name="email" onChange={handleInputChange} placeholder="nombre@gmail.com" required={true} />

      <Input label="Contraseña" type="password" name="password" onChange={handleInputChange} required={true} minLength={6} autoComplete="off" />
      {errorLogin && <span>⚠︎ Email o contraseña incorrecta</span>}
      <input type="submit" value="Ingresar" className="p-2 mt-5 rounded-xl font-semibold w-full bg-white text-background cursor-pointer" />
    </form>
  );
}
