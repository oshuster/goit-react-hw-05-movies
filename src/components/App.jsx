import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('Pages/Home/Home'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const NotFound = lazy(() => import('Pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
