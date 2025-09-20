import { z } from "zod";

export const registroSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("El correo no es válido"),
  contraseña: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
