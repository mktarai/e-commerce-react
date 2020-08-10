import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

function Restaurant() {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home">Restaurants</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/signup">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="row" style={{ marginTop: '90px' }}>
                <div className="col">
                    <div className="card mb-2">
                        <img src="https://via.placeholder.com/1024x512" className="card-img-top" alt="..." />
                        <div className="card-body pt-1 pb-1">
                            <h5 className="card-title mb-0">Kabita's Kitchen</h5>
                            <p className="card-text text-danger mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <p className="card-text mb-0"><small className="text-muted">Rolls, Fast Food</small></p>
                            <p className="card-text"><small className="text-muted">Rs 100 for one (* 39 mins)</small></p>
                        </div>
                        <div className="card-footer text-muted">
                            Safety measures followed here
                        </div>
                    </div>
                    <div className="card mb-2">
                        <img src="https://via.placeholder.com/1024x512" className="card-img-top" alt="..." />
                        <div className="card-body pt-1 pb-1">
                            <h5 className="card-title mb-0">Rolls On Wheels</h5>
                            <p className="card-text text-danger mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">4.3 (7422 Delivery Votes)</small>
                            </p>
                            <p className="card-text mb-0"><small className="text-muted">Rolls</small></p>
                            <p className="card-text"><small className="text-muted">Rs 100 for one (* 52 mins)</small></p>
                        </div>
                        <div className="card-footer text-muted">
                            Safety measures followed here
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Restaurant;