import { useState } from 'react'
import './App.css'

const mockcities = {
  'New York': {
    temp: 30,
    weather: 'sunny',
    wind: '10km/h'
  },
  'London': {
    temp: 20,
    weather: 'cloudy',
    wind: '5km/h'
  },
  'Paris': {
    temp: 25,
    weather: 'rainy',
    wind: '8km/h'
  },
  'Tokyo': {
    temp: 35,
    weather: 'sunny',
    wind: '15km/h'
  },
  'Sydney': {
    temp: 40,
    weather: 'sunny',
    wind: '20km/h'
  },
}

function App() {
  const [city, setCity] = useState([])
  const [data, setData] = useState(null)

  const handleSearch = (cityName) => {
    const newData = mockcities[cityName]
    if (!city.includes(cityName)) {
      setCity([...city, cityName])
    }
    setData(newData)
  }

  const set=()=>{
    const e=document.querySelector('input')
    handleSearch(e.value)
    e.value=''
  }

  return (
    <>
      <input type="text" placeholder="Enter city name" />
      <button onClick={set}>Search</button>
      {data ? (
        <div>
          <p>Temperature: {data.temp}</p>
          <p>Weather: {data.weather}</p>
          <p>Wind: {data.wind}</p>
        </div>
      ) : (
        <p>No data</p>
      )}
      <div className="last">
      {city.map((cityName) => (
        <button key={cityName} value={cityName} onClick={() => handleSearch(cityName)}>
          {cityName}
        </button>
      ))}
      </div>
    </>
  )
}

export default App
