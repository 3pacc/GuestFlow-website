import { useMemo, useState } from 'react'
import { Button } from '../components/ui/Button'
import { CardHeader } from '../components/ui/CardHeader'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionTitle } from '../components/ui/SectionTitle'
import { segments } from '../data/siteData'

const deepDives = [
  'Mémoire conversationnelle et suivi des slots de réservation',
  'Gestion des fallback intelligents en cas d ambiguïté',
  'Réponses alignées aux politiques tarifaires et d annulation',
  'Déclencheurs de handoff humain sur règles métier',
]

const tabs = [
  { key: 'independants', label: 'Hôtels indépendants' },
  { key: 'groupes', label: 'Groupes hôteliers' },
  { key: 'residences', label: 'Résidences / appart-hôtels' },
]

export function SolutionsPage({ onOpenBooking }) {
  const [active, setActive] = useState('independants')
  const current = useMemo(() => segments[active], [active])

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section className="mx-auto max-w-7xl py-16">
        <SectionTitle
          eyebrow="Solutions"
          title={"Des workflows IA adaptés à chaque segment hôtelier"}
          description={"GuestFlow s adapte à vos contraintes opérationnelles, votre positionnement et vos objectifs de conversion."}
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === tab.key
                  ? 'border-cyan-300 bg-cyan-300/15 text-white'
                  : 'border-white/20 bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <GlassPanel>
            <CardHeader eyebrow="Défis" title="Défis majeurs" subtitleItems={current.challenges} />
          </GlassPanel>

          <GlassPanel>
            <CardHeader
              eyebrow="Workflow"
              title="Orchestration GuestFlow"
              subtitleItems={[
                current.workflow,
                'Traitement conversationnel structuré et rapide',
              ]}
            />
          </GlassPanel>

          <GlassPanel>
            <CardHeader
              eyebrow="Impact"
              title="Résultat business"
              subtitleItems={[
                current.impact,
                'Des effets visibles sur conversion et productivité',
              ]}
            />
          </GlassPanel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-8">
        <SectionTitle
          eyebrow="Deep-dives"
          title={"Contrôle conversationnel de niveau enterprise"}
          description={"Chaque interaction est tracée, gouvernée et optimisée pour la performance commerciale."}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {deepDives.map((item, index) => (
            <GlassPanel key={item}>
              <CardHeader eyebrow={`Module ${index + 1}`} title={item} />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-12">
        <SectionTitle
          eyebrow="Comparatif"
          title="Sans GuestFlow vs Avec GuestFlow"
          description={"Visualisez la différence sur la chaîne de valeur réservation."}
        />

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <GlassPanel>
            <CardHeader
              eyebrow="Sans GuestFlow"
              title={"Exécution manuelle"}
              subtitleItems={[
                'Dépendance forte aux horaires et à la disponibilité équipe',
                'Qualification incomplète et suivi irrégulier des demandes',
                'Reporting partiel sur la performance téléphonique',
              ]}
            />
          </GlassPanel>

          <GlassPanel>
            <CardHeader
              eyebrow="Avec GuestFlow"
              title={"Exécution augmentée par IA"}
              subtitleItems={[
                'Prise en charge 24/7 et continuité de service',
                'Qualification structurée et confirmation automatisée par SMS',
                'Pilotage en temps réel des KPI de conversion',
              ]}
            />
          </GlassPanel>
        </div>

        <div className="mt-10">
          <Button onClick={onOpenBooking}>Lancer un pilote en 7 jours</Button>
        </div>
      </section>
    </div>
  )
}
