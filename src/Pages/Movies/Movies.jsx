import { MoviesList } from 'components/MoviesList/MoviesList';
import Searchbar from 'components/SearchBar/SearchBar';
import { searchMovies } from 'components/api/movieService';
import { useEffect, useState } from 'react';

import styles from './movie.module.css';

import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchKey, setSearchKey] = useSearchParams();

  useEffect(() => {
    const query = searchKey.get('query');
    if (!query) return;
    const getSearchData = async () => {
      try {
        const response = await searchMovies(searchKey.get('query'));
        setSearchData(response.data.results);
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
        {!!searchData.length && <MoviesList searchData={searchData} />}
      </ul>
    </>
  );
};

export default Movies;
