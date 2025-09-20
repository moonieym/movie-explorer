// src/utils/api.js
export const fetchConErrores = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
