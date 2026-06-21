import { motion } from 'framer-motion'
import { FiCamera, FiUsers, FiTruck, FiSmartphone, FiBell, FiBarChart2, FiArrowRight } from 'react-icons/fi'
import { BsRobot } from 'react-icons/bs'

const aiFeatures = [
  {
    icon: FiCamera,
    title: 'Reconhecimento Facial',
    description: 'Identificação precisa de pessoas cadastradas e desconhecidas com alertas em tempo real.',
  },
  {
    icon: FiUsers,
    title: 'Detecção de Pessoas',
    description: 'IA treinada para diferenciar seres humanos de outros objetos ou animais.',
  },
  {
    icon: FiTruck,
    title: 'Detecção de Veículos',
    description: 'Identificação de placas, modelos e cores de veículos em tempo real.',
  },
  {
    icon: BsRobot,
    title: 'Diferenciação de Animais',
    description: 'Redução drástica de alarmes falsos com reconhecimento inteligente de animais.',
  },
  {
    icon: FiBell,
    title: 'Alertas Inteligentes',
    description: 'Notificações push com classificação do evento por prioridade e tipo.',
  },
  {
    icon: FiBarChart2,
    title: 'Analytics em Tempo Real',
    description: 'Dashboard com métricas de segurança, fluxo de pessoas e relatórios automáticos.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AISecurity() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-brand-950 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-emerald-500/20">
            <BsRobot className="w-3.5 h-3.5" />
            Nova Geração
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Inteligência Artificial{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Aplicada à Segurança
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Nossa plataforma de monitoramento utiliza IA para analisar eventos em tempo real, 
            reduzindo alarmes falsos e aumentando a eficiência operacional.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {aiFeatures.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:bg-white/[0.06] hover:border-emerald-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/10">
                <f.icon className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="relative text-white font-bold text-base mb-2">{f.title}</h3>
              <p className="relative text-white/40 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => window.open('https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20monitoramento%20com%20IA%20da%20NexxConect.', '_blank')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl shadow-emerald-500/20"
          >
            Agendar Demonstração
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
