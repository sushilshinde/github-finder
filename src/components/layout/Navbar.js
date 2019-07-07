import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({navClass, title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={navClass}></i> {title}
                </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    navClass: 'fab fa-github',
    title: 'Github Finder'
}
export default Navbar
