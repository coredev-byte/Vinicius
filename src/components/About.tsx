import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { INSTAGRAM, INSTAGRAM_HANDLE } from '../config'
import { InstagramIcon, Reveal, SectionTag } from './ui'

const items = [
  'Atendimento direto com o engenheiro, sem intermediários',
  'Comunicação rápida e transparente pelo WhatsApp',
  'Obras residenciais, comerciais e reformas',
  'Foco em custo, prazo e qualidade de execução',
]

const marquee = ['Planejamento', 'Gestão de Obras', 'Execução', 'Orçamentos', 'Consultoria', 'Reformas', 'Acompanhamento Técnico']

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 overflow-hidden border-y border-white/5 bg-gold-500 py-3">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.2em] text-ink-900">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              {m} <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          <motion.div
            className="absolute -inset-4 rounded-[2rem] border border-gold-500/30"
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
            <img src="/images/entrega.webp" alt="Obra finalizada" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-6">
              <img src="/images/vinicius.webp" alt="Engenheiro Vinícius Rael" className="h-20 w-20 rounded-full object-cover ring-4 ring-gold-500" />
              <div>
                <p className="font-display text-xl font-bold text-white">Vinícius Rael</p>
                <p className="text-sm text-gold-400">Engenheiro Civil</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionTag>Sobre mim</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Engenharia feita de perto, <span className="text-gradient-gold">com responsabilidade</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Sou o Vinícius Rael, Engenheiro Civil. Trabalho com planejamento e gestão de obras, execução, orçamentos e
            consultoria — ajudando quem quer construir ou reformar a tirar o projeto do papel com segurança, dentro do
            orçamento e no prazo.
          </p>
          <ul className="mt-8 space-y-3">
            {items.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-slate-200"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" /> {t}
              </motion.li>
            ))}
          </ul>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-gold-500/60 hover:text-gold-400"
          >
            <InstagramIcon className="h-5 w-5" /> Acompanhe no Instagram {INSTAGRAM_HANDLE}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
