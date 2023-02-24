import { nanoid } from "nanoid"
import WeekForecastDay from "../components/WeekForecastDay"

function WeekForecast(props){

    const timeDiff = Math.floor((props.timezone / 60) / 60)

    const weekWeather = props.data.list.map(item => {
            const date = props.getDate(item.dt, props.timezone)
            if (date.getHours() === (12 + timeDiff)){
                return (
                    <WeekForecastDay
                        key={nanoid()}
                        date={date}
                        weather={item.weather}
                        temp={item.main.temp}
                        showDay={props.showDay}
                    />
                )

            }
    })

    return (
        <div className="card">
            <div className="week-heading card-heading">
                <h2>5 Day Forecast</h2>
            </div>                
                
            <div className="forecast-wrap">
                {weekWeather}
            </div>
        </div>
    )

}

export default WeekForecast