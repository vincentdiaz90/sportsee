import Format from '../../data/classModif'
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

    const formatData = new Format(dataPerformances)

    const formatDataTab = formatData.CurrentUserPerformances

    //console.log(formatDataTab);


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
            <RadarChart outerRadius={80} data={formatDataTab && formatDataTab}>
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
