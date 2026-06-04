import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Aditya"} person={{age:20,height:1.86}}/>
  </StrictMode>,
)
