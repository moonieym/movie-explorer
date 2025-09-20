import { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Esquema de validación con Zod
const formularioSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo no válido"),
});

function App() {
  const [count, setCount] = useState(0)
  const [mensaje, setMensaje] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formularioSchema),
  });

  const onSubmit = (data) => {
    setMensaje(`¡Formulario enviado! Nombre: ${data.nombre}, Email: ${data.email}`)
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      {/* FORMULARIO PARTE-5 */}
      <h2>Formulario de ejemplo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nombre")} placeholder="Nombre" />
        {errors.nombre && <p style={{color:"red"}}>{errors.nombre.message}</p>}

        <input {...register("email")} placeholder="Email" />
        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}

        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App