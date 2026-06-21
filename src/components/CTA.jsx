import { motion } from 'framer-motion'
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi'

const handleScroll = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleWhatsApp = () => {
  window.open('https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20modernizar%20minha%20conectividade%20e%20seguran%C3%A7a%20com%20a%20NexxConect.', '_blank')
}

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative container-site">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-300 text-xs font-semibold tracking-wider uppercase mb-6 border border-brand-500/20">
              Comece Agora
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Pronto para modernizar sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-accent">
                conectividade e segurança
              </span>
              ?
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Solicite uma proposta personalizada para sua empresa, condomínio ou residência. 
              Nossa equipe comercial está pronta para atender você.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleScroll('#formulario')}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-100 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-black/30"
              >
                Solicitar Proposta
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
              >
                <FiMessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
    </section>
  )
}
