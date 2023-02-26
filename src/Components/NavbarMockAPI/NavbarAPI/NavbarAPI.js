import React from 'react'
import '../NavbarMockAPI.css'
import { Link } from 'react-router-dom'

export default function NavbarAPI() {


  return (
    <nav className='navbar-mock-api'>
        <ul>
            <li>
                <Link to='user/12' className="btn-navbar-mock-api" > Profil 12 - API </Link>
            </li>
            <li>
                <Link to='user/18' className="btn-navbar-mock-api" > Profil 18 - API </Link>
            </li>
        </ul>
    </nav>
  )
}