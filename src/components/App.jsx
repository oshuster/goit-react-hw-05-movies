import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

//example routing
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/movies" component={Movies} />
//         <Route exact path="/movies/:movieId" component={MovieDetails} />
//         <Redirect from="/movies/:movieId/cast" to="/movies/:movieId" />
//         <Redirect from="/movies/:movieId/reviews" to="/movies/:movieId" />
//         <Redirect to="/" />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
