import React from 'react'
import './Performance.css'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts'

export default function Performance(props) {
    const { dataPerformances } = props

    //console.log(dataPerformances)

    /**
     * Format array on his revers
     * @param {array} array
     * @returns revers array
     */
    function reverseData(array) {
        const dataReversedArray = []

        for (let i = array.length - 1; i >= 0; i--) {
            dataReversedArray.push(array[i])
        }
        return dataReversedArray
    }

    let inversDatas = []

    if (dataPerformances) {
        inversDatas = reverseData(dataPerformances)
    }

    /**
     * Format the data into label
     * @param {string} - index
     * @returns {string} - label
     */

    let xAxisFormatter
    
    if (dataPerformances) {
        xAxisFormatter = (kind) => {
            switch (kind) {
                case 1:
                    return 'Cardio'
                case 2:
                    return 'Energie'
                case 3:
                    return 'Endurance'
                case 4:
                    return 'Force'
                case 5:
                    return 'Vitesse'
                case 6:
                    return 'Intensité'
                default:
                    return 'none'
            }
        }
    }

    /**
     * Put a margin between the graph and the label
     * @param {string}
     * @returns {string}
     */

    // function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    //   return (
    //     <Text
    //       {...rest}
    //       verticalAnchor="middle"
    //       y={y + (y - cy) / 3}
    //       x={x + (x - cx) / 3}
    //     >
    //       {payload.value}
    //     </Text>
    //   );
    // }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={82} data={dataPerformances && inversDatas}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 500 }}
                    tickFormatter={dataPerformances && xAxisFormatter}
                    //tick={props => renderPolarAngleAxis(props)}
                    stroke="#FFFFFF"
                /> 
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
