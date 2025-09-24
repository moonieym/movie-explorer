import { useEffect, useState } from 'react' 
import GroupsData from './pages/GroupsData.js';
import './App.css' 

function App() { 
  const [temaClaro, setTemaClaro] = useState(true)
  
  // Cargar tema desde localStorage al iniciar
  useEffect(() => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'tema-oscuro') {
      setTemaClaro(false);
    }
  }, []);

  // Guardar tema cada vez que cambia
  useEffect(() => {
    const nuevoTema = temaClaro ? 'tema-claro' : 'tema-oscuro';
    document.body.className = nuevoTema;
    localStorage.setItem('tema', nuevoTema);
  }, [temaClaro]);

  const toggleTema = () => {
    setTemaClaro(prev => !prev);
  };

  // Scroll dinámico para navbar
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app ${temaClaro ? 'tema-claro' : 'tema-oscuro'}`}>
      <nav className="navbar">
        <div className="navbar-content">
          <h1>🎬 Movie Explorer</h1>
          <p className="subtitle">Inspirado en el universo K-pop</p>
            <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#groups">Grupos</a></li>
          <li><a href="#movies">Películas</a></li>
          <li><a href="#about">Sobre</a></li>
          <li>
            <button
              className="boton-tema"
              aria-label="cambiar tema"
              onClick={toggleTema}
            >
              {temaClaro ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

    <div className="container">
      <section id="home" className="hero ateez-theme">
        <div className="hero-content">
          <h2>Explora el universo del K-POP</h2>
            <p>Conoce sus grupos, películas, miembros y momentos épicos</p>
        </div>
      </section>

      <section id="groups" className="group-section">
        <div className="group-content">
          <h2>Grupos disponibles</h2>
          <div className="group-grid">
            {GroupsData.map(group => (
              <div key={group.name} className="group-card">
                <h3>{group.name}</h3>
                <p><strong>Debut:</strong> {group.debut}</p>
                <p><strong>Company:</strong> {group.company}</p>
                <p><strong>Members:</strong> {group.members.map(m => m.name).join(', ')}</p>

                <div className="integrantes-grid">
                  {group.members.map(member => (
                    <div key={member.name} className="item">
                      <img className="conocelos-img" src={member.image} alt={member.name} />
                      <p>{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Sobre el proyecto</h2>
          <p>
            Este proyecto fue creado como parte del módulo final de React. Utiliza Vite, despliegue en Vercel y una API personalizada con datos de grupos K-pop. Inspirado en el diseño de apps como Rick & Morty y ATEEZ Explorer. 
            
            Movie Explorer es una app creada para celebrar el K-pop como si fuera cine. Inspirada en ATEEZ, BTS, Stray Kids y más, combina diseño visual con estructura narrativa. Desarrollada con React, Vite y desplegada en Vercel.
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
