import { MoviesList } from 'components/MoviesList/MoviesList';
import Searchbar from 'components/SearchBar/SearchBar';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import { searchMovies } from 'components/api/movieService';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './movie.module.css';

import InputGroup from 'react-bootstrap/InputGroup';
import { useParams, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchKey, setSearchKey] = useSearchParams();
  const movieLocation = useParams();
  console.log(movieLocation.state);

  useEffect(() => {
    const query = searchKey.get('query');
    if (!query) return;
    const getSearchData = async () => {
      try {
        const response = await searchMovies(searchKey.get('query'));
        setSearchData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSearchData();
  }, [searchKey]);

  return (
    <>
      <Searchbar setSearchKey={setSearchKey} />
      <ul className={styles.wrapper}>
        {new Boolean(searchData.length) && (
          <MoviesList searchData={searchData} />
        )}
      </ul>
    </>
  );
};

export default Movies;
