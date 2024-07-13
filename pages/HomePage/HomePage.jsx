import { useState, useEffect } from 'react';
import MovieList from '../../src/components/MovieList/MovieList';
import { getTrendedMovies } from '../../src/homepage-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendedMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Trending Today</h2>
      <MovieList movies={movies} />
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import MovieList from '../src/components/MovieList/MovieList.jsx';
// import { getTrendedMovies } from '../src/homepage-api.js';
// import { Link } from 'react-router-dom';

// export default function HomePage() {
//   const [movies, setMovies] = useState([]);

//   //loading
//   //Error

//   useEffect(() => {
//     async function getMovies() {
//       try {
//         const data = await getTrendedMovies();
//         setMovies(data.results);
//       } catch (error) {
//         console.error('Error fetching trended movies:', error);
//       }
//     }
//     getMovies();
//   }, []);

//   return (
//     <div>
//       <h2>Trending Today</h2>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             {movies.length > 0 && <MovieList movies={movies} />}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
