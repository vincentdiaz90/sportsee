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
                to="/profil"
                className="nav-link"
            >
                Profil
            </NavLink>
            <NavLink
                to="/reglage"
                className="nav-link"
            >
                Réglage
            </NavLink>
            <NavLink
                to="/communaute"
                className="nav-link"
            >
                Communauté
            </NavLink>

        </nav>
    )
}
