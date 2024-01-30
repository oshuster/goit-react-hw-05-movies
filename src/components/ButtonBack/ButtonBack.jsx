import { Link } from 'react-router-dom';

const ButtonBack = ({ from }) => {
  return <Link to={from.state}>Go back</Link>;
};

export default ButtonBack;
