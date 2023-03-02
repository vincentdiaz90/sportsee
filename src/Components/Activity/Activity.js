import Format from '../../data/classModif'
import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis,
} from 'recharts'
import './Activity.css'

function Activity(props) {

    const { dataScore } = props

    const formatData = new Format(dataScore)

    const formatDataTab = formatData.CurrentUserInfo


    return (
        <section className="activity">
            <h2 className="scoreChartTitle activity-section-title">Score</h2>

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="100"
                    outerRadius="130"
                    barSize="25px"
                    data={[formatDataTab]}
                    startAngle={180}
                    endAngle={-180}
                >
                    <RadialBar
                        minAngle={15}
                        dataKey="score"
                        fill="#FF0000"
                        cornerRadius={25}
                        barSize={10}
                    />
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1]}
                        tick={false}
                    />
                    <circle cx="50%" cy="50%" fill="#fff" r="95"></circle>
                </RadialBarChart>
            </ResponsiveContainer>

            <p className="scoreResult activity-score-result">
                {formatDataTab?.scorePercent} % <br /> de votre <br /> objectif
            </p>
        </section>
    )
}

export default Activity
