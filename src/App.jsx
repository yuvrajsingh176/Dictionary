import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import './App.css'
import Body from './components/Body'
function App() {

  return (
    <div className='app'>
      <Navbar />
      <Body/>
    </div>
  )
}

export default App
