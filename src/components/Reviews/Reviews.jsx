import { getReviews } from 'components/api/movieService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from './ReviewsList';
import ListGroup from 'react-bootstrap/ListGroup';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews(id);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <ListGroup as="ul">
      {reviews.length ? (
        <ReviewsList reviews={reviews} />
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </ListGroup>
  );
};

export default Reviews;
