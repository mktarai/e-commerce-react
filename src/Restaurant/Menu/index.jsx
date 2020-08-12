import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faArrowCircleLeft, faShoppingCart, faDotCircle } from '@fortawesome/free-solid-svg-icons'

function RestaurantMenu({ history }) {

    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {

    }, [])

    const handleClick = (e) => {
        console.log(e.target);
        setCartItemCount(cartItemCount + 1);
    }

    return (
        <div className="container-fluid pr-0 pl-0">
            <nav className="navbar fixed-top navbar-light bg-light">
                <Link to="/" className="navbar-brand pt-0 pb-0"><FontAwesomeIcon icon={faArrowCircleLeft} /></Link>
                <span className="navbar-text text-dark h4 mb-0 p-0">
                    <FontAwesomeIcon icon={faShoppingCart} /><sup>{cartItemCount}</sup>
                </span>
            </nav>
            <div className="row mr-0 ml-0" style={{ marginTop: '80px' }}>
                <div className="col pr-2 pl-2">
                    <div className="form-row">
                        <div className="form-group col-4">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                <label className="custom-control-label" htmlFor="customSwitch2">Veg</label>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                <label className="custom-control-label" htmlFor="customSwitch1">Egg</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mr-0 ml-0 mt-2">
                <div className="col pr-2 pl-2">
                    <ul className="list-group list-group-flush" style={{ fontSize: 'small' }}>
                        <li className="list-group-item list-group-item-action" onClick={handleClick}>
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">Veg Fried Rice with Chilli Panner Combo</h6>
                                <small><FontAwesomeIcon icon={faDotCircle} className="text-success" /></small>
                            </div>
                            <p className="text-warning mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <small><del>Rs. 159</del><span className="ml-2">Rs. 143.10</span><span className="ml-2 text-primary text-uppercase">10% Off</span></small>
                        </li>
                        <li className="list-group-item list-group-item-action" onClick={handleClick}>
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">Veg Fried Rice with Chilli Panner Combo</h6>
                                <small><FontAwesomeIcon icon={faDotCircle} className="text-success" /></small>
                            </div>
                            <p className="text-warning mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <small><del>Rs. 159</del><span className="ml-2">Rs. 143.10</span><span className="ml-2 text-primary text-uppercase">10% Off</span></small>
                        </li>
                        <li className="list-group-item list-group-item-action" onClick={handleClick}>
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">Veg Fried Rice with Chilli Panner Combo</h6>
                                <small><FontAwesomeIcon icon={faDotCircle} className="text-success" /></small>
                            </div>
                            <p className="text-warning mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <small><del>Rs. 159</del><span className="ml-2">Rs. 143.10</span><span className="ml-2 text-primary text-uppercase">10% Off</span></small>
                        </li>
                        <li className="list-group-item list-group-item-action" onClick={handleClick}>
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">Egg Chicken Fried Rice with Chilli Chicken Combo</h6>
                                <small><FontAwesomeIcon icon={faDotCircle} className="text-danger" /></small>
                            </div>
                            <p className="text-warning mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <small><del>Rs. 159</del><span className="ml-2">Rs. 143.10</span><span className="ml-2 text-primary text-uppercase">10% Off</span></small>
                        </li>
                        <li className="list-group-item list-group-item-action" onClick={handleClick}>
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">Egg Chicken Fried Rice with Chilli Chicken Combo</h6>
                                <small><FontAwesomeIcon icon={faDotCircle} className="text-danger" /></small>
                            </div>
                            <p className="text-warning mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <small><del>Rs. 159</del><span className="ml-2">Rs. 143.10</span><span className="ml-2 text-primary text-uppercase">10% Off</span></small>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">Egg Chicken Fried Rice with Chilli Chicken Combo</h6>
                                <small><FontAwesomeIcon icon={faDotCircle} className="text-danger" /></small>
                            </div>
                            <p className="text-warning mb-0">
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStar} /></small>
                                <small><FontAwesomeIcon icon={faStarHalfAlt} /></small>
                                <small className="ml-2 text-muted">3.5 (1779 Delivery Votes)</small>
                            </p>
                            <small><del>Rs. 159</del><span className="ml-2">Rs. 143.10</span><span className="ml-2 text-primary text-uppercase">10% Off</span></small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;