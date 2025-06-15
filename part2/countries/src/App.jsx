import { useState } from 'react'
import './App.css'

function App() {
  const [countryValue, setCountryValue] = useState("")

  const handleSearchChange = (event) => {
    setCountryValue(event.target.value)
  }

  const handleFindCountry = (event) => {
    event.preventDefault()
    console.log("Find country to be handled.");
  }

  return (
    <>
      <h2>Country Finder</h2>
      <form onSubmit={handleFindCountry}>
        <input className="search-bar" value={countryValue} onChange={handleSearchChange} />
      </form>
    </>
  )
}

export default App
