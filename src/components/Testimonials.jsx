import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar, FiUsers } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Síndico Profissional',
    company: 'Residencial Park Avenue',
    text: 'A migração para a NexxConect transformou a experiência dos moradores. Internet estável, portaria virtual eficiente e o suporte é excepcional.',
    rating: 5,
  },
  {
    name: 'Ana Beatriz Oliveira',
    role: 'Diretora de TI',
    company: 'Grupo Omega Empresarial',
    text: 'Precisávamos de uma solução corporativa robusta e encontramos na NexxConect. O link dedicado com SLA de 99,9% e o PABX virtual atenderam todas as necessidades.',
    rating: 5,
  },
  {
    name: 'Ricardo Almeida',
    role: 'Proprietário',
    company: 'Rede Mix de Supermercados',
    text: 'Monitoramento com IA reduziu drasticamente as perdas. O sistema de reconhecimento facial e a detecção de veículos nos deu um nível de segurança que nunca tivemos.',
    rating: 5,
  },
  {
    name: 'Dra. Juliana Costa',
    role: 'Administradora',
    company: 'Condomínio Edifício Corporate',
    text: 'O aplicativo de gestão condominial revolucionou a comunicação com os moradores. Reservas online, assembleias virtuais e controle de visitantes tudo integrado.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const t = testimonials[current]

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-brand-950 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-300 text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
            <FiUsers className="w-3.5 h-3.5" />
            Clientes Satisfeitos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            O Que Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent">
              Clientes
            </span>{' '}
            Dizem
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">Depoimentos reais de quem confia na NexxConect</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-brand-500/10 via-accent/10 to-brand-500/10 rounded-3xl blur-xl" />

              <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-3xl border border-white/[0.06] p-8 sm:p-10 min-h-[240px]">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-brand-500 via-accent to-brand-300" />

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="text-center"
                  >
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <blockquote className="text-base sm:text-lg text-white/70 leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>

                    <div className="w-10 h-[1px] bg-gradient-to-r from-brand-400 to-transparent mx-auto mb-4" />

                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-white/40">{t.role}</div>
                    <div className="text-xs text-brand-300 font-semibold mt-0.5">{t.company}</div>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <FiChevronLeft className="w-4 h-4 text-white/60" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <FiChevronRight className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-brand-500' : 'w-2 bg-white/20 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
