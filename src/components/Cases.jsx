import { motion } from 'framer-motion'
import { FiArrowRight, FiBriefcase, FiShoppingBag, FiGlobe } from 'react-icons/fi'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'

const cases = [
  {
    icon: HiOutlineBuildingOffice,
    title: 'Condomínio Residencial',
    description: 'Implementação completa de fibra óptica FTTH, portaria virtual com reconhecimento facial e 32 câmeras com IA para 500 unidades.',
    metrics: '500 unidades | 32 câmeras | 1 Gbps',
  },
  {
    icon: FiBriefcase,
    title: 'Empresa Corporativa',
    description: 'Rede corporativa com link dedicado de 10 Gbps, PABX virtual com 50 ramais, monitoramento com IA e controle de acesso biométrico.',
    metrics: '10 Gbps | 50 ramais | 24 câmeras',
  },
  {
    icon: FiShoppingBag,
    title: 'Rede de Comércios',
    description: 'Conectividade unificada para 15 filiais com SD-WAN, telefonia IP integrada e sistema de monitoramento centralizado em nuvem.',
    metrics: '15 filiais | SD-WAN | Cloud NVR',
  },
  {
    icon: FiGlobe,
    title: 'Órgão Público',
    description: 'Infraestrutura de rede para prédio público com backbone redundante, controle de acesso facial e sistema de gestão integrado.',
    metrics: 'Prédio público | Redundância | Gestão',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Cases() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Cases de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Quem Confia na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-500">
              NexxConect
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Soluções que transformam a realidade de nossos clientes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-500/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/10">
                <c.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {c.metrics.split('|').map((m, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-md bg-brand-100 text-brand-700 text-[10px] font-semibold">
                    {m.trim()}
                  </span>
                ))}
              </div>

              <button
                onClick={() => window.open('https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20solu%C3%A7%C3%B5es%20como%20o%20case%20de%20' + encodeURIComponent(c.title) + '.', '_blank')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 group-hover:text-brand-500 transition-colors"
              >
                Quero esta Solução
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
