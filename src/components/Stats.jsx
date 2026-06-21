import { motion } from 'framer-motion'
import { FiUsers, FiCamera, FiShield, FiClock, FiActivity } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const statItems = [
  { 
    icon: FiUsers, 
    end: 1000, 
    suffix: '+', 
    label: 'Clientes Atendidos', 
    desc: 'Excelência em cada conexão',
    highlight: 'from-brand-600 to-brand-400'
  },
  { 
    icon: FiActivity, 
    end: 99.9, 
    suffix: '%', 
    label: 'Disponibilidade', 
    desc: 'SLA de Classe Mundial',
    highlight: 'from-emerald-600 to-emerald-400'
  },
  { 
    icon: FiCamera, 
    end: 5000, 
    suffix: '+', 
    label: 'Câmeras Monitoradas', 
    desc: 'Segurança Inteligente 24h',
    highlight: 'from-blue-600 to-blue-400'
  },
  { 
    icon: FiClock, 
    end: 24, 
    suffix: '/7', 
    label: 'Monitoramento Ativo', 
    desc: 'Sempre alerta por você',
    highlight: 'from-accent to-orange-400'
  },
]

function StatCard({ item, index }) {
  const [ref, inView] = useInView(0.2)
  const count = useCountUp(item.end, 2500, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative group"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.highlight} rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-500`} />
      
      <div className="relative bg-white rounded-[2rem] p-10 border border-gray-100 flex flex-col items-center text-center h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-500/10">
        
        {/* Icon with Ring */}
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.highlight} p-0.5 mb-8 shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <div className="w-full h-full bg-white rounded-[0.9rem] flex items-center justify-center">
            <item.icon className={`w-10 h-10 bg-gradient-to-br ${item.highlight} bg-clip-text text-transparent`} />
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="text-5xl sm:text-6xl font-black text-gray-900 mb-2 tracking-tighter">
            {item.label === 'Disponibilidade' ? count.toFixed(1) : count}
            <span className="text-brand-600">{item.suffix}</span>
          </div>

          <div className="text-lg font-black text-gray-800 mb-2 uppercase tracking-wide">
            {item.label}
          </div>
          
          <div className="text-gray-400 text-sm font-medium leading-relaxed">
            {item.desc}
          </div>
        </div>

        {/* Decorative Badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.highlight} animate-ping`} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/20 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container-site relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-brand-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Resultados Reais</span>
            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              O trunfo por trás do seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">sucesso.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg font-medium max-w-sm"
          >
            A NexxBrasil é definida pela confiança e performance de milhares de ativos monitorados em tempo real.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, i) => (
            <StatCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom Proof Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-12 grayscale opacity-40"
        >
          <span className="text-xs font-bold uppercase tracking-widest italic">ISO 9001 Certified Quality</span>
          <span className="text-xs font-bold uppercase tracking-widest italic">24/7 Redundant SOC</span>
          <span className="text-xs font-bold uppercase tracking-widest italic">Encrypted Cloud Storage</span>
        </motion.div>
      </div>
    </section>
  )
}
