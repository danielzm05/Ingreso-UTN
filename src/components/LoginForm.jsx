import { useState } from "react";
import { supabase } from "../backend/client";
import { useNavigate } from "react-router";

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
      <label htmlFor="email" className="flex flex-col font-medium text-sm gap-1">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="nombre@gmail.com"
          required
          onChange={handleInputChange}
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>
      <label htmlFor="password" className="flex flex-col font-medium text-sm gap-1">
        Contraseña
        <input
          type="password"
          id="password"
          name="password"
          minLength={5}
          required
          onChange={handleInputChange}
          autoComplete="off"
          className="px-3 text-sm bg-background border border-slate-800 rounded-md h-9"
        />
      </label>
      {errorLogin && <span>⚠︎ Email o contraseña incorrecta</span>}
      <input type="submit" value="Ingresar" className="p-2 mt-5 rounded-xl font-semibold w-full bg-white text-background cursor-pointer" />
    </form>
  );
}
