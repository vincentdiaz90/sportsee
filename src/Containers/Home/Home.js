import React from 'react'
import './Home.css'

import DashbordMock from '../Dashbord/DashbordMock/DashbordMock'
import DashbordAPI from '../Dashbord/DashbordAPI/DashbordAPI'

import NavbarAPI from '../../Components/NavbarMockAPI/NavbarAPI/NavbarAPI'
import NavbarMock from '../../Components/NavbarMockAPI/NavbarMock/NavbarMock'


export default function Home() {

    return (

        <>
            {/* <DashbordAPI /> */}
            {/* <DashbordMock /> */}
            <NavbarMock />
        </>

    )
}
