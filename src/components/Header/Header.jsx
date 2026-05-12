import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

function Header() {
    return (
        <header data-bs-theme="dark" className="main-header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="brand-logo">
                        <Link to="/" className="text-decoration-none">
                        <img src="imgs/Logo.png" className="img-fluid rounded-circle"></img>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="site-navbar" />
                    <Navbar.Collapse id="site-navbar">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Link to="/" className="text-decoration-none">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="about-us" className="text-decoration-none">Chi Siamo?</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="products" className="text-decoration-none">I Nostri Prodotti</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header