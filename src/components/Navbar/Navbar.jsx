import React, { useState, useEffect } from "react";
import {  Link, NavLink } from "react-router-dom"
import './_navbar.scss';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    
    const [mobileMenu, setMobileMenu] = useState('')
    const [scroll, setScroll] = useState(false)

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
            path:'/crates',
            text: 'Crates',
            class: 'underline',
        },
        {
            id: 4,
            path:'/contact',
            text: 'Contact Us',
            class: 'btn-nav',
        },
    ]

    const mobileMenuClick = () => {
        if(!mobileMenu){
            setMobileMenu('active')
        }else{
            setMobileMenu('')
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });

      const navLinks = document.querySelectorAll('.nav-links li a')
      navLinks.forEach(el => {
          el.addEventListener('click', () => {
            setMobileMenu('')
          })
      })
    }, []);


    return (
        <nav className={`nav-header ${scroll ? 'active' : ''}`}>
            <div className="container">
                <Link to="/"><img className="nav-logo" src={logo} alt="NFT LOGO" /></Link>

                <div className={`hamburger ${mobileMenu}`} onClick={mobileMenuClick}>
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