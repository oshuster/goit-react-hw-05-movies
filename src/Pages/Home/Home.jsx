import { getTopRate } from 'components/api/movieService';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

import styles from './home.module.css';

const Home = () => {
  const [topRatePosts, setTopRatePosts] = useState([]);
  useEffect(() => {
    const topRateData = async () => {
      const { data } = await getTopRate();
      setTopRatePosts([...data.results]);
    };
    topRateData();
  }, []);

  return (
    <ul className={styles.wrapper}>
      <MoviesList searchData={topRatePosts} />
    </ul>
  );
};

export default Home;
