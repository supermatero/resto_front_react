import { useState } from 'react'
import './App.css'
import { Button, Container, Typography } from '@mui/material'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'
import NotFound from './pages/PageNotFound'
function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/about" element={<About />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>       
    </div>
  )
}

export default App
