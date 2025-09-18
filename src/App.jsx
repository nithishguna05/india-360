import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import StatePage from './pages/StatePage'
import Tours from './pages/Tours'
import PackagePage from './pages/PackagePage'
import BookNow from './pages/BookNow'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/signup'
import ScrollToTopButton from './components/ScrollToTopButton'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/state/:slug" element={<StatePage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/package/:id" element={<PackagePage />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
