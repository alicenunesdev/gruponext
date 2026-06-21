import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const plans = [
  {
    category: 'Internet Residencial',
    items: [
      { name: '400 Mega', price: 'R$ 89,90', speed: '400 Mbps', features: ['Wi-Fi Mesh', 'Instalação Grátis', 'Suporte 24h'] },
      { name: '600 Mega', price: 'R$ 119,90', speed: '600 Mbps', features: ['Wi-Fi 6 Mesh', 'Instalação Grátis', 'Suporte 24h', 'Primeiro Mês Grátis'], highlight: true },
      { name: '1 Giga', price: 'R$ 199,90', speed: '1 Gbps', features: ['Wi-Fi 6 Mesh', 'Instalação Grátis', 'Suporte 24h', 'Primeiro Mês Grátis', 'IP Fixo'] },
    ],
  },
  {
    category: 'Internet Empresarial',
    items: [
      { name: 'Link Dedicado', price: 'Sob Consulta', speed: 'Até 10 Gbps', features: ['SLA 99,9%', 'IP Fixo', 'Prioridade de Tráfego', 'Suporte Prioritário'] },
      { name: 'SD-WAN', price: 'Sob Consulta', speed: 'Multilink', features: ['Gerenciamento Centralizado', 'Redundância Automática', 'Relatórios', 'SLA 99,99%'], highlight: true },
    ],
  },
  {
    category: 'Telefonia Corporativa',
    items: [
      { name: 'PABX Virtual', price: 'R$ 49,90', speed: 'Até 10 ramais', features: ['URA Inteligente', 'Gravação', 'Ramais Virtuais', 'App Mobile'] },
      { name: 'PABX Completo', price: 'R$ 129,90', speed: 'Ramais ilimitados', features: ['URA Avançada', 'Filas de Atendimento', 'Relatórios', 'Integração CRM'], highlight: true },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const handleScroll = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleWhatsApp = (planName) => {
  window.open(`https://wa.me/5511999990000?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(planName)}%20da%20NexxConect.`, '_blank')
}

export default function Plans() {
  return (
    <section id="planos" className="section-padding bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Nossos Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Escolha o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-500">
              Plano Ideal
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Soluções sob medida para sua necessidade, do residencial ao corporativo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((group, idx) => (
            <motion.div key={idx} variants={cardVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-brand-700 to-brand-500" />
                <h3 className="text-xl font-bold text-gray-900">{group.category}</h3>
              </div>

              {group.items.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl group ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-brand-900 to-brand-800 border-brand-700 text-white shadow-lg shadow-brand-700/10'
                      : 'bg-white border-gray-200 hover:border-brand-200'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold tracking-wider shadow-lg shadow-amber-500/20">
                      MAIS POPULAR
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-lg font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h4>
                    {plan.price !== 'Sob Consulta' ? (
                      <FiCheck className={`w-5 h-5 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    ) : null}
                  </div>

                  <div className="mb-3">
                    <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                  </div>

                  <div className={`text-sm font-medium ${plan.highlight ? 'text-brand-300' : 'text-brand-600'} mb-5`}>
                    {plan.speed}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-600'}`}>
                        <FiCheck className={`w-3.5 h-3.5 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-500'} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      if (plan.price === 'Sob Consulta') {
                        handleWhatsApp(plan.name)
                      } else {
                        handleWhatsApp(`${plan.name} - ${plan.price}`)
                      }
                    }}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-white text-brand-900 hover:bg-gray-100'
                        : 'bg-brand-700 text-white hover:bg-brand-800 shadow-lg shadow-brand-700/20'
                    }`}
                  >
                    {plan.price === 'Sob Consulta' ? 'Solicitar Orçamento' : 'Contratar'}
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
