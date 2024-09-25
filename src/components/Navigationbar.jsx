import { Navbar, Button } from "react-bootstrap"
import { BsCart } from "react-icons/bs";


function Navigationbar() {
    return (
        <Navbar className="border-bottom border-secondary">
            <Navbar.Collapse className="justify-content-end">
                <Button 
                variant="btn btn-outline-secondary"
                className="text-white">
                    <BsCart className="mx-1"></BsCart>                    
                    Add to Cart
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar