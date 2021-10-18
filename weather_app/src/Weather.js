import {useState} from "react"

const Weather = ({weather}) => {

    // const getCurrentDate = () => {
    //     return new Date();
    //   };

    const [date, setDate] = useState(new Date())

    return(
        <div className="weather_data">
            {/* <h1>{weather.weather[0].description}</h1> */}
            {/* <h1>{city}</h1>
            <img src="" alt="Weather icon" />
            <p>Temperature</p>
            <p>Description</p>
            <p>Date</p> */}
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].description}</p>
            <p>{date}</p>
        </div>
    )
}

export default Weather;