import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function OrdersList({ toggleDrawer }) {

    useEffect(() => {
        toggleDrawer(false);
    }, [toggleDrawer])

    return (
        <div className="container-fluid mb-3" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <div className="card mt-2">
                <div className="card-body pb-0 pt-2">
                    <div className="media mb-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACS0lEQVRoge2ZPWsUURSGHzFBYUEUETsLC0VMwI+QShAMiCKmsbESyaIJ+ANEU1qYwq9GE8QykEYQUYuAELSQRCMWgjYRwSIoYqOFiahrMfeSszNnnXtnZi8M3Be2ebl5znnCJLuzAzExQXIcmAU2ia4JPAB6RHcJmCoxZxCYA+4CG0pwMpkBWsBB0c2ZbpfoXgF/gUaBGT3AD8NsAaOFNu2QtwY6ILol0x0R3aLpBgvMOM/a8i1gotCmSnqBX2QFfprujOisQNNzRgNYpl1grOC+mfQJqBXYJrpxcdYK3PScMU778pUKnCYrsF90k+KsFXjqwd8CfKeLAvK3YwWGRfdInLUCHz346Wu/coE7ZAUuiO6NOGsFVoF1jvxndFngIVmBq6L7Ks4uin67A3sH+vKVCsilrMB0athG5ewBB/ZFZfHKBT4L6GHTvUgN22v696IbdmC/VhavXGBVQD+QfHxID3sHPEl1Z3O4DeBPCIH0G4zr60QO91DOz1cmsFBQoD+HOxpK4EqB5ZfJ/zd6OZTAHv5/rWqv6w7ca6EEAO55LP8N2OrAnAop0ABeOiy/Agw5MoMKQHKHNAH87jBwnuRyc01wAZtTyrDHwHpPzi2FE0RgQBlW5D74nMKplcBm4IvCqo0AwDGSP/zaCgAcZe2eu5YCADcUZq0ExhRmFOiUKKAkCvgkCiiJAj6JAkqigE+igJIo4JN9yrDbJZlNhen7nM05vcCn1LCTJZk7ab8zWzFd17IbuA88B0YqYg6RPEyfxf27pZiYsvkHbAELJa950/oAAAAASUVORK5CYII=" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Bawarchi Restaurant</h5>
                                Jaydev Vihar, Bhubaneswar
                            </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                        <p className="mb-0">Items</p>
                        <small className="mb-1">1 x Chicken Manchurian with Chicken Fried Rice</small>
                        <p className="mb-0">Ordered On</p>
                        <small className="mb-1">06 Mar 2020 @ 12:48 PM</small>
                        <p className="mb-0">Total Amount</p>
                        <small className="mb-1">Rs 112.05</small>
                    </li>
                </ul>
                <div className="card-footer text-danger text-right">
                    <FontAwesomeIcon icon={faRedo} /> Repeat Order
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-body pb-0 pt-2">
                    <div className="media mb-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACS0lEQVRoge2ZPWsUURSGHzFBYUEUETsLC0VMwI+QShAMiCKmsbESyaIJ+ANEU1qYwq9GE8QykEYQUYuAELSQRCMWgjYRwSIoYqOFiahrMfeSszNnnXtnZi8M3Be2ebl5znnCJLuzAzExQXIcmAU2ia4JPAB6RHcJmCoxZxCYA+4CG0pwMpkBWsBB0c2ZbpfoXgF/gUaBGT3AD8NsAaOFNu2QtwY6ILol0x0R3aLpBgvMOM/a8i1gotCmSnqBX2QFfprujOisQNNzRgNYpl1grOC+mfQJqBXYJrpxcdYK3PScMU778pUKnCYrsF90k+KsFXjqwd8CfKeLAvK3YwWGRfdInLUCHz346Wu/coE7ZAUuiO6NOGsFVoF1jvxndFngIVmBq6L7Ks4uin67A3sH+vKVCsilrMB0athG5ewBB/ZFZfHKBT4L6GHTvUgN22v696IbdmC/VhavXGBVQD+QfHxID3sHPEl1Z3O4DeBPCIH0G4zr60QO91DOz1cmsFBQoD+HOxpK4EqB5ZfJ/zd6OZTAHv5/rWqv6w7ca6EEAO55LP8N2OrAnAop0ABeOiy/Agw5MoMKQHKHNAH87jBwnuRyc01wAZtTyrDHwHpPzi2FE0RgQBlW5D74nMKplcBm4IvCqo0AwDGSP/zaCgAcZe2eu5YCADcUZq0ExhRmFOiUKKAkCvgkCiiJAj6JAkqigE+igJIo4JN9yrDbJZlNhen7nM05vcCn1LCTJZk7ab8zWzFd17IbuA88B0YqYg6RPEyfxf27pZiYsvkHbAELJa950/oAAAAASUVORK5CYII=" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Bawarchi Restaurant</h5>
                                Jaydev Vihar, Bhubaneswar
                            </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                        <p className="mb-0">Items</p>
                        <small className="mb-1">1 x Chicken Manchurian with Chicken Fried Rice</small>
                        <p className="mb-0">Ordered On</p>
                        <small className="mb-1">06 Mar 2020 @ 12:48 PM</small>
                        <p className="mb-0">Total Amount</p>
                        <small className="mb-1">Rs 112.05</small>
                    </li>
                </ul>
                <div className="card-footer text-danger text-right">
                    <FontAwesomeIcon icon={faRedo} /> Repeat Order
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-body pb-0 pt-2">
                    <div className="media mb-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACS0lEQVRoge2ZPWsUURSGHzFBYUEUETsLC0VMwI+QShAMiCKmsbESyaIJ+ANEU1qYwq9GE8QykEYQUYuAELSQRCMWgjYRwSIoYqOFiahrMfeSszNnnXtnZi8M3Be2ebl5znnCJLuzAzExQXIcmAU2ia4JPAB6RHcJmCoxZxCYA+4CG0pwMpkBWsBB0c2ZbpfoXgF/gUaBGT3AD8NsAaOFNu2QtwY6ILol0x0R3aLpBgvMOM/a8i1gotCmSnqBX2QFfprujOisQNNzRgNYpl1grOC+mfQJqBXYJrpxcdYK3PScMU778pUKnCYrsF90k+KsFXjqwd8CfKeLAvK3YwWGRfdInLUCHz346Wu/coE7ZAUuiO6NOGsFVoF1jvxndFngIVmBq6L7Ks4uin67A3sH+vKVCsilrMB0athG5ewBB/ZFZfHKBT4L6GHTvUgN22v696IbdmC/VhavXGBVQD+QfHxID3sHPEl1Z3O4DeBPCIH0G4zr60QO91DOz1cmsFBQoD+HOxpK4EqB5ZfJ/zd6OZTAHv5/rWqv6w7ca6EEAO55LP8N2OrAnAop0ABeOiy/Agw5MoMKQHKHNAH87jBwnuRyc01wAZtTyrDHwHpPzi2FE0RgQBlW5D74nMKplcBm4IvCqo0AwDGSP/zaCgAcZe2eu5YCADcUZq0ExhRmFOiUKKAkCvgkCiiJAj6JAkqigE+igJIo4JN9yrDbJZlNhen7nM05vcCn1LCTJZk7ab8zWzFd17IbuA88B0YqYg6RPEyfxf27pZiYsvkHbAELJa950/oAAAAASUVORK5CYII=" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Bawarchi Restaurant</h5>
                                Jaydev Vihar, Bhubaneswar
                            </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                        <p className="mb-0">Items</p>
                        <small className="mb-1">1 x Chicken Manchurian with Chicken Fried Rice</small>
                        <p className="mb-0">Ordered On</p>
                        <small className="mb-1">06 Mar 2020 @ 12:48 PM</small>
                        <p className="mb-0">Total Amount</p>
                        <small className="mb-1">Rs 112.05</small>
                    </li>
                </ul>
                <div className="card-footer text-danger text-right">
                    <FontAwesomeIcon icon={faRedo} /> Repeat Order
                </div>
            </div>
        </div>
    )
}

export default OrdersList;