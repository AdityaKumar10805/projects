import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(props) {
  

  return (
    <>
    <h1>Name:{props.name}</h1>
    <h2>Age:{props.person.age}</h2>
    <h2>Height:{props.person.height}</h2>
    </>
    
  )
}

export default App
