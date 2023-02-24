function DailyForecastHour(props){
   
    return (
        <div className="forecast-item">
            <p className="forecast-time">{props.getTime(props.weather.dt,  props.timezone)}</p>
            <img className="forecast-icon" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`} />
            <p className="forecast-weather">{props.weather.weather[0].description}</p>
            <p className="forecast-temp">{props.weather.main.temp} &deg;C</p>            
        </div>
    )

}

export default DailyForecastHour