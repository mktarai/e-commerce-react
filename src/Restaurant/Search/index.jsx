import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

function ResturantSearch({ history }) {

    useEffect(() => {

    }, [])

    const handleClick = () => {
        history.push('/restaurant-list');
    }

    return (
        <div className="container-fluid pr-0 pl-0">
            <nav className="navbar fixed-top navbar-light bg-light">
                <Link to="/" className="navbar-brand pt-0 pb-0"><FontAwesomeIcon icon={faArrowCircleLeft} /></Link>
                <span className="navbar-text h4 mb-0 p-0">
                    Search
                </span>
            </nav>
            <div className="row mr-0 ml-0" style={{ marginTop: '75px' }}>
                <div className="col pr-2 pl-2">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ backgroundColor: '#ffffff' }} id="basic-geolocation"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" placeholder="Search..." aria-label="geolocation" aria-describedby="basic-geolocation" />
                    </InputGroup>
                </div>
            </div>
            <div className="row mr-0 ml-0 mt-4">
                <div className="col pr-2 pl-2">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item pt-2 pb-2">
                            <div className="media mb-2" onClick={handleClick}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADJElEQVR4nO2bTYhNYRzGf5cMyowVG5liomZYaGYiRbEx5GNYUGSHmp0smKEYZaMssfOVj6JpZmGBBVKiLHwsKAvZUb4ZTM34uBbnTL3e+/6P8557Pm7u/6m3pvN0/89zfrO47/m4oFKpVH6aAVwBehzeLmAQmOX4zGXhM9WoBbgADAAdKc8WtRsoA+8c3qfQ67WO7wyPfwcmpNSjAXgfzi0DH4HGlGZH6nQY+Nk63mSUOWl5PYY3L6UevcbM8dWV0uxIPcANoM0octXyTACbUugwjb//++NraQqzI1UCvuEG0GUUeWR5JoBDKfQ4SOXJl4HOFGZHaq4RZgPYYXhvLc8EMFBlh5nAVwoCsAEZwGGrzGTDMwE8r7LDcdwnnwuAA8gATlllWgzPBPATmJIwvxn4QYEAziMDuGGVWWF4PZa3MGH+EeSTzwXAfWQAz6wy2w3PBtCdIHsS8JqCAbxBBvDFKrPf8GwAexJkdxN98pkDaLTCTABNVJYxN0M2gBMJ8i86MnIFMB8ZQBuVZczNkA1g0DO7IcwrFMASZACrHGXMzZAN4LZntrnJKgzAaivsN7Ag9I45yowAs0P/nOU99sw+6pifO4B1jsARgo2NVGgYeOE4/tQz+2ZERm4AFscsEWfd8sgtEVzqFg6gOWaJOOuSR+4cj7mZApgIfPAoE7X6PHKXeczNdStczWr1yNzoMTdzAGs8ykjriWemeZldOACAux6FXGutZ95ej9m5AFhE8PWX5OSHEuT1eczPBQDAZqKvy13rIcG9PF/VJACA5cCrmMXOAlMT5tQsAAgeeJwBfgmFXgLbqsyoaQDjkq7UfL7vJW0VZtcNgFZhdt0AKAHXhfl1AQCCx2nDQkZdAIDghsy/7gr91wAA2qm8+VpXACD6W6EuAHQKWQoABaAAFEAGebGkAIRCCiCDLAUgZCkAFIACUAAZ5MWSAhAKKYAMshSAkKUAUADFAZDeHNmXQVa7kFUOvUJ0Tyi0PoOs6cCoI2s09ArRSmDMKnSH9H4gZaufSgD9GWXFVgfBC5HXCH7QlPRxeFxtIXjhYij8W6VSqbz1B0EVo4DoplMBAAAAAElFTkSuQmCC" className="mr-3" alt="..." />
                                <div className="media-body">
                                    <h5 className="mt-0">Rolls - Delivery</h5>
                                    Cuisine
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item pt-2 pb-2">
                            <div className="media mb-2" onClick={handleClick}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADJElEQVR4nO2bTYhNYRzGf5cMyowVG5liomZYaGYiRbEx5GNYUGSHmp0smKEYZaMssfOVj6JpZmGBBVKiLHwsKAvZUb4ZTM34uBbnTL3e+/6P8557Pm7u/6m3pvN0/89zfrO47/m4oFKpVH6aAVwBehzeLmAQmOX4zGXhM9WoBbgADAAdKc8WtRsoA+8c3qfQ67WO7wyPfwcmpNSjAXgfzi0DH4HGlGZH6nQY+Nk63mSUOWl5PYY3L6UevcbM8dWV0uxIPcANoM0octXyTACbUugwjb//++NraQqzI1UCvuEG0GUUeWR5JoBDKfQ4SOXJl4HOFGZHaq4RZgPYYXhvLc8EMFBlh5nAVwoCsAEZwGGrzGTDMwE8r7LDcdwnnwuAA8gATlllWgzPBPATmJIwvxn4QYEAziMDuGGVWWF4PZa3MGH+EeSTzwXAfWQAz6wy2w3PBtCdIHsS8JqCAbxBBvDFKrPf8GwAexJkdxN98pkDaLTCTABNVJYxN0M2gBMJ8i86MnIFMB8ZQBuVZczNkA1g0DO7IcwrFMASZACrHGXMzZAN4LZntrnJKgzAaivsN7Ag9I45yowAs0P/nOU99sw+6pifO4B1jsARgo2NVGgYeOE4/tQz+2ZERm4AFscsEWfd8sgtEVzqFg6gOWaJOOuSR+4cj7mZApgIfPAoE7X6PHKXeczNdStczWr1yNzoMTdzAGs8ykjriWemeZldOACAux6FXGutZ95ej9m5AFhE8PWX5OSHEuT1eczPBQDAZqKvy13rIcG9PF/VJACA5cCrmMXOAlMT5tQsAAgeeJwBfgmFXgLbqsyoaQDjkq7UfL7vJW0VZtcNgFZhdt0AKAHXhfl1AQCCx2nDQkZdAIDghsy/7gr91wAA2qm8+VpXACD6W6EuAHQKWQoABaAAFEAGebGkAIRCCiCDLAUgZCkAFIACUAAZ5MWSAhAKKYAMshSAkKUAUADFAZDeHNmXQVa7kFUOvUJ0Tyi0PoOs6cCoI2s09ArRSmDMKnSH9H4gZaufSgD9GWXFVgfBC5HXCH7QlPRxeFxtIXjhYij8W6VSqbz1B0EVo4DoplMBAAAAAElFTkSuQmCC" className="mr-3" alt="..." />
                                <div className="media-body">
                                    <h5 className="mt-0">Rolls - Delivery</h5>
                                    Cuisine
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResturantSearch;