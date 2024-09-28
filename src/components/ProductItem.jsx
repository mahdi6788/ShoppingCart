import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card className="h-100 d-flex flex-column mt-5 card-bg">
      <Card.Img variant="top h-100" src={product.image} />
      <Card.Body className="d-flex flex-column flex-grow-1 mt-auto">
        <Card.Title align="left" className="text-light">
          {product.title}
        </Card.Title>
        <Card.Text align="left" className="text-light">
          Price: ${product.price}
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Col>
                <Button
                  onClick={() => cart.addItemToCart(product.id)}
                  sm='6'
                  className=" mx-2 text-white"
                  variant="btn btn-outline-secondary">
                  +
                </Button>
                <Form.Label sm="6" className="text-white">
                {productQuantity}
                </Form.Label >
                <Button 
                  onClick={() => cart.removeItemFromCart(product.id)}
                  sm='6'
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary">
                  -
                </Button>
              </Col>
              </Form>
              <Button  
                onClick={() => cart.deleteFromCart(product.id)}
                variant="btn btn-outline-warning mt-1">
                Remove
              </Button>
          </>
        ) : (
          <Button
            onClick={() => cart.addItemToCart(product.id)}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
