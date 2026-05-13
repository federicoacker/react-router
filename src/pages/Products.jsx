import { Container, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch.js";
import Product from "../components/Product.jsx";

const API_URL = "https://fakestoreapi.com/products"
function Products() {
    const { data, loadingError, loaded } = useFetch(API_URL);
    return (
        <Container className="py-5">
            <Row className="row-gap-2">
                {
                    (loaded && !loadingError) &&
                    data.map(product => <Product key={product.id} {...product} max={data[data.length - 1].id} min={data[0].id} previous={data[data.indexOf(product)-1]?.id} next={data[data.indexOf(product)+1]?.id}/>)
                }
            </Row>
        </Container>
    )
}

export default Products