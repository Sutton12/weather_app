function WeekForecastDay(props){


    const nthNumber = (number) => {
        if (number > 3 && number < 21) return "th";
        switch (number % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
    };

    const date = props.date.getDate()

    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const day = weekday[props.date.getDay()];

    

    

    return (
        <div className="forecast-item">    
            <p className="forecast-time">{day} {date}{nthNumber(date)}</p>
            <img className="forecast-icon" src={`http://openweathermap.org/img/wn/${props.weather[0].icon}.png`} />            
            <p className="forecast-weather">{props.weather[0].description}</p> 
            <p className="forecast-temp">{props.temp} &deg;C</p>  
            <p className="see-day-link" onClick={() => props.showDay(props.date)}>See Day</p>            
        </div>
    )

}

export default WeekForecastDay