import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>🎬 Movie Explorer</h1>
        <p>Descubre, busca y guarda tus películas favoritas</p>
      </header>

      <section className="search-box">
        <input type="text" placeholder="Buscar película..." />
        <button>Buscar</button>
      </section>

      <section className="movie-grid">
        <div className="movie-card">
          <img src="https://via.placeholder.com/150x220?text=Poster" alt="Poster" />
          <h3>Título de película</h3>
          <p>Año • Género</p>
        </div>
        {/* Puedes duplicar más <div className="movie-card"> para mostrar resultados */}
      </section>
    </div>
  )
}

export default App
