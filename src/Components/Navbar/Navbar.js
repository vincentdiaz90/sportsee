import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >
                Accueil
            </NavLink>

            <NavLink
                to="/Profil"
                className="nav-link"
            >
                Profil
            </NavLink>
            <NavLink
                to="/Settings"
                className="nav-link"
            >
                Réglage
            </NavLink>
            <NavLink
                to="/Community"
                className="nav-link"
            >
                Communauté
            </NavLink>

        </nav>
    )
}
