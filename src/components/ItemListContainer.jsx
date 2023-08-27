import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({titulo, descripcion, imagenURL}) => {
  return (
      <Card style={{ width: '18rem' }} className='mt-3'>
        <Card.Img variant="top" src={imagenURL} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    );
}

export default ItemListContainer