import React from 'react';

function Movies() {
    return (
        <div className="movies">
            <h2>Movies</h2>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const movies = [
  {
    title: "The World Ep.2: Outlaw",
    group: "ATEEZ",
    release: "2023-06-16",
    type: "Comeback",
    poster: "/outlaw.jpg",
    description: "Un regreso explosivo con energía rebelde y visuales cinematográficos."
  },
  {
    title: "5-Star",
    group: "Stray Kids",
    release: "2023-06-02",
    type: "Album",
    poster: "/5star.jpg",
    description: "Una obra ruidosa, poderosa y llena de actitud."
  }
]


export default Movies;
