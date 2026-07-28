import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

import Service from './components/Service'
import AboutPage from './pages/AboutPage'
import TestimonialsPage from './pages/TestimonialsPage'
import GalleryPage from './pages/GalleryPage'
import Contactpage from './pages/Contactpage'


import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
 export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>

    <Route path='' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/gallery' element={<GalleryPage/>}/>
    <Route path='/testimonials' element={<TestimonialsPage/>}/>
    <Route path='/contact' element={<Contactpage/>}/>

   
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
