import React from "react"
import CurrentWeather from "./components/CurrentWeather"
import DailyForecast from "./components/DailyForecast"
import WeekForecast from "./components/WeekForecast"
import ChosenDay from "./components/ChosenDay"
import ChangeLocation from "./components/ChangeLocation"
import Geocode from "react-geocode";

function App() {

  const [currentWeatherData, setCurrentWeatherData] = React.useState([])
  const [forecastData, setForecastData] = React.useState([])
  const [seeDay, setSeeDay] = React.useState()
  const [location, setLocation] = React.useState("")
  const [coords, setCoords] = React.useState({lat:"", lon:""})
  const [showError, setShowError] = React.useState(false)  

  const api = "a0749709f4e0f5c2be637ac2f4931c45"
  const unit = "metric"

  React.useEffect(() => {   
    Geocode.setApiKey("AIzaSyCnKxP5vqIbh-QCAfZR3kx26xdDGNUAgDQ");
  }, [])

  React.useEffect(() => {
    //only fetch if coords have been set
    if (coords.lat){

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api}&units=${unit}`)
      .then((response) => response.json())
      .then((data) => setCurrentWeatherData(data))

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${api}&units=${unit}`)
      .then((response) => response.json())
      .then((data) => setForecastData(data))
    }
  }, [coords])



  function getDate(date, timezone){
    const utc_seconds = parseInt(date, 10) + parseInt(timezone, 10) 
    const utc_milliseconds = utc_seconds * 1000
    const local_date = new Date(utc_milliseconds)   
    return local_date     
  }

  function getTime(date, timezone){
    const utc_seconds = parseInt(date, 10) + parseInt(timezone, 10) 
    const utc_milliseconds = utc_seconds * 1000
    const local_date = new Date(utc_milliseconds)       
    const hour = String(local_date.getHours()).padStart(2, "0")
    const min = String(local_date.getMinutes()).padStart(2, "0") 
    return hour + ":" + min
  }


  function showDay(date){
    setSeeDay(date)
    const element = document.getElementById('day');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }

  function updateLocation(event){
    setLocation(event.target.value)

  }

  function submitLocation(event){
    event.preventDefault()

    updateCoords()
    // getWeather()    
    setSeeDay("")  
    setLocation("")  
  }

  function updateCoords(){
    Geocode.fromAddress(location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCoords({lat:lat, lon:lng})
        setShowError(false)
      },
      (error) => {
        console.log(error)
        setShowError(true)
      }
    );

  }  

  return (
    <main>
      <ChangeLocation updateLocation={updateLocation} location={location} submitLocation={submitLocation} coords={coords} showError={showError} />    
      {Object.keys(currentWeatherData).length > 0 ? <CurrentWeather data={currentWeatherData} getDate={getDate} /> : null}
      {Object.keys(forecastData).length > 0 ? <DailyForecast data={forecastData} getTime={getTime}  timezone={currentWeatherData.timezone} /> : null}             
      {Object.keys(forecastData).length > 0 ? <WeekForecast data={forecastData} getDate={getDate} timezone={currentWeatherData.timezone} showDay={showDay} /> : null}     
      {seeDay ? <ChosenDay data={forecastData} day={seeDay} getDate={getDate} getTime={getTime} timezone={currentWeatherData.timezone} /> : null}
    </main>
  )
}

export default App

