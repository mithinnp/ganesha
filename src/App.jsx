import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import DashBoard from './components/DashBoard'

function App() {
   
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route  element={<DashBoard/>}>
          <Route index element={<Home/>}/>
           <Route index element={<Home/>}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
