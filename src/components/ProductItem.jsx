import { Card, Button } from "react-bootstrap";

function ProductItem({ product }) {
  return (
    <Card className="h-100 d-flex flex-column mt-5 card-bg">
      <Card.Img variant="top h-100" src={product.image}/>
      <Card.Body className="d-flex flex-column flex-grow-1 mt-auto">
        <Card.Title align="left" className="text-light">
          {product.title}
        </Card.Title>
        <Card.Text align="left" className="text-light">
          Price: ${product.price}
        </Card.Text>
        <Button variant="btn btn-outline-secondary" className="text-white">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
