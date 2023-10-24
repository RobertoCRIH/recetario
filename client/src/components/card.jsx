import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/esm/Badge';
import { useNavigate } from 'react-router-dom';

function MyCard({title,autor,likes}) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '20rem' }}  bg="dark" data-bs-theme="dark">
      <Card.Img variant="top" src="https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-superJumbo.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {autor}
        </Card.Text>
        <Card.Text>
          <Badge bg='danger'>Likes {likes}</Badge> <br></br>
          
        </Card.Text>
        <Button variant="primary" onClick={(e)=>{
            navigate("/recipe")
        }}>Leer Receta</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;