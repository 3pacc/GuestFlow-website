import { Button } from '../components/ui/Button'
import { CardHeader } from '../components/ui/CardHeader'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionTitle } from '../components/ui/SectionTitle'
import { caseStudies } from '../data/siteData'

export function ResourcesPage({ onOpenBooking }) {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section className="mx-auto max-w-7xl py-16">
        <SectionTitle
          eyebrow="Ressources"
          title="Etudes de cas orientees resultats"
          description="Explorez des scenarios operationnels ou GuestFlow ameliore conversion, experience client et productivite."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <GlassPanel key={item.title}>
              <CardHeader
                eyebrow={item.tag}
                title={item.title}
                subtitleItems={[item.context, item.result]}
              />
              <button className="mt-5 text-sm font-semibold text-white underline-offset-4 hover:underline">
                Lire l etude
              </button>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-8">
        <SectionTitle
          eyebrow="Insights"
          title="IA agentique en hotellerie"
          description="Un concentre d enseignements terrain pour deployer vite sans compromis sur la qualite de service."
        />

        <GlassPanel className="mt-8">
          <CardHeader
            eyebrow="Guide pratique"
            title="Bonnes pratiques de deploiement"
            subtitleItems={[
              'Cadrer les intentions prioritaires',
              'Definir les policies de reponse',
              'Instrumenter les KPIs des la phase pilote',
            ]}
          />
          <div className="mt-5">
            <Button onClick={onOpenBooking}>Planifier un workshop</Button>
          </div>
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl py-12">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 p-8 backdrop-blur-xl md:p-12">
          <CardHeader
            eyebrow="Lead magnet"
            title="Checklist: deployer un agent IA hotelier en 14 jours"
            subtitleItems={[
              'Cadrage du perimetre et des objectifs',
              'Plan integrations et donnees',
              'Matrice KPI de succes',
            ]}
          />
          <div className="mt-6">
            <Button>Telecharger la checklist</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
