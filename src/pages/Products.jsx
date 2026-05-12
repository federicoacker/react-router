import { Container, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch.js";
import Product from "../components/Product.jsx";

const API_URL = "https://fakestoreapi.com/products"
function Products() {
    const { data, loadingError, loaded } = useFetch(API_URL);

    return (
        <Container>
            <Row className="row-gap-2">
                {
                    (loaded && !loadingError) &&
                    data.map(product => <Product key={product.id} {...product} />)
                }
            </Row>
        </Container>
    )
}

export default Products