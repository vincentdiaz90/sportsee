import React from "react";
import './AverageSessions.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AverageSessions(props) {

  const { dataAverageSessions } = props

    const xAxisFormatter = (day) => {
    switch(day){
        case 1: return 'L';
        case 2: return 'M';
        case 3: return 'M';
        case 4: return 'J';
        case 5: return 'V';
        case 6: return 'S';
        case 7: return 'D';
        default: return '';
    }
  }

 /**
 * Custom the tooltip
 * @param {object}
 * @returns {object}
 */

  function CustomTooltip({payload, active}){
    if(active && payload && payload.length){
        return (
            <div className='average-sessions-tooltip'>
                <p>{`${payload[0].value}`}min</p>
            </div>
        )
    }
}


/**
 * Animate background format when moving the cursor on the chart line
 * @param {event} e - move of the mouse
 * @returns darker background from the pointed dot
 */
function customMouseMove(e){
  let sessionWrap = document.querySelector('.section-average-sessions');

  if (e.isTooltipActive) {
    let windowWidth = sessionWrap.offsetWidth;
    let mouseXpercent = Math.floor(
      (e.activeCoordinate.x / windowWidth) * 100
    );
    
    sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercent}%, rgba(150,0,24,1) ${mouseXpercent}%)`;
  }
  else{
      sessionWrap.style.background ='#FF0000'
  }
}

/**
* Animate background format when moving the cursor out of a line dot
* @param {event} e - move of the mouse
* @returns initial background
*/
function customOnMouseOut(){
  let sessionWrap = document.querySelector('.section-average-sessions');
  sessionWrap.style.background ='#FF0000';
  sessionWrap.style.opacity = "1"
}
  

  return (
    <section className="section-average-sessions">
      <h2 className="title-average-sessions">Durée moyenne des<br /> sessions</h2>
      <ResponsiveContainer width="100%" height="90%" >
        <LineChart

          data={dataAverageSessions}
          margin={{
            top: 70,
            right: 12,
            left: 12,
            bottom: 30
          }}

          onMouseMove={(e) => customMouseMove(e)}
          onMouseOut={() => customOnMouseOut()}

        >
          <CartesianGrid horizontal={false} vertical={false} />

          <XAxis dataKey="day" 
                  axisLine={false} 
                  tickFormatter={xAxisFormatter} 
                  tickLine={false} 
                  tick={{ fontSize: 12, 
                          fontWeight: 500, 
                          stroke: '#fff', 
                          lineHeigh: 24, 
                          opacity: 0.8}} 
                  tickMargin={10} />

          <YAxis hide='true' domain={['dataMin - 5', 'dataMax']}/>
          <Tooltip content={<CustomTooltip />} cursor={false}/>
          <Line
            dataKey="sessionLength"
            type='natural' 
            stroke='#FFFFFF' 
            dot={false} 
            strokeWidth={2} 
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
