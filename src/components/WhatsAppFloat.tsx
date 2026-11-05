import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { whatsappLink } from '../config'
import { WhatsAppIcon } from './ui'

/** Botão flutuante do WhatsApp com mensagem automática e balão de convite. */
export function WhatsAppFloat() {
  const [bubble, setBubble] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBubble(true), 4000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            className="relative max-w-[250px] rounded-2xl rounded-br-sm bg-white p-4 pr-8 text-sm text-slate-700 shadow-2xl"
          >
            <button onClick={() => setBubble(false)} aria-label="Fechar" className="absolute right-2 top-2 text-slate-400 hover:text-slate-600">
              <X className="h-4 w-4" />
            </button>
            <p className="font-semibold text-slate-900">Olá! 👋</p>
            <p className="mt-0.5">Precisa de um orçamento para sua obra? Fale comigo agora.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-wa text-white shadow-xl shadow-wa/40"
      >
        <span className="wa-ping absolute inset-0 rounded-full bg-wa" />
        <WhatsAppIcon className="relative h-9 w-9" />
      </motion.a>
    </div>
  )
}
