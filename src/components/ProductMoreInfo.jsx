import { Card, Container } from "react-bootstrap"
import { Link } from "react-router"
function ProductMoreInfo({ title, image, description, price, category }) {
    return (
        <Container>
            <div className="text-center">
            <Link className="text-decoration-none text-danger bg-warning px-4 py-2 rounded text-center d-inline-block " 
            to="/products">
            Ritorna agli altri prodotti!</Link>
            </div>
            <Card className="product-card" data-bs-theme="dark">
                <Card.Header>
                    <Card.Title className="product-title">{title}</Card.Title>
                    <Card.Img src={image} className="product-img"></Card.Img>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="product-description">
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>
                        {price} &euro;
                    </Card.Text>
                    <Card.Text>
                        {category}
                    </Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ProductMoreInfo