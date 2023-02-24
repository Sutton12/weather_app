function CurrentWeather(props){

    const date = props.getDate(props.data.dt, props.data.timezone)
    const hour = String(date.getHours()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")  
   

    return (
        <div className="card current">
            <div className="current-heading card-heading">
                <h2>{props.data.name}, {props.data.sys.country} as of {hour}:{min}</h2>
            </div>
            <p></p>
            <div className="current-cols">
                <div className="current-left">
                    <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} />
                </div>         
                <div className="current-right">
                    <p className="current-weather-desc">{props.data.weather[0].description}</p>
                    <div className="current-temps">
                        <p className="current-temp">{props.data.main.temp} &deg;C</p>
                        <div className="current-temps-min-max">
                            <p>Min: {props.data.main.temp_min}  &deg;C</p>
                            <p>Max: {props.data.main.temp_max} &deg;C</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default CurrentWeather
