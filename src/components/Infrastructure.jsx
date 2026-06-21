import { motion } from 'framer-motion'
import { FiServer, FiGlobe, FiHardDrive, FiCpu, FiUsers, FiShield } from 'react-icons/fi'

const items = [
  {
    icon: FiServer,
    title: 'Rede Própria',
    description: 'Backbone de fibra óptica próprio com mais de 500km de extensão cobrindo toda a região metropolitana.',
  },
  {
    icon: FiGlobe,
    title: 'Backbone Redundante',
    description: 'Múltiplos pontos de presença (POPs) com links redundantes para garantir 99,9% de disponibilidade.',
  },
  {
    icon: FiHardDrive,
    title: 'Data Center Próprio',
    description: 'Infraestrutura tier III com nobreaks, geradores e climatização de precisão para máxima confiabilidade.',
  },
  {
    icon: FiCpu,
    title: 'Cloud Infrastructure',
    description: 'Plataforma em nuvem com servidores dedicados, storage distribuído e backups automatizados.',
  },
  {
    icon: FiUsers,
    title: 'Equipe Técnica Certificada',
    description: 'Profissionais com certificações Cisco, Mikrotik, Intelbras e Huawei para suporte especializado.',
  },
  {
    icon: FiShield,
    title: 'NOC 24/7',
    description: 'Centro de Operações de Rede monitorando todos os serviços continuamente com equipe dedicada.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Infrastructure() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative container-site" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-bold tracking-widest uppercase mb-4 border border-white/10 backdrop-blur-sm">
            <FiServer className="w-3.5 h-3.5" />
            Engenharia de Rede
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">
            Tecnologia e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              Infraestrutura Própria
            </span>
          </h2>
          <p className="text-lg text-brand-100/60 max-w-2xl mx-auto font-medium">
            Domínio completo da tecnologia para garantir estabilidade absoluta e performance de última geração.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white/[0.03] rounded-[2rem] p-9 border border-white/5 hover:bg-white/[0.06] hover:border-brand-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden"
            >
              {/* Card Accent Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-brand-500/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-100/50 text-sm leading-relaxed font-medium group-hover:text-brand-100/80 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tech Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-500 to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
