import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { SectionTitle } from './ui'

const faqs = [
  {
    q: 'O orçamento tem custo?',
    a: 'O primeiro contato e a conversa inicial são gratuitos. Me chame no WhatsApp, conte sobre a sua obra e combinamos os próximos passos.',
  },
  {
    q: 'Vocês atendem reformas pequenas?',
    a: 'Sim. Atendo desde reformas pontuais até construções completas — residenciais e comerciais.',
  },
  {
    q: 'Quais regiões são atendidas?',
    a: 'São Paulo e região. Para outras localidades, entre em contato para avaliarmos a viabilidade.',
  },
  {
    q: 'Preciso ter um projeto pronto?',
    a: 'Não necessariamente. Posso orientar desde o início, indicando o que é necessário para sua obra sair do papel.',
  },
  {
    q: 'Como acompanho o andamento da obra?',
    a: 'Com relatórios periódicos, fotos e contato direto comigo pelo WhatsApp durante toda a execução.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionTitle tag="Dúvidas frequentes" title={<>Perguntas <span className="text-gradient-gold">frequentes</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl border transition ${isOpen ? 'border-gold-500/40 bg-white/[0.05]' : 'border-white/10 bg-white/[0.02]'}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-gold-500">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-slate-400">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
