import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi'

const serviceOptions = [
  'Internet Fibra Óptica',
  'Monitoramento com IA',
  'Controle de Acesso',
  'Gestão Condominial',
  'Telefonia IP',
  'Solução Corporativa',
]

export default function Formulario() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Olá! Meu nome é ${form.nome}.%0AEmail: ${form.email}%0ATelefone: ${form.telefone}%0AServiço de interesse: ${form.servico}%0AMensagem: ${form.mensagem}`
    window.open(`https://wa.me/5511999990000?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="formulario" className="section-padding bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="relative container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-300 text-xs font-semibold tracking-wider uppercase border border-brand-500/20 mb-4">
            Agende Agora
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Solicite um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent">
              Orçamento Personalizado
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-500">
                  Redirecionando para o WhatsApp...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FiUser className="w-3.5 h-3.5 text-brand-500" />
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FiMail className="w-3.5 h-3.5 text-brand-500" />
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FiPhone className="w-3.5 h-3.5 text-brand-500" />
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FiMessageSquare className="w-3.5 h-3.5 text-brand-500" />
                      Serviço de Interesse
                    </label>
                    <select
                      name="servico"
                      value={form.servico}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all appearance-none"
                    >
                      <option value="">Selecione um serviço</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <FiMessageSquare className="w-3.5 h-3.5 text-brand-500" />
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Conte-nos um pouco sobre sua necessidade..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 text-white font-bold text-sm hover:from-brand-800 hover:to-brand-700 transition-all duration-300 shadow-lg shadow-brand-700/20"
                >
                  <FiSend className="w-4 h-4" />
                  Enviar e Agendar
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Ao enviar, você será redirecionado ao WhatsApp. Seus dados estão seguros.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
