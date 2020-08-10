import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

import Config from '../@utils/Config';

function Home({ history }) {

    const [place, setPlace] = useState('');
    const [locality, setLocality] = useState('');

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?access_token=${Config.accessToken}`).then(response => {
                    return response.json()
                }).then(data => {
                    setLocality(data.features[1].place_name);
                    setPlace(data.features[2].text);
                });
            }, () => {
                console.log('Unable to retrieve your location!');
            })
        } else {
            console.log('Geolocation is not supported by your browser!');
        }
    }, [])

    const handleChange = (e) => {
        setLocality(e.target.value);
    }

    const handleFocus = () => {
        history.push('/search');
    }

    return (
        <Container fluid>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/signup">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <header className="text-center" style={{ marginTop: '90px' }}>
                <h1 className="display-3">e-Com</h1>
                <p>Discover the best food and drinks</p>
                <p>in</p>
                <p>{place}</p>
            </header>
            <Row className="mt-4">
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-geolocation"><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" value={locality} onChange={handleChange} aria-label="geolocation" aria-describedby="basic-geolocation" />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ backgroundColor: '#ffffff' }} id="basic-geolocation"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" placeholder="Search..." aria-label="geolocation" aria-describedby="basic-geolocation" onFocus={handleFocus} />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;