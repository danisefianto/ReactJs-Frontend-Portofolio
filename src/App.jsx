import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArticlePage from './components/Article'
import NewsletterPage from './components/Newsletter'
import CardPage from './components/Card'
import FooterPage from './components/Footer'

function App() {
  

  return (
  <div>
    <Navbar />  
    <Hero />
    <ArticlePage />
    <NewsletterPage />
    <CardPage />
    <FooterPage />
</div>
  )
}

export default App
