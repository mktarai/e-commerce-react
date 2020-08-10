import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

import Config from '../@utils/Config';

function Home() {

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
            <header className="text-center mt-4">
                <h1 className="display-3">Clone</h1>
                <p>Discover the best food and drinks</p>
                <p>in</p>
                <p>{place}</p>
            </header>
            <Row className="mr-0 ml-0 mt-4">
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text className="border-right-0" style={{backgroundColor: '#ffffff'}} id="basic-geolocation"><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" className="border-left-0" value={locality} onChange={handleChange} aria-label="geolocation" aria-describedby="basic-geolocation" />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mr-0 ml-0 mt-1">
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text className="border-right-0" style={{backgroundColor: '#ffffff'}} id="basic-geolocation"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" className="border-left-0" placeholder="Search..." aria-label="geolocation" aria-describedby="basic-geolocation" />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;