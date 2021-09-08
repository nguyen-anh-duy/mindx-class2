import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="navBar" >
            <Link to="/" >
            <p className="navBarTitle" >Github Finder</p>
            </Link>
            <ul className="ngang" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
             </ul>
        </div>
    )
}
