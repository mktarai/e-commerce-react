import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login({ history }) {

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        sessionStorage.setItem('user.info', JSON.stringify({
            name: 'Monish Kumar Tarai'
        }));

        history.push('/home/profile');
    }

    return (
        <div className="container-fluid pr-0 pl-0">
            <nav className="navbar fixed-top navbar-light bg-light">
                <Link to="/" className="navbar-brand pt-0 pb-0"><FontAwesomeIcon icon={faArrowCircleLeft} /></Link>
                <span className="navbar-text h4 mb-0 p-0">
                    Sign In
                </span>
            </nav>
            <div className="row mr-0 ml-0" style={{ marginTop: '75px' }}>
                <div className="col pr-2 pl-2">
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        <div className="form-group">
                            <label htmlFor="username">Phone/Email</label>
                            <input type="text" name="username" id="username" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" required/>
                        </div>
                        <button type="submit" className="btn btn-block btn-success">Login</button>
                        <Link to="/signup" className="btn btn-block btn-secondary">New User?Signup</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;