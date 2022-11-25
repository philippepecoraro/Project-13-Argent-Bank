import React from 'react'
import './Navbar.css'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className="main-nav">
                <Link to={"/"} className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to={"/login"} className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
                        Sign In
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar