/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css'
import logo from "../../assets/images/logo.png"
import Navbar,{NavbarDropdown} from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className="navbar navbar-expand-lg bg-dark navbar-dark  ">
        <div className="container">
            <Link to={"/"} className="navbar-brand">
                <img src={logo} alt="" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu"><span
                    className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <Navbar className="nav-item"><Link to={"/"} className="nav-link">Home</Link></Navbar>
                    <Navbar className="nav-item"><a href="#Features" className="nav-link">Browse</a></Navbar>
                    <NavbarDropdown className="nav-item dropdown">
                        <a href="#learn" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu bg-dark">
                            <li><a href="#" className="dropdown-item bg-dark text-white">number one</a></li>
                            <li><a href="#" className="dropdown-item bg-dark text-white">number two</a></li>
                        </ul>
                    </NavbarDropdown>
                    <Navbar className="nav-item"><a href="#Question" className="nav-link">Streams</a></Navbar>
                    <Navbar className="nav-item"><Link to={"/profile"}  className="nav-link">Profile</Link></Navbar>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header;
