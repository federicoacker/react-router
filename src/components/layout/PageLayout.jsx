import { Outlet } from "react-router";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Ad from "../Ad.jsx";

function PageLayout() {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-dark">
                <Header />
                <div className="flex-grow-1 d-flex flex-column">
                    <Row className="flex-grow-1">
                        <Col xs={0} md={2} className="d-flex align-items-center bg-dark border border-white">
                            <Ad starterIndex={0} />
                        </Col>
                        <Col xs={12} md={8} className="flex-grow-1 d-flex flex-column">
                            <Row className="flex-grow-1 ">
                                <Col >
                                    <main>
                                        <Outlet />
                                    </main>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={0} md={2} className="d-flex align-items-center bg-dark border border-white">
                            <Ad starterIndex={1} />
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageLayout