import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Blog  from '../Pages/Blog'
import menuIcon from '../assets/menuicon.svg'
import closeIcon from '../assets/closeicon.svg'
import logo  from '../assets/images/logo2.png'
import './navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="Navbar" id={menuOpen ? "nav-height" : ""}>
            <div className="nav-content">
                <div className="nav-title" onClick={() => {setMenuOpen(false )}}>
                    <Link className="route" to = '/'>Desbeyond</Link>
                    <Link className="route" to = '/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu" onClick={handleClick}>
                    <img src={menuOpen ? closeIcon : menuIcon} alt="icon" />
                </div>
                <ul className="page-list" id = {menuOpen ? "open" : ""}>
                    <li onClick={handleClick}><NavLink className="route" to = '/' >Home</NavLink></li>
                    <li onClick={handleClick}><NavLink className="route" to = '/services'>Services</NavLink></li>
                    <li onClick={handleClick}><NavLink className="route" to = '/contact'>Contact</NavLink></li>
                    <li onClick={handleClick}><NavLink className="route" to = '/about'>About</NavLink></li>
                    <li onClick={handleClick}><NavLink className="route" to = '/blog'>Blog</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar