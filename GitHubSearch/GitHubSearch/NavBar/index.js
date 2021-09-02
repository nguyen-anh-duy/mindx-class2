import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="navBar" >
            <p className="navBarTitle" >Github Finder</p>
            <ul className="ngang" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
             </ul>
        </div>
    )
}
