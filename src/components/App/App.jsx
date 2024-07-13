import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../../pages/HomePage/HomePage';
import MoviesPage from '../../../pages/MoviesPage/MoviesPage';
import MovieCast from '../MovieCast/MovieCast.jsx';
import MovieReviews from '../MovieReviews/MovieReviews.jsx';
import MovieDetailsPage from '../../../pages/MovieDetailsPage/MovieDetailsPage';
import '../../../index.css';
import css from './App.module.css';

export default function App() {
  return (
    <div>
      <Navigation />
      {/* <h2 className={css.title}>Tranding today</h2> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
