import React, {useState} from 'react'
import './ErrorPage.css'
import NavbarAPI from '../../Components/NavbarMockAPI/NavbarAPI/NavbarAPI'

export default function ErrorPage() {



  const SearchData = (e) => {
    let IdValue = e.target.id
    IdValue = IdValue.split('-')[1]
    IdValue = parseInt(IdValue)
    console.log(IdValue)
}

  
  return (
    <div className='Error404'>
      <h1>erreur 404</h1>
      <NavbarAPI dataLoad={SearchData}/>
    </div>
  )
}
