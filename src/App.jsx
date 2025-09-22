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
    <div className="app-wrapper">
      <header className="app-header">
        <h1>🎬 Movie Explorer</h1>
        <p>Explorando el universo K-pop con estilo 💫</p>
      </header>

      <main className="group-container">
        {groups.map(group => (
          <div key={group.name} className="group-card">
            <h2>{group.name}</h2>
            <p><strong>Debut:</strong> {group.debut}</p>
            <p><strong>Company:</strong> {group.company}</p>
            <p><strong>Members:</strong> {group.members.join(', ')}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App

