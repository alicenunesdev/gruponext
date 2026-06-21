import { useState } from 'react'
import { motion } from 'framer-motion'
import intelbrasLogo from '../img/logos/intelbras.png'
import hikvisionLogo from '../img/logos/Hikvision.svg'
import fiberhomeLogo from '../img/logos/fiberhome.png'
import mikrotikLogo from '../img/logos/mikrotik.svg'
import ubiquitiLogo from '../img/logos/Ubiquiti.png'
import tplinkLogo from '../img/logos/tplink.png'
import dahuaLogo from '../img/logos/dahuasecurity.png'

const partners = [
  { name: 'Intelbras', logo: intelbrasLogo, url: 'https://www.intelbras.com', category: 'Segurança Eletrônica' },
  { name: 'Hikvision', logo: hikvisionLogo, url: 'https://www.hikvision.com', category: 'Monitoramento' },
  { name: 'FiberHome', logo: fiberhomeLogo, url: 'https://www.fiberhome.com', category: 'Fibra Óptica' },
  { name: 'Mikrotik', logo: mikrotikLogo, url: 'https://mikrotik.com', category: 'Redes' },
  { name: 'Ubiquiti', logo: ubiquitiLogo, url: 'https://ui.com', category: 'Wireless' },
  { name: 'TP-Link', logo: tplinkLogo, url: 'https://www.tp-link.com', category: 'Enterprise' },
  { name: 'Dahua', logo: dahuaLogo, url: 'https://www.dahuasecurity.com', category: 'CFTV' },
]

// Duplicate the list for seamless loop
const allPartners = [...partners, ...partners, ...partners]

function PartnerCard({ p }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white rounded-2xl border border-gray-100 transition-all duration-500 flex-shrink-0 select-none hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5"
      style={{ width: '200px' }}
    >
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-3 mb-3 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-500">
          <img
            src={p.logo}
            alt={p.name}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
        <span className="text-xs font-bold text-gray-800 text-center group-hover:text-brand-600 transition-colors">
          {p.name}
        </span>
        <span className="text-[10px] text-gray-400 mt-0.5 font-medium tracking-wide uppercase">{p.category}</span>
      </div>
    </a>
  )
}

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="relative container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-300 text-[10px] font-black tracking-[0.2em] uppercase border border-brand-500/20 mb-4">
            Ecosistema Tecnológico
          </span>
          <h2 className="text-2xl font-bold text-white">Tecnologia dos Nossos Parceiros</h2>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradients for fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-950 via-brand-950/80 to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: isPaused ? undefined : [0, -224 * partners.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {allPartners.map((p, i) => (
                <PartnerCard key={i} p={p} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
