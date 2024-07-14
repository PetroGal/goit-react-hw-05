import css from './MoviesPage.module.css';
import SearchMovie from '../../components/SearchMovie/SearchMovie.jsx';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { searchMovies } from '../../movies-api.js';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    async function fetchMovies() {
      try {
        const data = await searchMovies(query);
        setMovies(data);
        setLoader(false);
      } catch (error) {
        setError(error.message);
        setLoader(false);
      }
    }
    fetchMovies();
  }, [query]);

  const handleSearch = value => {
    setQuery(value);
  };

  return (
    <div className={css.wrapper}>
      <SearchMovie onSearch={handleSearch} />
      {loader && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <MovieList movies={movies} />
    </div>
  );
}
