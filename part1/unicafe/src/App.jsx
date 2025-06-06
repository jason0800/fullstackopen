import { useState } from 'react'


const Header = (props) => <h2>{props.text}</h2>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)

  const handleClickGood = () => {
    console.log("clicked")
    setCountGood(countGood + 1)
  }

  const handleClickNeutral = () => {
    console.log("clicked")
    setCountNeutral(countNeutral + 1)
  }

  const handleClickBad = () => {
    console.log("clicked")
    setCountBad(countBad + 1)
  }

  return (
    <div>
      <Header text="Give Feedback" />
        <div>
          <Button onClick={handleClickGood} text="Good"/>
          <Button onClick={handleClickNeutral} text="Neutral"/>
          <Button onClick={handleClickBad} text="Bad"/>
        </div>
      <Header text="Statistics" />
      <p>Good: {countGood}</p>
      <p>Neutral: {countNeutral}</p>
      <p>Bad: {countBad}</p>
    </div>
  )
}

export default App
