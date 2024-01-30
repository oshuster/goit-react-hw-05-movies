import { useEffect, useState } from 'react';
import { getCredits } from 'components/api/movieService';
import { useParams } from 'react-router-dom';
import CastList from './CastList';
import { Loader } from 'components/Loader/Loader';

import styles from './cast.module.css';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    const credits = async () => {
      try {
        setIsLoading(true);
        const response = await getCredits(id);
        setCastData(response.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    credits();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={styles.castList}>
        <CastList castData={castData} />
      </ul>
    </>
  );
};

export default Cast;
