import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import all Components
import Navbar from './components/navbar'
import Hero from './components/hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/cards'
import Footer from './components/Footer'
import { AnimationOnScroll } from 'react-animation-on-scroll';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Analytics />
    <Newsletter />
    <Cards />
    <Footer />
  </React.StrictMode>,
)
