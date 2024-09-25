import { Navbar, Button } from "react-bootstrap"

function Navigationbar() {
    return (
        <Navbar className="border-bottom border-secondary">
            <Navbar.Collapse className="justify-content-end">
                <Button 
                variant="btn btn-outline-secondary"
                className="text-white">
                    Add to Cart
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar