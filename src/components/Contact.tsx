import { motion } from 'framer-motion'
import { Phone, MapPin, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { INSTAGRAM, INSTAGRAM_HANDLE, PHONE_DISPLAY, whatsappLink } from '../config'
import { InstagramIcon, Reveal, SectionTag, WhatsAppIcon } from './ui'

const serviceOptions = ['Planejamento de obra', 'Gestão de obra', 'Execução', 'Orçamento', 'Consultoria técnica', 'Reforma', 'Outro']

export function Contact() {
  const [name, setName] = useState('')
  const [service, setService] = useState(serviceOptions[0])
  const [details, setDetails] = useState('')

  function submit(e: FormEvent) {
    e.preventDefault()
    const msg =
      `Olá, Vinícius! Vim pelo seu site.\n\n` +
      `*Nome:* ${name.trim()}\n` +
      `*Serviço:* ${service}\n` +
      (details.trim() ? `*Detalhes:* ${details.trim()}\n` : '') +
      `\nGostaria de solicitar um orçamento.`
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')
  }

  const input =
    'w-full rounded-xl border border-white/10 bg-ink-900/80 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'

  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-32">
      <img src="/images/execucao.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900 via-ink-900/95 to-ink-950" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionTag>Contato</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Vamos tirar a sua obra <span className="text-gradient-gold">do papel?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-slate-400">
            Preencha em 30 segundos e a mensagem chega pronta no meu WhatsApp. Respondo o quanto antes.
          </p>
          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-wa/15 text-wa"><WhatsAppIcon className="h-6 w-6" /></span>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-gold-400">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500/15 text-gold-400"><InstagramIcon className="h-6 w-6" /></span>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-gold-400">{INSTAGRAM_HANDLE}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-slate-300"><MapPin className="h-6 w-6" /></span>
              <span className="text-lg font-semibold text-white">São Paulo e região</span>
            </li>
          </ul>
        </Reveal>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-ink-800/70 p-7 shadow-2xl backdrop-blur-xl sm:p-9"
        >
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <Phone className="h-5 w-5 text-gold-500" /> Solicite seu orçamento
          </h3>
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-300">Seu nome</span>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Como posso te chamar?" className={input} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-300">Serviço de interesse</span>
              <select value={service} onChange={(e) => setService(e.target.value)} className={input}>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-300">Conte um pouco sobre a obra (opcional)</span>
              <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} placeholder="Ex.: reforma de apartamento de 70 m² na Zona Leste" className={input} />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-wa px-6 py-4 font-bold text-white shadow-lg shadow-wa/25 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            <Send className="h-5 w-5" /> Enviar pelo WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  )
}
