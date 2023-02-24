function ChosenDayHours(props){

    return (
        <div className="forecast-item">
            <p className="forecast-time">{(props.getTime(props.date, props.timezone)).slice(0,3)}00</p>
            <img className="forecast-icon" src={`http://openweathermap.org/img/wn/${props.weather[0].icon}.png`} />
            <p className="forecast-weather">{props.weather[0].description}</p>
            <p className="forecast-temp">{props.temp} &deg;C</p>            
        </div>
    )

}

export default ChosenDayHours