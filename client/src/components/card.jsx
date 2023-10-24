import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <Card style={{ width: '18rem' }}  bg="dark" data-bs-theme="dark">
      <Card.Img variant="top" src="https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-superJumbo.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={(e)=>{
            console.log("plato")
        }}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;