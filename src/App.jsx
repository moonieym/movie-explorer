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
          <li><a href="#peliculas">Películas</a></li>
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

      <section className="peliculas-section" id="peliculas">
        <div className="peliculas-content">
          <h2>Películas destacadas</h2>
          <div className="pelicula-card compact">
            <div className="pelicula-media">
              <video controls className="pelicula-video">
                <source
                  src="videos/ATEEZ.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="pelicula-info">
              <h3>ATEEZ — “Towards the Light: Will to Power”</h3>
              <p>
                Una travesía global que fusiona fuerza, arte y propósito. Esta gira mundial de ATEEZ es más que un espectáculo: es una declaración de voluntad, una búsqueda de luz en medio del caos. Cada presentación es una escena cargada de energía, simbolismo y conexión con el público, donde el poder no se impone… se comparte.
                <br />
                <em>“La luz no se encuentra. Se conquista con voluntad.”</em>
              </p>
            </div>
          </div>

          <div className="pelicula-card compact">
            <div className="pelicula-media">
              <video controls className="pelicula-video">
                <source
                  src="videos/SKZ.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="pelicula-info">
              <h3>Stray Kids — “dominATE”</h3>
              <p>
                Una gira mundial que redefine el concepto de poder escénico. “dominATE” es una explosión de energía, identidad y caos controlado, donde Stray Kids transforma cada escenario en un campo de batalla emocional. Con visuales intensos, coreografías brutales y una narrativa que desafía las reglas, esta película-concierto muestra cómo se domina el mundo… sin perder el alma.
                <br />
                <em>“No venimos a encajar. Venimos a dominar.”</em>
              </p>
            </div>
          </div>

          <div className="pelicula-card compact">
            <div className="pelicula-media">
              <video controls className="pelicula-video">
                <source
                  src="videos/BTS.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="pelicula-info">
              <h3>BTS — “Movie Weeks”</h3>
              <p>
                Una antología emotiva que celebra el recorrido de BTS a través de la música, los recuerdos y los momentos clave de su carrera. Cada “semana” se presenta como un capítulo cinematográfico: desde presentaciones electrizantes hasta reflexiones íntimas, capturando la profundidad emocional y el impacto global del grupo.
                <br />
                <em>“Cada fotograma cuenta una historia. Cada historia resuena en el mundo.”</em>
              </p>
            </div>
          </div>

          <div className="pelicula-card compact">
            <div className="pelicula-media">
              <video controls className="pelicula-video">
                <source
                  src="videos/TXT.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="pelicula-info">
              <h3>TXT — “ACT : SWEET MIRAGE”</h3>
              <p>
                Una experiencia sensorial que mezcla fantasía, juventud y emoción pura. “ACT : SWEET MIRAGE” es un viaje onírico donde los escenarios se transforman en espejismos dulces, y cada canción revela un universo oculto. TXT guía al público a través de paisajes emocionales que brillan, se desvanecen y vuelven a surgir como recuerdos imborrables.
                <br />
                <em>“No todo lo que brilla es un sueño… a veces es un reflejo de lo que somos.”</em>
              </p>
            </div>
          </div>

          <div className="pelicula-card compact">
            <div className="pelicula-media">
              <video controls className="pelicula-video">
                <source
                  src="videos/ENHYPEN.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="pelicula-info">
              <h3>ENHYPEN — “Memorabilia”</h3>
              <p>
                Un viaje emocional a través de recuerdos que marcan, duelen y transforman. “Memorabilia” es una colección de escenas íntimas donde ENHYPEN explora la nostalgia, el crecimiento y los vínculos que persisten en el tiempo. Cada canción es una pieza de memoria que se convierte en legado, envuelta en atmósferas melancólicas y poderosas.
                <br />
                <em>“Algunos recuerdos no se guardan… se viven una y otra vez.”</em>
              </p>
            </div>
          </div>

          <div className="pelicula-card compact">
            <div className="pelicula-media">
              <video controls className="pelicula-video">
                <source
                  src="videos/XDINARY.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="pelicula-info">
              <h3>Xdinary Heroes — “Sucker Punch!”</h3>
              <p>
                Un concierto explosivo que combina rock, rebeldía y narrativa visual. “Sucker Punch!” es una descarga de adrenalina donde Xdinary Heroes transforma cada escenario en un universo alternativo, lleno de riffs intensos, luces dramáticas y emociones crudas. Más que una presentación, es una declaración: el poder del sonido puede golpear más fuerte que cualquier puño.
                <br />
                <em>“No somos héroes perfectos. Somos los que rompen el silencio.”</em>
              </p>
            </div>
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
