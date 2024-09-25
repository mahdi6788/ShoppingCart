import { Row, Col } from "react-bootstrap"
import {productList} from "../data/items"
import ProductItem from "../components/ProductItem"

function Shop(){
    return (
        <Row xs={1} md={4} className="g-4">
            {productList.map(product => (
            <Col 
            align="center"
            key={product.id}>
            <ProductItem product={product} />
            </Col>
            ))}
        </Row>
    )
}

export default Shop