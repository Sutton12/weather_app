import { nanoid } from "nanoid";
import ChosenDayHours from "../components/ChosenDayHours.jsx"


function ChosenDay(props) {

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

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const monthLabel = months[props.day.getMonth()]
    const date = props.day.getDate()

  
    
    const chosenDayHours = props.data.list.map(item => {
        const itemDate = props.getDate(item.dt, props.timezone)    
        if(itemDate.getDate() === date){
            return (
                <ChosenDayHours
                    key={nanoid()}
                    weather={item.weather}
                    temp={item.main.temp}
                    date={item.dt}
                    timezone={props.timezone}
                    getDate={props.getDate}
                    getTime={props.getTime}
                />
            )
        }
    })

    return (

        <div id="day" className="card">
            <div className="week-heading card-heading">
                <h2>Forecast for: {date}{nthNumber(date)} {monthLabel}</h2>
            </div>                
        
            <div className="forecast-wrap chosen-day-forecast">
                {chosenDayHours}
            </div>
        </div>        
        
    
    )
}

export default ChosenDay