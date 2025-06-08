import { useState } from 'react'
import ayumi from './assets/ayumi.png'
import jason from './assets/jason.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://en.wikipedia.org/wiki/Bob_the_Builder" target="_blank">
          <img src={jason} className="logo" alt="jason" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Frisbee" target="_blank">
          <img src={ayumi} className="logo react" alt="ayumi" />
        </a>
      </div>
      <h1>Jason + Ayumi</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 99)}>
          Ayumi's age is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
