import Comunity from '../Containers/Comunity/Comunity'
import Home from '../Containers/Home/Home'
import Profil from '../Containers/Profil/Profil'
import Settings from '../Containers/Settings/Settings'
import ErrorPage from '../Containers/ErrorPage/ErrorPage'
import DashbordAPI from '../Containers/Dashbord/DashbordAPI/DashbordAPI'
import DashbordMock from '../Containers/Dashbord/DashbordMock/DashbordMock'
import { Routes, Route /*Navigate*/ } from 'react-router-dom'

export default function RouterPath() {
    return (
        <Routes>
            {/* <Route element={<Navigate replace to="/mock/12" />} path="/" /> */}
            <Route path="/" element={<Home />} />
            <Route path="/mock/:slug" element={<DashbordMock />} />
            <Route path="/user/:slug" element={<DashbordAPI />} />
            <Route path="/Communauté" element={<Comunity />} />
            <Route path="/Profil/:slug" element={<Profil />} />
            <Route path="/Settings/:slug" element={<Settings />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
