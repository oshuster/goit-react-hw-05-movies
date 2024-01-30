import Image from 'react-bootstrap/Image';
import styles from './movieDetails.module.css';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getSingleMovie } from 'components/api/movieService';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import Button from 'react-bootstrap/Button';
import { Loader } from 'components/Loader/Loader';

const SingleMovie = () => {
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const from = location.state || '/';

  useEffect(() => {
    const getDetails = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const { data } = await getSingleMovie(id);
        setMovieData(data);
      } catch (error) {
        console.log(error.message);
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      <Button as={Link} to={from} variant="secondary" className="mb-2">
        Back
      </Button>{' '}
      <div className={styles.cardWrapper}>
        <Image
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w342/${movieData.poster_path}`
              : 'https://tplus.market/_nuxt/img/mem-6@3x.db3630b.png'
          }
          rounded
          className={styles.img}
        />
        <div className={styles.movieContainer}>
          <div>
            <h2>{movieData.title ? movieData.title : movieData.name}</h2>
            <span>User Score: {movieData.vote_average}%</span>
            <h3>Overview</h3>
            <span>{movieData.overview}</span>
            <h4>Genres</h4>
            <span>{movieData.genres?.map(({ name }) => name).join(' ')}</span>
          </div>
        </div>
      </div>
      <div className={styles.additionalsWrapper}>
        <h4>Additional information</h4>
        <ul className={styles.additionalsList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default SingleMovie;
