import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  const addValue=()=>{
    if(counter==20)return
    setCounter(counter+1)


  }
  const removeValue=()=>{
    if(counter==0)return
    setCounter(counter-1)
  }
  
  return (
    <>
      <h1>Welcome back</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
