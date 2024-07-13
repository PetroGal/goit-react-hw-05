import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../src/homepage-api';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className={css.container}>
      <div className={css.detailsWrap}>
        <img
          className={css.movieImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h3 className={css.title}>{movie.title}</h3>
          <p className={css.score}>User Score: {movie.vote_average * 10}%</p>
          <h4 className={css.titleOverview}>Overview</h4>
          <p className={css.overview}>{movie.overview}</p>
          <h4 className={css.titleGenres}>Genres</h4>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.grad}></div>
      <div className={css.info}>
        <p className={css.text}>Additional information</p>
        <ul className={css.list}>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
      <div className={css.grad}></div>
    </div>
  );
}
