import { useState, useContext } from "react";
import { Navbar, Button, Modal, ModalHeader } from "react-bootstrap"
import { BsCart } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

function Navigationbar() {
    const [showModal, setShowModal] = useState(false)

    const cart = useContext(CartContext)
    const productCount = cart.items.reduce((sum, product) => {
       return sum += product.quantity
    }, 0)


    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }


    return (
        <>
        <Navbar className="border-bottom border-secondary">
            <Navbar.Collapse className="justify-content-end">
                <Button 
                variant="btn btn-outline-secondary"
                className="text-white"
                onClick={handleOpenModal}>
                    <BsCart className="mx-1"></BsCart>                    
                Cart 
                ({productCount})
                </Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header className="bg-black" closeButton >
                <Modal.Body>
                    {productCount > 0 ? (
                        <>
                        {cart.items.map((item) => (
                             <CartProduct key={item.id} id={item.id} quantity={item.quantity}/>
                        ))}
                        </>


                    ): (
                        <p>There is not product</p>
                    )}

                </Modal.Body>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Header>
        </Modal>
        </>
    )
}

export default Navigationbar