import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './components/About'
import Service from './components/Service'
import Gallery from './components/Gallery'
import Client from './components/Client'
import Contact from './components/Contact'
 export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='services' element={<Service/>}/>
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='client' element={<Client/>}/>
    <Route path='contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
