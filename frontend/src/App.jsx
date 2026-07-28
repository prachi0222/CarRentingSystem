import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Contactpage from './pages/Contactpage'
import GalleryPage from './pages/GalleryPage'
import ServicePage from './pages/ServicePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import TestimonialsPage from './pages/TestimonialsPage'
 export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/services' element={<ServicePage/>}/>
    <Route path='/features' element={<GalleryPage/>}/>
    <Route path='/testimonials' element={<TestimonialsPage/>}/>
    <Route path='/contact' element={<Contactpage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
   </Routes>  
   <Footer/>
   </BrowserRouter>
  )
}