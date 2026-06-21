import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../img/final-nexxbrasil-contorno-1-preto-2.png'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const handleScroll = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-black/5 border-b border-gray-200 top-0'
          : 'bg-white border-b border-gray-100 top-0 lg:top-9'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleScroll('#hero') }} className="flex items-center">
            <img src={logo} alt="NexxConect" className="h-8 lg:h-9 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleScroll(link.href); setMobileOpen(false) }}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://central.nexxconect.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg border border-brand-700 text-brand-700 text-xs font-semibold hover:bg-brand-700 hover:text-white transition-all duration-200"
            >
              Central do Assinante
            </a>
            <a
              href="https://morador.nexxconect.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-brand-700 text-white text-xs font-semibold hover:bg-brand-800 transition-all duration-200 shadow-lg shadow-brand-700/20"
            >
              Área do Morador
            </a>
          </div>

          <button
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <HiX className="w-5 h-5 text-brand-800" />
              : <HiMenu className="w-5 h-5 text-brand-800" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleScroll(link.href); setMobileOpen(false) }}
                  className="block px-4 py-2.5 text-base font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-200 my-3" />
              <a
                href="https://central.nexxconect.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-brand-700 text-brand-700 text-sm font-semibold hover:bg-brand-700 hover:text-white transition-all"
              >
                Central do Assinante
              </a>
              <a
                href="https://morador.nexxconect.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-700 text-white text-sm font-semibold hover:bg-brand-800 transition-all"
              >
                Área do Morador
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
