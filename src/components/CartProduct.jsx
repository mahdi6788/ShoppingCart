import { Button } from "react-bootstrap";
import { getProductData } from "../data/items";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);

  const productData = getProductData(id);

  return (
    <>
      <p>{productData.title}</p>
      <p>{quantity}</p>
      <p>${quantity * productData.price}</p>
      <Button
        size="sm"
        className="mb-5 text-white"
        variant=" btn btn-outline-secondary"
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </Button>
    </>
  );
}

export default CartProduct;
