import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const quickIntents = ['Demo', 'Tarifs', 'Integrations', 'Support']

const initialWelcome = {
  id: 'welcome',
  role: 'assistant',
  text: 'Bonjour, je suis l assistant GuestFlow. Comment puis-je vous aider aujourd hui ?',
  action: null,
  suggestions: ['Planifier une demo', 'Voir les tarifs', 'Parler integrations'],
}

const knowledgeBase = [
  {
    keywords: ['demo', 'demonstration', 'pilote'],
    text: 'Parfait. Nous pouvons lancer un pilote GuestFlow en 7 jours avec cadrage operationnel et mesure des KPI.',
    action: { type: 'demo', label: 'Reserver une demo' },
    suggestions: ['Quel est le planning ?', 'Quelles integrations ?'],
  },
  {
    keywords: ['prix', 'tarif', 'abonnement', 'plan'],
    text: 'Nous proposons Starter, Growth et Enterprise selon volume d appels, niveau de support et besoins d integration.',
    action: { type: 'route', to: '/tarifs', label: 'Voir les tarifs' },
    suggestions: ['Comparer les plans', 'Estimer mon ROI'],
  },
  {
    keywords: ['integration', 'pms', 'crm', 'api'],
    text: 'GuestFlow s integre aux principaux PMS/CRM, avec connecteurs standards et options sur mesure.',
    action: { type: 'route', to: '/produit', label: 'Voir les integrations' },
    suggestions: ['Quels PMS supportes ?', 'Delai de connexion'],
  },
  {
    keywords: ['support', 'contact', 'aide'],
    text: 'Notre equipe support accompagne vos operations avec un engagement de reponse rapide.',
    action: { type: 'route', to: '/contact', label: 'Contacter le support' },
    suggestions: ['Horaires support', 'Canaux de contact'],
  },
]

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

function resolveMessage(input) {
  const content = normalize(input)

  for (const item of knowledgeBase) {
    if (item.keywords.some((keyword) => content.includes(normalize(keyword)))) {
      return item
    }
  }

  return {
    text: 'Je peux vous aider sur la demo, les tarifs, les integrations, le support ou le ROI. Quelle est votre priorite ?',
    action: null,
    suggestions: ['Voir les tarifs', 'Planifier une demo', 'Parler integrations'],
  }
}

export function AssistantWidget({ onOpenBooking }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([initialWelcome])

  const navigate = useNavigate()
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    const saved = localStorage.getItem('guestflow-assistant-history')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed)
      } catch {
        // ignore parse issues
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('guestflow-assistant-history', JSON.stringify(messages.slice(-20)))
  }, [messages])

  const sendMessage = (rawValue) => {
    const content = rawValue.trim()
    if (!content) return

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: 'user', text: content, action: null, suggestions: [] },
    ])
    setInput('')
    setTyping(true)

    const reply = resolveMessage(content)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          text: reply.text,
          action: reply.action,
          suggestions: reply.suggestions || [],
        },
      ])
    }, 420)
  }

  const handleAction = (action) => {
    if (!action) return
    if (action.type === 'demo') onOpenBooking()
    if (action.type === 'route') navigate(action.to)
  }

  const lastSuggestions = useMemo(() => {
    const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant')
    return lastAssistant?.suggestions || []
  }, [messages])

  const resetChat = () => {
    setMessages([initialWelcome])
    setInput('')
    setTyping(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[25rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/20 bg-black/90 shadow-[0_22px_80px_-28px_rgba(34,211,238,0.55)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/10 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-400/20 px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/95">Assistant IA GuestFlow</p>
                  <p className="text-[11px] text-cyan-200">En ligne - Reponse instantanee</p>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={resetChat} className="text-xs text-cyan-200 hover:text-cyan-100">
                    Reinitialiser
                  </button>
                  <button type="button" onClick={() => setOpen(false)} className="text-xs text-white/65 hover:text-white">
                    Fermer
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 pt-3">
              <div className="scrollbar-thin mb-3 flex gap-2 overflow-x-auto pb-1">
                {quickIntents.map((intent) => (
                  <button
                    key={intent}
                    type="button"
                    onClick={() => sendMessage(intent)}
                    className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/85 transition hover:border-cyan-300/60 hover:text-white"
                  >
                    {intent}
                  </button>
                ))}
              </div>

              <div className="max-h-72 space-y-2 overflow-y-auto rounded-xl border border-white/10 bg-white/[0.04] p-3">
                {messages.map((message) => (
                  <div key={message.id} className={message.role === 'user' ? 'text-right' : 'text-left'}>
                    <p
                      className={`inline-block max-w-[92%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-cyan-400/20 text-white'
                          : 'border border-white/15 bg-black/45 text-white/90'
                      }`}
                    >
                      {message.text}
                    </p>
                    {message.action && (
                      <div className="mt-1">
                        <button
                          type="button"
                          onClick={() => handleAction(message.action)}
                          className="rounded-md border border-cyan-300/50 px-2 py-1 text-xs text-cyan-200 hover:bg-cyan-400/10"
                        >
                          {message.action.label}
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {typing && (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white/70">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                    Assistant en train d ecrire...
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {lastSuggestions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {lastSuggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => sendMessage(s)}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75 transition hover:border-white/30 hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <form
                className="mt-3 flex gap-2 pb-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  sendMessage(input)
                }}
              >
                <label className="sr-only" htmlFor="assistant-input">
                  Message assistant
                </label>
                <input
                  id="assistant-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ecrivez votre message..."
                  className="w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-cyan-300/60 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="rounded-lg bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Envoyer
                </button>
              </form>
            </div>

            <div className="border-t border-white/10 px-4 py-2 text-[11px] text-white/45">
              Liens rapides: <Link to="/tarifs" className="text-cyan-300">Tarifs</Link> ?{' '}
              <Link to="/ressources" className="text-cyan-300">Ressources</Link> ?{' '}
              <Link to="/contact" className="text-cyan-300">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Ouvrir l assistant GuestFlow"
        onClick={() => setOpen((value) => !value)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/50 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 text-white shadow-[0_0_24px_rgba(34,211,238,0.55)] transition hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/20" />
        <span className="relative font-semibold">IA</span>
      </button>
    </div>
  )
}
