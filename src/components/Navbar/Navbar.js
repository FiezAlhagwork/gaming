import React from 'react'
import"./Navbar.css"
const Navbar = (props) => {
    return (
        <li className='nav-item'>
            {props.children} 
        </li>
    )
}
const NavbarDropdown = (props) => {
    return (
        <li className='nav-item dropdown'>
            {props.children}
        </li>
    )
}

export default Navbar;
export  {NavbarDropdown}
