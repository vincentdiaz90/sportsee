import React from 'react'
import '../Dashbord.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Calories from '../../../assets/pictures/components/brings/Calories.png'
import Carbohydrate from '../../../assets/pictures/components/brings/Carbohydrate.png'
import Lipid from '../../../assets/pictures/components/brings/Lipid.png'
import Protein from '../../../assets/pictures/components/brings/Protein.png'

import MainData from '../../../Components/MainData/MainData'
import AverageSessions from '../../../Components/AverageSessions/AverageSessions'
import Activity from '../../../Components/Activity/Activity'
import Performance from '../../../Components/Performance/Performance'

import Mock from '../../../assets/Mock/Mock'

export default function DashbordMock() {


    /* Selection du bon Id*/

    const { userId } = useParams()

    const [error, setError] = useState(false)

    const usersInfos = Mock.USER_MAIN_DATA
    const userActivities = Mock.USER_ACTIVITY
    const userAverageSessions = Mock.USER_AVERAGE_SESSIONS
    const userPerformances = Mock.USER_PERFORMANCE

    const currentUserInfo = usersInfos.find(
        (usersInfo) => usersInfo.id.toString() === userId?.toString()
    )

    console.log(currentUserInfo);

    const currentUserActivities = userActivities.find(
        (userActivity) => userActivity.userId.toString() === userId?.toString()
    )

    const currentUserAverageSessions = userAverageSessions.find(
        (userAverageSession) =>
            userAverageSession.userId.toString() === userId?.toString()
    )
    const currentUserPerformances = userPerformances.find(
        (userPerformance) =>
            userPerformance.userId.toString() === userId?.toString()
    )

    /**
     * Allow to control the return of value
     * @params validity {object}
     * @params error {boleen}
     * @returns {boleen}
     */

    function validity() {
        if( currentUserInfo &&
            currentUserActivities &&
            currentUserAverageSessions &&
            currentUserPerformances &&
            parseInt(userId) === parseInt(currentUserInfo?.id)) {
                return true
            }
        return false
    }
    validity() 

    useEffect( () => {
        if(validity()) {return setError(false)} return setError(true)
    },[userId])


    const navigate = useNavigate()

    return (
        <>
            {!error ? (
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
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
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
                                            {
                                                currentUserInfo?.keyData
                                                    .calorieCount
                                            }{' '}
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
                                            {
                                                currentUserInfo?.keyData
                                                    .proteinCount
                                            }{' '}
                                            g
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
                                            }{' '}
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
                                            {
                                                currentUserInfo?.keyData
                                                    .lipidCount
                                            }{' '}
                                            g
                                        </p>
                                        <p>Lipides</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : navigate('/error')
            }
        </>
    )
}
