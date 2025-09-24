import { useEffect, useState } from 'react' 
import {groups } from './pages/GroupsData.js';
import './App.css' 

function App() { 
  const [temaClaro, setTemaClaro] = useState(true);
  
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
          <p className="subtitle">Inspirado en el universo K-pop: ATEEZ Edition</p>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#groups">Grupos</a></li>
            <li className="dropdown">
              <button className="dropdown-toggle">Grupos ▾</button>
              <ul className="dropdown-menu">
                <li><a href="#ateez">ATEEZ</a></li>
                <li><a href="#straykids">Stray Kids</a></li>
                <li><a href="#bts">BTS</a></li>
                <li><a href="#txt">TXT</a></li>
                <li><a href="#enhypen">ENHYPEN</a></li>
                <li><a href="#xdinaryheroes">Xdinary Heroes</a></li>
              </ul>
            </li>
            <li><a href="#movies">Peliculas</a></li>
            <li><a href="#about">Sobre</a></li>
            <li>
              <button className="boton-tema" aria-label="cambiar tema" onClick={toggleTema}
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
