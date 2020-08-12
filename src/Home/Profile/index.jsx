import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Profile({ toggleDrawer }) {

    useEffect(() => {
        toggleDrawer(false);
    }, [toggleDrawer])

    return (
        <div className="container-fluid mb-3" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <div className="card mt-2">
                <div className="text-center">
                    <img src="data:image/png;base64,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" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Monish Kumar Tarai</h5>
                    <p className="card-text">
                        <FontAwesomeIcon icon={faEnvelope} className="text-muted" /> <small className="text-muted">talk2monish@outlook.com</small>
                        <FontAwesomeIcon icon={faPhone} className="text-muted ml-2" /> <small className="text-muted">+91 9711495838</small>
                    </p>
                </div>
            </div>
            <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item list-group-item-action list-group-item-secondary">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Addresses</h5>
                        <small><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABy0lEQVRIie2Uu24TURCGDwEqUnFRusgSEijhZjdAA7KERANvQJNHoKPdisaWz/zf7BYukNLiKg0NBYqiFJAuNWCeIFIUAg5IKDRnJWPhzdppM9JWM/N/c+ayIZzZLCbJgB1gc/KTtB9jbJwKAOxU+FqSvp8KAmyGEEK3270KvAE2gFbpjzE2gcO5ISUgiT+VtAwcjMeY2V1JP+aCjAE2JC33+/2LwN5knLvfAX7ODBkDtIADYA948b9YSbdnhpSAupbn+S1Jo9oQSfvjQ61Z1CpwVAsSY2ykVWzOAokxrgC/akEkPQEOJQ2BXXf/CDw6Kc/Mbkr6XQkBrkv6FGNsxhgb7t42syXgA/DsJEie5zckDasAb8v2uHtbUhZCCEVRLAJ/BoPB+SoAcE3SaGqAmW2XlQMv3X3d3dvpgnPg3rTcdP3fKtspaaus3N3X008uA9bcvWNmD6aJp5lVz0rSezNbCuHfFmVZtgDsAvcnc/I8v+LuX+ssQjCzx+7+riiKxdSWtSzLFtz9tSSTNAJWy/her3cZ+FJLfKyi52k189SWbeDV8fHxuRhjIx3VShL/PJN4aVmWXUgveNjpdC6N+9IxDoGjucTPbNL+AlKwUX6iRC+XAAAAAElFTkSuQmCC" alt="" /></small>
                    </div>
                </li>
                <li className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Primary</h5>
                        <small>Work</small>
                    </div>
                    <p className="mb-1">UBN Software Solutions Pvt Ltd</p>
                    <p className="mb-1">1st Floor, Rajdhani Offset Printing Press</p>
                    <p className="mb-1">Mancheswar Industrial Estate</p>
                    <p className="mb-1">Bhubaneswar-751010</p>
                </li>
                <li className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Secondary</h5>
                        <small>Home</small>
                    </div>
                    <p className="mb-1">C/O- Late Dr Sashi Bhusan Mohanty</p>
                    <p className="mb-1">Near Maa Barahi Mandir</p>
                    <p className="mb-1">Kesharpur</p>
                    <p className="mb-1">Cuttack-753001</p>
                </li>
            </ul>
        </div>
    )
}

export default Profile;