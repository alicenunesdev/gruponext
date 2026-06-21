import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX, FiCloud, FiMonitor, FiWifi } from 'react-icons/fi'
import logoNetware from '../img/logos/netware.png'
import logoNetmaxxi from '../img/logos/netmaxxi.png'

const netware = {
  name: 'Netware',
  tagline: '20+ anos de experiência em TIC',
  url: 'https://netwarebrasil.com.br',
  description: 'Somos a Netware, uma empresa com mais de 20 anos de experiência e expertise no fornecimento de soluções de tecnologia, destacando-nos no dinâmico campo da Tecnologia da Informação e Comunicação (TIC). Desde nossa fundação, buscamos incessantemente a excelência, desenvolvendo soluções inovadoras que impulsionam o progresso digital em empresas de todos os portes.',
  highlights: [
    'Atuação em todo território nacional',
    'Sede em Campo Grande (MS) com filiais em Campinas (SP) e Niterói (RJ)',
    'Data Center moderno para soluções em nuvem',
    'Equipe técnica especializada em engenharia de comunicação',
  ],
}

const netmaxxi = {
  name: 'Netmaxxi',
  tagline: 'Soluções em Nuvem, Monitoramento e Redes',
  url: 'https://netmaxxibrasil.com.br',
  description: 'A NETMAXXI, a partir do seu moderno Data Center e com toda segurança, oferece ao mercado soluções de comunicação em nuvem (PABX em Nuvem), oferecendo mobilidade, velocidade, qualidade e segurança nas comunicações.',
  services: [
    {
      icon: FiCloud,
      title: 'PABX em Nuvem',
      items: ['Redução de custos fixos', 'Baixo investimento', 'Mobilidade total', 'URA e gravação'],
    },
    {
      icon: FiMonitor,
      title: 'Vídeo Monitoramento',
      items: ['Projetos personalizados', 'Câmeras IP internas/externas', 'Acesso remoto pelo smartphone/PC', 'Storage e NVRs'],
    },
    {
      icon: FiWifi,
      title: 'Redes Wireless',
      items: ['Área de cobertura eficiente', 'Controle de banda e conteúdo', 'Rede empresarial e visitante', 'Portal de acesso exclusivo'],
    },
  ],
}

export default function GroupPopup({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-white rounded-t-[2rem]">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">Nosso Grupo</h2>
                <p className="text-[11px] sm:text-xs text-gray-400 font-medium">Conheça nossas empresas e soluções</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FiX className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Netware Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="group relative bg-gradient-to-br from-brand-50/50 to-white rounded-2xl border border-brand-100 p-5 sm:p-6 lg:p-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-4 mb-5">
                  <img src={logoNetware} alt="Netware" className="h-10 sm:h-12 w-auto" />
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900">{netware.name}</h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-brand-500 uppercase tracking-wider">{netware.tagline}</p>
                  </div>
                </div>

                <p className="text-[12px] sm:text-[13px] text-gray-600 leading-relaxed mb-5">{netware.description}</p>

                <ul className="space-y-2 mb-6">
                  {netware.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-gray-500">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={netware.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs sm:text-[13px] font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  Acessar Site
                </a>
              </motion.div>

              {/* Netmaxxi Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-gradient-to-br from-orange-50/40 to-white rounded-2xl border border-orange-100 p-5 sm:p-6 lg:p-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-4 mb-5">
                  <img src={logoNetmaxxi} alt="Netmaxxi" className="h-10 sm:h-12 w-auto" />
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900">{netmaxxi.name}</h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-orange-500 uppercase tracking-wider">{netmaxxi.tagline}</p>
                  </div>
                </div>

                <p className="text-[12px] sm:text-[13px] text-gray-600 leading-relaxed mb-6">{netmaxxi.description}</p>

                <div className="space-y-3 mb-6">
                  {netmaxxi.services.map((svc, i) => (
                    <div key={i} className="bg-white/80 rounded-xl border border-orange-100/60 p-3.5 sm:p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svc.icon className="w-4 h-4 text-orange-500" />
                        <h4 className="text-[12px] sm:text-[13px] font-bold text-gray-800">{svc.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.items.map((item, j) => (
                          <span key={j} className="text-[9px] sm:text-[10px] font-medium text-gray-500 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100/50">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={netmaxxi.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 text-white text-xs sm:text-[13px] font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  Acessar Site
                </a>
              </motion.div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-[2rem]">
              <p className="text-[10px] sm:text-[11px] text-gray-400 text-center font-medium">
                Modernize sua empresa com as soluções do nosso grupo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
