import React from 'react'
import '../NavbarMockAPI.css'
import { NavLink } from 'react-router-dom'

export default function NavbarAPI(props) {

  const {dataLoad} = props

  return (
    <nav className='navbar-mock-api'>
        <ul>
            <li>
            <NavLink className="link-navbar-mock-api" to={"/user/12"}>
                <button onClick = {dataLoad} className="btn-navbar-mock-api" id="api-12">Profil 12 - API</button>
            </NavLink>
            </li>
            <li>
            <NavLink className="link-navbar-mock-api" to={"/user/18"}>
                <button onClick = {dataLoad} className="btn-navbar-mock-api" id="api-18">Profil 18 - API</button>
            </NavLink>
            </li>
        </ul>
    </nav>
  )
}