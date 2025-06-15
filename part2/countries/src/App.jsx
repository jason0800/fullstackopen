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
    </>
  )
}

export default App
