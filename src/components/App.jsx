import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import NotFound from 'Pages/NotFound/NotFound';
import SingleMovie from './SingleMovie/SingleMovie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
