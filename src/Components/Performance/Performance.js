import React from 'react'
import './Performance.css'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
    Text
} from 'recharts'

export default function Performance(props) {
    const { dataPerformances } = props

    const skillsTab = ['Intensité', 'Vitesse', 'Force', 'Endurance','Energie','Cardio']

    const dataResetPerformance = []


    /**
     * Format array dataperformances
     * @param {array} array
     * @returns array + new column name skill
     */    

    dataPerformances?.map( (el,key) => {
        //console.log(key);
        for(let i = 0; i<skillsTab.length; i++){
            el = {...el, skill : skillsTab[key]}
        }
        dataResetPerformance.push(el)
        return dataResetPerformance
    })


    /**
     * Put a margin between the graph and the label
     * @param {string}
     * @returns {string}
     */

    function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
      return (
        <Text
          {...rest}
          verticalAnchor="middle"
          y={y + (y - cy) / 12}
          x={x + (x - cx) / 6000}
        >
          {payload.value}
        </Text>
      );
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={80} data={dataResetPerformance && dataResetPerformance}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="skill"
                    tickLine={false}
                    tick={props => renderPolarAngleAxis(props)}
                    stroke="#FFFFFF"
                /> 
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
