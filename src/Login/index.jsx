import React, { useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';

function Login() {

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container fluid className="pr-0 pl-0">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/signup">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <header className="text-center mt-2">
                <p className="display-4">Sign In</p>              
            </header>
            <Row className="mr-0 ml-0 mt-4">
                <Col>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone/Email</Form.Label>
                            <Form.Control type="text" size="lg" />                            
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" size="lg" />
                        </Form.Group>                       
                        <Button variant="outline-dark" type="submit" size="lg" block>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;