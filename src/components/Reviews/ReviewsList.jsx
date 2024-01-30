import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import formatDate from 'components/helpers/dataFormater';

const ReviewsList = ({ reviews }) => {
  return reviews?.map(({ author, content, updated_at }) => (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Author: {author}</div>
        {content}
      </div>
      <Badge bg="primary" pill>
        {formatDate(updated_at)}
      </Badge>
    </ListGroup.Item>
  ));
};

export default ReviewsList;
