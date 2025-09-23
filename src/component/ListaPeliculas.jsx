import { useEffect, useState } from "react";
import { fetchConErrores } from "../utils/api"; // importar función del punto 1

function ListaPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await fetchConErrores("http://localhost:5000/peliculas");
      if (data.error) {
        setError(data.error);  // <- Aquí se captura el error
      } else {
        setPeliculas(data);
      }
    };
    cargarDatos();
  }, []);

  if (error) return <p>Error: {error}</p>; // <- Aquí se muestra el mensaje al usuario

  return (
    <ul>
      {peliculas.map((p) => (
        <li key={p.id}>{p.titulo}</li>
      ))}
    </ul>
  );
}

export default ListaPeliculas;