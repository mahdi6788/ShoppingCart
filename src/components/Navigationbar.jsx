import { useState } from "react";
import { Navbar, Button, Modal, ModalHeader } from "react-bootstrap"
import { BsCart } from "react-icons/bs";


function Navigationbar() {
    const [showModal, setShowModal] = useState(false)

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
                </Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header className="bg-black" closeButton >
                <Modal.Title>Cart</Modal.Title>
                <Modal.Body>Products</Modal.Body>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Header>
        </Modal>
        </>
    )
}

export default Navigationbar