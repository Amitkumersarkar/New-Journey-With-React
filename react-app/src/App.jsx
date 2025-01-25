import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <person></person>
      <person></person>
      <person></person>
      <person></person>

    </>
  )
}
function Person() {
  const age = 25;
  return <h3>I am a person with the age : {age}</h3>
}

export default App
