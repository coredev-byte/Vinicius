import { motion } from 'framer-motion'
import { PiggyBank, Clock, ShieldCheck, FileCheck2, TrendingUp, Eye } from 'lucide-react'
import { Reveal, SectionTag } from './ui'

const reasons = [
  { icon: PiggyBank, title: 'Menos desperdício', text: 'Compras e quantitativos calculados evitam material sobrando e retrabalho.' },
  { icon: Clock, title: 'Prazo sob controle', text: 'Cronograma realista e acompanhado de perto, etapa por etapa.' },
  { icon: ShieldCheck, title: 'Segurança estrutural', text: 'Decisões técnicas tomadas por quem responde por elas.' },
  { icon: FileCheck2, title: 'Normas e documentação', text: 'Obra conforme as normas técnicas (ABNT) e com ART emitida.' },
  { icon: TrendingUp, title: 'Imóvel mais valorizado', text: 'Obra bem executada e documentada vale mais na hora de vender.' },
  { icon: Eye, title: 'Transparência total', text: 'Você acompanha custos e avanço com relatórios simples e fotos.' },
]

export function WhyHire() {
  return (
    <section id="porque" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionTag>Por que contratar</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Por que contratar um <span className="text-gradient-gold">Engenheiro Civil</span> para gerenciar sua obra?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Obra sem acompanhamento técnico costuma estourar orçamento e prazo. Com um engenheiro à frente, cada real
            investido é planejado — e cada etapa, conferida.
          </p>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10">
            <img src="/images/guindaste.webp" alt="Guindaste em obra" loading="lazy" className="h-56 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 to-transparent" />
            <p className="absolute bottom-5 left-6 max-w-[16rem] font-display text-lg font-bold text-white">
              “Planejar custa menos do que corrigir.”
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-gold-500/40 hover:bg-white/[0.06]"
            >
              <r.icon className="h-7 w-7 text-gold-500 transition group-hover:scale-110" />
              <h3 className="mt-4 font-display text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
