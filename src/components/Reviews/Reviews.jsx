import { getReviews } from 'components/api/movieService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import ReviewsList from './ReviewsList';
import ListGroup from 'react-bootstrap/ListGroup';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await getReviews(id);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      <ListGroup as="ul">
        {reviews.length ? (
          <ReviewsList reviews={reviews} />
        ) : (
          `We don't have any reviews for this movie.`
        )}
      </ListGroup>
    </>
  );
};

export default Reviews;
