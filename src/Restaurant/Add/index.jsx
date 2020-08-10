import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function RestaurantAdd() {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home">Restaurant: Add</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/signup">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <form noValidate style={{ marginTop: '90px' }}>
                <div className="form-group">
                    <label htmlFor="">Restaurant Name</label>
                    <input type="text" name="restaurantName" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">City</label>
                    <select name="restaurantCity" className="custom-select"></select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Are you the owner or manager of this place</label>
                    <select name="restaurantCity" className="custom-select">
                        <option value="No">I'm not the owner/manager</option>
                        <option value="Yes">I'm the owner/manager</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Owner Phone</label>
                    <input type="tel" name="ownerPhone" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Owner Email</label>
                    <input type="email" name="ownerEmail" className="form-control" />
                </div>
                <div className="form-row">
                    <div className="form-group col-4">
                        <label htmlFor="">STD</label>
                        <input type="text" name="std" className="form-control" />
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" name="phoneNumber" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Opening Status</label>
                    <select name="openingStatus" className="custom-select">
                        <option value="Yes">This place is already open</option>
                        <option value="No">This place is opening soon</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Address/Landmark</label>
                    <textarea name="addressOrLandmark" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="">Alcohol</label>
                    <select name="restaurantCity" className="custom-select">
                        <option value="No">Serves Alcohol</option>
                        <option value="Yes">Doesn't serve Alcohol</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Services</label>
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Breakfast</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Lunch</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Dinner</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Cafe</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Nightlife</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Seating</label>
                    <select name="restaurantCity" className="custom-select">
                        <option value="Yes">Seating available</option>
                        <option value="No">No seating available</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Indoor Seating</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Outdoor Seating</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Payment</label>
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="payment" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Cash Only</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="payment" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Cards and cash</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Cuisines</label>
                    <input type="text" name="cuisines" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Timings</label>
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Mon</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Tue</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Wed</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Thur</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Fri</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Sat</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Sun</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <input type="time" className="form-control" />
                        </div>
                        <div className="col-2">to</div>
                        <div className="col-4">
                            <input type="time" className="form-control" />
                        </div>
                        <div className="col-2">
                            <a href="#">+</a>
                        </div>
                    </div>

                </div>
                <div className="form-group">
                    <label htmlFor="">Restaurant Email</label>
                    <input type="email" name="restaurantEmail" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Restaurant Website</label>
                    <input type="text" name="restaurantWebsite" className="form-control" />
                </div>
                <button type="submit" className="btn btn-block btn-success">Add Restaurant</button>
            </form>
        </Container>
    )
}

export default RestaurantAdd;