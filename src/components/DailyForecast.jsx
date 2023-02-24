import React from "react"
import DailyForecastHour from "./DailyForecastHour"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { nanoid } from "nanoid"


function DailyForecast(props){

    const [timePeriod, setTimePeriod] = React.useState({start: 0, end: 5})

    const dayForecast = []
    for(var x = timePeriod.start; x < timePeriod.end; x++){
        dayForecast.push(props.data.list[x])
    }
    const hourlyWeather = dayForecast.map(hour => {
        return (
            <DailyForecastHour
                weather={hour}
                getTime={props.getTime}
                timezone={props.timezone}
                key={nanoid()}
            
            />)
        })

    function later_forecast(){
        const newStart = timePeriod.start + 1
        const newEnd = timePeriod.end + 1
        const newPeriod = {start: newStart, end: newEnd}
        setTimePeriod(newPeriod)
    }

    function later_forecast(){
        setTimePeriod(prevPeriod => {
            return {
                start: prevPeriod.start + 1,
                end: prevPeriod.end + 1
            }
        })
    }
    function earlier_forecast(){
        setTimePeriod(prevPeriod => {
            return {
                start: prevPeriod.start -1,
                end: prevPeriod.end - 1
            }
        })
    }    

    const style = {
        cursor: "default",
        opacity: .5

    }


    return (
        <div className="card">
            <div className="hourly-heading card-heading">
                <h2>Hourly Forecast</h2>
                <div className="hour-controls">
                    <button
                        onClick={timePeriod.start > 0 ? earlier_forecast : null}
                        style={timePeriod.start > 0 ? null : style}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Earlier
                    </button>
                    <button 
                        onClick={timePeriod.end < 10 ? later_forecast : null}
                        style={timePeriod.end < 10 ? null : style}
                    >
                        Later
                        <FontAwesomeIcon icon={faChevronRight} />                        
                    </button>
                </div>
            </div>
            <div className="forecast-wrap">
                {hourlyWeather}
            </div>
        </div>  
    )

}

export default DailyForecast