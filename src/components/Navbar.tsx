import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { whatsappLink } from '../config'
import { WhatsAppIcon } from './ui'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#porque', label: 'Por que contratar' },
  { href: '#processo', label: 'Como trabalho' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'Dúvidas' },
]

export function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Vinícius Rael – início">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <path d="M6 34h28M10 34V20h6v14M18 34V10h6v24M26 34V16h5v18" stroke="#f5b301" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[15px] font-extrabold tracking-wide text-white">VINÍCIUS <span className="text-gold-500">RAEL</span></span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">Engenheiro Civil</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/5 bg-ink-900/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm font-medium text-slate-300 transition hover:text-white">
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-lg shadow-gold-500/20 transition hover:-translate-y-0.5 hover:bg-gold-400 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" /> Fale comigo
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="space-y-1 px-5 pb-6">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5">
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-ink-900">
                  <WhatsAppIcon className="h-5 w-5" /> Solicitar orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
