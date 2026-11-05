import { motion, useScroll, useSpring } from 'framer-motion'
import { Navbar, Logo } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyHire } from './components/WhyHire'
import { Process } from './components/Process'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { INSTAGRAM, INSTAGRAM_HANDLE, PHONE_DISPLAY, whatsappLink } from './config'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gold-500" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyHire />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <footer className="border-t border-white/5 bg-ink-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:px-8">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">{PHONE_DISPLAY}</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">{INSTAGRAM_HANDLE}</a>
          </div>
          <p>© {new Date().getFullYear()} Vinícius Rael · Engenharia Civil</p>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  )
}
