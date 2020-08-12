import React, { useState, useEffect, useCallback } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt, faCartArrowDown, faShoppingCart, faUser, faHome } from '@fortawesome/free-solid-svg-icons'

import Profile from './Profile';
import OrdersList from './Orders';

function Home({ match, history }) {

    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [showDrawer])

    const handleLogout = () => {
        sessionStorage.clear();
        history.push('/');
    }

    const handleClick = () => {
        setShowDrawer(!showDrawer);
    }

    const toggleDrawer = useCallback((value) => {
        setShowDrawer(value);
    }, [])

    return (
        <div id="wrapper" className={`d-flex ${showDrawer === true ? 'toggled' : ''}`}>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">e-Com</div>
                <div className="list-group list-group-flush">
                    <div className="list-group-item list-group-item-action bg-light">
                        <div className="text-center">
                            <img src="data:image/png;base64,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" alt="..." />
                        </div>
                    </div>
                    <Link to="/" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faHome} className='fa-fw' /> Home
                    </Link>
                    <Link to="/home/profile" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faUser} className='fa-fw' /> My Profile
                    </Link>
                    <Link to="/home/orders-list" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faCartArrowDown} className='fa-fw' /> My Orders
                    </Link>
                    <Link to="/home/carts-list" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faShoppingCart} className='fa-fw' /> My Carts
                    </Link>
                    <div className="list-group-item list-group-item-action bg-light" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className='fa-fw' /> Logout
                    </div>
                </div>
            </div>
            <div id="page-content-wrapper">
                <nav className="navbar navbar-light bg-light border-bottom">
                    <FontAwesomeIcon icon={faBars} size="2x" className="text-muted" id="menu-toggle" onClick={handleClick} />
                </nav>

                <Switch>
                    <Route path={`${match.path}/profile`} render={props => <Profile toggleDrawer={toggleDrawer} {...props} />} />
                    <Route path={`${match.path}/orders-list`} render={props => <OrdersList toggleDrawer={toggleDrawer} {...props} />} />
                </Switch>
            </div>
        </div>
    )
}

export default Home;