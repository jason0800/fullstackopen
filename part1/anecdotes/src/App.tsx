import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>New Anecdote</button>

const App = () => {
  const [selected, setSelected] = useState(0)

  const handleCLick = () => {
    console.log("The selected value is:", selected)
    selected === (anecdotes.length - 1) ?
    setSelected(0) :
    setSelected(selected + 1)
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <Button onClick={handleCLick}></Button>
      </div>
    </div>
  )
}

export default App
