import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { CardHeader } from '../components/ui/CardHeader'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionTitle } from '../components/ui/SectionTitle'

const faqs = [
  {
    q: 'Combien de temps pour lancer un pilote ?',
    a: 'Nous activons generalement un pilote en 7 jours ouvres avec cadrage operationnel inclus.',
  },
  {
    q: 'GuestFlow peut-il coexister avec l equipe reception ?',
    a: 'Oui, l agent IA absorbe les demandes repetitives et declenche un handoff humain quand necessaire.',
  },
  {
    q: 'Quels systemes sont compatibles ?',
    a: 'Nous couvrons les principaux PMS/CRM et proposons des connecteurs sur mesure en option.',
  },
]

const contactCards = [
  {
    title: 'Email',
    points: ['contact@guestflow.ai'],
  },
  {
    title: 'Telephone',
    points: ['+33665273884'],
  },
  {
    title: 'Adresse',
    points: ['2255 Route des Dolines'],
  },
  {
    title: 'Support',
    points: ['Lun-Dim, 08:00-22:00'],
  },
]

export function ContactPage({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    volume: '',
    need: 'Augmenter la conversion',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.company) return
    setSubmitted(true)
  }

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section className="mx-auto max-w-7xl py-16">
        <SectionTitle
          eyebrow="Contact"
          title="Construisons votre strategie GuestFlow"
          description="Parlez avec notre equipe pour cadrer votre pilote IA, vos priorites commerciales et vos integrations."
        />
        <div className="mt-8">
          <Button onClick={onOpenBooking}>Planifier une demo</Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <GlassPanel key={card.title}>
              <CardHeader eyebrow="Canal" title={card.title} subtitleItems={card.points} />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <GlassPanel>
            <CardHeader
              eyebrow="Brief projet"
              title="Dites-nous ou creer de la valeur"
              subtitleItems={[
                'Objectifs business prioritaires',
                'Contexte operationnel de votre hotel',
                'Planning de mise en service',
              ]}
            />

            {submitted ? (
              <p className="mt-4 text-cyan-300">Merci, votre demande a ete recue. Reponse sous 2 heures ouvrees.</p>
            ) : (
              <form className="mt-5 space-y-3" onSubmit={onSubmit}>
                <label className="block text-sm text-white/80">
                  Nom
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2"
                  />
                </label>

                <label className="block text-sm text-white/80">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2"
                  />
                </label>

                <label className="block text-sm text-white/80">
                  Hotel / Societe
                  <input
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2"
                  />
                </label>

                <label className="block text-sm text-white/80">
                  Volume d appels mensuel
                  <input
                    type="number"
                    value={form.volume}
                    onChange={(e) => setForm((p) => ({ ...p, volume: e.target.value }))}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2"
                  />
                </label>

                <label className="block text-sm text-white/80">
                  Besoin principal
                  <select
                    value={form.need}
                    onChange={(e) => setForm((p) => ({ ...p, need: e.target.value }))}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-black px-3 py-2"
                  >
                    <option>Augmenter la conversion</option>
                    <option>Reduire la charge reception</option>
                    <option>Industrialiser les operations multi-sites</option>
                  </select>
                </label>

                <label className="block text-sm text-white/80">
                  Message
                  <textarea
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2"
                  />
                </label>

                <Button type="submit">Envoyer ma demande</Button>
              </form>
            )}

            <p className="mt-4 text-xs text-white/60">Promesse de reponse: sous 2 heures ouvrees.</p>
          </GlassPanel>

          <GlassPanel>
            <CardHeader
              eyebrow="FAQ"
              title="Reponses rapides"
              subtitleItems={['Integrations', 'Delais de pilote', 'Organisation equipe']}
            />

            <div className="mt-4 space-y-3">
              {faqs.map((item, index) => (
                <div key={item.q} className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <button
                    type="button"
                    className="w-full text-left text-sm font-semibold text-white"
                    onClick={() => setOpenFaq(index === openFaq ? -1 : index)}
                  >
                    {item.q}
                  </button>
                  {openFaq === index && <p className="mt-2 text-sm text-white/75">{item.a}</p>}
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}
