import './Navbar.css'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/login/loginSlice'


const Navbar = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const logOut = () => {
        dispatch(logout());
    }

    return (
        <header>
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
                    {user.length < 1 ?
                        <div>
                            <Link to={"/login"} className="main-nav-item">
                                <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
                                Sign In
                            </Link>
                        </div>
                        :
                        <div className="main-nav-connected">
                            <div className="main-nav-item1">
                                <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
                                <span className="main-nav-item-firstName"> {user.firstName} </span>
                            </div>
                            <div className="main-nav-item2">
                                <Link to={"/"} className="main-nav-item" onClick={logOut}>
                                    <FontAwesomeIcon icon={faRightFromBracket} className="main-nav-item-icon" />
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar