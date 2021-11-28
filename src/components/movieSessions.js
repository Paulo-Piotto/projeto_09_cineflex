import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Session from './session';
import Footer from './footer';

export default function MovieSessions() {
  const id = useParams().movieId;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => (
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`)
      .then((resp) => setMovieData({ ...resp.data }))
  ), []);

  return (
    <div className="main-container">
      <p className="title">Selecione o horário</p>
      {movieData ? (movieData.days.map((day) => (
        <Session day={day} key={day.id} />
      ))) : <p>carregando...</p>}

      {movieData ? (
        <Footer movieData={movieData} />
      ) : ''}

    </div>
  );
}
