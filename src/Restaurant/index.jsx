import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

function RestaurantList({ history }) {

    const handleClick = () => {
        history.push('/restaurant-menu');
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
                    <div className="card mb-2" onClick={handleClick}>
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
        </div>
    )
}

export default RestaurantList;