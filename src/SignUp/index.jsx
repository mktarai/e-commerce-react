import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';

function SignUp() {

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container fluid className="pr-0 pl-0">
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home">Sign Up</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/signup">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row className="mr-0 ml-0" style={{ marginTop: '90px' }}>
                <Col>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" size="lg" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone/Email</Form.Label>
                            <Form.Control type="text" size="lg" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" size="lg" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree" />
                        </Form.Group>
                        <button type="submit" className="btn btn-block btn-success">Create Account</button>
                        <Link to="/restaurant-add" className="btn btn-block btn-warning">Add Restaurant</Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;