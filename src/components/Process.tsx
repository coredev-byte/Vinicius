import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './ui'

const steps = [
  { n: '01', title: 'Primeiro contato', text: 'Você me chama no WhatsApp e conta o que precisa. Sem compromisso.' },
  { n: '02', title: 'Visita técnica', text: 'Avalio o local, entendo o objetivo e levanto as necessidades da obra.' },
  { n: '03', title: 'Orçamento e plano', text: 'Proposta com custos detalhados, cronograma e escopo bem definido.' },
  { n: '04', title: 'Execução e gestão', text: 'Acompanhamento técnico, controle de qualidade e relatórios do avanço.' },
  { n: '05', title: 'Entrega', text: 'Vistoria final, documentação e sua obra pronta, do jeito combinado.' },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          tag="Como trabalho"
          title={
            <>
              Um processo <span className="text-gradient-gold">claro e organizado</span>
            </>
          }
          subtitle="Você sabe exatamente o que acontece em cada fase da sua obra."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[27px] top-0 w-0.5 bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div style={{ height }} className="absolute left-[27px] top-0 w-0.5 bg-gradient-to-b from-gold-300 to-gold-600 sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-10">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-start gap-6 sm:w-1/2 ${i % 2 ? 'sm:ml-auto sm:pl-12' : 'sm:flex-row-reverse sm:pr-12 sm:text-right'}`}
              >
                <span
                  className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-gold-500 bg-ink-900 font-display text-lg font-bold text-gold-400 sm:absolute sm:top-0 ${
                    i % 2 ? 'sm:-left-7' : 'sm:-right-7'
                  }`}
                >
                  {s.n}
                </span>
                <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 sm:w-full">
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
