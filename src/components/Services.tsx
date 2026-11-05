import { motion } from 'framer-motion'
import { CalendarRange, ClipboardList, HardHat, Calculator, MessagesSquare, ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '../config'
import { SectionTitle } from './ui'

const services = [
  {
    icon: CalendarRange,
    title: 'Planejamento de Obras',
    text: 'Cronograma físico-financeiro, definição de etapas, compras e equipe antes do primeiro tijolo.',
    img: '/images/planejamento.webp',
  },
  {
    icon: ClipboardList,
    title: 'Gestão de Obras',
    text: 'Acompanhamento de prazos, custos, fornecedores e mão de obra com relatórios claros para você.',
    img: '/images/gestao.webp',
  },
  {
    icon: HardHat,
    title: 'Execução',
    text: 'Condução técnica da obra seguindo projetos e normas, com controle de qualidade em cada etapa.',
    img: '/images/execucao.webp',
  },
  {
    icon: Calculator,
    title: 'Orçamentos',
    text: 'Levantamento de quantitativos e custos detalhados para você decidir com segurança e sem sustos.',
    img: '/images/obra.webp',
  },
  {
    icon: MessagesSquare,
    title: 'Consultoria Técnica',
    text: 'Orientação para reformas, construções e tomadas de decisão — visitas técnicas e pareceres.',
    img: '/images/terraplanagem.webp',
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          tag="Serviços"
          title={
            <>
              Soluções completas para <span className="text-gradient-gold">construir e reformar</span>
            </>
          }
          subtitle="Da ideia à entrega: um único profissional responsável por planejar, orçar, executar e gerir a sua obra."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={whatsappLink(`Olá, Vinícius! Vim pelo site e tenho interesse em: ${s.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-ink-800 ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-110 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/10" />
              <div className="relative p-7">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gold-500 text-ink-900 shadow-lg shadow-gold-500/30 transition group-hover:rotate-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-400">
                  Quero esse serviço
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
