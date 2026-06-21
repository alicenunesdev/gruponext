import { motion } from 'framer-motion'
import { FiArrowRight, FiHeadphones, FiServer, FiLock, FiCpu, FiCheckCircle } from 'react-icons/fi'
import logo from '../img/final-nexxbrasil-contorno-1-preto-2.png'

const handleScroll = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

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

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-300/5 rounded-full blur-3xl" />

      <div className="relative container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Tecnologia que Conecta{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-500">
                Pessoas e Negócios
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Somos uma empresa especializada em telecomunicações, segurança eletrônica, 
              infraestrutura tecnológica e soluções digitais para condomínios e empresas. 
              Nosso objetivo é entregar inovação, estabilidade e segurança através de 
              tecnologias modernas e suporte especializado.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Com uma infraestrutura robusta e equipe altamente capacitada, oferecemos 
              soluções que transformam a forma como pessoas e organizações se conectam 
              ao mundo. Atuamos com padrão de excelência em cada projeto.
            </p>

            <button
              onClick={() => handleScroll('#contato')}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-700 text-white font-semibold text-sm hover:bg-brand-800 transition-all duration-300 shadow-lg shadow-brand-700/20"
            >
              Fale Conosco
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <img src={logo} alt="NexxConect" className="h-12 w-auto" />
                <div>
                  <div className="text-xl font-bold text-gray-900">NexxConect</div>
                  <div className="text-sm text-gray-500">Tecnologia e Conectividade</div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { year: '2016', text: 'Fundação da empresa com foco em conectividade' },
                  { year: '2019', text: 'Expansão para segurança eletrônica e monitoramento' },
                  { year: '2022', text: 'Lançamento da plataforma de IA para monitoramento' },
                  { year: '2024', text: 'Atingimos +1000 clientes e +500 condomínios' },
                  { year: '2026', text: 'Referência regional em telecom e segurança' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-500 border-2 border-white shadow-sm" />
                      {i < 4 && <div className="w-px h-8 bg-gray-200" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-700">{item.year}</span>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Por Que Escolher a NexxConect? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Por Que Escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              NexxConect
            </span>
            ?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
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
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${d.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <d.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{d.description}</p>

              <ul className="space-y-2">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
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
