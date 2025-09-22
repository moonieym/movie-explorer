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
      <nav className="navbar">
        <h1>🎬 Movie Explorer</h1>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#groups">Grupos</a></li>
          <li><a href="#about">Sobre</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Explora el universo K-pop</h2>
          <p>Descubre grupos legendarios, conoce sus miembros y revive sus debuts</p>
        </div>
      </section>

      <section id="groups" className="group-section">
        <h2>Grupos disponibles</h2>
        <div className="group-grid">
          {groups.map(group => (
            <div key={group.name} className="group-card">
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

      <footer className="footer">
        <p>Hecho con 💜 por Jung • Proyecto Final React</p>
      </footer>
    </div>
  )
}

export default App