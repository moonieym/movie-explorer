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
      <section class="peliculas-section" id="peliculas">
        <div class="peliculas-content">
          <h2>Películas destacadas</h2>
          <div class="peliculas-grid">
            <div class="pelicula-card">
              <img src="https://www.dropbox.com/scl/fi/6hp38145j2ya9xn0ierkp/ATEEZ-WORLD-TOUR-TOWARDS-THE-LIGHT-_-WILL-TO-POWER-IN-CINEMAS-Official-Trailer.mp4?rlkey=scpzst2nnburc36o7pax1tkmq&st=3dxdyjeg&dl=0" alt="Póster película 1" class="pelicula-img" />
              <h3>ATEEZ — “Towards the Light: Will to Power”</h3>
              <p>Una travesía global que fusiona fuerza, arte y propósito. Esta gira mundial de ATEEZ es más que un espectáculo: es una declaración de voluntad, una búsqueda de luz en medio del caos. Cada presentación es una escena cargada de energía, simbolismo y conexión con el público, donde el poder no se impone… se comparte.

              “La luz no se encuentra. Se conquista con voluntad.”</p>
            </div>
            <div class="pelicula-card">
              <img src="https://www.dropbox.com/scl/fi/4x0jplvrldh2vyjsd2pq4/Stray-Kids-World-Tour-dominATE-LATIN-AMERICA.mp4?rlkey=ij9e7gj6qjn36s4dg9xp7fl3c&st=a1ygxao9&dl=0" alt="Póster película 2" class="pelicula-img" />
              <h3>Stray Kids — “dominATE”</h3>
              <p>Una gira mundial que redefine el concepto de poder escénico. “dominATE” es una explosión de energía, identidad y caos controlado, donde Stray Kids transforma cada escenario en un campo de batalla emocional. Con visuales intensos, coreografías brutales y una narrativa que desafía las reglas, esta película-concierto muestra cómo se domina el mundo… sin perder el alma.

              “No venimos a encajar. Venimos a dominar.”</p>
            </div>
            <div class="pelicula-card">
              <img src="https://www.dropbox.com/scl/fi/edm9euk254qow4368y9su/BTS-MOVIE-WEEKS.mp4?rlkey=umltvt4176w1ufvdkye9cwmuk&st=hmyjii4z&dl=0" alt="Póster filmer 3" class="pelicula-img" />
              <h3>BTS — “Movie Weeks”</h3>
              <p>Una antología emotiva que celebra el recorrido de BTS a través de la música, los recuerdos y los momentos clave de su carrera. Cada “semana” se presenta como un capítulo cinematográfico: desde presentaciones electrizantes hasta reflexiones íntimas, capturando la profundidad emocional y el impacto global del grupo.

              “Cada fotograma cuenta una historia. Cada historia resuena en el mundo.”</p>
            </div>
            <div class="pelicula-card">
              <img src="https://www.dropbox.com/scl/fi/ksagim5rt4838e98hdjyc/TOMORROW-X-TOGETHER-WORLD-TOUR-ACT-_-SWEET-MIRAGE-Official-Trailer.mp4?rlkey=6jue77ax3truze42lv68vec13&st=xmubgbnz&dl=0" alt="Póster filmer 4" class="pelicula-img" />
              <h3>TXT — “ACT : SWEET MIRAGE”</h3>
              <p>Una experiencia sensorial que mezcla fantasía, juventud y emoción pura. “ACT : SWEET MIRAGE” es un viaje onírico donde los escenarios se transforman en espejismos dulces, y cada canción revela un universo oculto. TXT guía al público a través de paisajes emocionales que brillan, se desvanecen y vuelven a surgir como recuerdos imborrables.

              “No todo lo que brilla es un sueño… a veces es un reflejo de lo que somos.”</p>
            </div>
            <div class="pelicula-card">
              <img src="/images/pelicula5.jpg" alt="Póster filmer 5" class="pelicula-img" />
              <h3>ENHYPEN — “Memorabilia”</h3>
              <p>Un viaje emocional a través de recuerdos que marcan, duelen y transforman. “Memorabilia” es una colección de escenas íntimas donde ENHYPEN explora la nostalgia, el crecimiento y los vínculos que persisten en el tiempo. Cada canción es una pieza de memoria que se convierte en legado, envuelta en atmósferas melancólicas y poderosas.

              “Algunos recuerdos no se guardan… se viven una y otra vez.”</p>
            </div>
            <div class="pelicula-card">
              <img src="/images/pelicula6.jpg" alt="Póster filmer 6" class="pelicula-img" />
              <h3>Xdinary Heroes — “Sucker Punch!”</h3>
              <p>Un concierto explosivo que combina rock, rebeldía y narrativa visual. “Sucker Punch!” es una descarga de adrenalina donde Xdinary Heroes transforma cada escenario en un universo alternativo, lleno de riffs intensos, luces dramáticas y emociones crudas. Más que una presentación, es una declaración: el poder del sonido puede golpear más fuerte que cualquier puño.

              “No somos héroes perfectos. Somos los que rompen el silencio.”</p>
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
