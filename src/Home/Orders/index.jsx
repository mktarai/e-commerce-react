import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function OrdersList() {
    return (
        <div className="container-fluid mb-3" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <div className="card mt-2">
                <div className="card-body pb-0 pt-2">
                    <div className="media mb-2">
                        <img src="https://via.placeholder.com/48" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Bawarchi Restaurant</h5>
                                Jaydev Vihar, Bhubaneswar
                            </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                        <p className="mb-1">Items</p>
                        <small>1 x Chicken Manchurian with Chicken Fried Rice</small>
                        <p className="mb-1">Ordered On</p>
                        <small>06 Mar 2020 @ 12:48 PM</small>
                        <p className="mb-1">Total Amount</p>
                        <small>Rs 112.05</small>
                    </li>
                </ul>
                <div className="card-footer text-muted text-right">
                    <FontAwesomeIcon icon={faRedo} /> Repeat Order
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-body pb-0 pt-2">
                    <div className="media mb-2">
                        <img src="https://via.placeholder.com/48" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Bawarchi Restaurant</h5>
                                Jaydev Vihar, Bhubaneswar
                            </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                        <p className="mb-1">Items</p>
                        <small>1 x Chicken Manchurian with Chicken Fried Rice</small>
                        <p className="mb-1">Ordered On</p>
                        <small>06 Mar 2020 @ 12:48 PM</small>
                        <p className="mb-1">Total Amount</p>
                        <small>Rs 112.05</small>
                    </li>
                </ul>
                <div className="card-footer text-muted text-right">
                    <FontAwesomeIcon icon={faRedo} /> Repeat Order
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-body pb-0 pt-2">
                    <div className="media mb-2">
                        <img src="https://via.placeholder.com/48" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Bawarchi Restaurant</h5>
                                Jaydev Vihar, Bhubaneswar
                            </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                        <p className="mb-1">Items</p>
                        <small>1 x Chicken Manchurian with Chicken Fried Rice</small>
                        <p className="mb-1">Ordered On</p>
                        <small>06 Mar 2020 @ 12:48 PM</small>
                        <p className="mb-1">Total Amount</p>
                        <small>Rs 112.05</small>
                    </li>
                </ul>
                <div className="card-footer text-muted text-right">
                    <FontAwesomeIcon icon={faRedo} /> Repeat Order
                </div>
            </div>
        </div>
    )
}

export default OrdersList;