import { useState } from 'react'

// Components
const Header = (props) => <h2>{props.text}</h2>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}:</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = ({countGood, countNeutral, countBad, total}) => {
  if (total === 0) {
    return (
      <p>No Data</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={countGood}/>
        <StatisticLine text="Neutral" value={countNeutral}/>
        <StatisticLine text="Bad" value={countBad}/>
        <StatisticLine text="Total" value={total}/>
        <StatisticLine text="Positive %" value={((countGood / total)*100).toFixed(1)}/>
      </tbody>

    </table>
  )
}

function App() {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    console.log("clicked")
    setCountGood(countGood + 1)
    setTotal(total + 1)
  }

  const handleClickNeutral = () => {
    console.log("clicked")
    setCountNeutral(countNeutral + 1)
    setTotal(total + 1)
  }

  const handleClickBad = () => {
    console.log("clicked")
    setCountBad(countBad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header text="Give Feedback" />
        <div>
          <Button onClick={handleClickGood} text="Good"/>
          <Button onClick={handleClickNeutral} text="Neutral"/>
          <Button onClick={handleClickBad} text="Bad"/>
        </div>
      <Header text="Statistics"/>
      <Statistics countGood={countGood}
              countNeutral={countNeutral}
              countBad={countBad}
              total={total}
      />

    </div>
  )
}

export default App
