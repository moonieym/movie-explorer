import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validación con Zod
const formularioSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo no válido"),
});

export default function FormularioEjemplo() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formularioSchema),
  });

  const [mensaje, setMensaje] = useState("");

  const onSubmit = (data) => {
    setMensaje(`¡Formulario enviado! Nombre: ${data.nombre}, Email: ${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre")} placeholder="Nombre" />
      {errors.nombre && <p>{errors.nombre.message}</p>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Enviar</button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}