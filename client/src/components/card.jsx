import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/esm/Badge';
import { useNavigate } from 'react-router-dom';

function MyCard({title,autor,likes,id}) {
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
        <Button variant="danger" onClick={(e)=>{
            //Esto no sirve
            fetch(`http://localhost:3001/delete/${id}`, {
              method: 'DELETE',
            })
              .then((response) => {
                if (response.status === 200) {
                  console.log('Documento eliminado exitosamente');
                  // Realiza alguna acción adicional después de eliminar el documento
                } else {
                  console.error('Error al eliminar el documento');
                  // Maneja el error de alguna manera
                }
              })
              .catch((error) => {
                console.error('Error en la solicitud:', error);
                // Maneja el error de conexión
              });
        }}>Borrar Receta</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;