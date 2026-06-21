import { motion } from 'framer-motion'
import { FiHeadphones, FiServer, FiLock, FiCpu, FiCheckCircle } from 'react-icons/fi'

const differentials = [
  {
    icon: FiHeadphones,
    title: 'Atendimento Especializado',
    description: 'Suporte técnico qualificado e personalizado com equipe dedicada para cada cliente.',
    items: ['Suporte 24/7', 'Técnicos Certificados', 'Atendimento Personalizado'],
    gradient: 'from-brand-600 to-brand-400',
  },
  {
    icon: FiServer,
    title: 'Infraestrutura Própria',
    description: 'Rede própria com fibra óptica, backbone redundante e data center próprio para máxima estabilidade.',
    items: ['Backbone Próprio', 'Data Center Tier III', 'Redundância Total'],
    gradient: 'from-emerald-600 to-emerald-400',
  },
  {
    icon: FiLock,
    title: 'Segurança de Dados',
    description: 'Proteção e criptografia avançada com conformidade com a LGPD e padrões internacionais.',
    items: ['Criptografia LGPD', 'Cloud Seguro', 'Backup Automatizado'],
    gradient: 'from-violet-600 to-violet-400',
  },
  {
    icon: FiCpu,
    title: 'Tecnologia de Ponta',
    description: 'IA, Cloud Computing, IoT e automação aplicadas para entregar soluções inteligentes e eficientes.',
    items: ['Inteligência Artificial', 'Cloud Computing', 'IoT e Automação'],
    gradient: 'from-amber-600 to-amber-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Differentials() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="relative container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-300 text-xs font-semibold tracking-wider uppercase mb-4 border border-brand-500/20">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Por Que Escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent">
              NexxConect
            </span>
            ?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Somos referência em tecnologia e inovação no mercado de telecomunicações e segurança.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentials.map((d, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:bg-white/[0.08] hover:border-brand-500/20 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${d.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <d.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{d.description}</p>

              <ul className="space-y-2">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white/40">
                    <FiCheckCircle className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
