import React from 'react'
import './Aside.css'
import Yoga from '../../assets/pictures/components/activities/Yoga.png'
import Cycling from '../../assets/pictures/components/activities/Cycling.png'
import Swimming from '../../assets/pictures/components/activities/Swimming.png'
import Weightlifting from '../../assets/pictures/components/activities/Weightlifting.png'

export default function Aside() {
    return (

        <aside>

            <section className="pictures">
                <img src={Yoga} alt="Yoga" />
                <img src={Swimming} alt="nage" />
                <img src={Cycling} alt="vélo" />
                <img src={Weightlifting} alt="haltérophilie" />
            </section>

            <section className="footer">
                <p>Copiryght, SportSee 2020</p>
            </section>

        </aside>
        
    ) 
}
