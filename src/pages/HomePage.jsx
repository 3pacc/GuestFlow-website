import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { CardHeader } from '../components/ui/CardHeader'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Reveal } from '../components/shared/Reveal'
import { CountUpStat } from '../components/shared/CountUpStat'
import { capabilities, kpis, trustLogos } from '../data/siteData'
import { staggerContainer } from '../lib/motion'

export function HomePage({ onOpenBooking }) {
  const [spot, setSpot] = useState({ x: 50, y: 50 })

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section
        className="relative mx-auto flex min-h-[84vh] max-w-7xl flex-col justify-center py-16"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          setSpot({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
        }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl" style={{ background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(124,58,237,0.25), transparent 42%)` }} />

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">GuestFlow, le réceptionniste IA des hôtels modernes.</h1>
        <p className="mt-6 max-w-3xl text-lg text-white/75">Automatisez la prise de réservation, augmentez la conversion des appels et améliorez l'expérience client grâce a un agent vocal IA, des suivis SMS et des dashboards live.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={onOpenBooking}>Réserver une démo</Button>
          <Button variant="secondary" as="a" href="#plateforme">Voir la plateforme</Button>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto mt-8 max-w-7xl rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.16em] text-white/65">Adopté par des hôtels indépendants et groupes</p>
          <div className="partner-marquee-wrapper">
            <div className="partner-marquee-track">
              {[...trustLogos, ...trustLogos].map((logo, idx) => (
                <span key={`${logo}-${idx}`} className="partner-logo-item">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto mt-24 max-w-7xl">
        <SectionTitle eyebrow="Pourquoi GuestFlow" title={"Moins d'appels perdus, plus de réservations confirmées"} description={"GuestFlow traite chaque interaction de manière cohérente, instantanée et orientée conversion."} />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <GlassPanel>
            <CardHeader
              eyebrow="Risques actuels"
              title="Pain points actuels"
              subtitleItems={[
                "Risque de perte d'appels entrants",
                'Charge manuelle élevée a la réception',
                'Qualification client incomplète',
              ]}
            />
          </GlassPanel>

          <GlassPanel>
            <CardHeader
              eyebrow={"Résultats attendus"}
              title="Résultats GuestFlow"
              subtitleItems={[
                'Prise en charge IA continue 24/7',
                'Suivi automatisé des demandes',
                'Pilotage KPI orienté revenu',
              ]}
            />
          </GlassPanel>
        </div>
      </section>

      <section id="plateforme" className="mx-auto mt-24 max-w-7xl">
        <SectionTitle eyebrow={"Capacités cœur"} title={"Une stack agentique conçue pour la performance hôtelière"} description={"Chaque brique de la plateforme est pensée pour accélérer le traitement des demandes et sécuriser la conversion."} />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <GlassPanel key={item}>
              <CardHeader eyebrow={`Capacité ${index + 1}`} title={item} subtitleItems={['Conçu pour la conversion', "Optimisé pour l'expérience client"]} />
            </GlassPanel>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <SectionTitle eyebrow="KPI" title={"Des impacts mesurables dès les premières semaines"} description="Des indicateurs business pilotables pour mesurer la valeur de chaque conversation." />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((item) => (
            <GlassPanel key={item.label} className="text-center">
              <p className="text-4xl font-semibold text-white md:text-5xl">{item.prefix}<CountUpStat value={item.value} suffix={item.suffix} /></p>
              <p className="mt-2 text-sm text-white/70">{item.label}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto my-24 max-w-7xl">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 p-8 text-center backdrop-blur-xl md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Décision stratégique</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Transformez chaque appel en réservation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">Lancez un pilote encadré, mesurez vos gains et industrialisez la performance sur l'ensemble de votre portefeuille.</p>
          <div className="mt-8 flex justify-center"><Button onClick={onOpenBooking}>Réserver une démo</Button></div>
        </div>
      </section>
    </div>
  )
}
