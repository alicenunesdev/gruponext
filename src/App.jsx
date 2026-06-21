import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Services from './components/Services'
import AISecurity from './components/AISecurity'
import Cases from './components/Cases'
import Formulario from './components/Formulario'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }, 100)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <AISecurity />
        <About />
        <Partners />
        <Cases />
        <Formulario />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
