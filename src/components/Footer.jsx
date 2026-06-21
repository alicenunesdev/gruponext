import { FiPhone, FiMessageCircle, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi'
import logo from '../img/final-nexxbrasil-contorno-1-preto-2.png'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleWhatsApp = () => {
  window.open('https://wa.me/5511999990000', '_blank')
}

const handlePhone = () => {
  window.location.href = 'tel:+551140000000'
}

const handleEmail = () => {
  window.location.href = 'mailto:contato@nexxconect.com.br'
}

const footerLinks = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Orçamento', href: '#formulario' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  {
    title: 'Soluções',
    links: [
      { label: 'Internet Fibra', href: '#servicos' },
      { label: 'Telefonia IP', href: '#servicos' },
      { label: 'Monitoramento IA', href: '#servicos' },
      { label: 'Gestão Condominial', href: '#servicos' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central do Assinante', href: 'https://central.nexxconect.com.br' },
      { label: 'Área do Morador', href: 'https://morador.nexxconect.com.br' },
      { label: 'Suporte Técnico', href: 'https://wa.me/5511999990000' },
      { label: '2ª Via de Boleto', href: '#' },
    ],
  },
]

const handleNavClick = (href) => {
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  } else {
    window.open(href, '_blank')
  }
}

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-site pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="NexxConect" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Soluções integradas em telecomunicações, segurança eletrônica com IA, 
              controle de acesso e gestão condominial para residências, condomínios e empresas.
            </p>

            <div className="space-y-3">
              <button onClick={handlePhone} className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-300 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <FiPhone className="w-4 h-4 text-brand-400" />
                </span>
                (11) 4000-0000
              </button>
              <button onClick={handleWhatsApp} className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-300 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <FiMessageCircle className="w-4 h-4 text-brand-400" />
                </span>
                (11) 99999-0000
              </button>
              <button onClick={handleEmail} className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-300 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <FiMail className="w-4 h-4 text-brand-400" />
                </span>
                contato@nexxconect.com.br
              </button>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <FiMapPin className="w-4 h-4 text-brand-400" />
                </span>
                Av. Paulista, 1000 - São Paulo, SP
              </div>
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 text-sm hover:text-brand-300 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} NexxConect. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 text-xs hover:text-brand-300 transition-colors">
              Política de Privacidade
            </button>
            <button className="text-gray-500 text-xs hover:text-brand-300 transition-colors">
              Termos de Uso
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-700 hover:text-white transition-all"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
