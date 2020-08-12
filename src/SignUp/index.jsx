import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function SignUp({ history }) {

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push('/home/profile');
    }

    return (
        <div className="container-fluid pr-0 pl-0">
            <nav className="navbar fixed-top navbar-light bg-light">
                <Link to="/login" className="navbar-brand pt-0 pb-0"><FontAwesomeIcon icon={faArrowCircleLeft} /></Link>
                <span className="navbar-text h4 mb-0 p-0">
                    Sign Up
                </span>
            </nav>
            <div className="row mr-0 ml-0 mb-2" style={{ marginTop: '75px' }}>
                <div className="col pr-2 pl-2">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                <label className="custom-control-label" htmlFor="customSwitch1">I agree</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-block btn-success">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;