import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
