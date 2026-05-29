import React from 'react'
import './nav.scss'
import DateTime from './DateTime'
const Nav = () => {
    return (
        <nav>
            <div className="left">
                <img src="./nav-icons/apple.svg" alt="" srcSet="" />

                <div className="nav-item">
                    <p>JayaPrakash</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>Windows</p>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="nav-icons">
                    <img src="./nav-icons/wifi.svg" alt="" srcSet="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>

            </div>
        </nav>
    )
}

export default Nav