import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch('/api/groups')
      .then(res => res.json())
      .then(data => setGroups(data))
  }, [])

  return (
    <div className="app">
      {/* ✅ CAMBIO: Título principal conservado */}
      <nav className="navbar">
        <h1>🎬 Movie Explorer</h1>
        {/* ✅ CAMBIO: Subtítulo temático agregado */}
        <p className="subtitle">Inspirado en el universo K-pop: ATEEZ Edition</p>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#groups">Grupos</a></li>
          <li><a href="#about">Sobre</a></li>
        </ul>
      </nav>

      {/* ✅ CAMBIO: Hero section con clase adicional para estilo ATEEZ */}
      <section id="home" className="hero ateez-theme">
        <div className="hero-content">
          {/* ✅ CAMBIO: Texto actualizado para reflejar temática K-pop */}
          <h2>Explora el universo ATEEZ</h2>
          <p>Conoce sus eras, miembros y momentos épicos</p>
        </div>
      </section>

      <section id="groups" className="group-section">
        <h2>Grupos disponibles</h2>
        <div className="group-grid">
          {/* ✅ CAMBIO: Clase adicional para estilizar cards tipo álbum */}
          {groups.map(group => (
            <div key={group.name} className="group-card ateez-card">
              <h3>{group.name}</h3>
              <p><strong>Debut:</strong> {group.debut}</p>
              <p><strong>Company:</strong> {group.company}</p>
              <p><strong>Members:</strong> {group.members.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <h2>Sobre el proyecto</h2>
        <p>
          Este proyecto fue creado como parte del módulo final de React. Utiliza Vite, despliegue en Vercel y una API personalizada con datos de grupos K-pop. Inspirado en el diseño de apps como Rick & Morty y ATEEZ Explorer.
        </p>
      </section>

      {/* ✅ CAMBIO: Footer con guiño temático */}
      <footer className="footer">
        <p>Hecho con 💜 por moonieym • Movie Explorer • K-pop meets cinema 🎶🎬</p>
      </footer>
    </div>
  )
}

export default App
