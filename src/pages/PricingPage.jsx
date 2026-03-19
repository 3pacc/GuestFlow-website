import { useMemo, useState } from 'react'
import { Button } from '../components/ui/Button'
import { CardHeader } from '../components/ui/CardHeader'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionTitle } from '../components/ui/SectionTitle'

const plans = [
  {
    name: 'Starter',
    price: '890 EUR / mois',
    minutes: '1 500 minutes',
    support: 'Support email 24h',
    features: ['Agent vocal IA', 'SMS de confirmation', 'Dashboard essentiel'],
  },
  {
    name: 'Growth',
    price: '1 890 EUR / mois',
    minutes: '5 000 minutes',
    support: 'Support prioritaire 7j/7',
    popular: true,
    features: ['Tout Starter', 'Upsell intelligent', 'Intégrations PMS/CRM standard'],
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    minutes: 'Volume illimité',
    support: 'Success manager dédié',
    features: ['Tout Growth', 'SLA personnalisé', 'Sécurité avancée & gouvernance'],
  },
]

export function PricingPage() {
  const [calls, setCalls] = useState(900)
  const [conversion, setConversion] = useState(18)
  const [adr, setAdr] = useState(145)

  const roi = useMemo(() => {
    const projectedConversion = conversion * 1.34
    const extraBookings = Math.max(0, Math.round((calls * (projectedConversion - conversion)) / 100))
    return extraBookings * adr
  }, [calls, conversion, adr])

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section className="mx-auto max-w-7xl py-16">
        <SectionTitle
          eyebrow="Tarifs"
          title="Une tarification SaaS claire, alignée sur votre croissance"
          description="Choisissez le plan selon votre volume d'interactions et votre niveau d'accompagnement attendu."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <GlassPanel key={plan.name} className={plan.popular ? 'border-cyan-300/60 bg-cyan-400/10 shadow-[0_20px_80px_-40px_rgba(34,211,238,0.9)]' : ''}>
              {plan.popular && (
                <span className="inline-flex rounded-full bg-cyan-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Le plus choisi
                </span>
              )}

              <CardHeader
                eyebrow="Plan"
                title={plan.name}
                subtitleItems={[plan.minutes, plan.support, 'Activation rapide sans interruption opérationnelle']}
              />

              <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {plan.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Button className="w-full">Choisir ce plan</Button>
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-8">
        <SectionTitle eyebrow="Add-ons" title="Modules complémentaires" description="Activez un accompagnement premium selon votre contexte organisationnel." />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {['Onboarding premium', 'Intégrations sur-mesure', 'Success manager dédié'].map((item) => (
            <GlassPanel key={item}>
              <CardHeader eyebrow="Option" title={item} subtitleItems={['Déploiement cadré', 'Pilotage orienté ROI']} />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-12">
        <SectionTitle eyebrow="ROI" title="Estimation rapide de gain mensuel" description="Modifiez vos hypothèses pour visualiser la valeur potentielle générée par GuestFlow." />
        <GlassPanel className="mt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <label className="text-sm text-white/80">Appels mensuels<input type="number" value={calls} onChange={(event) => setCalls(Number(event.target.value) || 0)} className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2" /></label>
            <label className="text-sm text-white/80">Conversion actuelle (%)<input type="number" value={conversion} onChange={(event) => setConversion(Number(event.target.value) || 0)} className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2" /></label>
            <label className="text-sm text-white/80">ADR moyen (EUR)<input type="number" value={adr} onChange={(event) => setAdr(Number(event.target.value) || 0)} className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2" /></label>
          </div>
          <p className="mt-6 text-lg text-white/85">Potentiel de revenu additionnel estimé: <span className="font-semibold text-cyan-300">{roi.toLocaleString('fr-FR')} EUR / mois</span></p>
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl py-12">
        <SectionTitle eyebrow="FAQ Tarifs" title="Réponses aux objections fréquentes" description="Une approche transparente pour faciliter votre décision." />
        <div className="mt-8 space-y-3">
          {[
            ['Y a-t-il un engagement long terme ?', 'Non, les plans Starter et Growth sont mensuels.'],
            ['Comment sont comptées les minutes ?', 'Chaque interaction vocale traitée est comptabilisée au réel.'],
            ['Peut-on changer de plan ?', 'Oui, upgrade ou downgrade en début de cycle mensuel.'],
          ].map(([q, a]) => (
            <GlassPanel key={q}>
              <CardHeader title={q} subtitleItems={[a]} />
            </GlassPanel>
          ))}
        </div>
      </section>
    </div>
  )
}
