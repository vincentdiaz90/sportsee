import React from 'react'
import '../NavbarMockAPI.css'
import { Link } from 'react-router-dom'

export default function NavbarMock(props) {

  const {dataLoad} = props
  return (
      <nav className='navbar-mock-api'>
      <ul>
          <li>
              <Link to='mock/12' className="btn-navbar-mock-api" > Profil 12 - Mock </Link>
          </li>
          <li>
              <Link to='mock/18' className="btn-navbar-mock-api" > Profil 18 - Mock </Link>
          </li>
      </ul>
  </nav>
  )
}
