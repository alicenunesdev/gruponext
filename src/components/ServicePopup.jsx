import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiWifi, FiCamera, FiPhone, FiCheckCircle } from 'react-icons/fi'
import { MdOutlineFingerprint } from 'react-icons/md'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'

const serviceDetailMap = {
  'NX-NET-01': {
    title: 'Rede Fibra Óptica',
    tagline: 'Conectividade de alta performance para sua empresa',
    icon: FiWifi,
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-400',
    bgLight: 'bg-emerald-50/50',
    border: 'border-emerald-100',
    tagColor: 'text-emerald-600',
    tagBg: 'bg-emerald-50',
    description: 'Link dedicado com redundância geográfica e monitoramento proativo de rotas. Nossa infraestrutura de fibra óptica oferece a mais alta performance com backbone de 100G, garantindo latência ultrabaixa de 2ms e disponibilidade de 99,9%. Ideal para empresas que dependem de conectividade crítica para suas operações.',
    details: [
      'Backbone de 100G com redundância geográfica garantindo alta disponibilidade',
      'Monitoramento proativo de rotas com correção automática de falhas',
      'IP Fixo dedicado com proteção contra ataques DDoS',
      'Wi-Fi 6 empresarial com gerenciamento centralizado',
      'Suporte técnico 24 horas com SLA de atendimento',
    ],
    benefits: ['+99,9% Uptime', '2ms Latência', '100G Backbone', 'SLA 24h'],
  },
  'NX-SEC-02': {
    title: 'Monitoramento IA',
    tagline: 'Inteligência Artificial aplicada à segurança',
    icon: FiCamera,
    color: 'brand',
    gradient: 'from-brand-600 to-brand-400',
    bgLight: 'bg-brand-50/50',
    border: 'border-brand-100',
    tagColor: 'text-brand-600',
    tagBg: 'bg-brand-50',
    description: 'Sistema avançado de monitoramento com Inteligência Artificial para reconhecimento facial, leitura de placas veiculares (LPR) e detecção inteligente de intrusão. Processamento em tempo real a 60fps com análise deep learning para máxima precisão.',
    details: [
      'Reconhecimento facial com acurácia de 99,9%',
      'Leitura inteligente de placas veiculares (LPR Pro)',
      'Detecção de intrusão com alertas em tempo real',
      'Armazenamento em Cloud VMS com acesso remoto',
      'Diferenciação inteligente entre pessoas, veículos e animais',
    ],
    benefits: ['60fps Real-time', 'Face ID', 'LPR Pro', 'Cloud VMS'],
  },
  'NX-ACC-03': {
    title: 'Controle de Acesso',
    tagline: 'Gestão inteligente de entradas e saídas',
    icon: MdOutlineFingerprint,
    color: 'blue',
    gradient: 'from-blue-600 to-blue-400',
    bgLight: 'bg-blue-50/50',
    border: 'border-blue-100',
    tagColor: 'text-blue-600',
    tagBg: 'bg-blue-50',
    description: 'Solução completa de controle de acesso biométrico e facial integrada à portaria virtual e física. Reconhecimento em menos de 0,3 segundos com 99,9% de precisão e logs sincronizados em nuvem para gestão multi-site.',
    details: [
      'Biometria digital com match ultrarrápido < 0,3s',
      'Reconhecimento facial com anti-spoofing',
      'QR Code dinâmico para visitantes e entregadores',
      'Gestão unificada multi-site com logs em nuvem',
      'Integração com portaria virtual e sistemas terceiros',
    ],
    benefits: ['< 0,3s Match', '99,9% Precisão', 'Cloud Logs', 'Anti-spoofing'],
  },
  'NX-SFT-04': {
    title: 'Gestão Condominial',
    tagline: 'Software completo para administração de condomínios',
    icon: HiOutlineBuildingOffice,
    color: 'sky',
    gradient: 'from-sky-500 to-sky-400',
    bgLight: 'bg-sky-50/50',
    border: 'border-sky-100',
    tagColor: 'text-sky-600',
    tagBg: 'bg-sky-50',
    description: 'Plataforma integrada de gestão condominial com aplicativo exclusivo para moradores, módulo financeiro completo, sistema de assembleias digitais e reserva de áreas comuns. Sincronização global com latência de apenas 15ms.',
    details: [
      'App exclusivo para moradores com comunicados e chamados',
      'Módulo financeiro com boletos, inadimplência e fluxo de caixa',
      'Assembleias digitais com votação online e ata automatizada',
      'Reserva de áreas comuns com calendário integrado',
      'Portaria virtual com reconhecimento facial e QR Code',
    ],
    benefits: ['App Morador', 'Financeiro', 'Assembleia Online', 'Reservas'],
  },
  'NX-VOI-05': {
    title: 'Telefonia IP',
    tagline: 'PABX Virtual completo na nuvem',
    icon: FiPhone,
    color: 'orange',
    gradient: 'from-orange-500 to-orange-400',
    bgLight: 'bg-orange-50/50',
    border: 'border-orange-100',
    tagColor: 'text-orange-600',
    tagBg: 'bg-orange-50',
    description: 'PABX Virtual robusto com URA inteligente, gravação de chamadas e ramais no celular. Canais ilimitados com codec G.722 para voz HD, alcançando MOS 4.4/5. Redução de custos fixos com contratação por demanda.',
    details: [
      'PABX em nuvem com canais ilimitados e escalabilidade total',
      'URA inteligente com menu interativo personalizável',
      'Gravação de chamadas com armazenamento em nuvem',
      'Softphone para celular e computador com ramais móveis',
      'Redução de custos fixos com modelo de contratação flexível',
    ],
    benefits: ['Canais Ilimitados', 'Voz HD G.722', 'MOS 4.4/5', 'URA Pro'],
  },
}

const colorMap = {
  emerald: { border: 'border-emerald-100', bg: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-200' },
  brand: { border: 'border-brand-100', bg: 'bg-brand-50', text: 'text-brand-600', ring: 'ring-brand-200' },
  blue: { border: 'border-blue-100', bg: 'bg-blue-50', text: 'text-blue-600', ring: 'ring-blue-200' },
  sky: { border: 'border-sky-100', bg: 'bg-sky-50', text: 'text-sky-600', ring: 'ring-sky-200' },
  orange: { border: 'border-orange-100', bg: 'bg-orange-50', text: 'text-orange-600', ring: 'ring-orange-200' },
}

export default function ServicePopup({ serviceId, open, onClose }) {
  if (!serviceId) return null
  const data = serviceDetailMap[serviceId]
  if (!data) return null
  const c = colorMap[data.color]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[1.75rem] shadow-2xl border border-gray-100"
          >
            <div className={`sticky top-0 z-10 flex items-center justify-between p-4 sm:p-5 border-b ${c.border} bg-white rounded-t-[1.75rem]`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <data.icon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-black text-gray-900">{data.title}</h2>
                  <p className="text-[10px] font-medium text-gray-400">{data.tagline}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FiX className="w-3.5 h-3.5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-5">
              <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">{data.description}</p>

              <div className={`rounded-xl ${c.bg} border ${c.border} p-4 space-y-1.5`}>
                <h4 className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider ${c.text}`}>Detalhes do Serviço</h4>
                {data.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-gray-600">
                    <FiCheckCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${c.text}`} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-gray-400 mb-2.5">Destaques</h4>
                <div className="flex flex-wrap gap-2">
                  {data.benefits.map((b, i) => (
                    <span key={i} className={`text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-lg border ${c.border} ${c.bg} ${c.text}`}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-4 sm:p-5 border-t ${c.border} bg-gray-50/50 rounded-b-[1.75rem]`}>
              <button
                onClick={onClose}
                className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${data.gradient} text-white text-xs sm:text-[13px] font-bold hover:opacity-90 transition-opacity shadow-lg`}
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
