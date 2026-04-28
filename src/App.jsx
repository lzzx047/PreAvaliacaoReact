import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Atividade1 from './pages/atividade1'
import Home from './pages/home'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/'  element={<Home/>} />
<Route path='/Atividade1'   element={<Atividade1 />}  />




    </Routes>


    </>
  )
}

export default App
