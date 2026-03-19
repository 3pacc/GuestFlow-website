import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/Button'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/produit', label: 'Produit' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/ressources', label: 'Ressources' },
  { to: '/contact', label: 'Contact' },
]

export function Header({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 md:px-12 lg:px-24">
      <div
        className={`mx-auto mt-4 flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 md:px-6 transition-all duration-300 ${
          scrolled ? 'border-white/20 bg-white/10 backdrop-blur-2xl' : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white md:text-2xl"
          aria-label="Retour à l'accueil GuestFlow"
        >
          GuestFlow
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-cyan-300' : 'text-white/75 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="hidden sm:inline-flex" onClick={onOpenBooking}>
            Demander une demo
          </Button>
          <Button as={Link} to="/contact" className="text-xs sm:text-sm">
            Parler a un expert
          </Button>
        </div>
      </div>
    </header>
  )
}
