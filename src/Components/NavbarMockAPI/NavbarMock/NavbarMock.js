import React from 'react'
import '../NavbarMockAPI.css'
import { NavLink } from 'react-router-dom'

export default function NavbarMock(props) {

  const {dataLoad} = props
  return (
    <nav className='navbar-mock-api'>
        <ul>
            <li>
            <NavLink className="link-navbar-mock-api" to={"/mock/12"}>
                <button onClick = {dataLoad} className="btn-navbar-mock-api" id="mock-12">Profil 12 - Mock</button>
            </NavLink>
            </li>
            <li>
            <NavLink className="link-navbar-mock-api" to={"/mock/18"}>
                <button onClick = {dataLoad} className="btn-navbar-mock-api" id="mock-18">Profil 18 - Mock</button>
            </NavLink>
            </li>
        </ul>
    </nav>
  )
}
