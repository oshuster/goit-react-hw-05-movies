import { useEffect, useState } from 'react';
import { getCredits } from 'components/api/movieService';
import { useParams } from 'react-router-dom';
import CastList from './CastList';

import styles from './cast.module.css';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    const credits = async () => {
      try {
        const response = await getCredits(id);
        setCastData(response.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    credits();
  }, [id]);

  return (
    <ul className={styles.castList}>
      <CastList castData={castData} />
    </ul>
  );
};

export default Cast;
