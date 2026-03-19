import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']

function nextBusinessDays(count = 14) {
  const result = []
  const date = new Date()
  while (result.length < count) {
    date.setDate(date.getDate() + 1)
    const day = date.getDay()
    if (day !== 0 && day !== 6) result.push(new Date(date))
  }
  return result
}

export function BookingModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '' })
  const [errors, setErrors] = useState({})

  const days = useMemo(() => nextBusinessDays(14), [])

  const close = () => {
    setStep(1)
    setSelectedDate(null)
    setSelectedSlot('')
    setForm({ name: '', email: '', company: '', phone: '' })
    setErrors({})
    onClose()
  }

  const validateStep3 = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Le nom est requis.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Email invalide.'
    if (!form.company.trim()) nextErrors.company = 'Le nom de la societe est requis.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button aria-label="Fermer la fenetre de réservation" className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={close} />
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.35 }} className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/20 bg-black/80 p-6 backdrop-blur-2xl" role="dialog" aria-modal="true" aria-label="Reservation de demonstration">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Reserver une demo GuestFlow</h3>
              <button type="button" className="rounded-lg border border-white/15 px-3 py-1 text-sm text-white/80 hover:text-white" onClick={close}>Fermer</button>
            </div>
            <div className="mb-6 grid grid-cols-4 gap-2">{[1, 2, 3, 4].map((i) => <div key={i} className={`h-1.5 rounded-full ${step >= i ? 'bg-cyan-300' : 'bg-white/15'}`} />)}</div>

            {step === 1 && (
              <div>
                <p className="mb-4 text-white/80">1. Choisissez une date (14 prochains jours ouvres)</p>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {days.map((day) => {
                    const label = day.toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short' })
                    const selected = selectedDate?.toDateString() === day.toDateString()
                    return <button type="button" key={day.toISOString()} onClick={() => setSelectedDate(day)} className={`rounded-xl border px-3 py-2 text-sm transition ${selected ? 'border-cyan-300 bg-cyan-300/15 text-white' : 'border-white/15 bg-white/5 text-white/75 hover:text-white'}`}>{label}</button>
                  })}
                </div>
                <div className="mt-6 flex justify-end"><button type="button" onClick={() => selectedDate && setStep(2)} disabled={!selectedDate} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-40">Continuer</button></div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="mb-4 text-white/80">2. Choisissez un creneau</p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{slots.map((slot) => <button type="button" key={slot} onClick={() => setSelectedSlot(slot)} className={`rounded-xl border px-3 py-2 text-sm transition ${selectedSlot === slot ? 'border-cyan-300 bg-cyan-300/15 text-white' : 'border-white/15 bg-white/5 text-white/75 hover:text-white'}`}>{slot}</button>)}</div>
                <div className="mt-6 flex justify-between"><button type="button" onClick={() => setStep(1)} className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/85">Retour</button><button type="button" onClick={() => selectedSlot && setStep(3)} disabled={!selectedSlot} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-40">Continuer</button></div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="mb-4 text-white/80">3. Vos informations</p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[{ key: 'name', label: 'Nom complet' }, { key: 'email', label: 'Email professionnel', type: 'email' }, { key: 'company', label: 'Hotel / Societe' }, { key: 'phone', label: 'Telephone', type: 'tel' }].map((f) => (
                    <label key={f.key} className="text-sm text-white/80">{f.label}<input type={f.type || 'text'} value={form[f.key]} onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white" />{errors[f.key] && <span className="mt-1 block text-xs text-pink-300">{errors[f.key]}</span>}</label>
                  ))}
                </div>
                <div className="mt-6 flex justify-between"><button type="button" onClick={() => setStep(2)} className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/85">Retour</button><button type="button" onClick={() => validateStep3() && setStep(4)} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black">Confirmer</button></div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <p className="text-lg font-semibold text-cyan-300">Votre demonstration est confirmee.</p>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/80">
                  <p>Date: {selectedDate?.toLocaleDateString('fr-FR')}</p><p>Heure: {selectedSlot}</p><p>Contact: {form.name} - {form.email}</p><p>Societe: {form.company}</p>
                </div>
                <div className="flex flex-wrap gap-3"><button type="button" className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white">Ajouter a mon agenda</button><button type="button" onClick={close} className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/85">Fermer</button></div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
