import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './movie';

export default function MovieList() {
  const [allMovies, setAllMovies] = useState(null);

  useEffect(() => (
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies')
      .then((resp) => setAllMovies([...resp.data]))
  ), []);

  return (
    <div className="main-container">
      <p className="title">Selecione o filme</p>
      <section className="movies">
        {allMovies ? allMovies.map((movie, index) => <Movie movie={movie} key={index} />)
          : <p>carregando...</p>}
      </section>
    </div>
  );
}
