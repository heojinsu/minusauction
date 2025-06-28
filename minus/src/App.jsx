import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Minuspage from './minus/minuspage'
import { Routes, Route} from 'react-router-dom';
import Home from './home/Home'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/minus" element={<Minuspage />} />

        </Routes>
    </>
  )
}

export default App
