import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './Component/ToggleButton/ToggleButton'
import Counter from './Component/Counter/Counter'
import ColorChanger from './Component/ColorChanger/ColorChanger'

function App() {
  

  return (
    <>
     <ToggleButton/>
     <Counter/>
     <ColorChanger/>
    </>
  )
}

export default App
