import { useEffect, useState, useMemo, useCallback } from "react";
import { fetchConErrores } from "../utils/api";

function ListaPeliculas({ onSeleccionar }) {
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await fetchConErrores("http://localhost:5000/peliculas");
      if (data.error) setError(data.error);
      else setPeliculas(data);
    };
    cargarDatos();
  }, []);

  // useCallback: función memoriza para pasar a botones
  const handleSeleccionar = useCallback((pelicula) => {
    if (onSeleccionar) onSeleccionar(pelicula);
  }, [onSeleccionar]);

  // useMemo: memoriza la lista renderizada
  const listaMemorizada = useMemo(() => {
    return peliculas.map((p) => (
      <li key={p.id}>
        {p.titulo} 
        <button onClick={() => handleSeleccionar(p)}>Seleccionar</button>
      </li>
    ));
  }, [peliculas, handleSeleccionar]); // depende de peliculas y handleSeleccionar

  if (error) return <p>Error: {error}</p>;

  return <ul>{listaMemorizada}</ul>;
}

export default ListaPeliculas;