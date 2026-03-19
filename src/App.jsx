import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedBackground } from './components/layout/AnimatedBackground'
import { AssistantWidget } from './components/layout/AssistantWidget'
import { BookingModal } from './components/layout/BookingModal'
import { CustomCursor } from './components/layout/CustomCursor'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { ProductPage } from './pages/ProductPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { SolutionsPage } from './pages/SolutionsPage'

function ScrollTopOnRouteChange() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return null
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <ScrollTopOnRouteChange />

      <div className="relative min-h-screen text-white">
        <Header onOpenBooking={() => setBookingOpen(true)} />
        <motion.main className="pt-24" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/solutions" element={<SolutionsPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/produit" element={<ProductPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/tarifs" element={<PricingPage />} />
            <Route path="/ressources" element={<ResourcesPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
        <Footer />
        <AssistantWidget onOpenBooking={() => setBookingOpen(true)} />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  )
}
