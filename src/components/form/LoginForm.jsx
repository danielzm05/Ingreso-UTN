import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Input } from "./Input";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/Button";

export function LoginForm() {
  const { signIn, signInWithGithub } = useAuthContext();
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
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input label="Email" type="email" name="email" onChange={handleInputChange} placeholder="nombre@gmail.com" required={true} />

        <Input label="Contraseña" type="password" name="password" onChange={handleInputChange} required={true} minLength={6} autoComplete="off" />
        <input type="submit" value="Ingresar" className="p-2 mt-5 rounded-md font-semibold w-full bg-primary text-background cursor-pointer" />
      </form>

      <Button
        onClick={() => signInWithGithub()}
        className={"mt-3 bg-stone-800 px-3 h-9 rounded-md text-text1 font-semibold flex gap-2 items-center justify-center"}
      >
        <GithubIcon size={18} /> Iniciar sesión con Github
      </Button>
    </>
  );
}
