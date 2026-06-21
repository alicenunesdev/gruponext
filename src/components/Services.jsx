import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiWifi, FiCamera, FiPhone, FiCpu, FiShield, FiGlobe, FiDatabase, FiServer } from 'react-icons/fi'
import { MdOutlineFingerprint } from 'react-icons/md'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import GroupPopup from './GroupPopup'
import ServicePopup from './ServicePopup'

const services = [
  {
    id: 'NX-NET-01',
    icon: FiWifi,
    title: 'Rede Fibra Óptica',
    color: 'emerald',
  },
  {
    id: 'NX-SEC-02',
    icon: FiCamera,
    title: 'Monitoramento IA',
    color: 'brand',
  },
  {
    id: 'NX-ACC-03',
    icon: MdOutlineFingerprint,
    title: 'Controle de Acesso',
    color: 'blue',
  },
  {
    id: 'NX-SFT-04',
    icon: HiOutlineBuildingOffice,
    title: 'Gestão Condominial',
    color: 'sky',
  },
  {
    id: 'NX-VOI-05',
    icon: FiPhone,
    title: 'Telefonia IP',
    color: 'orange',
  },
]

const cardConfig = {
  emerald: {
    gradient: 'from-emerald-500 to-emerald-400',
    border: 'border-emerald-200/40 group-hover:border-emerald-300/60',
    glow: 'shadow-emerald-500/15 group-hover:shadow-emerald-500/30',
    bgGrid: 'before:bg-emerald-500/5',
    dot: 'bg-emerald-400',
    line: 'bg-emerald-200/30',
  },
  brand: {
    gradient: 'from-brand-600 to-brand-400',
    border: 'border-brand-200/40 group-hover:border-brand-300/60',
    glow: 'shadow-brand-500/15 group-hover:shadow-brand-500/30',
    bgGrid: 'before:bg-brand-500/5',
    dot: 'bg-brand-400',
    line: 'bg-brand-200/30',
  },
  blue: {
    gradient: 'from-blue-600 to-blue-400',
    border: 'border-blue-200/40 group-hover:border-blue-300/60',
    glow: 'shadow-blue-500/15 group-hover:shadow-blue-500/30',
    bgGrid: 'before:bg-blue-500/5',
    dot: 'bg-blue-400',
    line: 'bg-blue-200/30',
  },
  sky: {
    gradient: 'from-sky-500 to-sky-400',
    border: 'border-sky-200/40 group-hover:border-sky-300/60',
    glow: 'shadow-sky-500/15 group-hover:shadow-sky-500/30',
    bgGrid: 'before:bg-sky-500/5',
    dot: 'bg-sky-400',
    line: 'bg-sky-200/30',
  },
  orange: {
    gradient: 'from-orange-500 to-orange-400',
    border: 'border-orange-200/40 group-hover:border-orange-300/60',
    glow: 'shadow-orange-500/15 group-hover:shadow-orange-500/30',
    bgGrid: 'before:bg-orange-500/5',
    dot: 'bg-orange-400',
    line: 'bg-orange-200/30',
  },
}



export default function Services() {
  const [groupOpen, setGroupOpen] = useState(false)
  const [servicePopupId, setServicePopupId] = useState(null)

  return (
    <section id="servicos" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-50/30 rounded-full blur-[100px] sm:blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-50/20 rounded-full blur-[80px] sm:blur-[100px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-brand-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8 sm:gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
              </span>
              <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-brand-600">Active Monitoring Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-none">
              Status em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Tempo Real</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-3 px-4 py-2.5 bg-gray-50 rounded-2xl border border-gray-100">
             <FiCpu className="text-brand-500 w-4 h-4" />
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">NOC Core Active</span>
          </div>
        </div>

        {/* Service Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
            {services.map((s, i) => {
              const cfg = cardConfig[s.color]
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setServicePopupId(s.id)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative flex flex-col items-center gap-4 sm:gap-5 p-6 sm:p-7 lg:p-8 rounded-[1.75rem] border ${cfg.border} bg-white/90 backdrop-blur-sm ${cfg.glow} hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
                >
                  {/* Grid Background */}
                  <div className={`absolute inset-0 opacity-[0.03] pointer-events-none`}
                       style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(180deg, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px', color: 'rgba(0,0,0,0.06)' }} />

                  {/* Corner accents */}
                  <div className={`absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 ${cfg.dot} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  <div className={`absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 ${cfg.dot} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                  {/* Top scanning line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-[2px] ${cfg.dot} rounded-full opacity-0 group-hover:opacity-100`}
                    initial={false}
                    animate={false}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${cfg.gradient} rounded-full`}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    />
                  </motion.div>

                  {/* Bottom scan pulse */}
                  <motion.div
                    className={`absolute bottom-0 left-1/3 right-1/3 h-[1px] ${cfg.line} rounded-full`}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: i * 0.4 }}
                  />

                  {/* Icon */}
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                    <s.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${cfg.dot}`} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 text-center leading-tight group-hover:text-gray-900 transition-colors">
                    {s.title}
                  </span>

                  {/* Shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-[1.75rem] pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Grupo */}
        <div className="mt-14 sm:mt-20 flex flex-col items-center gap-4">
          <button
            onClick={() => setGroupOpen(true)}
            className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm sm:text-base font-bold hover:from-brand-700 hover:to-brand-600 transition-all duration-300 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
            <HiOutlineBuildingOffice className="w-5 h-5 sm:w-6 sm:h-6" />
            Conheça Nosso Grupo
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white/15 text-[10px] font-black uppercase tracking-wider">
              2 empresas
            </span>
          </button>
          <p className="text-[11px] sm:text-xs text-gray-400 font-medium">
            Netware • Netmaxxi — duas empresas, um compromisso com sua empresa
          </p>
        </div>

        <GroupPopup open={groupOpen} onClose={() => setGroupOpen(false)} />
        <ServicePopup serviceId={servicePopupId} open={!!servicePopupId} onClose={() => setServicePopupId(null)} />

        {/* Badges */}
        <div className="mt-14 sm:mt-20 flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-4 sm:gap-y-6 border-t border-gray-50 pt-8 sm:pt-10">
           <div className="flex items-center gap-2 sm:gap-3">
              <FiShield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">Criptografia Ponta a Ponta</span>
           </div>
           <div className="flex items-center gap-2 sm:gap-3">
              <FiGlobe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">Infraestrutura Global</span>
           </div>
           <div className="flex items-center gap-2 sm:gap-3">
              <FiDatabase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">Dados Seguros na Nuvem</span>
           </div>
           <div className="flex items-center gap-2 sm:gap-3">
              <FiServer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">Data Center Tier III</span>
           </div>
        </div>
      </div>
    </section>
  )
}
