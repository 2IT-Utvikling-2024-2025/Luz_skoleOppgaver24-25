import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoAPP from '../ToDoAPP.jsx'

import Layout from './Layout.jsx'
import Home from './Home.jsx'
import about from './About.jsx'
import { BrowserRouter } from 'react-router-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/' element={<About/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
