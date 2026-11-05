import { motion, useScroll, useTransform, animate, useInView } from 'framer-motion'
import { ArrowDown, ShieldCheck, Ruler, HardHat } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { whatsappLink } from '../config'
import { WhatsAppIcon } from './ui'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const words = ['segurança', 'qualidade', 'resultados']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const [w, setW] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setW((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="inicio" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <motion.img
          src="/images/hero.webp"
          alt="Equipe de engenharia em obra"
          className="h-[115%] w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-transparent to-ink-950/60" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />

      <motion.div style={{ opacity: fade }} className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur"
          >
            <img src="/images/vinicius.webp" alt="Vinícius Rael" className="h-8 w-8 rounded-full object-cover ring-2 ring-gold-500" />
            <span className="text-sm text-slate-200">
              Eng. <strong className="text-white">Vinícius Rael</strong> · São Paulo e região
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          >
            Sua obra feita com{' '}
            <span className="relative block min-w-[7ch] sm:inline-block">
              <motion.span
                key={words[w]}
                initial={{ y: '60%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-gradient-gold inline-block"
              >
                {words[w]}.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Planejamento, gestão e execução de obras com acompanhamento técnico de um Engenheiro Civil — do orçamento à
            entrega das chaves, sem surpresas no prazo e no custo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gold-500 px-7 py-4 font-bold text-ink-900 shadow-xl shadow-gold-500/25 transition hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar orçamento grátis
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-gold-500/60 hover:bg-white/10"
            >
              Conhecer serviços
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 1 } } }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            {[
              { icon: ShieldCheck, n: 100, s: '%', l: 'Obras com responsabilidade técnica' },
              { icon: Ruler, n: 5, s: '', l: 'Áreas de atuação integradas' },
              { icon: HardHat, n: 24, s: 'h', l: 'Retorno no orçamento' },
            ].map(({ icon: Icon, n, s, l }) => (
              <motion.li key={l} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                <Icon className="mb-2 h-5 w-5 text-gold-500" />
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <Counter to={n} suffix={s} />
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{l}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <motion.a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
