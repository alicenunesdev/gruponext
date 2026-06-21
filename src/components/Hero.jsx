import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMessageCircle, FiShield, FiActivity, FiUsers, FiCamera } from 'react-icons/fi'
import NetworkBackground from './NetworkBackground'

const handleScroll = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleWhatsApp = () => {
  window.open('https://wa.me/5511999990000?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20personalizada%20da%20NexxConect.', '_blank')
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const px = (mouse.x - 0.5) * 2
  const py = (mouse.y - 0.5) * 2

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-brand-900">
      <NetworkBackground />

      <div className="absolute inset-0 opacity-[0.04]" style={{ zIndex: 1 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[150px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          zIndex: 1,
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          transform: `translate(${px * 50}px, ${py * 50}px)`,
          top: '10%',
          left: '15%',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[130px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          zIndex: 1,
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          transform: `translate(${px * -40}px, ${py * -40}px)`,
          bottom: '15%',
          right: '10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          zIndex: 1,
          background: 'radial-gradient(circle, rgba(196,181,253,0.08) 0%, transparent 70%)',
          transform: `translate(${px * 30}px, ${py * -30}px)`,
          top: '45%',
          right: '25%',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" style={{ zIndex: 2 }} />

      <div className="relative container-site py-12 lg:py-16" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Conectividade,{' '}
              <span className="text-brand-300">
                Gestão Inteligente
              </span>{' '}
              e Segurança Integrada
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-10"
            >
              Oferecemos soluções completas em internet fibra óptica, telefonia IP, 
              monitoramento inteligente com Inteligência Artificial, controle de acesso 
              biométrico e gestão condominial para residências, condomínios e empresas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll('#formulario')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent-hover transition-all duration-300 shadow-2xl shadow-accent/20 hover:shadow-accent/30"
              >
                Agendar Proposta
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/25 text-white font-semibold text-sm hover:bg-white hover:text-brand-900 transition-all duration-300"
              >
                <FiMessageCircle className="w-4 h-4" />
                Falar com Especialista
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-accent/20 rounded-3xl blur-3xl" />

              <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-3xl border border-white/[0.08] overflow-hidden">
                <div className="p-1">
                  <div className="bg-gradient-to-br from-brand-900/80 to-brand-950/80 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-white/30 text-[10px] font-mono">dashboard v3.2</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <FiActivity className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <div className="text-white text-xs font-medium">Rede</div>
                            <div className="text-white/40 text-[10px]">Fibra Óptica</div>
                          </div>
                        </div>
                        <span className="text-emerald-400 text-xs font-semibold">Online</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                            <FiCamera className="w-4 h-4 text-brand-300" />
                          </div>
                          <div>
                            <div className="text-white text-xs font-medium">Monitoramento</div>
                            <div className="text-white/40 text-[10px]">IA Ativa</div>
                          </div>
                        </div>
                        <span className="text-brand-300 text-xs font-semibold">128 câmeras</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                            <FiShield className="w-4 h-4 text-violet-400" />
                          </div>
                          <div>
                            <div className="text-white text-xs font-medium">Segurança</div>
                            <div className="text-white/40 text-[10px]">Criptografia</div>
                          </div>
                        </div>
                        <span className="text-violet-400 text-xs font-semibold">Ativo</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between text-white/30 text-[10px]">
                        <span>Uptime: 99,9%</span>
                        <span>Latência: 3ms</span>
                        <span>Pacotes: 0% perda</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-24 h-24 bg-brand-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" style={{ zIndex: 2 }} />
    </section>
  )
}
