// src/App.js
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/test')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>¡Proyecto React funcionando!</h1>
    </div>
  );
}

export default App;