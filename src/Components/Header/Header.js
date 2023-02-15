import React from 'react'
import Logo from '../../assets/pictures/Logo.png'
import Navbar from '../Navbar/Navbar'
import './Header.css'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="sportsee logo" />
            <Navbar />
        </header>
    )
}
