import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Content from './components/Content'
import Error from './components/Error'


function App() {
  const [countryValue, setCountryValue] = useState("")
  const [returnedCountry, setReturnedCountry] = useState("")
  const [languages, setLanguages] = useState({})
  const [flagUrl, setFlagUrl] = useState(null)
  const [error, setError] = useState(null)
  const [capitalCoord, setCapitalCoord] = useState([])
  const [weather, setWeather] = useState("")
  const api_key = import.meta.env.VITE_KEY

  useEffect(() => {
    console.log("effect");
    if (capitalCoord.length !== 0) {
      axios
        .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${capitalCoord[0]}&lon=${capitalCoord[1]}&appid=${api_key}`)
        .then(response => {
          console.log(response.data.current.weather[0].main)
          setWeather(response.data.current.weather[0].main)
        })
        .catch(response => console.log(response))
    }
  }, [capitalCoord])

  const handleSearchChange = (event) => {
    setCountryValue(event.target.value)
  }

  const handleFindCountry = (event) => {
    event.preventDefault()
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryValue}`)
      .then(response => {
        setReturnedCountry(response.data.name.common)
        setLanguages(response.data.languages)
        setFlagUrl(response.data.flags.png)
        setError(null)
        setCapitalCoord(response.data.capitalInfo.latlng)
      })
      .catch(response => {
        console.log(response)
        setError("Country not found!")
      })
  }

  return (
    <>
      <Error error={error}/>
      <h2>Country Finder</h2>
      <form onSubmit={handleFindCountry}>
        <input className="search-bar" value={countryValue} onChange={handleSearchChange} />
      </form>
      <h2>{returnedCountry}</h2>
      <Content languages={languages} flagUrl={flagUrl} />
      <p>{weather}</p>
    </>
  )
}

export default App
