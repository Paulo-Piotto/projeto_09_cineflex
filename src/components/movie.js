import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <Link to={`/sessions/${movie.id}`}>
      <div className="movie-banner">
        <img src={movie.posterURL} alt="" />
      </div>
    </Link>

  );
}
