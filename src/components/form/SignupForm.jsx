import { Input } from "./Input";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export function SignupForm({}) {
  const { signUp } = useAuthContext();
  const [formValues, setFormValues] = useState();
  const [success, setSuccess] = useState(false);
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUp(formValues.nombre, formValues.email, formValues.password);

    setSuccess(response);
  };

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input label="Nombre Completo" type="text" name="nombre" onChange={handleInputChange} required={true} />
        <Input label="Email" type="email" name="email" onChange={handleInputChange} placeholder="nombre@gmail.com" required={true} />

        <Input label="Contraseña" type="password" name="password" onChange={handleInputChange} required={true} minLength={6} autoComplete="off" />
        <input type="submit" value="Registrarse" className="p-2 mt-5 rounded-md font-semibold w-full bg-white text-background cursor-pointer" />
      </form>
      {success?.success && (
        <div className="flex flex-col gap-3 p-3 bg-background3 border rounded-md border-border1">
          <p className="font-semibold text-text1">
            ✉ Enviamos un correo de confirmación a tu email: <span className="font-semibold text-text2">{success?.email}</span>
          </p>
          <p className="text-sm text-text2">Si no lo encuentras. Asegúrate de buscar en tu bandeja de spam.</p>
        </div>
      )}
    </div>
  );
}
