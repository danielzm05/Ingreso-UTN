import { Input } from "@/components/form/Input";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

export function UpdatePasswordPage() {
  const { updatePassword } = useAuthContext();
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

    if (formValues.password !== formValues.password2) {
      toast.error("Las contraseñas no coinciden");
      return;
    } else {
      updatePassword(formValues.password);
    }
  };

  return (
    <main className="min-h-[90vh] sm:p-5 p-2 grid place-content-center">
      <section className="flex flex-col gap-3 p-5 bg-background2 rounded-xl border border-border1 w-full max-w-md min-w-[350px]">
        <h1 className="text-lg font-semibold ">Cambiar Contraseña</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <Input type="password" name="password" label="Nueva Contraseña" onChange={handleInputChange} placeholder="" />
          <Input type="password" name="password2" label="Confirmar Contraseña" onChange={handleInputChange} placeholder="" />
          <input type="submit" value="Cambiar contraseña" className="h-9 mt-5 rounded-md font-semibold w-full bg-primary text-background cursor-pointer" />
        </form>
      </section>
    </main>
  );
}
