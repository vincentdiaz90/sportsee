import React from 'react'
import '../Dashbord.css'
import { useState } from 'react'

import Calories from '../../../assets/pictures/components/brings/Calories.png'
import Carbohydrate from '../../../assets/pictures/components/brings/Carbohydrate.png'
import Lipid from '../../../assets/pictures/components/brings/Lipid.png'
import Protein from '../../../assets/pictures/components/brings/Protein.png'

import MainData from '../../../Components/MainData/MainData'
import AverageSessions from '../../../Components/AverageSessions/AverageSessions'
import Activity from '../../../Components/Activity/Activity'
import Performance from '../../../Components/Performance/Performance'
import NavbarAPI from '../../../Components/NavbarMockAPI/NavbarAPI/NavbarAPI'

//import Mock from '../../../assets/Mock/Mock'
import {
    getUser,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from '../../../data/ApiAxiosCall'

export default function DashbordMock() {
    //console.log(Mock)

    // const [error, setError] = useState(false)

    const [userId, setUserId] = useState()
    // const [activity, setActivity] = useState()
    // const [averageSession, setAverageSession] = useState()
    // const [userPerformance, setUserPerformance] = useState()

    /* Use effect */

    /* Selection du bon Id*/

    const SearchData = (e) => {
        let IdValue = e.target.id
        IdValue = IdValue.split('-')[1]
        IdValue = parseInt(IdValue)
        setUserId(IdValue)
    }

    //console.log(userId);

    let currentUserInfo
    let currentUserActivities
    let currentUserAverageSessions
    let currentUserPerformances

    if (userId) {
        const usersInfos = getUser(userId)
        console.log('usersInfos', usersInfos)

        const userActivities = getUserActivity(userId)
        console.log('userActivities', userActivities)

        const userAverageSessions = getUserAverageSessions(userId)
        console.log('userAverageSessions', userAverageSessions)

        const userPerformances = getUserPerformance(userId)
        console.log('userPerformances', userPerformances)

        currentUserInfo = usersInfos

        currentUserActivities = userActivities

        currentUserAverageSessions = userAverageSessions

        currentUserPerformances = userPerformances
    }

    return (
        <>
            <NavbarAPI dataLoad={SearchData} />
            <div className="home">
                <div className="container">
                    <div className="name-accueil">
                        <h2>
                            Bonjour{' '}
                            <span className="name-accueil-span">
                                {currentUserInfo?.userInfos.firstName}
                            </span>
                        </h2>
                        <h1>
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </h1>
                    </div>
                    <div className="result">
                        <div className="activities">
                            <div className="daily-activity">
                                <MainData
                                    dataActivity={
                                        currentUserActivities?.sessions
                                    }
                                />
                            </div>
                            <div className="average-sessions">
                                <AverageSessions
                                    dataAverageSessions={
                                        currentUserAverageSessions?.sessions
                                    }
                                />
                            </div>
                            <div className="graph">
                                <Performance
                                    dataPerformances={
                                        currentUserPerformances?.data
                                    }
                                />
                            </div>
                            <div className="rate">
                                <Activity
                                    dataScore={
                                        currentUserInfo?.todayScore
                                            ? currentUserInfo?.todayScore
                                            : currentUserInfo?.score
                                    }
                                />
                                <Activity
                                    dataScore={
                                        currentUserInfo && currentUserInfo
                                    }
                                />
                            </div>
                        </div>
                        <div className="brings">
                            <div className="calories">
                                <img
                                    className="brings-image brings-image-calories"
                                    src={Calories}
                                    alt="calories"
                                />
                                <div className="container-data">
                                    <p>
                                        {currentUserInfo?.keyData.calorieCount}{' '}
                                        KCal
                                    </p>
                                    <p>Calories</p>
                                </div>
                            </div>
                            <div className="protein">
                                <img
                                    className="brings-image brings-image-protein"
                                    src={Protein}
                                    alt="proteines"
                                />
                                <div className="container-data">
                                    <p>
                                        {currentUserInfo?.keyData.proteinCount}g
                                    </p>
                                    <p>Proteines</p>
                                </div>
                            </div>
                            <div className="carbohydrates">
                                <img
                                    className="brings-image brings-image-carbohydrates"
                                    src={Carbohydrate}
                                    alt="glucides"
                                />
                                <div className="container-data">
                                    <p>
                                        {
                                            currentUserInfo?.keyData
                                                .carbohydrateCount
                                        }
                                        g
                                    </p>
                                    <p>Glucides</p>
                                </div>
                            </div>
                            <div className="lipids">
                                <img
                                    className="brings-image brings-image-lipids"
                                    src={Lipid}
                                    alt="lipides"
                                />
                                <div className="container-data">
                                    <p>
                                        {currentUserInfo?.keyData.lipidCount}g
                                    </p>
                                    <p>Lipides</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
