import { Card, Container } from "react-bootstrap"
import { Link } from "react-router"
function ProductMoreInfo({ title, image, description, price, category }) {
    return (
        <Container>
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