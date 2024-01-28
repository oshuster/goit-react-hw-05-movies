import Card from 'react-bootstrap/Card';

const CastList = ({ castData }) => {
  return castData.map(item => (
    <li key={item.id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={
            item.profile_path
              ? `https://image.tmdb.org/t/p/w185/${item.profile_path}`
              : 'https://tplus.market/_nuxt/img/mem-6@3x.db3630b.png'
          }
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Character: {item.character}</Card.Text>
        </Card.Body>
      </Card>
    </li>
  ));
};

export default CastList;
