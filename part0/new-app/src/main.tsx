import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let counter = 2

const root = createRoot(document.getElementById('root')!)

root.render(
  <App counter={counter} />
)
