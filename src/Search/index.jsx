import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search({ history }) {

    useEffect(() => {

    }, [])

    const handleClick = () => {
        history.push('/restaurant-list');
    }

    return (
        <Container fluid>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home">Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/signup">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row style={{ marginTop: '90px' }}>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ backgroundColor: '#ffffff' }} id="basic-geolocation"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" placeholder="Search..." aria-label="geolocation" aria-describedby="basic-geolocation" />
                    </InputGroup>
                </Col>
            </Row>
            <div className="row mt-4">
                <div className="col">
                    <div className="media mb-2" onClick={handleClick}>
                        <img src="https://via.placeholder.com/64" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Rolls - Delivery</h5>
                            Cuisine
                        </div>
                    </div>
                    <div className="media mb-2" onClick={handleClick}>
                        <img src="https://via.placeholder.com/64" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Rolls - Dine Out</h5>
                            Cuisine
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Search;