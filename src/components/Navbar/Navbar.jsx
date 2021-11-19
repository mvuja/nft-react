import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import './_navbar.scss';
import logo from '../../assets/logo.svg';

const Navbar = () => {

    const [mobileMenu, setmobileMenu] = useState('')

    const links = [
        {
            id: 1,
            path: '/',
            text: 'Home',
            class: 'underline',
        },
        {
            id: 2,
            path:'/about',
            text: 'About',
            class: 'underline',
        },
        {
            id: 3,
            path:'/projects',
            text: 'Projects',
            class: 'underline',
        },
        {
            id: 4,
            path:'/contact',
            text: 'Contact',
            class: 'btn-nav',
        },
    ]

    const mobileMenu2 = () => {
        if(!mobileMenu){
            setmobileMenu('active')
        }else{
            setmobileMenu('')
        }
    }

    return (
        <nav className="nav-header">
        <div className="container">
            <a href="#"><img className="nav-logo" src={logo} alt="NFT LOGO" /></a>

            <div className={`hamburger ${mobileMenu}`} onClick={mobileMenu2}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${mobileMenu}`}>
                {links.map(link => {
                    return (
                        <li key={link.id} className={link.class}>
                            <NavLink to={link.path} activeClassName="active-link" exact>
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
        </nav>
    )
}

export default Navbar