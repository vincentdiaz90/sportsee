import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis,
} from 'recharts'
import './Activity.css'

function Activity(props) {
    const { dataScore } = props

    //console.log(dataScore)

    /**
     * Format into one type for score data (currently : score & todayScore)
     * @param {object} score
     * @param {object} todayScore
     * @returns {object} score
     */

    function formatDataScore(data) {
        if (data.todayScore) {
            data.score = data.todayScore
            delete data.todayScore
            return data
        }
    }

    if (dataScore) {
        formatDataScore(dataScore)
    }

    //console.log(dataScore && dataScore)

    /**
     * Format the score in percentage
     * @param {object} data
     * @returns an integer for percentage
     */
    function calculatePercent(data) {
        return Math.round(data * 100)
    }

    let scorePercent

    if (dataScore) {
        scorePercent = calculatePercent(dataScore.score)
    }

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
                    data={[dataScore]}
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
                {scorePercent && scorePercent} % <br /> de votre <br /> objectif
            </p>
        </section>
    )
}

export default Activity
