import React, { useEffect, useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Config from '../@utils/Config';

function Welcome({ history }) {

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

    const handleClick = () => {
        if (sessionStorage.getItem('user.info')) {
            history.push('/home/profile');
        } else {
            history.push('/login');
        }
    }

    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-light bg-light">
                <span className="navbar-brand pt-0 pb-0" ></span>
                <span className="navbar-text h3 mb-0 p-0 text-dark" onClick={handleClick}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </span>
            </nav>
            <section className="text-center" style={{ marginTop: '90px' }}>
                <h1 className="display-3">e-Com</h1>
                <p>Discover the best food and drinks</p>
                <p>in</p>
                <p>{place}</p>
            </section>
            <div className="row mt-4">
                <div className="col">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-geolocation"><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" value={locality} onChange={handleChange} aria-label="geolocation" aria-describedby="basic-geolocation" />
                    </InputGroup>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ backgroundColor: '#ffffff' }} id="basic-geolocation"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" size="lg" placeholder="Search..." aria-label="geolocation" aria-describedby="basic-geolocation" onFocus={handleFocus} />
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default Welcome;