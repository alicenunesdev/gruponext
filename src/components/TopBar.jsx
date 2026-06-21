import { FiPhone, FiMessageCircle, FiMail, FiClock } from 'react-icons/fi'

const handleWhatsApp = () => {
  window.open('https://wa.me/5511999990000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20NexxConect.', '_blank')
}

const handlePhone = () => {
  window.location.href = 'tel:+551140000000'
}

const handleEmail = () => {
  window.location.href = 'mailto:contato@nexxconect.com.br'
}

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-white border-b border-gray-200">
      <div className="container-site">
        <div className="flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-6">
            <button onClick={handlePhone} className="flex items-center gap-1.5 text-gray-500 hover:text-brand-700 transition-colors">
              <FiPhone className="w-3 h-3" />
              (11) 4000-0000
            </button>
            <span className="w-px h-3 bg-gray-200" />
            <button onClick={handleWhatsApp} className="flex items-center gap-1.5 text-gray-500 hover:text-brand-700 transition-colors">
              <FiMessageCircle className="w-3 h-3" />
              (11) 99999-0000
            </button>
            <span className="w-px h-3 bg-gray-200" />
            <button onClick={handleEmail} className="flex items-center gap-1.5 text-gray-500 hover:text-brand-700 transition-colors">
              <FiMail className="w-3 h-3" />
              contato@nexxconect.com.br
            </button>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FiClock className="w-3 h-3" />
            Atendimento 24h - Suporte Técnico
          </div>
        </div>
      </div>
    </div>
  )
}
