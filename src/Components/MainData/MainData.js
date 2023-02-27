import React from 'react'
import './MainData.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

export default function MainData(props) {

    const { dataActivity } = props

    /**
     * Format date in day formatter
     * @param {object} dataActivity.day
     * @returns {object} number of the day
     */

    const dataResetActivity = []

    dataActivity?.map((el) => {
        if(el.day.split('-')[2].includes('0')){
            el = {...el, currentDay : el.day.split('-')[2].split('')[1]} 
        }
        else {
            el = {...el, currentDay : el.day.split('-')[2]} 
        }
        dataResetActivity.push(el)
        return dataResetActivity
    })
    

    /**
     * Format Tooltip
     * @param {array} payload - source data
     * @param {boolean} active - is Tootip active
     * @returns data.value on hover
     */

    function CustomTooltipMainData ({payload, active}) {
        if (active) {
            return (
                <div className='activityChartTooltip'>
                    <div>{`${payload[0]?.value}`}kg</div>
                    <div>{`${payload[1]?.value}`}Kcal</div>
                </div>
            )
        }
        return null
    }



    return (
        <>
            <h2 className='activityTitle'>Activité quotidienne</h2>

            <section className='activity-chart'>
                <ResponsiveContainer width="100%" height="85%">
                    <BarChart
                        width={1200}
                        height={1200}
                        data={dataResetActivity && dataResetActivity}
                        margin={{
                            top: 0,
                            right: 50,
                            left: 50,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid vertical='false' strokeDasharray='5' height={1} horizontalPoints={[50, 165]} />
                        <XAxis
                            dataKey="currentDay"
                            interval="preserveStartEnd"
                            tickSize= "0"
                            tickMargin="25"
                            stroke="#9B9EAC"
                            
                        />
                        <YAxis
                            dataKey="calories"
                            yAxisId="left"
                            orientation="left"
                            hide="true"
                        />
                        <YAxis
                            dataKey="kilogram"
                            yAxisId="right"
                            orientation="right"
                            type="number"
                            domain={['dataMin -1', 'dataMax']}
                            tickCount="3"
                            tickSize="0"
                            axisLine={false}
                            tickMargin="30"
                            width={45}
                            stroke="#9B9EAC"
                        />
                        <Tooltip 
                            content={dataActivity && <CustomTooltipMainData />}
                            //position={{x:0, y:7}}
                        />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            height={55}
                            iconType="rect"
                            iconSize={8}
                            formatter={(value, entry) => (
                                <span className='activityLegendColor'>{value}</span>
                            )}
                            
                        />
                        <Bar
                            name="Poids (kg)"
                            dataKey="kilogram"
                            yAxisId="right"
                            fill="#282D30"
                            radius={[25, 25, 0, 0]}
                            barSize={7}
                        />
                        <Bar
                            name="Calories brûlées (kCal)"
                            dataKey="calories"
                            yAxisId="left"
                            fill="#E60000"
                            radius={[25, 25, 0, 0]}
                            barSize={7}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </section>
        </>
    )
}
