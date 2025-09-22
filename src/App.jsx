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
      <header className="header">
        <h1>🎬 Movie Explorer</h1>
        <p>Tu portal al universo K-pop</p>
      </header>

      <section className="hero">
        <h2>Explora grupos legendarios</h2>
        <p>Descubre miembros, compañías y fechas de debut</p>
      </section>

      <main className="group-grid">
        {groups.map(group => (
          <div key={group.name} className="group-card">
            <h3>{group.name}</h3>
            <p><strong>Debut:</strong> {group.debut}</p>
            <p><strong>Company:</strong> {group.company}</p>
            <p><strong>Members:</strong> {group.members.join(', ')}</p>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>Hecho con 💜 por moonieym • Proyecto Final React</p>
      </footer>
    </div>
  )
}

export default App


