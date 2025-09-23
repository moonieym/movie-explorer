import { useEffect, useState } from 'react' 
import './App.css' 

function App() { 
  const [groups, setGroups] = useState([]) 
  
  useEffect(() => { 
    fetch('/api/groups') 
    .then(res => res.json()) 
    .then(data => setGroups(data)) 
    
    const handleScroll = () => { 
      const nav = document.querySelector('.navbar') 
      if (window.scrollY > 50) { 
        nav.classList.add('scrolled') 
      } else { 
        nav.classList.remove('scrolled') 
      } 
    } 
    window.addEventListener('scroll', handleScroll) 
    return () => window.removeEventListener('scroll', handleScroll) 
  }, []) 
  
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-content">
          <h1>🎬 Movie Explorer</h1>
          <p className="subtitle">Inspirado en el universo K-pop: ATEEZ Edition</p>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#groups">Grupos</a></li>
            <li><a href="#movies">Peliculas</a></li>
            <li><a href="#about">Sobre</a></li>
          </ul>
        </div>
      </nav>

    <div className="container">
      <section id="home" className="hero ateez-theme">
        <div className="hero-content">
          <h2>Explora el universo ATEEZ</h2>
            <p>Conoce sus eras, miembros y momentos épicos</p>
        </div>
      </section>

      <section id="groups" className="group-section">
        <h2>Grupos disponibles</h2>
          <div className="group-grid">
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
    </div>

      <footer className="footer">
        <p>Hecho con 💜 por moonieym • Movie Explorer • K-pop meets cinema 🎶🎬</p>
      </footer>
    </div>
  )
}

export default App;
