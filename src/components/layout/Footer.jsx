import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>Copyright {new Date().getFullYear()} GuestFlow. IA hôtelière orientee conversion.</p>
        <div className="flex gap-4">
          <Link to="/tarifs" className="hover:text-white">Tarifs</Link>
          <Link to="/ressources" className="hover:text-white">Ressources</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
