import Comunity from '../Containers/Comunity/Comunity'
import Home from '../Containers/Home/Home'
import Profil from '../Containers/Profil/Profil'
import Settings from '../Containers/Settings/Settings'
import ErrorPage from '../Containers/ErrorPage/ErrorPage'
import DashbordAPI from '../Containers/Dashbord/DashbordAPI/DashbordAPI'
import DashbordMock from '../Containers/Dashbord/DashbordMock/DashbordMock'
import { Routes, Route } from 'react-router-dom'

export default function RouterPath() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mock/:userId" element={<DashbordMock />} />
            <Route path="/user/:userId" element={<DashbordAPI />} />
            <Route path="/Community" element={<Comunity />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
