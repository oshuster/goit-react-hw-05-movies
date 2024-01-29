// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ButtonBack = ({ from }) => {
  console.log(from.state);
  return <Link to={from.state}>Go back</Link>;
};

export default ButtonBack;

// const from = location.state?.from || '/';
