import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../../pages/HomePage';
import MoviesPage from '../../../pages/MoviesPage';
import '../../../index.css';
import css from './App.module.css';

export default function App() {
  return (
    <div>
      <Navigation />
      <h2 className={css.title}>Tranding today</h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}
