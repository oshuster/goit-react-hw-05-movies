import { getTopRate } from 'components/api/movieService';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

import styles from './home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [topRatePosts, setTopRatePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const topRateData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getTopRate();
        setTopRatePosts([...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    topRateData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={styles.wrapper}>
        <MoviesList searchData={topRatePosts} />
      </ul>
    </>
  );
};

export default Home;
