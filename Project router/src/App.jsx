import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import EditUser from './Pages/EditUser.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:userId" element={<EditUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App