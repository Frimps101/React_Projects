import Weather from "./Weather";
import Datetime from "./Datetime";
import { useState, useEffect } from "react";

const App = ()=>{
  const API_KEY = "abfd6b9844bc94c2c4fcf3d2f3cac767"

  const [search, setSearch] = useState([])
  const [weather, setWeather] = useState(null)
  const [query, setQuery] = useState("Accra")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

  useEffect(()=>{
    getWeather()
  }, [])

  const getWeather = async () =>  {
    const response = await fetch(url)
    const data = await response.json()
    setWeather(data);
    console.log(data)
    // console.log(data.weather[0].description);
    console.log(typeof data);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Enter city name"/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      <h1>{query}</h1>

      <div className="weather">
      { weather && <Weather weather={weather}
        />}
      </div>

      <Datetime />

    </div>
  )
}
export default App;
