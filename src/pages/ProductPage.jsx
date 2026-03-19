import { Button } from '../components/ui/Button'
import { CardHeader } from '../components/ui/CardHeader'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionTitle } from '../components/ui/SectionTitle'

const pipeline = [
  {
    title: 'Voice Pipeline',
    subtitleItems: ['STT temps reel', 'Orchestration agentique', 'Generation de reponses', 'TTS naturel'],
  },
  {
    title: 'Booking Intelligence',
    subtitleItems: ['Dates et sejour', 'Type de chambre', 'Disponibilites', 'Upsell pilote'],
  },
  {
    title: 'Operations Layer',
    subtitleItems: ['Dashboard live', 'Logs et transcriptions', 'KPIs activables', 'Alerting equipe'],
  },
]

const timeline = ['Appel entrant', 'Qualification', 'Disponibilite', 'Confirmation', 'SMS']

export function ProductPage({ onOpenBooking }) {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section className="mx-auto max-w-7xl py-16">
        <SectionTitle
          eyebrow="Produit"
          title="Architecture IA orientee fiabilite et conversion"
          description="GuestFlow combine pipeline vocal, intelligence de reservation et couche d operations en temps reel."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pipeline.map((item) => (
            <GlassPanel key={item.title}>
              <CardHeader eyebrow="Bloc plateforme" title={item.title} subtitleItems={item.subtitleItems} />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-8">
        <SectionTitle
          eyebrow="Processus"
          title="Timeline conversationnelle"
          description="Du premier mot a la confirmation, chaque etape suit des regles metier observables."
        />
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
          {timeline.map((step, index) => (
            <GlassPanel key={step} className="text-center">
              <CardHeader
                eyebrow={`Etape ${index + 1}`}
                title={step}
                subtitleItems={['Detection intention', 'Decision pilotee']}
              />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-12">
        <SectionTitle
          eyebrow="Securite et fiabilite"
          title="Concu pour des operations sensibles"
          description="Minimisation des donnees, auditabilite et culture uptime pour garantir robustesse et conformite."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: 'Minimisation des donnees',
              points: ['Collecte strictement utile', 'Conservation maitrisee'],
            },
            {
              title: 'Audit logs consultables',
              points: ['Tracabilite conversationnelle', 'Historique des actions IA'],
            },
            {
              title: 'Objectif haute disponibilite',
              points: ['Surveillance proactive', 'Resilience multi-scenarios'],
            },
          ].map((item) => (
            <GlassPanel key={item.title}>
              <CardHeader eyebrow="Confiance" title={item.title} subtitleItems={item.points} />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-8">
        <SectionTitle
          eyebrow="Interface admin"
          title="Vue pilotage pour les equipes revenue et operations"
          description="Des ecrans orientes action pour monitorer la performance et affiner le comportement agentique."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ['Dashboard KPI', ['Conversion appels', 'Charge equipe']],
            ['Gestion d inventaire', ['Disponibilites', 'Contraintes tarifaires']],
            ['Configuration agent', ['Prompts et policies', 'Escalades humaines']],
          ].map(([title, points]) => (
            <GlassPanel key={title} className="h-56">
              <CardHeader eyebrow="Module" title={title} subtitleItems={points} />
              <div className="mt-4 rounded-xl border border-dashed border-white/20 bg-white/5 p-3 text-sm text-white/70">
                Placeholder ecran premium
              </div>
            </GlassPanel>
          ))}
        </div>

        <div className="mt-10">
          <Button onClick={onOpenBooking}>Voir une demo personnalisee</Button>
        </div>
      </section>
    </div>
  )
}
